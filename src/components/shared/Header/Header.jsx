import React from "react";
import { Row, Col} from "reactstrap";
import Nav from "../Nav/Nav"
const Header = (props) => {
  return (
    <div style={{backgroundColor:"purple"}}>
      <Row>
        <Col xs="8">
          <h1 style={{color:"white"}}>Task Manager</h1>
        </Col>
        <Col>
            <Nav/>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Header;
