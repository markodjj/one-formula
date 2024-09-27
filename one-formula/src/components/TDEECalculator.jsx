import React, { useState } from 'react';

function TDEECalculator() {
  // State to hold form data
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [goal, setGoal] = useState('maintenance'); // new state for goal
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);

  // Handle form submission
  const calculateTDEE = (event) => {
    event.preventDefault();

    // BMR calculation using Mifflin-St Jeor formula
    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmr(calculatedBMR);

    // Calculate TDEE by multiplying BMR with the activity level
    const calculatedTDEE = calculatedBMR * parseFloat(activityLevel);
    setTdee(calculatedTDEE);

    // Adjust TDEE based on the goal (maintenance, slimming, gaining weight)
    let dailyCalories;
    if (goal === 'maintenance') {
      dailyCalories = calculatedTDEE;
    } else if (goal === 'slimming') {
      dailyCalories = calculatedTDEE * 0.85; // 15% reduction for weight loss
    } else if (goal === 'gaining') {
      dailyCalories = calculatedTDEE * 1.1; // 10% increase for weight gain
    }
    setCaloriesNeeded(dailyCalories);
  };

  return (
    <div>
      <h2>TDEE Calculator</h2>
      <form onSubmit={calculateTDEE}>
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
        <div>
          <label>Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
            <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
            <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
            <option value="1.9">Super active (physical job, hard exercise)</option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="maintenance">Weight Maintenance</option>
            <option value="slimming">Slimming (Weight Loss)</option>
            <option value="gaining">Gaining Weight</option>
          </select>
        </div>
        <button type="submit">Calculate TDEE & Daily Calories</button>
      </form>

      {/* Show the BMR, TDEE, and daily calories needed based on the goal */}
      {bmr && (
        <div>
          <h3>Your BMR is: {bmr.toFixed(2)} calories/day</h3>
        </div>
      )}
      {tdee && (
        <div>
          <h3>Your TDEE is: {tdee.toFixed(2)} calories/day</h3>
        </div>
      )}
      {caloriesNeeded && (
        <div>
          <h3>Daily Calories for {goal}: {caloriesNeeded.toFixed(2)} calories/day</h3>
        </div>
      )}
    </div>
  );
}

export default TDEECalculator;
