import React from 'react'
import styled from 'styled-components'


const Card = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border:1px solid grey;
width: 50%;
margin: 5px auto;
box-shadow: 2px 1px 7px #888888;
`
const NameH2 = styled.h2`

font-size: 40px;



`

const CardH3 = styled.h3`

font-size:25px;

`

const StoriesCard = props => {
    console.log(props)
    return(
        <Card key={props.stories.name}>
            <NameH2>{props.name}</NameH2>
            <CardH3>{props.location}</CardH3>
            <h4>{props.date}</h4>
            <p>{props.textbody}</p>
            
        </Card>
    )
}

export default StoriesCard