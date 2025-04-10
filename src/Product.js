import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';  // Only import what you need
import hellother from './hellother.jpg';  // Import the image here
import addyourname from './addyourname.jpg';  // Import the second image here
import Name from './Name';  // Assuming you already have these components
import Price from './Price';
import Description from './Description';
import Image from './Image';

const Product = () => {
  useEffect(() => {
    const form = document.getElementById('nameForm');
    const input = document.getElementById('firstNameInput');
    const greeting = document.getElementById('greeting');
    const revealImage = document.getElementById('afterImage');
    const noname = document.getElementById('beforImage');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = input.value.trim();
      if (name) {
        greeting.textContent = `Hello, ${name}!`;
        revealImage.style.display = 'block'; // Show image if name is provided
        noname.style.display = 'none'; // Hide "no name" image
      } else {
        greeting.textContent = "Hello, there!";
        noname.style.display = 'block'; // Show "no name" image
        revealImage.style.display = 'none'; // Hide image if no name is provided
      }
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          <Price />
        </Card.Body>
      </Card>

      {/* 👤 Input Form */}
      <form id="nameForm" className="mt-4 text-center w-50">
        <label htmlFor="firstNameInput" className="form-label">Enter your first name:</label>
        <input
          type="text"
          id="firstNameInput"
          className="form-control mb-2"
          placeholder="Your name"
        />
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      {/* 👋 Greeting Message */}
      <h4 id="greeting" className="mt-3 text-center">Hello, there!</h4>

      {/* 📷 Hidden Image When Name is Provided */}
      <img
        id="afterImage"
        src={hellother} // Use the imported image variable here
        alt="hidden"
        style={{ display: 'none', width: '200px', marginTop: '20px', borderRadius: '10px' }} // Hidden initially
      />

      {/* 📷 Hidden Image When No Name is Provided */}
      <img
        id="beforImage"
        src={addyourname} // Use the imported image variable here
        alt="addyourname"
        style={{ display: 'none', width: '200px', marginTop: '20px', borderRadius: '10px' }} // Hidden initially
      />
    </div>
  );
};

export default Product;
