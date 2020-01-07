import React from 'react'

const StoriesCard = props => {
    console.log(props)
    return(
        <div key={props.peoples.name}>
            <h2>{props.name}</h2>
            <h3>{props.birthyear}</h3>
            <h3>{props.height}</h3>
            <h3>{props.gender}</h3>
            
        </div>
    )
}

export default StoriesCard