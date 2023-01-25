import React from "react"

export default function Card2(props) {

    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    } 
    else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card-2">
            { badgeText  ? <div className="sold-out">{badgeText}</div> : ""}
            <img src={props.item.coverImg} /> 
            {/* <div className="card--stats"> */}
                <span>{props.item.stats.rating} <i class="fa-solid fa-star" /> ({props.item.stats.reviewCount}) • {props.item.location}</span>
            {/* </div> */}
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}