import express from "express"
import authToken from "../middlewares/auth.js"
import { createTransaction } from "../controllers/transactionController.js"


const TransactionRouter = express.Router()


TransactionRouter.post("/create",authToken,createTransaction)


export default TransactionRouter