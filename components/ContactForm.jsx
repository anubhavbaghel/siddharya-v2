"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <form id="enroll-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <select required defaultValue="">
          <option value="" disabled>Select Retreat</option>
          <option value="3days">3 Days Inner Inquiry Retreat</option>
          <option value="4days">4 Days Finding Balance Retreat</option>
          <option value="5days">5 Days Letting Go Retreat</option>
          <option value="6days">6 Days Deep Awakening Retreat</option>
          <option value="7days">7 Days Inner Healing Retreat</option>
          <option value="10days">10 Days Self-Realization Retreat</option>
        </select>
      </div>
      <div className="form-group">
        <textarea placeholder="Your Message" rows="5"></textarea>
      </div>
      <button 
        type="submit" 
        className="btn-primary w-full" 
        disabled={status === 'submitting'}
        style={{
          opacity: status === 'submitting' ? 0.8 : 1,
          backgroundColor: status === 'success' ? '#4a6750' : ''
        }}
      >
        {status === 'submitting' && <><i className="fas fa-spinner fa-spin"></i> Sending...</>}
        {status === 'success' && <><i className="fas fa-check"></i> Message Sent Successfully!</>}
        {status === 'idle' && 'Send Message'}
      </button>
    </form>
  );
}
