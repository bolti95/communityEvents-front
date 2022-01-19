import styled from 'styled-components';
import axios from 'axios';
import Input from './Input';
import AddressForm from './AddressForm';
import { useState, useEffect } from "react";
// import DateTimePicker from 'react-datetime-picker';
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import { PageDefault } from '../../styles/Page';
import { Grid, Col, Row } from '../../styles/blocks/Grid';
import { Padding } from '../../styles/Padding';
import moment from 'moment';

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
    const [dateValue, onChangeDate] = useState(moment().toDate());
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
        <form onSubmit={postFormData} >
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
