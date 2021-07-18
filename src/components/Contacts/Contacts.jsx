import React from 'react'
import { Wrapper, List, Item, DeleteButton, Header } from './Contacts.styles'
import PropTypes from 'prop-types'

function Contacts({ contactsData, onDeleteContact }) {
  return (
    <Wrapper>
      <Header>Contacts</Header>
      <List>
        {contactsData.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
              Delete contact
            </DeleteButton>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

Contacts.propTypes = {
  id: PropTypes.node,
  name: PropTypes.string,
  number: PropTypes.number,
}

export default Contacts
