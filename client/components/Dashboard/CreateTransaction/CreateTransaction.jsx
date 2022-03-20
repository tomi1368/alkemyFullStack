import React from "react";
import { Formik, Form, Field } from "formik";
import {
  initialValue,
  SchemaValidation,
  errorHandler,
} from "./createTransactionConfig/createTransactionConfig";
import {useDispatch,useSelector} from "react-redux"
import {createTransactionRequest} from "./createTransactionConfig/createTransactionRequest"
import "./CreateTransaction.scss";
import DataPickerComp from "./DataPicker/DataPicker";
const CreateTransaction = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=> state.currentUser)
  return (
    <div className="maketransaction">
      <Formik
        initialValues={initialValue}
        validationSchema={SchemaValidation}
        onSubmit={(v)=>createTransactionRequest(dispatch,v,user)}
      >
        {({ errors,setFieldValue,values }) => {
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
                <label>Type Transaction</label>
                <div>
                  <Field
                    className="maketransaction-form__fieldcont__field"
                    as="select"
                    name="type"
                  >
                    <option value="ingress">Ingress</option>
                    <option value="egress">Egress</option>
                  </Field>
                  {errorHandler(errors).type()}
                </div>
              </div>
              <div className="maketransaction-form__fieldcont">
                <label>Date Transaction</label>
                <div>
                  <DataPickerComp
                    name="date"
                    onChange={setFieldValue}
                    value={values.date}
                  />
                  {errorHandler(errors).date()}
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
              <button type="submit">Add Transaction</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTransaction;
