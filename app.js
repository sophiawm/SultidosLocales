import express from "express";
import cors from "cors";
import db from "./database/db.js";
import productRouter from "./routes/productRoutes.js";
import brandRouter from "./routes/brandRoutes.js";

export const app = express()
app.get('/', (_req, res) =>{
res.send('Surtidos Locales Homepage')
})

app.use(cors())
app.use(express.json())
app.use('/products', productRouter)
app.use('/brands', brandRouter)

try{
	await db.authenticate()
		console.log('conected to database')
	}catch{
		console.log(`error:' ${error}`)
	}

//👀 importante este paso para poder parar el servidor dentro de los test
export const server = app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
} )