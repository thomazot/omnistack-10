const parseStringAsArray = arrayAsString =>
    arrayAsString.split(",").map(string => string.trim())

export default parseStringAsArray
