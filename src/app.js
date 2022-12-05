const express = require("express");
const config = require("./config");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const utils = require("./commons/utils");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");
const depthLimit = require("graphql-depth-limit");
const createNoAliasValidation = require("graphql-no-alias").createValidation;
const NoIntrospection = require("graphql-disable-introspection");

const makeApp = ({ port = config.defaultPort }) => {
    // security setup
    const aliasPermissions = {
        Query: {
            "*": 2,
        },
        Mutation: {
            "*": 2
        },
        Subscription: {
            "*": 2
        }
    };
    const noAliasValidation = createNoAliasValidation({ permissions: aliasPermissions }).validation;
    const queryValidationRules = [noAliasValidation, depthLimit(3)];
    let graphiql = true;
    if (process.env.NODE_ENV == "production") {
        graphiql = false;
        queryValidationRules.push(NoIntrospection);
    }

    // app configurations
    const app = express();
    app.set("port", port);
    app.use(morgan("dev"));
    // @ts-ignore
    app.use(cors(
        {
            origin: config.corsWhiteList,
            optionsSuccessStatus: 200
        }
    ));
    app.use(express.static("src/public"));
    // @ts-ignore
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000,
        max: config.numberOfMaxApiRequestsPerMin,
        message: utils.createSingleResponse("To_Many_Requests"),
        standardHeaders: true,
        legacyHeaders: false
    });
    app.use(limiter);
    app.use(helmet.hidePoweredBy());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.status(404).json(utils.createSingleResponse("Welcome!"));
    });
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql,
        validationRules: queryValidationRules
    }));

    app.use("*", (req, res) => {
        res.status(404).json(utils.createSingleResponse("Path_Not_Found"));
    });
    return app;
};

module.exports = makeApp;