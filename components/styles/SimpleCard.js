import styled from 'styled-components';

const SimpleCard =  styled.div`
    width: 150px;
    height: 160px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: 1px solid lightgray;
    margin: 5px;
    cursor: pointer;
    &: hover {
        opacity: 0.8;
    }
`;

export default SimpleCard;