import { useState, useEffect } from 'react';
import { PageDefault } from '../styles/Page';
import Map from './Map';
import Events from './Events';
import DatePicker from "react-date-picker";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row} from "../styles/blocks/Grid"
import { Padding } from '../styles/Padding';
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

const url = [
    'http://localhost:5000/events/display',
    'http://localhost:5000/events/expired',
    ]

function Page(props) {
    const [events, setEvents] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const [eName, setEventName] = useState('');
    const [eDesc, setEventDescription] = useState('');
    const [eDate, setEventDate] = useState('');
    const [eVenue, setEventVenue] = useState('');
    const [ePosLng, setEposLng] = useState(0);
    const [ePosLat, setEposLat] = useState(0);
    const [dateValue, onChangeDate] = useState(new Date());
    const [apiCalled, setApiCalled] = useState(false);
    const [showBy, setShowBy] = useState("calendar");

    useEffect(() => {
        // console.log(showInfo)
        setShowInfo(showInfo)
        setEposLng(ePosLng)
        setEposLat(ePosLat)
        axios({
                  method: 'get',
                  url: url[0],
               })
        .then((response) => {
                //   setEvents(response.data)
                const eventsList = [response]
                const eventsData = eventsList[0].data
                setEvents(eventsData);
                setApiCalled(true)
              })
        .catch(error => console.log(`Error: ${error}`))
    }, []);
    const callback = () => {
        console.log('callback function')
        
    }
    const getInfo = (e) => {
        const eventIdLat = events[e.target.getAttribute('id')].lat
        const eventIdLng = events[e.target.getAttribute('id')].lng
        const eventName = events[e.target.getAttribute('id')].eventTitle
        const eventDate = events[e.target.getAttribute('id')].eventDate
        const eventVenue = events[e.target.getAttribute('id')].venue
        const eventDescription = events[e.target.getAttribute('id')].eventDescription
        const eventId = e.target.getAttribute('eventtitle')
        console.log(eventName, eventDate, eventVenue, eventDescription)
        console.log(eventId)
        setEposLat(eventIdLat)
        setEposLng(eventIdLng)
        setEventName(eventName)
        setEventDate(eventDate)
        setEventVenue(eventVenue)
        setEventDescription(eventDescription)
        scrollTo()
        if (showInfo === false) {
        setShowInfo(true) 
      } 
    }
    // const onMarkerClick = () => {
    //     console.log("Hello!!")
    //     const 
    // }
    const selectArchive = () => {
        onChangeDate(new Date())
        setShowBy("archive")
    }
    const selectCalendar = () => {
        onChangeDate(new Date())
        setShowBy("calendar")
    }
    const format = dateValue.toISOString().substring(0, 10)

    const scrollTo = () => {
        scroller.scrollTo('scrollPlace', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }

    return (
    <PageDefault display={'flex'} flexDirection={'column'}>
        <Padding>
            <p>
                Community Events Ltd. Community Event Map displaying community events.
            </p>
        </Padding>
        {apiCalled 
        ? 
            <>
                <div className='scrollPlace'>
                    <p>
                        Want to add an event? 
                    </p>
                    <Padding>
                        <button>
                            <Link to="/newevent">Click here</Link>
                        </button>
                    </Padding> 
                </div>
                <Padding>
                    <Map    
                        centerLat={53.45369120169616} 
                        centerLng={-2.2660735287002414}
                        positionLat={53.45184113070764}
                        positionLng={-2.263217758839349}
                        // ePos for use in getInfo event
                        ePosLat={ePosLat}
                        ePosLng={ePosLng}
                        hasMarkers ={true}
                        showInfo={showInfo}
                        closeClick={(e) => setShowInfo(false)}
                        events={events}
                        eventName={eName}
                        eventDate={eDate}
                        eventVenue={eVenue}
                        eventDescription={eDesc}
                    />
                </Padding>
                {/* <Datetime onClick={getDateTimeSelected}/> */}
                <Row>
                <Padding>
                    <button onClick={(e) => selectCalendar(e)}>
                        Calendar
                    </button>
                </Padding>
                <Padding>
                    <button onClick={(e) => selectArchive(e)}>
                        Archive
                    </button>
                </Padding>
                </Row>
                {showBy === "calendar" ?
                <div>
                    <h2>
                        Event Calendar
                    </h2>
                    <Padding>
                        <p style={{margin: "30px 30px"}}>
                            Use the calendar to filter events by date.
                        </p>
                    </Padding>
                    <div style={{padding: "20px 10px"}}>
                        <DatePicker onChange={onChangeDate} value={dateValue} minDate={new Date()}/>
                    </div>
                    <Events onClick={getInfo} events={events} showBy={showBy} selectedDate={format}/> 
                </div>
                : 
                <div>
                    <h2>
                        Event Archive
                    </h2>
                    <Padding>
                        <p style={{margin: "30px 30px"}}>
                            The entire history of all community events.
                        </p>
                    </Padding>
                    <Events onClick={getInfo} events={events}/>   
                </div>
                }

            </>  
        : 
            <>
            <span className="circle">
            <br></br>
            <p>The map and events will load when the server is running</p>
            </span>                
            </>
        }
    
      </PageDefault>
    );
  }
  
export default Page;


        // axios({
        //     method: 'delete',
        //     url: url[1],
        //  })
        // .then((response) => {
        //         console.log(response)
        //     //   setEvents(response.data)
        //         setApiCalled(true)
        //     })
        // .catch(error => console.log(`Error: ${error}`))
