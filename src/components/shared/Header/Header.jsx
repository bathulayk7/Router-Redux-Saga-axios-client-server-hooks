import React from "react";
import { Row, Col} from "reactstrap";
import Nav from "../Nav/Nav"
import Alert from "../Alert/Alert";
const Header = (props) => {
  return (
<div>
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
      <Alert></Alert>
    </div>
  );
};

export default Header;
