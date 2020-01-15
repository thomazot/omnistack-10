const parseLocation = (latitude, longitude) => ({
    type: "Point",
    coordinates: [longitude, latitude]
})

export default parseLocation
