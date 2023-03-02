import { useState } from "react";
import "./App.css";

function App() {
  const randomNames = [
    "Phil",
    "Farishta",
    "Obama",
    "Kanye",
    "Beyonce",
    "John",
    "Karen",
  ];

  const [randomName, setRandomName] = useState(randomNames[0]);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  return (
    <div className="App">
      <Header />
      <Content
        randomNames={randomNames}
        randomName={randomName}
        hasBeenClicked={hasBeenClicked}
        setRandomName={setRandomName}
        setHasBeenClicked={setHasBeenClicked}
      />
    </div>
  );
}

//COMPONENT

const Header = () => {
  return <h1>Random Name Generator</h1>;
};

// "props" means "properties". Props is an object with many keys inside. For exmaple here, props is an object with the keys of "randomNames" and "setRandomName". Whch is why we are able to destructure it.
const Content = (props) => {
  //console.log(props);
  const {
    randomNames,
    randomName,
    setHasBeenClicked,
    setRandomName,
    hasBeenClicked,
  } = props;

  return (
    <div className="App">
      <p>Your name is</p>
      <p>{hasBeenClicked ? randomName : "Click Below"}</p>
      <button
        onClick={() => {
          setHasBeenClicked(true);
          setRandomName(
            randomNames[Math.floor(Math.random() * randomNames.length)]
          );
        }}
      >
        Create my random name
      </button>
    </div>
  );
};

export default App;
