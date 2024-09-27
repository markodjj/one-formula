import React, { useState } from 'react';

function BMRCalculator() {
  // State to hold form data
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  // Handle form submission
  const calculateBMR = (event) => {
    event.preventDefault();

    // BMR calculation using Mifflin-St Jeor formula
    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmr(calculatedBMR);
  };

  

  return (
    <div>
      <h2>BMR Calculator</h2>
      <form onSubmit={calculateBMR}>
        <div>
          <label>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Gender:</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Calculate BMR</button>
      </form>

      {/* Show the BMR result */}
      {bmr && (
        <div>
          <h3>Your BMR is: {bmr.toFixed(2)} calories/day</h3>
        </div>
      )}
    </div>
  );
}

export default BMRCalculator;
