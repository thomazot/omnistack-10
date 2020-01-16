import React, { useState, useEffect } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main/index"
import Api from "./services/api"

function App() {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await Api.get("/devs")
            setDevs(response.data)
        }
        loadDevs()
    }, [setDevs])

    async function handleAddDev(data) {
        const response = await Api.post("/devs", data)
        setDevs([...devs, response.data])
    }

    return (
        <div id="app">
            <Sidebar onSubmit={handleAddDev} />
            <Main devs={devs} />
        </div>
    )
}

export default App
