import React, { Component } from 'react';

class ListContacts extends Component{
    render(){
        console.log(this.props);
        return(
            <ol className="contact-list">
                {
                    this.props.contacts.map((contact)=>(
                        <li key={contact.name}>
                            {contact.name}
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default ListContacts;