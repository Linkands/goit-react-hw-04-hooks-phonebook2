import React from 'react'
import { Header, Wrapper } from './Filter.styles'
import PropTypes from 'prop-types'

function Filter({ filter, onChange }) {
  return (
    <Wrapper>
      <Header>Find contacts by name</Header>
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
      />
    </Wrapper>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter
