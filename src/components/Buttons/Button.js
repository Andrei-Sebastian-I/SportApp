import styled from "styled-components";

export const Button = ({text, margin, width, color, backgroundColor, onClick}) => {
    return (
        <ButtonStyle margin={margin} onClick={onClick} width={width} backgroundColor={backgroundColor} color={color}>{text}</ButtonStyle>
    )
} 

const ButtonStyle = styled.button`
    width:  ${(props) => props.width || '100%'};
    height: 46px;
    margin: ${(props) => props.margin || '0px'};
    background-color:  ${(props) => props.backgroundColor || '#1A1A1A'};
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.color || '#44DABD'};
    border-radius: 8px;
    border: 0;
    cursor: pointer;
`