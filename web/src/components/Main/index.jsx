import React from "react"
import "./style.css"
import Card from "../Card"

const Main = ({ devs }) => {
    return (
        <main>
            <div className="list">
                {devs.map(dev => (
                    <Card key={dev._id} dev={dev} />
                ))}
            </div>
        </main>
    )
}

export default Main
