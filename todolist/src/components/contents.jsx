import "../App.css";
import { useState } from "react";

const Contents = () => {
  const [chore, setChore] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="chores">Insert To-Do item below</label>
        <br></br>
        <br></br>
        <input
          id="chores"
          placeholder="Insert item here"
          onChange={(event) => {
            setChore(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button>Add item to To-Do list</button>
      </section>

      <section>
        <ol>
          <li>buy cheese</li>
        </ol>
      </section>
    </form>
  );
};

export default Contents;
