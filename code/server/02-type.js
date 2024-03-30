const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

var Schema = buildSchema(`

    type Account {
        name: String,
        age: Int,
        location: String
    }

    type Film {
        id: Int,
        name: String,
        poster: String,
        price: Int
    }

    type Query {
        hello: String,
        getName: String,
        getAge: Int,
        getAllNames: [String],
        getAllAges: [Int],
        getAccountInfo: Account,
        getNowplayingList: [Film],
        getFilmDetail(id: Int!): Film
    }
`);

var faskeDb = [
    {
        id: 1,
        name: "1111",
        poster: "http://1111",
        price: 100,
    },
    {
        id: 2,
        name: "2222",
        poster: "http://2222",
        price: 200,
    },
    {
        id: 3,
        name: "3333",
        poster: "http://3333",
        price: 300,
    },
];

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
    getAllNames: () => {
        return ["joe", "tiechui", "xiaoming"];
    },
    getAllAges() {
        return [19, 20, 200];
    },
    getAccountInfo() {
        return {
            name: "joe",
            age: 100,
            location: "dalian",
        };
    },
    getNowplayingList() {
        return faskeDb;
    },
    getFilmDetail({ id }) {
        console.log(id);

        return faskeDb.filter((item) => item.id === id)[0];
    },
};

var app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: Schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(3000);
