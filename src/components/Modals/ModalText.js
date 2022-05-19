import styled from "styled-components";
import { Modal } from "./Modal";

export const ModalText = ({isOpen}) => {
    return (
        <Modal title={"Delete Coach"} deleteButton={false} closeModal={isOpen}>
            <Text>
                Are you sure you want to delete Aubrey Miles coach? If you delete coach’s account, all data associated with this profile will permanently deleted.
            </Text>
        </Modal>
    );
}

const Text = styled.p`
    margin: 0;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
`