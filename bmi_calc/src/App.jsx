import { useState } from "react";
import "./App.css";

function App() {
  const [Height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [Result, setResult] = useState("");
  const [BMI, setBMI] = useState("");

  let cal = (e) => {
    e.preventDefault();

    if(Weight===0 || Height===0){
      alert("Please enter both height and weight")
    }
    else{
      let bmi = (Weight / (Height * Height)) * 10000;
      setBMI(bmi.toFixed(1))
      if (bmi < 18.5) {
        setResult("Underweight");
        } else if (bmi >= 18.5 && bmi < 25) {
          setResult("healthy");
          }
        else if (bmi >= 25 && bmi < 30) {
          setResult("Overweight");
          }
        else {
          setResult("Obese");
        }
    }

  }
  let reload = ()=>{
    window.location.reload()
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>BMI CALCULATOR</h1>

          <form onSubmit={cal}>
          <div>
            <label>Height (cm):</label>
            <input value={Height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input value={Weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button className="btn" type="submit">Calculate</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
            
          </form>
          <div className="center">
            <h3>your BMI is : {BMI}</h3>
            <h3>your status is : {Result}</h3>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default App;
