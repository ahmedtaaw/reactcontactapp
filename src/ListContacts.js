import React, { Component } from 'react';
import propTypes from 'prop-types';


class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired,
    }

    state = {
        query: ''
    }

    //updateQuery method which will take query
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = ()=>{
        this.updateQuery('')
    }

    render() {
        const {query} = this.state
        const {contacts, onDeleteContact} = this.props

        //if query still an empty string
        const showingContacts = query === ''
        //then we want to show our contacts to be original contacts
        ? contacts
        //if not
        : contacts.filter((c)=>
            c.name.toLowerCase().includes(query.toLowerCase())
        )

        return (
            <div className="list-contacts">
                {
                    //in order to see state while typing like console.log
                    JSON.stringify(query)}
                    <div className='list-contacts-top'>
                        <input
                            className='search-contacts'
                            type='text'
                            placeholder='Search Contacts'
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                        <a 
                        href="#create"
                        onClick={()=>({})}
                        className='add-contact'
                        >Add Contact</a>
                    </div>

                    
                    {//&& gurd up operator
                        showingContacts.length !== contacts.length &&(
                        <div className='showing-contacts'>
                            <span>Now showing {showingContacts.length} of {contacts.length}</span>
                            <button onClick={this.clearQuery}>show all</button>
                        </div>
                    )}

                    <ol className="contact-list">
                        {
                            showingContacts.map((contact) => (
                                <li key={contact.name} className='contact-list-item'>
                                    <div
                                        className='contact-avatar'
                                        style={{
                                            backgroundImage: `url(${contact.avatarURL})`
                                        }}
                                    ></div>
                                    <div className="contact-details">
                                        <p>{contact.name}</p>
                                        <p>@{contact.handle}</p>
                                    </div>
                                    <button
                                        onClick={() => onDeleteContact(contact)}
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