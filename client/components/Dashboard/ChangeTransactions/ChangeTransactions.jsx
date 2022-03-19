import { useEffect,useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {Formik,Form,Field} from "formik"
import { changeTransaction, removeTransaction } from './changeTransactionsConfig/changeTransactionsRequest'
import { initialValue,SchemaValidation,errorHandler } from './changeTransactionsConfig/changeTransactionsConfig'
const ChangeTransactions = () => {
  const user = useSelector(state=>state.currentUser)
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedTransaction,setSelectedTransaction] = useState(null)
  useEffect(()=>{
    const foundedTransaction = user.user.wallet.transactions.find(el=> el._id == params.id)
    setSelectedTransaction(foundedTransaction)
  },[])
  return (
    <>
    {
        selectedTransaction && (
          <div className="maketransaction">
          <Formik
            initialValues={initialValue(selectedTransaction)}
            validationSchema={SchemaValidation}
            onSubmit={(v)=>changeTransaction(dispatch,v,selectedTransaction._id,user.token,selectedTransaction.amount,navigate)}
          >
            {({ errors }) => {
              return (
                <Form className="maketransaction-form">
                  <div className="maketransaction-form__fieldcont">
                    <label>Concept</label>
                    <div>
                      <Field
                        className="maketransaction-form__fieldcont__field"
                        name="concept"
                      />
                      {errorHandler(errors).concept()}
                    </div>
                  </div>
                  <div className="maketransaction-form__fieldcont">
                    <label>Amount</label>
                    <div>
                      <Field
                        name="amount"
                        min="1"
                        className="maketransaction-form__fieldcont__field"
                        type="number"
                      />
                      {errorHandler(errors).amount()}
                    </div>
                  </div>
                  <div className="maketransaction-form__fieldcont">
                    <label>Category</label>
                    <div>
                      <Field
                        className="maketransaction-form__fieldcont__field"
                        as="select"
                        name="category"
                      >
                        <option value="">---</option>
                        <option value="Charity">Charity</option>
                        <option value="Services">Services</option>
                        <option value="Food">Food</option>
                        <option value="Tech">Tech</option>
                      </Field>
                    </div>
                  </div>
                  <div className='maketransaction-form__btns'>
                  <button type="submit">Edit Transaction</button>
                  <button onClick={()=>removeTransaction(dispatch,navigate,selectedTransaction._id,user.token)} className='maketransaction-form__btns__delete'>🗑️</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        )
    }
    </> 
  )
}

export default ChangeTransactions