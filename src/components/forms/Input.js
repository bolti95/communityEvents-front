import styled from 'styled-components';

const StyledInput = styled.input `
  color: ${( props ) => props.color};
  width: ${( props ) => props.width};
  height: ${( props ) => props.height};
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
`

function Input(props) {
    return (
        <StyledInput width={props.width} height={props.height} name={props.name} placeholder={props.placeholder} type={props.type} value={props.value}/>
    );
  }
  
export default Input;