import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Alert } from "reactstrap";
import { getSingleTask } from "../../../services/TaskService";
import { useState,useEffect } from "react";

const TaskDetail = ({ match }) => {
  const [task, setTask] = useState(null);
  const { id } = match.params;

  useEffect(()=>{ 
    getSingleTask(id).then((taskItem) => setTask(taskItem));
  },[])
  
  if (!task) {
    return <Alert>Loding...</Alert>;
  }
  return (
    <Card>
      <CardHeader>
        <h3>{task.title}</h3>
      </CardHeader>
      <CardBody>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <p>{task.completed}</p>
        <p>{task.date}</p>
        <Link to="/tasks">Back to Task Manager </Link>
      </CardBody>
    </Card>
  );
};
/* class TaskDetail extends React.Component {
  state = {
    task: null,
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    getSingleTask(id).then((task) => this.setState({ task }));
  };

  render() {
    const { task } = this.state;
    if (task) {
      return (
          <Card>
            <CardHeader>
              <h3>{task.title}</h3>
            </CardHeader>
            <CardBody>
              <p>{task.id}</p>
              <p>{task.description}</p>
              <p>{task.completed}</p>
              <p>{task.date}</p>
              <Link to="/tasks">Back to Task Manager </Link>
            </CardBody>
          </Card>
      );
    }
    return <Alert>Loding...</Alert>;
  }
} */
export default TaskDetail;
