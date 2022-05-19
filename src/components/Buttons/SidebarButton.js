import styled from "styled-components";
import { TABLET_WIDTH_VIEW } from "../../constants/screenSizes";

export const SidebarButton = ({text, Logo, margin, event, active}) => {
    return (
        <ButtonStyle margin={margin} onClick={event} active={active}>
            <div>
                <Logo fill={active ? "black" : "#8E9296"}/>
            </div>
            <p>{text || "LOGOUT"}</p>
        </ButtonStyle>
    )
} 

const ButtonStyle = styled.div`
    width: 100%;
    height: 54px;
    margin: ${(props) => props.margin || '0px'};
    background-color: ${(props) => props.active ? "white" : '#1A1A1A;'};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        padding: 0;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
    }

    div {
        width: 24px;
        margin-right: 15px;
        align-self: center;

        @media (max-width: ${TABLET_WIDTH_VIEW}px) {
            margin: 0;
        }
    }

    P {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: ${(props) => props.active ? "black" : '#8E9296'};
        margin: 0;
        align-self: center;

        @media (max-width: ${TABLET_WIDTH_VIEW}px) {
            display: none;
        }
    }

    &:hover {
        p {
            color: ${(props) => props.active ? "#8E9296" : 'white'};
        }

        svg {
            fill: ${(props) => props.active ? "#8E9296" : 'white'};
        }
  }
`