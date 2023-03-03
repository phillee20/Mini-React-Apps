// step 5: MAKE SURE you import useState.
import { useState } from "react";

// step 6: create a function for FormPage
const FormPage = ({setNameGreeting}) => {
    // step 8: we have a "state" of "name" here because we want to be able to capture the text the user puts in the input box.
    const [name, setName] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault(); // this line prevent the submit button from refreshing the page and removing all content inside input.
        // the following exists because once the form is submitted, it enables us to go to the "HelloPage" page.
        setNameGreeting({
            name: name
        })
    }

    //step 7: create a return and because this is a form page, put your content inside a "form" tag. 
    return (
        // notice: "handleSubmit" is a function declared above so we don't have to put it inline on line 18. 
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="name">Insert name below</label>
                <br></br>
                {/* The following is an example of a function within the lines instead of being seperated like "hanldeSubmit" */}
                <input id="name" type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
            </section>
            <section>
                <button type="submit">Submit</button>
            </section>
        </form>
    )
};

export default FormPage;