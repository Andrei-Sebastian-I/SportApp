import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Input } from '../../components/Inputs/Input';
import LoginImage from "../../assets/loginImage.png"
import { Button } from '../../components/Buttons/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { TABLET_WIDTH_VIEW } from '../../constants/screenSizes';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Div>
            <LoginWrapper>
                <LoginComponent>
                    <Subtitle>WELCOME</Subtitle>
                    <Title>Login To Your Account</Title>
                    <Input title="Email Adress" margin="0 0 16px 0"/>
                    <Input title="Password" type='password'/>
                    <Button 
                        text="LOGIN"
                        margin="40px 0 0 0"
                        onClick={() => {
                            dispatch({
                                type: 'SIGN_IN'
                            });
                            navigate("/coaches");
                        }}
                    />
                </LoginComponent> 
            </LoginWrapper>

            <img src={LoginImage} width="100" height="50"/>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #F9F9F9;
    /* filter: blur(50px); */
    animation: ${borderAnim} 2s linear infinite;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        @media (max-width: ${TABLET_WIDTH_VIEW}px) {
            position: absolute;
            opacity: 0.7;
        }
    }
`

const borderAnim = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`

const LoginWrapper = styled.div`
    width: 613px;
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        width: 100%;
        padding: 10px;
    }
`
const LoginComponent = styled.div`
    max-width: 327px;
    align-self: center;
`

const Subtitle = styled.p`
    font-size: 12px;
    line-height: 14px;
    margin: 0;
`

const Title = styled.p`
    font-size: 36px;
    line-height: 42px;
    margin: 0;
    margin-bottom: 132px;
`