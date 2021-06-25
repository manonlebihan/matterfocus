package main

import (
	"github.com/mattermost/mattermost-server/v5/model"
)

func (p *Plugin) FocusCommand(extra *model.CommandArgs, focusMode bool) (string, error) {
	responseMessage := "Focus mode off"
	if focusMode {
		responseMessage = "Focus mode on"
	}
	channels, err := p.API.GetChannelsForTeamForUser(extra.TeamId, extra.UserId, false)

	if err != nil {
		return "", err
	}

	for _, channel := range channels {
		if channel.Id != extra.ChannelId {
			// this is where the channel is muted if it is not the one where we are using the focus mode
			err := p.MuteChannel(channel.Id, extra.UserId, focusMode)
			if err != nil {
				return "", err
			}
		}
	}
	return responseMessage, nil
}

// MuteChannel : this function switches mute (if you do it twice you're in the same place as before you did it)
func (p *Plugin) MuteChannel(channelID, userID string, focusMode bool) *model.AppError {
        member, err := p.API.GetChannelMember(channelID, userID)
        if err != nil {
                return err
        }

        if member.IsChannelMuted() == focusMode {
			return nil
		}

        member.SetChannelMuted(!member.IsChannelMuted())
        member, err = p.API.UpdateChannelMemberNotifications(channelID, userID, member.NotifyProps)
        if err != nil {
                return err
        }

        p.API.PublishWebSocketEvent(model.WEBSOCKET_EVENT_CHANNEL_MEMBER_UPDATED, map[string]interface{}{model.MARK_UNREAD_NOTIFY_PROP: model.CHANNEL_MARK_UNREAD_MENTION}, &model.WebsocketBroadcast{})

        return nil
}


