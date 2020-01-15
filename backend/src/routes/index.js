import DevController from "../controllers/DevController"
import SearchController from "../controllers/SearchController"

const { Router } = require("express")

const routes = Router()

// Devs
routes.get("/devs", DevController.index)
routes.post("/devs", DevController.store)
routes.put("/devs/:id", DevController.update)
routes.delete("/devs/:id", DevController.destroy)

// Search
routes.get("/search", SearchController.index)

export default routes
