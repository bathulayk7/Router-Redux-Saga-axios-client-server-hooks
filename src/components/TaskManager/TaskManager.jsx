import React from "react";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import { Row, Col } from "reactstrap";

const TaskManager =(props)=> {
    return (
      <Row>
        <Col>
          <TaskForm />
        </Col>
        <Col>
          <TaskList />
        </Col>
      </Row>
    );
}

export default TaskManager;
