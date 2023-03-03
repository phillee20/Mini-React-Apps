import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import FormPage from "./components/FormPage";
import HelloPage from "./components/HelloPage";

// step 1: create a function called App.
function App() {
  // step 3: create your state. We have only 1 state, because we are askign the user to insert information into only 1 box. 
  const [nameGreeting, setNameGreeting] = useState('');

  // step 2: create a return with a div and inside the div, put your components i.e. "Header", "HelloPage" and "FormPage". Make a ternary operator which is responsible for going back and forth between the 2 pages. 
  return (
    <div className="App">
      <Header />
      {/* The following is what causes the pages to chnage from HelloPage to FormPage and vice versa */}
      {nameGreeting ? (<HelloPage nameGreeting={nameGreeting} setNameGreeting={setNameGreeting}/>) : (<FormPage setNameGreeting={setNameGreeting}/>)}
      {/* exaple: if "nameGreeting" is a truthy value (i.e. not null), we want the "HelloPage" to be displayed. And if the "nameGreeting" is a falsey value, we want the "FormPage" to be displayed.*/}
    </div>
  );
}

export default App;
