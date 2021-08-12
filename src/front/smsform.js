import React, { Component,useContext  }from 'react'
import { Context } from "./appContext";
import "../styles/sms.css"



class SMSForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          message: {
            to: '',
            body: ''
          },
          submitting: false,
          error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       
      }
      onHandleChange(e) {
        const name = e.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: e.target.value }
        });
      }
      onSubmit(e) {
        e.preventDefault();
        this.setState({ submitting: true });
        fetch('http://127.0.0.1:5000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }
    

      render(){
        return (
            
          <form onSubmit={this.onSubmit}
          className={this.state.error ? 'error sms-form' : 'sms-form'}>
            <div>
              <label htmlFor="to">From:</label>
              <input
                 type="tel"
                 name="to"
                 id="to"
                defaultValue={this.state.message.to}
                 onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea 
              name="body"
               id="body"
               defaultValue={this.state.message.body}
               onChange={this.onHandleChange}
               />
            </div>
            <button type="submit" disabled={this.state.submitting}>
              Send message
            </button>
          </form>
        
        );

      
      
 
}
}


export default SMSForm


