import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../assets/search.svg";

export const SearchInput = ({width}) => {
    return (
        <Div width={width}>
            <SearchIcon />
            <input type="text" placeholder={""}/>
        </Div>
    )
} 

const Div = styled.div`
    width: ${(props) => props.width || '100%'};
    position: relative;
    input {
        width: 100%;
        border-radius: 8px;
        height: 46px;
        border: 1px solid gray;
        background-color: white;
        padding: 0 10px 0 44px;
        box-sizing: border-box;
    }

    svg {
        position: absolute;
        top: 11px;
        left: 14px;
    }

`