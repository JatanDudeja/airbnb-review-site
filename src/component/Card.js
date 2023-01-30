import React from 'react'
import star from '../images/star.png'  // Path here is relative from Card.js

function Card(props){
    // let imgSource = props.img
    // console.log(typeof(imgSource));

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(


        // <div>
        //     <div className='sold'>
        //         <span className='sold-sold'>Sold Out</span>
        //     </div>
        //     <img src={athelte} className='athelete'/>
        //     <img src={star} className='star'/>
        //     <span className='rating'>5.0</span>
        //     <span className='six'>(6).USA</span>
        //     <span className='review'>Life lessons with Katie Zaferes</span>
        //     <span className='price'>From $136</span>
        //     <span className='person'> / Person</span>

        // </div>
        
        // <div className="card">
        //     <img src= {`./images/${props.img}`} className="card--image" />  {/* Path here is relative from index.html*/}
        //     <div className="card--stats">
        //         <img src={star} className="card--star" />
        //         <span>{props.rating}</span>
        //         <span className="gray">({`${props.reviewCount}`}) </span>
        //         <span className="gray">{props.country}</span>
        //     </div>
        //     <p>{props.title}</p>
        //     <p><span className="bold">{`From $${props.price}`}</span> / person</p>
        // </div>





        <div className="card">
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <img src={`./images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}

export default Card