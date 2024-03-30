module.exports = {
    "GET /users": { name: "joe", age: 100, location: "dalian" },
    "POST /users/login": (req, res) => {
        console.log(req.body);

        if (req.body.username === "joe" && req.body.password === "123") {
            res.send({
                ok: 1,
            });
        } else {
            res.send({
                ok: 0,
            });
        }
    },
};
