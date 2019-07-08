import React, { Component } from 'react';

import ListContacts from './ListContacts';

import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {
  state={
    contacts:[]
  }

  componentDidMount(){
    //call contact api
    //then return a promise
    ContactsAPI.getAll()
    .then((contacts)=>{
      this.setState(()=>({
        contacts
      }))
    })
  }

  //remove contact Method
  removeContact=(contact)=>{
    //functional  set state
    this.setState((currentState)=>({
      contacts: currentState.contacts.filter((c)=>{
        //will filter the id that doesnot equal the id that was passed in
        return c.id !==contact.id
      })
    }))
  }

  render() {
    return (
      <div>
        <ListContacts 
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
