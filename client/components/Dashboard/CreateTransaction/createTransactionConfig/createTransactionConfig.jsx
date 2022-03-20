import * as Yup from "yup"

const initialValue = {
    concept:"",
    amount:1,
    type:"ingress",
    category:"",
    date:new Date()
}

const SchemaValidation = Yup.object().shape({
    concept: Yup.string().required("Concept is required").max(30,"Must be under 30"),
    amount:Yup.number().required("Amount required").min(1,"Can´t be negative"),
    type:Yup.string().required().matches(/ingress|egress/,"Dont match"),
    category:Yup.string(),
    date:Yup.string().required("Date is required")
})


const errorHandler = (errors)=>{
    return{
        concept:()=>{
            return( errors.concept && <div>a</div>)
        },
        amount:()=>{
            return (errors.amount && <div>a</div>)
        },
        type:()=>{
            return( errors.type && <div>a</div>)
        },
        date:()=>{
            return( errors.date && <div>a</div>)
        }
    }
}

export {initialValue,SchemaValidation,errorHandler}