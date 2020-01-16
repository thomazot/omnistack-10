import React, { useState, useEffect } from "react"
import "./style.css"

const Sidebar = ({ onSubmit }) => {
    const [github_username, setGithubUsername] = useState("")
    const [techs, setTechs] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                setLatitude(latitude)
                setLongitude(longitude)
            },
            err => {
                console.log(err)
            },
            { timeout: 30000 }
        )
    }, [setLatitude, setLongitude])

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        await onSubmit({ github_username, techs, latitude, longitude })
        setGithubUsername("")
        setTechs("")
        setLoading(false)
    }

    return (
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="github_username">Usuário do Github</label>
                    <input
                        name="github_username"
                        id="username_github"
                        required
                        type="text"
                        onChange={e => setGithubUsername(e.target.value)}
                        value={github_username}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input
                        name="techs"
                        id="techs"
                        required
                        type="text"
                        onChange={e => setTechs(e.target.value)}
                        value={techs}
                    />
                </div>
                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            name="latitude"
                            id="latitude"
                            type="text"
                            onChange={e => setLatitude(e.target.value)}
                            value={latitude}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input
                            name="longitude"
                            id="longitude"
                            type="text"
                            onChange={e => setLongitude(e.target.value)}
                            value={longitude}
                        />
                    </div>
                </div>
                <button disabled={loading} type="submit">
                    {loading ? "Aguarde..." : "Salvar"}
                </button>
            </form>
        </aside>
    )
}

export default Sidebar
