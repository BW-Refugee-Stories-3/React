import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StoriesCard from './components/Stories/StoriesCard'


export default function StoriesPage() {
    const [people, setPeople] = useState([]);
    useEffect(() =>{
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response.data.results);
                setPeople(response.data.results);
            })
            .catch(error => {
                console.log("data not returned", error)
            })


    }, []);

    return (
        <div className="peoples">

            {people.map(peoples =>{
            return <StoriesCard peoples={people} key={peoples.name} name={peoples.name} height={peoples.height} birthyear={peoples.birth_year} gender={peoples.gender} />
            })}
            
        </div>
    )
}
