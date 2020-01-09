import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StoriesCard from './StoriesCard'


export default function StoriesPage() {
    const [story, setStory] = useState([]);
    useEffect(() =>{

        axios
            .get('https://refugee-stories-build-week.herokuapp.com/api/stories/approved')
            .then(response => {
                console.log(response.data);
                setStory(response.data);
            })
            .catch(error => {
                console.log("data not returned", error)
            })


    }, []);

    return (
        <div className="peoples">

            {story.map(stories =>{
            return <StoriesCard stories={stories} key={stories.name} name={stories.name} location={stories.location} date={stories.date} textbody={stories.textbody} />
            })}
            
        </div>
    )
}
