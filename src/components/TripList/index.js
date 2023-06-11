import React, { useEffect, useState } from 'react'

export default function Index() {

    const [trips, setTrips] = useState([])


    // useEffect ထဲမှာ  async, await မသုံးသင့်ဘူး။ .then() နဲ့ပဲသုံးသင့်တယ် ။  ေနာက်ပိုင်း မလိုလားအပ်တဲ့ error တွေတက်နိုင်လို့ ။
    useEffect( () => {
        fetch("http://localhost:3001/trips")
        .then( res => res.json() )
        .then( data =>{
            setTrips(data)
        })
    }, [])

    console.log(trips)

    return (
        <div>
            <h2>Ready to GO? ......</h2>
            <ul>
                {trips.map( trip => (
                    <li key={trip.ID}>
                        <h3>{trip.name}</h3>
                        <p>prices - {trip.price} MMK</p>
                    </li>
                ) )}
            </ul>
        </div>
    )
}
