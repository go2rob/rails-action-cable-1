import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderForm.css';

const OrderForm = ({ onOrderCreated }) => {
  const [title, setTitle] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDeliveryDate(today);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/orders', {
        order: {
          title: title,
          details: { delivery_date: deliveryDate }
        }
      });

      if (response.status === 201) {
        setMessage('Order created successfully!');
        setTitle('');
        setDeliveryDate(new Date().toISOString().split('T')[0]);
        if (onOrderCreated) {
          onOrderCreated();
        }
      }
    } catch (error) {
      setMessage('Failed to create order.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Delivery Date:</label>
          <input
            type="date"
            className="form-control"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      {message && <p className={`mt-3 ${message.includes('successfully') ? 'text-success' : 'text-danger'}`}>{message}</p>}
    </div>
  );
};

export default OrderForm;
