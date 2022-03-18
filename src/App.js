
   
import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from './data.json';
import "./App.css"

function App() {
  const [state, selState] = useState();
  const [institutes, setInstitutes] = useState();
  const [instList, setinstList] = useState();
  const [output, setOutput] = useState();

  const handleCountryChange = (obj) => {
    selState(obj);
    setinstList(obj.institutes);
  };
  

  const handleLanguageChange = (obj) => {
    setInstitutes(obj);
  };

  useEffect(() => {
    if (state && institutes) {
      setOutput(`id:${institutes.id} Name: ${institutes.Name} grad=${institutes.grad}`);
    }
  }, [state, institutes]);

  const buttonClick=()=>{
    if(state && institutes!="")
    alert(state && institutes ? output : '')
    else{
      alert('please select the State and institute')
    }
  }

  return (
    <div className="App">
      <div style={{ width: 300, marginBottom: 20 }}>
        <h1>State :</h1>
        <Select
          placeholder="Select State"
          value={state}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={x => x.state}
        />
        <br />
        <h1>Institutes :</h1>
        <Select
          placeholder="Select institute"
          options={instList}
          onChange={handleLanguageChange}
          getOptionLabel={x => x.Name}
        
        />
      </div>
      <button onClick={buttonClick}>Submit</button>
    </div>
  );
}

export default App;
