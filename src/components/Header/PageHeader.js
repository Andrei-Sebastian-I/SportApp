import styled from "styled-components"
import { Button } from "../Buttons/Button"
import { SearchInput } from "../Inputs/SearchInput"

export const PageHeader = ({title, children, event}) => {
    return (
        <Div>
            <h1>{title}</h1>
            <Header>
                <SearchInput width="371px"/>
                <Button
                    onClick={event}
                    text="ADD NEW" 
                    width='177px'
                />
            </Header>
            {children}
        </Div>
    )
}

const Div = styled.div`
    margin: 50px 0 32px 0;
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 42px;
        margin: 0 0 43px 0;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`