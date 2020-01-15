import Api from "../services/api"
import Dev from "../models/Dev"
import parseStringAsArray from "../utils/parseStringAsArray"
import parseLocation from "../utils/parseLocation"

export default {
    async index(req, res) {
        const devs = await Dev.find()
        res.json(devs)
    },
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        let dev = await Dev.findOne({ github_username })
        if (!dev) {
            const response = await Api.get(`/users/${github_username}`)
            const { name = login, avatar_url, bio } = response.data
            const techsArray = parseStringAsArray(techs)
            const location = parseLocation(latitude, longitude)

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }

        res.json(dev)
    },
    async update(req, res) {
        const { id } = req.params
        const { techs, latitude, longitude } = req.body

        const techsArray = parseStringAsArray(techs)
        const location = parseLocation(latitude, longitude)

        const dev = await Dev.findByIdAndUpdate(
            id,
            {
                $set: { location, techs: techsArray }
            },
            { new: true }
        )

        res.json(dev)
    },
    async destroy(req, res) {
        const { id } = req.params
        const deleted = await Dev.findOneAndDelete(id)

        res.json(deleted)
    }
}
