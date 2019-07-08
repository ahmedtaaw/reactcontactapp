import React, { Component} from 'react';
import propTypes from 'prop-types'

class ListContacts extends Component{ 
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired,
    }
    
    render(){
        return(
<div className="list-contacts">
           <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
           
          />
        </div>
            <ol className="contact-list">
                {
                    props.contacts.map((contact)=>(
                        <li key={contact.name} className='contact-list-item'>
                            <div
                            className='contact-avatar'
                            style={{
                                backgroundImage:`url(${contact.avatarURL})`
                            }}
                            ></div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                            onClick={() => props.onDeleteContact(contact)}
                            className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))
                }
            </ol>
       
            </div>
        )
    }
}



export default ListContacts;