const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

// module.exports = () => ({
//     webpack:{
//         configure:{
//             output:{
//                 publicPath: "auto",
//             },
//         },
//     },
//     plugins:
//             new ModuleFederationPlugin({
//                 name: "playlist",
//                 filename: "remoteEntry.js",
//                 remotes: {
//                     "./Games": "http://localhost:3000/remoteEntry.js",
//                 },
//                 shared:{
//                     ...deps,
//                     card:{
//                         singleton: true,
//                     },
//                     "games-content":{
//                         singleton: true,
//                     },
//                     "playlist-content":{
//                         singleton: true,
//                     },
//                     tsconfig:{
//                         singleton: true,
//                     },
//                     ui:{
//                         singleton: true,
//                     },
//                     react:{
//                         singleton: true,
//                         requiredVersion: deps.react,
//                     },
//                     "react-dom":{
//                         singleton: true,
//                         requiredVersion: deps["react-dom"],
//                     },
//                 }
//             })
        
// });

const cracoConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.experiments = { topLevelAwait: true };
      config.plugins.push(
        new ModuleFederationPlugin({
            name: "playlist",
            filename: "remoteEntry.js",
            remotes: {
                "games": "games@http://localhost:3000/remoteEntry.js",
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
      );
      return config;
    }
  }
  
  module.exports = cracoConfig;