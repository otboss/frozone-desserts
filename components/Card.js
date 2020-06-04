import React, { Component } from 'react';
import SimpleCard from './styles/SimpleCard';
import styled from 'styled-components';

const textColor = styled.div`
    color: #232323;
`;

class Card extends Component {
    render(){
        return(
            <SimpleCard>
                <div  style={{height: '60%', border: '1px solid lightgray'}}>

                </div>
                <div className="textColor" style={{padding: '5px 10px'}}>
                    <span>Single Scoop</span>
                </div>
            </SimpleCard>
        );
    }
}

export default Card;