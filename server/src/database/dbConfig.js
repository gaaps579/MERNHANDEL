// getting environment variables
const dotenv = require("dotenv");
dotenv.config();

// mongo database URI
const mongoUri = process.env.MONGO_URI;

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

const dbStreamsHandler = {
  error: () => {
    console.log("> error al conectar con la base de datos");
  },
  open: () => {
    console.log("> Conectado correctamente con Atlas mongoDB");
  },
};

module.exports = { mongoUri, configObj, dbStreamsHandler };
