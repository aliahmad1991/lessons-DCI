import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import './app.scss';

export default function Home() {
    return (
        <div>
            <ButtonToolbar>
            <Button variant="danger">Red Button</Button>
            <Button variant="primary">Red Button</Button>
            <Button variant="success">Red Button</Button>
            <Button variant="warning">Red Button</Button>

            </ButtonToolbar>


        </div>
    )
}
