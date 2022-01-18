import styled from "styled-components";

export const PageDefault = styled.div `
    display: ${( props ) => props.display};
    flex-direction: ${( props ) => props.flexDirection};
    /* column, could use flex numbers instead? */
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;
    align-items: center;
`