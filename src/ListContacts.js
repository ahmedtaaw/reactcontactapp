import React, { Component } from 'react';
import propTypes from 'prop-types'

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

    render() {
        const {query} = this.state
        const {contacts, onDeleteContact} = this.props

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
                    </div>
                    <ol className="contact-list">
                        {
                            contacts.map((contact) => (
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