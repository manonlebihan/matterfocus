package main

import (
	"fmt"
	"net/http"
	"regexp"
	"strings"
	"sync"

	"github.com/mattermost/mattermost-server/v5/model"
	"github.com/mattermost/mattermost-server/v5/plugin"
	"github.com/pkg/errors"
)

type Plugin struct {
	plugin.MattermostPlugin

	// configurationLock synchronizes access to the configuration.
	configurationLock sync.RWMutex

	// configuration is the active plugin configuration. Consult getConfiguration and
	// setConfiguration for usage.
	configuration *configuration
}

func getHelp() string {
	return `Available Command:
on
	Focus on (default)
off
	Focus off
help
	Mute (disable desktop, email and push notifications) all channels but the current one.
`
}

func (p *Plugin) ServeHTTP(c *plugin.Context, w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Matterfocus plugin, unused")
}

func (p *Plugin) OnActivate() error {
	if err := p.registerCommands(); err != nil {
		return errors.Wrap(err, "failed to register commands")
	}
	return nil
}

func (p *Plugin) registerCommands() error {
	return p.API.RegisterCommand(&model.Command{
		Trigger:          "focus",
		DisplayName:      "Focus Mode",
		Description:      "Mute all other channels but the one you're in to allow you to focus.",
		AutoComplete:     true,
		AutoCompleteDesc: "Available commands: help",
		AutoCompleteHint: "[command]",
		AutocompleteData: getAutocompleteData(),
	})
}

func (p *Plugin) postCommandResponse(args *model.CommandArgs, text string) {
	post := &model.Post{
		UserId:    args.UserId,
		ChannelId: args.ChannelId,
		Message:   text,
	}
	_ = p.API.SendEphemeralPost(args.UserId, post)
}

func (p *Plugin) ExecuteCommand(c *plugin.Context, args *model.CommandArgs) (*model.CommandResponse, *model.AppError) {
	spaceRegExp := regexp.MustCompile(`\s+`)
	trimmedArgs := spaceRegExp.ReplaceAllString(strings.TrimSpace(args.Command), " ")
	stringArgs := strings.Split(trimmedArgs, " ")
	lengthOfArgs := len(stringArgs)
	restOfArgs := []string{}

	var handler func([]string, *model.CommandArgs) (bool, error)
	if lengthOfArgs == 1 {
		handler = p.RunFocusCommand
	} else {
		command := stringArgs[1]

		if lengthOfArgs > 2 {
			restOfArgs = stringArgs[2:]
		}
		switch command {
		case "on":
			handler = p.RunFocusOnCommand
		case "off":
			handler = p.RunFocusOffCommand
		default:
			p.postCommandResponse(args, getHelp())
			return &model.CommandResponse{}, nil
		}
	}
	isUserError, err := handler(restOfArgs, args)
	if err != nil {
		if isUserError {
			p.postCommandResponse(args, fmt.Sprintf("__Error: %s.__\n\nRun `/focus help` for usage instructions.", err.Error()))
		} else {
			p.API.LogError(err.Error())
			p.postCommandResponse(args, "An unknown error occurred. Please talk to your system administrator for help.")
		}
	}

	return &model.CommandResponse{}, nil
}
func getAutocompleteData() *model.AutocompleteData {
	focus := model.NewAutocompleteData("focus", "[command]", "Available commands: on (default), off, help")

	on := model.NewAutocompleteData("on", "", "Turn Focus Mode on")
	off := model.NewAutocompleteData("off", "", "Turn Focus Mode off")
	help := model.NewAutocompleteData("help", "", "Display usage")
	focus.AddCommand(on)
	focus.AddCommand(off)
	focus.AddCommand(help)

	return focus
}

func (p *Plugin) RunFocusCommand(args []string, extra *model.CommandArgs) (bool, error) {
	message, err := p.FocusCommand(extra, true)
	if err != nil {
		return false, err
	}
	p.postCommandResponse(extra, message)
	return false, nil
}

func (p *Plugin) RunFocusOnCommand(args []string, extra *model.CommandArgs) (bool, error) {
	message, err := p.FocusCommand(extra, true)
	if err != nil {
		return false, err
	}
	p.postCommandResponse(extra, message)
	return false, nil
}

func (p *Plugin) RunFocusOffCommand(args []string, extra *model.CommandArgs) (bool, error) {
	message, err := p.FocusCommand(extra, false)
	if err != nil {
		return false, err
	}
	p.postCommandResponse(extra, message)
	return false, nil
}
