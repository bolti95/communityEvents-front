import React, { Suspense, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
const url = 'http://localhost:5000/'

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
const Map = (props) => {
    const events = props.events
    console.log(events)
    const isUndefined = typeof(events)
    console.log(isUndefined)
    const center = {
        lat: props.centerLat,
        lng: props.centerLng
      };
    const [error, setError] = useState();

    // try to get user location
    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation not supported ');
            return
        } else {
            // navigator.geolocation.getCurrentPosition()
        }
    }, [])


    const getApiKey =async () => {
        await axios.get(`${url}map`)
        .then((response) => {
            // console.log(response.data)
            return response.data
        })
        .catch(error => console.log(`Error: ${error}`));
    }
    
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
    }, [])

    useEffect(() => {
        getApiKey()
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:  
        useEffect(() => {
            getApiKey()
        }, [])
    })

    console.log(isLoaded)

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <Suspense>
           <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            {props.showInfo ? 
                <InfoWindow
                    onLoad={onLoad}
                    position={{lat: props.ePosLat, lng: props.ePosLng}}
                    onCloseClick={props.closeClick}
                    // get marker position for 1 marker
                >
                    <div>
                        <h2>{props.eventName}</h2>
                    </div>
                </InfoWindow> 
                :
                <></>
            }
            {/* <Marker position={{lat: events[3].positionLat, lng: events[3].positionLng}}/>  */}
            {props.hasMarkers ? 
            events.map((e)=>{
                return (
                    <React.Fragment key={e._id}>
                    <Marker
                        position={{lat: e.lat, lng: e.lng} }
                        onLoad={onLoad}
                        // onClick={props.onClick}
                    /> 
                    {/* <InfoWindow
                    onLoad={onLoad}
                    position={{lat: e.lat, lng: e.lng}}
                    onCloseClick={props.closeClick}
                    // get marker position for 1 marker
                >
                    <div>
                        {e.eventTitle}, 
                        <br></br>
                        {e.eventDate.substring(0, 10)},
                        <br></br>
                        {e.eventTime}
                    </div>
                </InfoWindow>  */}
                    </React.Fragment>                             
                )})  
            :
                <Marker></Marker>            
            }
            </GoogleMap> 
        </Suspense>

    ) : <></>
}

export default React.memo(Map);