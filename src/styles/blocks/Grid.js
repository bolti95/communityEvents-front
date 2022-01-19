import styled from "styled-components";

export const Grid = styled.div `
`
export const Col = styled.div `
    width: ${( props ) => props.width}; 
    display: flex;
    flex-direction: column;
    text-align: left;
    left: 0;
`
export const Row = styled.div `
    width: ${( props ) => props.width}; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`