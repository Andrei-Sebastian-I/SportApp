import styled from "styled-components"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const EventData = ({type="card", date, time, location}) => {
    return (
        <Div display={type === "header" ? "flex" : "block"}>
            <Flex>
                <ElementIco>
                    <AccessTimeIcon/>
                    <p>{date}</p>
                </ElementIco>

                <ElementIco>
                    <CalendarMonthOutlinedIcon/>
                    <p>{time}</p>
                </ElementIco>
            </Flex>
            <ElementIco>
                <LocationOnOutlinedIcon/>
                <p>{location}</p>
            </ElementIco>
        </Div>
    )
}

const Div = styled.div`
    display: ${(props) => props.display};
    margin: 15px 0;
`

const Flex = styled.div`
    display: flex;
    gap: 16px;
`

const ElementIco = styled.div`
    display: flex;
    align-self: center;

    svg, p {
        align-self: center;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin: 0;
    }

    svg {
        width: 16px;
        margin-right: 4px;
    }
`