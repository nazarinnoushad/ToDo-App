import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Todo = ({ item, deleteTask,doneTask,index,editTask}) => {
  return (
 <div className=" bg-black rounded-md h-36 w-56 text-center text-white text-md font-serif pt-4 ">
      <div>{index+1} . <span className= {`${item.isComplete ? "line-through text-green-500" : "text-white"}`}>{item.taskName}</span> </div>
      <div className="pt-14">
        <DoneIcon onClick = {() => {doneTask(item.id)}} className="text-green-500 hover:text-green-700" />
        <DeleteIcon
          onClick={() => deleteTask(item.id)}
          className="text-red-500 hover:text-red-700"
        />
        <EditIcon onClick={() => {editTask(item.id)}}className="text-blue-500 hover:text-blue-700" />
      </div>  
    </div> 
  );
};
Todo.propTypes = {
  item : PropTypes.item,
  deleteTask : PropTypes.deleteTask,
  doneTask : PropTypes.doneTask,
  index : PropTypes.index,
  editTask: PropTypes.editTask,
  
};
export default Todo;

