import styled from "styled-components";
import { MOBILE_WIDTH_VIEW, TABLET_WIDTH_VIEW } from "../../constants/screenSizes";
import { EventData } from "../EventData/EventData";
const NUMBER_OF_PARTICIPANTS_TO_SHOW = 4;

export const EventCard = ({title, text, date, time, location, participants, eventImage, key}) => {
    return (
        <Div key={key}>
            <EventImage>
                <img src={eventImage} alt="Event image not found"/>
            </EventImage>
            <Wrapper>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <EventData date={date} time={time} location={location} />
                <ParticipantsText>PARTICIPANTS</ParticipantsText>
                <Flex>
                    {participants.slice(0,NUMBER_OF_PARTICIPANTS_TO_SHOW).map((path, index) => 
                        <ParticipantImage left={index} key={`${index}_${new Date().getTime()}_participants_card`}>
                            <img src={path} alt="User not found"/>
                        </ParticipantImage>
                    )}
                    {participants.length > NUMBER_OF_PARTICIPANTS_TO_SHOW && <Text>+ {participants.length - NUMBER_OF_PARTICIPANTS_TO_SHOW}</Text>}
                </Flex>
            </Wrapper>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    background: #FFFFFF;
    filter: drop-shadow(0px 6px 13px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1.34018px 2.90372px rgba(0, 0, 0, 0.0298054)) drop-shadow(0px 0.399006px 0.864513px rgba(0, 0, 0, 0.0201946));
    border-radius: 8px;
    position: relative;
    flex: 0 1 calc(50% - 5px);
    cursor: pointer;
    :hover {
        opacity: 0.9;
    }
    @media (max-width: ${TABLET_WIDTH_VIEW}px) {
        flex: 0 1 100%;
    }
`

const EventImage = styled.div`
    width: 80%;
    img {
        height: 100%;
        width: 100%;
        border-radius: 8px 0 0 8px;
        object-fit: cover;
    }
    @media (max-width: ${MOBILE_WIDTH_VIEW}px) {
      display: none;
    }
`

const Wrapper = styled.div`
    padding: 24px;
    box-sizing: border-box;
`

const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
`

const Flex = styled.div`
    display: flex;
    p {
        align-self: center;
        position: relative;
        left: -30px;
    }
`

const Text = styled.p`
   font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
`
const ParticipantsText = styled.div`
   font-family: 'Inter';
    font-style: normal;
    color: #8E9296;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`

const ParticipantImage = styled.div`
    margin-top: 5px;
        img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
            position: relative;
            left: ${(props) =>  `-${15 * props.left}px`}
        }
    
`