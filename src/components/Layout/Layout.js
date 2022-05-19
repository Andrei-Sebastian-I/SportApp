import styled from "styled-components";
import { TABLET_WIDTH_VIEW } from "../../constants/screenSizes";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = ({children, active}) => {
    return (
        <Div>
           <Sidebar active={active}/>
           <Children>
                {children}
           </Children>
        </Div>
    )
} 

const Div = styled.div`
    display: flex;
    background-color: #F9F9F9;
    width: 100%;
    height: 100%;
    min-height: 100vh;
`

const Children = styled.div`
    margin: 0 40px  40px 256px;
    width: calc(100% - 296px);
    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        width: calc(100% - 90px);
        margin: 0 10px 40px 80px;
    }
`