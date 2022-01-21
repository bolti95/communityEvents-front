import { useState } from "react";
import {Card} from "../styles/blocks/Card";
import {Padding} from "../styles/Padding";

function Event(props) {
  const [eventDesc, setShowEventDesc] = useState("no desc")
    const showEventDesc = () => {
      setShowEventDesc("show desc")
    }

    return (
      <div>
        {eventDesc === "show desc" ? 
          <div>
          <Padding>
            <Card height={"250px"}>
              <p>{props.description}</p>
              <button id={props.id} lat={props.lat} lng={props.lng} onClick={props.onClick}>
                 View Location
               </button>
               <br></br>
               <button onClick={(e) => setShowEventDesc("no desc")}>
                 General Info
               </button>
            </Card>
          </Padding>
          </div>
        :
        <div>
          <Padding>
             <Card height={"100%"}>
               <h3>
                 {props.event}
               </h3>
               <h4>
                 Date
               </h4>
               <p>
                 {props.date}
               </p>
               <button id={props.id} lat={props.lat} lng={props.lng} onClick={props.onClick}>
                 View Location
               </button>
               <br></br>
               <button onClick={(e) => setShowEventDesc("show desc")}>
                 More Info
               </button>
             </Card>
           </Padding>
           </div>
         }
      </div>
    );
  }
  
export default Event;

