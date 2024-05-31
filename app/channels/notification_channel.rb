class NotificationChannel < ApplicationCable::Channel
  def subscribed
    # channel_name = self.class.get_channel_name(current_user.id, current_account.id)
    channel_name = self.class.get_channel_name
    stream_from channel_name
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def self.get_channel_name
    'NotificationChannel'
  end
  # # user-account specific channel_name
  # def self.get_channel_name(user_id, account_id)
  #   "user_#{user_id}_on_account_#{account_id}"
  # end
end
