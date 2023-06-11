import React, { useEffect, useState } from 'react'

export default function Index() {

    const [trips, setTrips] = useState([])
    const [url , setUrl] = useState("http://localhost:3001/trips")


    // useEffect ထဲမှာ  async, await မသုံးသင့်ဘူး။ .then() နဲ့ပဲသုံးသင့်တယ် ။  ေနာက်ပိုင်း မလိုလားအပ်တဲ့ error တွေတက်နိုင်လို့ ။
    useEffect( () => {
        fetch(url)
        .then( res => res.json() )
        .then( data =>{
            setTrips(data)
        })
    }, [url])
    
    // dependency ထဲမှာဘာမှမထည့်ထားရင် useEffect() ထဲက code တွေက component ကို စစခြင်း run တဲ့ အချိန်မှာပဲ တစ်ခါ run တယ်
    // eg.[url] , dependency တွေက state တွေ change တိုင်း useEffect() ထဲက code တွေကို ပြန်လုပ်တယ်

    console.log(trips)

    return (
        <div>
            <h2>Ready to GO? ......</h2>

            <button onClick={() => setUrl("http://localhost:3001/trips")}>All Trips</button>
            <button onClick={() => setUrl("http://localhost:3001/trips?location=Myanmar")}>Myanamr Trip</button>

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
