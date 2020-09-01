import React /*useEffect*/ from "react";
import { ListGroup, Alert } from "reactstrap";
import TaskItem from "./TaskItem/TaskItem";
import { connect } from "react-redux";
import { loadTasksAction } from "../../../actions/taskActions";

class TaskList extends React.Component {
  // useEffect(()=>{
  //     props.loadTasks()
  // },[])
  componentDidMount() {
    this.props.loadTasks();
  }
  render() {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return <Alert>No tasks to show.</Alert>;
    }
    return (
      <ListGroup>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ListGroup>
    );
  }
}
const mapStateToProps = (state) => {  //store.getState
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {//store.dispatch
  return {
    loadTasks: () => dispatch(loadTasksAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
