import styled from 'styled-components';
import axios from 'axios';
import Input from './Input';

const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const url = 'http://localhost:5000/create/event'

const postFormData = async () => {
    await axios.post(`${url}`)
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch(error => console.log(`Error: ${error}`));
}

function EventForm(props) {
      return (
        // <StyledForm onSubmit={props.onSubmit}>
        <StyledForm onSubmit={postFormData}>
            <label>
                First Name
            </label>
            <Input 
                name={"firstName"} 
                placeholder={"First Name"} 
                type={"text"}
            />
            <label>
                Last Name
            </label>
            <Input 
                name={"firstName"} 
                placeholder={"First Name"} 
                type={"text"}
            />
            <label>
                Contact Email
            </label>
            <Input 
                name={"email"} 
                placeholder={"Email"} 
                type={"email"} 
            />
            <label>
                Event Date
            </label>
            <Input 
                name={"date"} 
                placeholder={"date"} 
                type={"date"} 
            />
            <label>
                Event Time
            </label>
            <Input 
                name={"time"} 
                placeholder={"time"} 
                type={"time"} 
            />
            <label>
                Event Description
            </label>
            <Input 
                name={"eventDescription"} 
                placeholder={"Event Description"} 
                type={"eventDescription"}
                width={"300px"}
                height={"300px"}
            />
          {/* needs to be separated by commas */}
          {/* <Input name={"members"} placeholder={"Members"} type={"text"} /> */}

            <Input 
                name={"submit"} 
                type={"submit"} 
                value={"Create"} 
            />       
        </StyledForm>
      );
  }
  
  export default EventForm;