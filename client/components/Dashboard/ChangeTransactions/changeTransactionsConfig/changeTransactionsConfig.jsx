import * as Yup from "yup";

const initialValue = (transaction) => {
  
  return {
    concept: transaction.concept ,
    amount: transaction.amount,
    category: transaction.category,
    date:transaction.date
  };
};

const SchemaValidation = Yup.object().shape({
  concept: Yup.string()
    .required("Concept is required")
    .max(30, "Must be under 30"),
  amount: Yup.number().required("Amount required").min(1, "Can´t be negative"),
  category: Yup.string(),
  date:Yup.string().required("Date is required")
});

const errorHandler = (errors) => {
  return {
    concept: () => {
      return errors.concept && <div>{errors.concept}</div>;
    },
    amount: () => {
      return errors.amount && <div>{errors.amount}</div>;
    },
    date:()=>{
      return errors.date && <div>{errors.date}</div>;
    }
  };
};

export { initialValue, SchemaValidation, errorHandler };
