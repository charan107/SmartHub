import React, { useState } from "react";
import "../Components/RegisterPageComponents/Register.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // First Name validation
    if (!firstName) {
      formErrors.firstName = "First Name is required.";
      isValid = false;
    }

    // Last Name validation
    if (!lastName) {
      formErrors.lastName = "Last Name is required.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/; // For 10 digit phone numbers
    if (!phone) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      formErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Date of Birth validation
    if (!dob) {
      formErrors.dob = "Date of Birth is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registering with:", firstName, lastName, email, phone, dob);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-left">
        <div className="registration-form">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-field1"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-field1"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field1"
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field1"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="input-field1"
            />
            {errors.dob && <span className="error">{errors.dob}</span>}

            <button type="submit" className="dark-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
