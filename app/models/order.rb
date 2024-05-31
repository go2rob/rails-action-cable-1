class Order < ApplicationRecord
  after_create :broadcast

  private

  def broadcast
    sleep(2) # fake delay for POC
    body = self.to_json
    msg = { title: "Order #{self.id} has been Created!", body: }
    NotificationJob.perform_later(msg)
  end
end
