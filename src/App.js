import React, { useState } from 'react'; // Import React only once
import './App.css';

function App() {
  const [weight, setWeight] = useState(0); // Initial weight state
  const [height, setHeight] = useState(0); // Initial height state
  const [bmi, setBmi] = useState(''); // Initial BMI state
  const [message, setMessage] = useState(''); // Initial message state

  const calcBMi = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (height === 0 || weight === 0) {
      alert("Please enter valid height and weight");
    } else {
      const calculatedBmi = (weight / (height * height)).toFixed(1); // Calculate and format BMI
      setBmi(calculatedBmi);

      if (calculatedBmi < 25) {
        setMessage("You are underweight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setMessage("You are a healthy weight person");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const handleReload = () => { // Descriptive function name for clarity
    setWeight(0); // Reset weight to initial state
    setHeight(0); // Reset height to initial state
    setBmi(''); // Reset BMI to initial state
    setMessage(''); // Reset message to initial state
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>BMI Calculator</h1>
        <form className='form' onSubmit={calcBMi}> {/* Bind form submission to calcBMi */}
          <div>
            <label>Weight(Kg)</label>
            <input
              type='text'
              placeholder='Enter Your Weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(m)</label>
            <input
              type='text'
              placeholder='Enter Your Height'
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn-reload' onClick={handleReload}>
              Reset
            </button>
          </div>

          <div className='centre'>
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
