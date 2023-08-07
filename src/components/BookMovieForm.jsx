import React, { useState } from 'react';
import "./BookMovieForm.css"
export default function BookMovieForm(props) {
  const [formData, setFormData] = useState({
    name: props.movieName,
    email: '',
  });
  console.log(props.movieName)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Clear the form
    setFormData({
      name: '',
      email: '',
    });
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
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
