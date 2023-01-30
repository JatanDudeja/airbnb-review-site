import React from 'react'
import photoGrid from '../images/photo-grid.png'


export default function Hero(){
    return(
        <section className='hero-container'>
            <img className='Hero-grid' 
            src={photoGrid}
            />
            <h1 className='hero-heading'>Online Experiences</h1>
            <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}