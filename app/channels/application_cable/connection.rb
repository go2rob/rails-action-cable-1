module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # identified_by :current_user, :current_account
    def connect
      begin
        # do authentication here
        # request.params => { :user_id, :token }
        # request.cookies 
        authenticated = true
        if authenticated
          Rails.logger.info("Authenticated")
          # self.current_user = find_user
          # self.current_account = find_account
        else
          reject_unauthorized_connection
        end
      rescue ActiveRecord::RecordNotFound
        reject_unauthorized_connection
      end
    end

    private

    def find_user
      User.find(request.params[:user_id])
    end

    def find_account
      Account.find(request.params[:account_id])
    end
  end
end
