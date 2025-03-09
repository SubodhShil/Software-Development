const notFound = (req, res) => {
    res.status(404).send("No such route found!");
}

module.exports = notFound;