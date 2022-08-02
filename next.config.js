module.exports = {
  env:{
    apiKey: process.env.API_KEY,
  },
  serverRuntimeConfig:{
    apiKey: process.env.API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.API_KEY,
  },
}