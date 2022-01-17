import React, { Suspense, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, Circle } from '@react-google-maps/api';
import axios from 'axios';
const url = 'http://localhost:5000/'

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
const Map = (props) => {
    const events = props.events
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
            console.log(response.data)
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
        googleMapsApiKey:     useEffect(() => {
            getApiKey()
        }, [])
    })

    console.log(isLoaded)

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 200,
        zIndex: 99999
      }

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
                <>
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
                </>
                :
                <></>
            }
            {props.hasMarkers ? 
            events.map((e)=>{
                return (

                    <Marker 
                        className={e.id} key={e.event} id={e.id}                       
                        position={{lat: e.positionLat, lng: e.positionLng} }
                        onLoad={onLoad}
                        onClick={props.clickMarker}
                        // onClick={props.clickMarker}
                    /> 
                        
                )})  
            :
                <Marker></Marker>            
            }
            {/* {props.hasMarkers ? 
            // events.map((e)=>{
                // return (
                    // <React.Fragment key={e.event}>
                    <Marker
                        position={{lat: props.ePosLat, lng: props.ePosLng}}
                        onLoad={onLoad}
                    /> 
                    // </React.Fragment>                             
                // )})  
            :
                <></>            
            } */}
            </GoogleMap> 
        </Suspense>

    ) : <></>
}

export default React.memo(Map);