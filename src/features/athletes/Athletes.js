import styled from 'styled-components';
import { Layout } from '../../components/Layout/Layout';
import { Paths } from '../../pages/Paths';


export const Athletes = () => {
    return (
        <Layout active={Paths.athletes}>
            <p>Athletes</p>
        </Layout>
    )
}
