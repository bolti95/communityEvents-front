import styled from 'styled-components';

export const StyledInput = styled.input `
  color: ${( props ) => props.color};
  width: ${( props ) => props.width};
  height: ${( props ) => props.height};
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
`