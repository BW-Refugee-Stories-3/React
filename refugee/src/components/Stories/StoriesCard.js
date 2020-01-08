import React from 'react'

const StoriesCard = props => {
    console.log(props)
    return(
        <div key={props.stories.name}>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <h3>{props.date}</h3>
            <h3>{props.textbody}</h3>
            
        </div>
    )
}

export default StoriesCard