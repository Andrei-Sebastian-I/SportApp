import styled from 'styled-components';
import { Layout } from '../../components/Layout/Layout';
import { Paths } from '../../pages/Paths';
import {ReactComponent as Athletes} from "../../assets/athletes.svg"
import { PageHeader } from '../../components/Header/PageHeader';
import { CoachesTable } from '../../components/Tables/CoachesTable';
import { AddCoach } from '../../components/Modals/AddCoach';
import { ModalText } from '../../components/Modals/ModalText';
import { useState } from 'react';

export const Coaches = () => {
    const [isOpen, setIsOpen] = useState({
        addModal: false,
        deleteModal: false,
        editModal: false
    });

    const setModalState = (key, value) => {
        setIsOpen({...isOpen, [key]: value})
    }

    return (
        <Layout active={Paths.coaches}>
            <PageHeader title='Coaches' event={() => setModalState("addModal", true)}>
                {isOpen.addModal && <AddCoach isOpen={() => setModalState("addModal", false)}/>}
            </PageHeader>
            <CoachesTable/>
            {/* <AddCoach title={'Add Coach'}/> */}
            {/* <ModalText /> */}
        </Layout>
    )
}

