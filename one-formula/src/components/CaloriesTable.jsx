import React, { useState, useEffect } from 'react';

function CaloriesTable(props) {
  const [data, setData] = useState([]);
  const {typeOfFood} = props
  const pathForFood = '/groceries_data/' + typeOfFood + '.json'
  // Fetch data from the JSON file
  useEffect(() => {
    // Assuming your JSON is hosted locally in the public folder as "data.json"
    fetch(pathForFood)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div>
      <h2>Calories Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Namirnica (100 g)</th>
            <th>kCal</th>
            <th>Proteini</th>
            <th>Ugljeni Hidrati</th>
            <th>Masti</th>
            <th>Vrsta</th>
            <th>Makronutrijent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.calories}</td>
              <td>{item.protein}</td>
              <td>{item.carbohydrates}</td>
              <td>{item.fats}</td>
              <td>{item.type}</td>
              <td>{item.macronutrient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaloriesTable;
