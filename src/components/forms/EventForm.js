import axios from 'axios';
import { useState, useEffect } from "react";
// import DateTimePicker from 'react-datetime-picker';
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import { Grid, Col, Row } from '../../styles/blocks/Grid';
import { Padding } from '../../styles/Padding';
import { useNavigate, useHistory } from 'react-router-dom';
import moment from 'moment';

// const StyledForm = styled.form `
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

const url = [
    'http://localhost:5000/events/create',
    'http://localhost:5000/events/display',
    ]

function EventForm(props) {
    const navigate = useNavigate();
    const [dateValue, onChangeDate] = useState(moment().toDate());
    const [timeValue, onChangeTime] = useState();
    const [dataRsp, setDataRsp] = useState();
    const [error, setError] = useState()
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
    }
    const body = {
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

    const checkValue = (e) => {  
        // e.preventDefault()     
        if (formData.firstName=== "" || formData.lastName=== "" || formData.contactEmail === ""|| formData.eventTitle === ""|| formData.eventDescription=== "" || formData.city=== "" || formData.postcode === ""|| formData.venue === "") {
            console.error("Missing input")
            setError("One or more missing input")
            return error
        } else {
            console.log("all values complete!")
            postFormData()
            return ("Complete!")
        }
    }
    const navigateToSubmitted = async () => {
        await window.location.reload(false);
        // await navigate("/")
    }

    const postFormData = async (e) => {
        // e.preventDefault()       
        await axios({
                method: 'post',
                url: url[0],
                data: body,
             })
            .then((response) => {
                    console.log(response)
                    setDataRsp(response)
                    console.log(dataRsp)
                    navigateToSubmitted()
                })
            .catch(error => console.log(`Error: ${error}`))
            console.log(formData)
            // navigateToSubmitted()
            // navigate.push("/")
        // }
        // e.preventDefault()        
    }

        useEffect(() => {
            return () => {
            console.log(formData.firstName)
            axios({
                method: 'get',
                url: url[1],
             })
            .then((response) => {
                    //   setEvents(response.data)
                    console.log(response)
                    })
            .catch(error => console.log(`Error: ${error}`))
            }
        })

      return (
        <form onSubmit={checkValue} >
            <Grid >
                <Row width={"100vw"}>
                    <Col size={2} width={"50vw"}>
                    <label>
                        First Name
                    </label>
                    <input
                        name={"firstName"} 
                        placeholder={"First Name"} 
                        type={"text"}
                        onChange={onChange}
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
                    <textarea
                        name={"eventDescription"} 
                        className='textBox'
                        placeholder={"Event Description"} 
                        type={"text"}
                        width={"300px"}
                        height={"300px"}
                        onChange={onChange}
                    />
                    </Col>
                    <Col size={2} width={"50vw"}>
                        <label>
                            Event Date
                        </label>
                        <div style={{width: "150px"}}>
                            <DatePicker onChange={onChangeDate} value={dateValue} minDate={new Date()}/>
                        </div>
                        <label>
                            Event Time
                        </label>
                        <div style={{width: "150px"}}>
                            <TimePicker onChange={onChangeTime} value={timeValue}/>
                        </div>
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
                        />
                        <label>
                            Street Address
                        </label>
                        <input
                            name={"streetAddress"} 
                            placeholder={"Street Address"} 
                            type={"text"}
                            onChange={onChange}
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
                        <Padding>
                            {error}    
                        </Padding>         
                        <Padding>
                            <input 
                                className='submit'
                                name={"submit"} 
                                type={"submit"} 
                                value={"Create Event"} 
                            /> 
                        </Padding> 
                    </Col>
                </Row>
            </Grid>      
        </form>

      );
  }
  
  export default EventForm;


                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
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
