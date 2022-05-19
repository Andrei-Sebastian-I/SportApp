import styled from "styled-components";

export const Input = ({title, type = "text", margin}) => {
    return (
        <Div margin={margin}>
            <p>{title}</p>
            <input type={type} placeholder={title}/>
        </Div>
    )
} 

const Div = styled.div`
    width: 100%;
    margin: ${(props) => props.margin || '0px'};
    p {
        font-size: 14px;
        line-height: 16px;
        margin: 0 0 6px 0;
        font-family: 'Inter';
        font-weight: 600;
    }

    input {
        width: 100%;
        border-radius: 8px;
        height: 46px;
        border: 1px solid gray;
        background-color: white;
        padding: 0 10px;
        box-sizing: border-box;

    }

`