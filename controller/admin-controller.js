const adminPage = (req, res, next) => {
    res.status(200).send("Admin page response");
}

exports.adminPage = adminPage;