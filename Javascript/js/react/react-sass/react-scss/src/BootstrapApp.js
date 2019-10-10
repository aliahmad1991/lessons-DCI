import React, { Component } from 'react'
import {Dropdown,Container,Col, Row, Alert} from 'react-bootstrap';
import Columns from './columns';
import './App.css';


class BootstrapApp extends Component{
    state={
        numCols:2,
        themes:['primary','secondary','success','danger','warning','info','light','dark']
    }
addColumn=(numCols)=>{
    this.setState({numCols:numCols})
    console.log(numCols)
}

render(){
    return(
        <div className="App">
            <Container>
                <Row>
                    <Col md={2}>
<Dropdown>
<Dropdown.Toggle variant="success">
    Dropdown Button
</Dropdown.Toggle>

<Dropdown.Menu>
    <Dropdown.Item onClick={()=>this.addColumn(1)}>show Column 1</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(2)}>show Column 2</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(3)}>show Column 3</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(4)}>show Column 4</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(5)}>show Column 5</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(6)}>show Column 6</Dropdown.Item>
    <Dropdown.Item onClick={()=>this.addColumn(7)}>show Column 7</Dropdown.Item>
</Dropdown.Menu>

</Dropdown>
</Col>
<Col md={10}>
<Row>
    <Columns/>
</Row>
</Col>

</Row>
</Container>
        </div>
    );
}

}
export default BootstrapApp;