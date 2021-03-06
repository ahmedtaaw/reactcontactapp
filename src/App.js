import React, { Component } from 'react';

import ListContacts from './ListContacts';

import * as ContactsAPI from './utils/ContactsAPI';

import CreateContact from './CreateContact';

import {Route} from 'react-router-dom';

class App extends Component {
  state={
    contacts:[],
    screen:'list'
  }

  componentDidMount(){
    //call contact api
    //then return a promise when it resolve
    //it passes contacts
    
    ContactsAPI.getAll()
    //since once we have contacts in order to update our state
    .then((contacts)=>{
      //will return an object with brand new contacts
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

    ContactsAPI.remove(contact);
  }
  createContact = (contact)=>{
       ContactsAPI.create(contact).then((contact)=>{
        this.setState((currentState)=>({
          contacts: currentState.contacts.concat([contact])
        }))
       })
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>(
          <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
          onNavigate={()=>{
            this.setState(()=>({
              
                screen:'create'
              
            }))
          }}
          />
        )}/>

        
        
        <Route path='/create' 
          render={({history})=>(
            <CreateContact
              onCreateContact={(contact)=>{
                this.createContact(contact)
                history.push('/')
              }}
            /> 
          )}
        />
      </div>
    ); 
  }
}

export default App;
