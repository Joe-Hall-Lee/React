export default {
    'GET /users': { name: 'Joe', age: 100 },

    'POST /users/login': (req, res) => {
        console.log(req.body);
        if (req.body.username === 'Joe' && req.body.password === '123') {
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
