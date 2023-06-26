const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.export = () => ({
    webpack:{
        configure:{
            output:{
                publicPath: "auto",
            },
        },
    },
    plugins:
            new ModuleFederationPlugin({
                name: "playlist",
                filename: "remoteEntry.js",
                remotes: {
                    "./Games": "games@http://localhost:3000/remoteEntry.js",
                },
                shared:{
                    ...deps,
                    card:{
                        singleton: true,
                    },
                    "games-content":{
                        singleton: true,
                    },
                    "playlist-content":{
                        singleton: true,
                    },
                    tsconfig:{
                        singleton: true,
                    },
                    ui:{
                        singleton: true,
                    },
                    store:{
                        singleton: true,
                    },
                    react:{
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom":{
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                }
            })
        
});
