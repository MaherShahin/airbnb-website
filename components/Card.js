import React from "react"



export default function Card(props) {
    return (
        <div className="card">
            <img src="../images/artwork-woman.png" alt="artwork-woman" className="card--photo"/>   
            <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
                <p className="gray">Life Lessons with Katie Zaferes</p>
                <p className="gray"><span className="bold">From $136 </span> / person</p>
            </div>
    )
}