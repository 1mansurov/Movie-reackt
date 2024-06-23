import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(12);

  useEffect(() => {
    axios("https://api.tvmaze.com/shows")
      .then(response => setData(response.data))
  }, [])

  const hunderShow = () => {
    setShow(prevShow => prevShow + 8)
  }



  console.log(data);
  return (
    <div className='wrapper' style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {
        data.slice(0,show).map(shows => { 
          return <div key={shows.id} >
            <div className='card'>
              <h3>{shows.name}</h3>
              <img src={shows.image.medium} alt="" />
              <small>{shows.genres}</small>
            </div>

          </div>
        })
      }
      <button onClick={hunderShow}>Show More Card...</button>

    </div>
  )
}

export default App
