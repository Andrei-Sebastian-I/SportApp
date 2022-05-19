import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {ReactComponent as Flag} from "../../assets/Flag.svg"
import {ReactComponent as LogOut} from "../../assets/log-out.svg"
import {ReactComponent as Coaches} from "../../assets/coaches.svg"
import {ReactComponent as Clubs} from "../../assets/clubs.svg"
import {ReactComponent as Athletes} from "../../assets/athletes.svg"
import { SidebarButton } from "../Buttons/SidebarButton";
import { Paths } from '../../pages/Paths';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { TABLET_WIDTH_VIEW } from '../../constants/screenSizes';

export const Sidebar = ({active}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // return (
    //     <Div>
    //         <Wrapper>
    //             <Top>
    //                 <Image>
    //                     <img src="https://www.w3schools.com/w3css/img_avatar3.png" />
    //                 </Image>
    //                 <Title>George Vasile</Title>
    //                 <Subtitle>ADMINISTRATOR</Subtitle>
    //             </Top>

    //             <Middle>
    //                 <SidebarButton 
    //                     text='Coaches'
    //                     Logo={Coaches}
    //                     active={active==Paths.coaches}
    //                     event={() => { navigate(Paths.coaches); }}
    //                     path={Paths.coaches}
    //                 />
    //                 <SidebarButton 
    //                     text='Events'
    //                     Logo={Flag}
    //                     active={active==Paths.events}
    //                     event={() => { navigate(Paths.events); }}
    //                     path={Paths.events}
    //                 />
    //                 <SidebarButton 
    //                     text='Clubs'
    //                     Logo={Clubs}
    //                     active={active==Paths.clubs}
    //                     event={() => { navigate(Paths.clubs); }}
    //                 />
    //                 <SidebarButton 
    //                     text='Athletes'
    //                     Logo={Athletes}
    //                     active={active==Paths.athletes}
    //                     event={() => { navigate(Paths.athletes); }}
    //                 />
    //             </Middle>

    //             <Bottom>
    //                 <SidebarButton
    //                     text='LOGOUT'
    //                     Logo={LogOut}
    //                     event={() => {
    //                         dispatch(login());
    //                         navigate("/login");
    //                     }}
    //                 />
    //             </Bottom>

    //         </Wrapper>
    //     </Div>
    // )

    return (
        <Div>
            <Wrapper>
                <Top>
                    <Image>
                        <img src="https://www.w3schools.com/w3css/img_avatar3.png" />
                    </Image>
                    <Title>George Vasile</Title>
                    <Subtitle>ADMINISTRATOR</Subtitle>
                </Top>

                <Middle>
                    <SidebarButton 
                        text='Coaches'
                        Logo={Coaches}
                        active={active==Paths.coaches}
                        event={() => { navigate(Paths.coaches); }}
                        path={Paths.coaches}
                    />
                    <SidebarButton 
                        text='Events'
                        Logo={Flag}
                        active={active==Paths.events}
                        event={() => { navigate(Paths.events); }}
                        path={Paths.events}
                    />
                    <SidebarButton 
                        text='Clubs'
                        Logo={Clubs}
                        active={active==Paths.clubs}
                        event={() => { navigate(Paths.clubs); }}
                    />
                    <SidebarButton 
                        text='Athletes'
                        Logo={Athletes}
                        active={active==Paths.athletes}
                        event={() => { navigate(Paths.athletes); }}
                    />
                </Middle>

                <Bottom>
                    <SidebarButton
                        text='LOGOUT'
                        Logo={LogOut}
                        event={() => {
                            dispatch(login());
                            navigate("/login");
                        }}
                    />
                </Bottom>

            </Wrapper>
        </Div>
    )
}

const Div = styled.div`
    height: 100vh;
    width: 216px;
    background-color: #1A1A1A;
    position: relative;
    padding: 60px 22px;
    box-sizing: border-box;
    position: fixed;

    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        width: 70px;
        padding: 60px 0;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
       p {
           display: none;
       }
    }

`
const Image = styled.div`
    width: 96px;
    height: 96px;
    position: relative;
    img {
        border-radius: 50%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        width: 50px;
        height: 50px;
    }
`

const Subtitle = styled.p`
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    color: #8E9296;
`

const Title = styled.p`
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    color: white;
    margin: 26px 0 6px 0;
`

const Middle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        align-items: center;
        gap: 30px;
    }
`

const Bottom = styled.div`
    height: 174px;
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: center;

    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        height: 40px;
    }
   
`