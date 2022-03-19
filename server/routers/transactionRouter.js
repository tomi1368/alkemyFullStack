import express from "express"
import authToken from "../middlewares/auth.js"
import { createTransaction,deleteTransaction,modifyTransaction } from "../controllers/transactionController.js"


const TransactionRouter = express.Router()


TransactionRouter.post("/",authToken,createTransaction)

TransactionRouter.put("/",authToken,modifyTransaction)

TransactionRouter.delete("/",authToken,deleteTransaction)

export default TransactionRouter