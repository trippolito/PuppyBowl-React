import { useState, useEffect } from 'react';

const GetPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/');
        const result = await response.json();
        const puppies = result.data.players
        console.log(puppies);
        setPuppies(puppies);
      }
      catch (error) {
        console.log(error);
      }
    }; fetchPuppies();
  }
    , []);
  return (
    <>
      <div className="puppyContainer">
        {puppies.map((puppy) => {
          return <div className="puppyItem">
            <img className="pics" src={puppy.imageUrl} alt="puppy" />
            <h2 key={puppy.id}>{puppy.name}</h2>
          </div>
        })}
      </div>
    </>
  )
}

export default GetPuppies;

