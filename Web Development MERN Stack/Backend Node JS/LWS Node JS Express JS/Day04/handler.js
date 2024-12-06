const handler = (req, res) => {
    // console.log(req.baseUrl);
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.cookies);
    console.log(req.secure);
    res.send("Hello users");
}

module.exports = handler;