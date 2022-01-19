import {Card} from "../styles/blocks/Card";
import {Padding} from "../styles/Padding";

function Event(props) {
    return (
      <div>
      <Padding>
        <Card>
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
          <button onClick={props.showEventPage}>
            More Info
          </button>
        </Card>
      </Padding>
      </div>

    );
  }
  
  export default Event;
//   this component will pull up event info submitted into the server