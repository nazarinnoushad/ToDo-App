import { useState } from "react"
import PropTypes from "prop-types";
const EditForm = ({item,updateTask}) => {
  const [value, setValue] = useState(item.taskName);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    updateTask(value,item.id);
    setValue("");
  }
  return (
    <div className="">
<form onSubmit={handleSubmit} className="flex flex-col gap-8  bg-black text-white rounded-md h-36 w-56 p-4 ">
        <input value ={value} onChange={(e)=>{setValue(e.target.value)}}  className=" border-2 border-white p-2 outline-none rounded-md " type="text" />
        <button type="submit"  className=" border-2 border-white rounded-md font-semibold bg-white text-sm p-2 text-black">
          Update
        </button>
      </form>
    </div>
  )
}
EditForm.propTypes = {
      item : PropTypes.item,
      updateTask: PropTypes.updateTask
}
export default EditForm