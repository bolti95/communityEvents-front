import styled from 'styled-components';
import axios from 'axios';
import Input from './Input';
import AddressForm from './AddressForm';
import {useState, useEffect} from "react";
// import DateTimePicker from 'react-datetime-picker';
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";


const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const url = [
    'http://localhost:5000/events/create',
    ]

function EventForm(props) {
    const [dateValue, onChangeDate] = useState(new Date());
    const [timeValue, onChangeTime] = useState();
    const [dataRsp, setDataRsp] = useState();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactEmail: '',
        eventTitle: '',
        eventDescription: '', 
        venue: '',
        streetAddress: '',
        city: '',
        region: '',
        postcode: ''
    })

    function onChange (e) {
        let name = e.target.name ;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }
    const body = {
        // TODO 
        // ALL DATA NEEDS TO BE UPDATED AND PASSED OVER. WHY IS IT NOT!!
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactEmail: formData.contactEmail,
        eventTitle: formData.eventTitle,
        eventDescription: formData.eventDescription,
        venue: formData.venue,
        streetAddress: formData.streetAddress,
        city: formData.city,
        region: formData.region,
        postcode: formData.postcode,
        eventDate: dateValue,
        eventTime: timeValue,
    }

    const postFormData = async (e) => {
        e.preventDefault() 
        await axios({
                method: 'post',
                url: url[0],
                data: body,
             })
        .then((response) => {
                console.log(response)
                setDataRsp(response)
                console.log(dataRsp)
            })
        .catch(error => console.log(`Error: ${error}`))
        console.log(formData)
        // e.preventDefault()
    }

        useEffect(() => {
            return () => {
            console.log(formData.firstName)
            }
        })

      return (
        // <StyledForm onSubmit={props.onSubmit}>
        <StyledForm onSubmit={postFormData}>
            <label>
                First Name
            </label>
            <input
                name={"firstName"} 
                placeholder={"First Name"} 
                type={"text"}
                onChange={onChange}
                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <label>
                Last Name
            </label>
            <input
                name={"lastName"} 
                placeholder={"Last Name"} 
                type={"text"}
                onChange={onChange}
            />
            <label>
                Contact Email
            </label>
            <input
                name={"contactEmail"} 
                placeholder={"Email"} 
                type={"email"} 
                onChange={onChange}
            />
                        <label>
                Event Title
            </label>
            <input
                name={"eventTitle"} 
                placeholder={"Event Title"} 
                type={"text"}
                onChange={onChange}
            />
            <label>
                Event Description
            </label>
            <input
                name={"eventDescription"} 
                placeholder={"Event Description"} 
                type={"text"}
                width={"300px"}
                height={"300px"}
                onChange={onChange}
            />
            <label>
                Event Date
            </label>
            <DatePicker onChange={onChangeDate} value={dateValue}/>
            <label>
                Event Time
            </label>
            <TimePicker onChange={onChangeTime} value={timeValue} />
            <label>
                Event Location
            </label>
            <label>
                Venue
            </label>
            <input
                name={"venue"} 
                placeholder={"Venue"} 
                type={"text"}
                onChange={onChange}
                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <label>
                Street Address
            </label>
            <input
                name={"streetAddress"} 
                placeholder={"Street Address"} 
                type={"text"}
                onChange={onChange}
                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <label>
                City
            </label>
            <input
                name={"city"} 
                placeholder={"City"} 
                type={"text"}
                onChange={onChange}
            />
            <label>
                Region
            </label>
            <input
                name={"region"} 
                placeholder={"region"} 
                type={"text"}
                onChange={onChange}
            />
            <label>
                Postcode
            </label>
            <input
                name={"postcode"} 
                placeholder={"postcode"} 
                type={"text"}
                onChange={onChange}
            />

            <Input 
                name={"submit"} 
                type={"submit"} 
                value={"Create"} 
            />       
        </StyledForm>

      );
  }
  
  export default EventForm;



      // const postFormData = async (e) => {
    //     e.preventDefault()
    //     let newEvent = await fetch("http://localhost:5000/events/create",
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(body)
    //         });
    //         newEvent = await newEvent.json();
    //         console.log(newEvent);
    // }