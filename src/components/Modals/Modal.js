import styled from "styled-components"
import { Button } from "../Buttons/Button"
import {ReactComponent as Close} from "../../assets/close.svg";
import { Input } from "../Inputs/Input";

export const Modal = ({title, deleteButton, children, closeModal}) => {
    return(
    <Div>
        <Icon onClick={() => closeModal()}>
            <Close/>
        </Icon>
        <Title>{title}</Title>
        <hr/>
        <Children>
            {children}
        </Children>
        <hr/>
        <Buttons>
            {deleteButton ?
                <Button backgroundColor="white" width='50px' text={'DELETE'}/> :
                <div></div>
            }
            <RightButtons>
                <Button backgroundColor="#F5F5F7" color="black" width='86px' text={'CANCEL'} onClick={closeModal}/>
                <Button width='140px' text={'SAVE'}/>
            </RightButtons>
        </Buttons>
    </Div>
    )
}

const Div = styled.div`
    padding: 55px 40px 49px 40px;
    background: #FFFFFF;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border: 1px solid #8E9296;
    box-sizing: border-box;
    border-radius: 8px;
    max-width: 520px;
    width: 100%;
    /* height: 629px; */
    -webkit-box-shadow: 1px 1px 15px 2px #000000; 
    box-shadow: 1px 1px 15px 2px #000000;

    hr {
        border: 1px solid #CAD2E2;
        margin: 0;
    }
`

const Icon = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    margin: 0 0 14px 0;
`

const Children = styled.div`
    margin: 40px 0;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
`

const RightButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
`