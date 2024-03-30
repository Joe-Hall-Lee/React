const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

var Schema = buildSchema(`
    type Query{
        hello: String,
        getName: String,
        getAge: Int
    }
`);

// 处理器
const root = {
    hello: () => {
        // 通过数据库查
        var str = "hello world";

        return str;
    },
    getName: () => {
        return "joe";
    },
    getAge: () => {
        return 100;
    },
};

var app = express();

app.use("/home", function (req, res) {
    res.send("home data2222");
});

app.use("/list", function (req, res) {
    res.send("home data");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: Schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(3000);
