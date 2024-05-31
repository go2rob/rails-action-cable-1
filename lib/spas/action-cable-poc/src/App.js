import React from 'react';
import OrderForm from './OrderForm';
import './actionCableClient';

class App extends React.Component {
  handleOrderCreated = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  };

  render() {
    return (
      <div>
        <OrderForm onOrderCreated={this.handleOrderCreated} />
      </div>
    );
  }
}

export default App;
