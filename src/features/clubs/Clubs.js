import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decrement, increment } from '../../actions';
import { Layout } from '../../components/Layout/Layout';
import { Paths } from '../../pages/Paths';


export const Clubs = () => {
    const counter  = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <Layout active={Paths.clubs}>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment(2))}>+</button>
        </Layout>
    )
}
