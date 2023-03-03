import "../App.css";
import { useState } from "react";

const Contents = () => {
  // note: "setChoreInput" and "setListOfChores" are functions that are designed to update their respective values. i.e. "setChoreInput" can be called with an array fo strings which would updated "choreInput". 
  const [choreInput, setChoreInput] = useState("");
  const [listOfChores, setListOfChores] = useState([]);

   
  const handleSubmit = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    // The following is here because once the submit button has been clicked, we want to use the "setListOfChores" function to updated the array of "listOfChores". This "listOfChores" is initially an empty array, because of "useState([])"
    setListOfChores([...listOfChores, choreInput])
  };

  return (
      
    <form onSubmit={handleSubmit}>
          <img src="https://previews.123rf.com/images/anyata/anyata1408/anyata140800246/31013937-illustration-of-cartoon-shopping-cart-full-of-groceries-isolated-on-white-grocery-store-shopping.jpg"/>

      
      <section>
        <label htmlFor="chores" id="insertToDo">Insert To-Do item below</label>
        <br></br>
        <input
          id="chores"
          placeholder="Insert item here"
          onChange={(event) => {
            setChoreInput(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button type="submit">Add item to To-Do list</button>
      </section>

      <section >
        <ul id="chores" >
          {/* The following is using a map to map over the array of "listOfChores" and to create an <li> tag for each chore. This is the only way to display it as a list. */}
        {listOfChores.map((chore) => {return <li>{chore}</li>})}
        </ul>
      </section>
    </form>
  );
};

export default Contents;
