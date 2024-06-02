import React from 'react'
import './DestinationStyles.css'
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'
import DestinationData from './DestinationData'


const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className='first-des'
                heading="Taal Volcano, Batangas"
                text="Taal Volcano is the second most active volcano found in the province of
            Batangas.  A complex volcano in the middle of Taal Lake and is often
            called an island within a lake, that is an island within a lake that
            is on an island as well as one of the lowest volcano in the world having
            311 meters elevation.  It offers a very a spectacular view seen from
            Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from
            Manila, capital of the Philippines.
            The main Vulcan point situated in the main crater lake, which is on the
            volcano island that is in Taal lake, which is in the main island of the
            Philippines (Luzon)."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className='first-des-reverse'
                heading="Mt.Daguldul, Batangas"
                text="Taal Volcano is the second most active volcano found in the province of
            Batangas.  A complex volcano in the middle of Taal Lake and is often
            called an island within a lake, that is an island within a lake that
            is on an island as well as one of the lowest volcano in the world having
            311 meters elevation.  It offers a very a spectacular view seen from
            Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from
            Manila, capital of the Philippines.
            The main Vulcan point situated in the main crater lake, which is on the
            volcano island that is in Taal lake, which is in the main island of the
            Philippines (Luzon)."
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    )
}


export default Destination
