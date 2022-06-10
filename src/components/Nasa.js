import React from 'react'
import listOfNasa from './listOfNasa.json'
import './about.css'

// const Nasaurl = 'https://images-api.nasa.gov/search?q=mars';

function About(props) {
  // console.log(props.data)


  let about = props.data.map(item => {
    // console.log(item.links[0].href)
    // let array = JSON.parse(item.href)
    if(item.links){
    return (
      <div className="about-container">
      <div className='image'>
        {/* <h1>{item}</h1> */}
        <img src={item.links[0].href} alt=""/>
      </div>
      </div>
    )
    }
  })

  console.log(props.data)
  return (
    <div>
      <h1 >
        Pictures from NASA
      </h1>
      <div className='aboutabout'>{about}</div>
      <h1>
      
      </h1>
      
    </div>
  )
}

export default About