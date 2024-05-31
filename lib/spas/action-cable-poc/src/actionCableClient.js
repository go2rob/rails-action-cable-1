import ActionCable from "actioncable";

class ActionCableClient {
  constructor(url, channel, params) {
    this.consumer = ActionCable.createConsumer(url);
    this.channel = channel;
    this.params = params;
    this.subscription = null;
  }

  initializeSubscription() {
    this.subscription = this.consumer.subscriptions.create(
      { channel: this.channel, ...this.params },
      {
        initialized: this.initialized.bind(this),
        connected: this.connected.bind(this),
        disconnected: this.disconnected.bind(this),
        rejected: this.rejected.bind(this),
        received: this.received.bind(this),
      }
    );
  }

  initialized() {
    console.log(`ACB: 'initialized'`);
  }

  connected() {
    console.log(`ACB: connected`, this.subscription);
  }

  disconnected() {
    console.log(`ACB: disconnected`);
  }

  rejected() {
    console.log(`ACB: rejected`);
  }

  received(data) {
    console.log(`ACB: received`, data);
    // handle the received data
    this.handleReceivedData(data);
  }

  handleReceivedData(data) {
    // Check for notification permission
    if (Notification.permission === 'granted') {
      this.showNotification(data);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          this.showNotification(data);
        }
      });
    }
  }

  showNotification(data) {
    // Customize the notification title and options as needed
    const title = 'New Notification';
    const options = {
      body: data.message, // Adjust this to match your data structure
      // icon: 'path/to/icon.png' // Optional: path to an icon
    };
    new Notification(title, options);
  }
}

// Usage
const url = `ws://localhost:3000/websocket?`;
const channel = "NotificationChannel";
const params = {}; // { userId, accountId };

const actionCableClient = new ActionCableClient(url, channel, params);
actionCableClient.initializeSubscription();
