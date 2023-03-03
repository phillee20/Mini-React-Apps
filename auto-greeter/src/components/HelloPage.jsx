

const HelloPage = (props) => {
    console.log(props); // result: nameGreeting: {name: 'tom'} nameGreeting: {name: 'tom'}setNameGreeting: ƒ ()
    // because props is an object with TWO keys, we are able to destructure it below:
    const {nameGreeting, setNameGreeting} = props
    return (
        <section>
        <label htmlFor="hello">Hello {nameGreeting.name}</label>
        <br></br>
        <button onClick={() => {setNameGreeting()}}>Greet Again</button>
        </section>
    )
  };

export default HelloPage;