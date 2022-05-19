import styled from "styled-components";
import { Input } from "../Inputs/Input";
import { Modal } from "./Modal";

export const AddCoach = ({isOpen}) => {
    return (
        <Modal title={"Add Coach"} deleteButton={false} closeModal={isOpen}>
            <Div>
                <Input title={'First Name'}/>
                <Input title={'Last Name'}/>
                <Input title={'Email Adress'}/>
                <Input title={'Club Assign'}/>
            </Div>
        </Modal>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`