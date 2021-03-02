import React from 'react';
import ReactDOM from 'react-dom';
import './style_sheets/MainStyles.css';
import {Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import Modal from "antd/es/modal/Modal";
import axios from "axios";


export class TopBar extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isRegisterModalVisible:false,
            reg_form_username:"",
            reg_form_password:"",
            reg_form_email:"",

        };
    }

    handleRegisterSubmit = () =>{
        console.log("handleRegisterSubmit");
        this.call_register()

    }

    async call_register(){
        console.log("call_register");
        const {
            reg_form_username,
            reg_form_password,
            reg_form_email,
        } = this.state;
        const registerData = {
            "username": reg_form_username,
            "password": reg_form_password,
            "email": reg_form_email
        }
        console.log("reg_form_username",reg_form_username);
        const response =  await axios.post(
          'http://localhost:5000/register',
          registerData,
          { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data)
    }

    render() {
        const {isRegisterModalVisible} = this.state;
        return (
            <>
                <Modal title="Register" visible={isRegisterModalVisible}
                   onCancel={()=>this.setState({isRegisterModalVisible:false})}
                   footer={[
                    <Button key="cancel" onClick={()=>this.setState({isRegisterModalVisible:false})}>
                      Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={this.handleRegisterSubmit}>
                      Submit
                    </Button>,
                    ]}
                >
                    <p className="register-modal-labels">User Name</p>
                    <input className="register-modal-inputs" onChange={event => this.setState({reg_form_username:event.target.value})}/>
                    <p className="register-modal-labels">Password</p>
                    <input className="register-modal-inputs" onChange={event => this.setState({reg_form_password:event.target.value})}/>
                    <p className="register-modal-labels">E-mail</p>
                    <input className="register-modal-inputs" onChange={event => this.setState({reg_form_email:event.target.value})}/>
                </Modal>
                <Row>
                    <Col span={6}>
                        <h1 className="top-name">Daily Tracker</h1>
                    </Col>
                    <Col span={12}>
                        <h1 className="top-name">..................................</h1>
                    </Col>
                    <Col span={6}>
                        <Button className="top-bar-button" onClick={()=>this.setState({isRegisterModalVisible:true})}>Register</Button>
                        <Button className="top-bar-button">Sign In</Button>
                    </Col>
                </Row>
            </>

        );
    }
}