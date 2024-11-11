const handle = (req, res) => {
    console.log(req.app.locals.title);
    // res.send('This is home page');
    res.render('index');
}

module.exports = handle;
