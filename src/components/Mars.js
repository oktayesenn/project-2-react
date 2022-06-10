import React from 'react'
import axios from 'axios'
import "./Mars.css"

function Mars() {
    const marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000'
    const [marsData, setMarsData] = React.useState([])
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        axios.get(marsUrl)
            .then(res => {
                setMarsData(res.data.photos)
            })
    }, [])
        
    const handleChange = (e) => {
        setMarsData(e.target.value)
    }
    const filteredMarsData = marsData.filter(mars =>
        mars.camera.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='mars-app'>
        <div className='mars-search'>
        </div>
        {filteredMarsData.map(mars => {
            return(
                <div className='mars-container'>
                    <div className='mars-image'>
                        <img src={mars.img_src} alt=""/>
                    </div>
                    <div className='mars-info'>
                        <h1>{mars.camera.name}</h1>
                        <h2>{mars.rover.name}</h2>
                        <h3>{mars.earth_date}</h3>
                    </div>
                </div>
            )
        })}     </div>
    );
}


export default Mars