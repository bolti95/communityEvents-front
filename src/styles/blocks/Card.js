import styled from "styled-components";

export const Card = styled.div `
    /* background-color: ${( props ) => props.backgroundColour}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkgrey;
    width: 250px;
    height: ${( props ) => props.height};
    border-radius: 20px;
    padding: 10.5px;
`

