import parseStringAsArray from "../utils/parseStringAsArray"
import Dev from "../models/Dev"

export default {
    async index(req, res) {
        // Buscar todos devs num raio de 10km
        // filter tecnologias
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        res.json({ devs })
    }
}
