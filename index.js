import express,{json} from "express";
import mongoose, { connect } from "mongoose";
import blogrouter from './routes/blogs.routes.js';
import queryrouter from "./routes/queries.routes.js";
import { v2 as cloudinary } from "cloudinary";
import bodyParser from "body-parser";
import userrouter from "./routes/users.routes.js";
cloudinary.config({
	cloud_name:'degfjcic5',
	api_key:'885817653263579',
	api_secret:'IGH_YJIwDxv_R4hk9KajoMoiI5I'

})
mongoose.set('strictQuery', false)
connect("mongodb+srv://green:green123@cluster0.lvajl5b.mongodb.net/test", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        
        app.use(json())
		app.use("/api", blogrouter)   
		app.use("/api", queryrouter)
		app.use("/api", userrouter)
		app.listen(4000, () => {
			console.log("Server has started 🪐")
		})
	})