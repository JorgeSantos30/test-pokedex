const config = {
  appConfig: {
    port: process.env.PORT,
  },
  dbConfig: {
    dbUri: process.env.MONGO_DB_URI,
  },
};

export default config;
