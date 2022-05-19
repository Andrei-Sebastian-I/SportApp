import styled from 'styled-components';
import { EventCard } from '../../components/Cards/EventCard';
import { PageHeader } from '../../components/Header/PageHeader';
import { Layout } from '../../components/Layout/Layout';
import { ModalText } from '../../components/Modals/ModalText';
import { Paths } from '../../pages/Paths';

const img = [
    "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
]

export const Events = () => {
    return (
        <Layout active={Paths.events}>
            <PageHeader title='Events' />
            <EventsWrapper>
            {[0,1,2,3,4].map((event, index) => 
                <EventCard 
                    key={`${index}_${new Date().getTime()}_event_card`}
                    eventImage="https://eziarultau.ro/wp-content/uploads/2020/09/Cetatea-de-Scaun-a-Sucevei.jpg"
                    title="Running for Life"
                    text="Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id."
                    date="11.11.1111" 
                    time="20:20" 
                    location="Suceava, Cetatea de scaun"
                    participants={img}
                />
            )}
            </EventsWrapper>
        </Layout>
    )
}

const EventsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
`
