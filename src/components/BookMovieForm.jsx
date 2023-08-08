import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import "./BookMovieForm.css"
export default function BookMovieForm(props) {
  const [formData, setFormData] = useState({
    name: props.movieName,
    email: '',
    location:'',
    tickets:0,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    toast("Tickets booked successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>No. of tickets</label>
        <input
          type="number"
          name="tickets"
          value={formData.tickets}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="submit-btn" type="submit">Book Ticket</button>
      <Toaster/>
    </form>
  );
}
