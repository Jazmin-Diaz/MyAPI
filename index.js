
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
require("dotenv").config();


const app = express();
app.set("port", process.env.PORT || 4000);

//conexion a base de datos
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI)
.then(mongoose=>console.log('Conectado al MongoDB Atlas'));


//Listening de puertos

app.set(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",routes);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})










