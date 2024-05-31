# https://stackoverflow.com/questions/32905259/actioncable-how-to-display-number-of-connected-users
class NotificationJob < ApplicationJob
  def perform(msg)
    channel = NotificationChannel.get_channel_name
    ActionCable.server.broadcast channel, msg
  end
end