import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DataPickerComp = ({ name, value, onChange }) => {
  return (
    <DatePicker
        selected={(value && new Date(value) || null)}
        onChange={val=>{onChange(name,val)}}
        dateFormat="yyyy/MM/dd"
    />
  )
}

export default DataPickerComp