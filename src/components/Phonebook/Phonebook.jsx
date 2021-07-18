import React from 'react'
import { Header, SubmitButton, InputName, Wrapper } from './Phonebook.styles'
import PropTypes from 'prop-types'

function Phonebook({ onSubmit, onChange, name, number }) {
  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <form onSubmit={onSubmit}>
        <InputName>Name</InputName>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
          value={name}
        />
        <InputName>Number</InputName>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChange}
          value={number}
        />
        <br />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </form>
    </Wrapper>
  )
}

Phonebook.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  number: PropTypes.node,
}

export default Phonebook
