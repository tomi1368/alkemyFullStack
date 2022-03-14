import express from "express"
import authToken from "../middlewares/auth"
import { createTransaction } from "../controllers/transactionController"


const TransactionRouter = express.Router()


TransactionRouter.post("/operation",authToken,createTransaction)





export default TransactionRouter