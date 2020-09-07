import React /*useEffect*/ from "react";
import { ListGroup, Alert } from "reactstrap";
import TaskItem from "./TaskItem/TaskItem";
import { connect } from "react-redux";
import { loadTasksAction } from "../../../actions/taskActions";
import { useEffect } from "react";

const TaskList=(props)=> {
  const { tasks } = props;
  useEffect(()=>{
    props.loadTasks();
  },[])
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
/* class TaskList extends React.Component {
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
} */
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
