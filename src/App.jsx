import React, { useState, useEffect, useRef } from 'react'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const mounted = useRef(false)
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  useEffect(() => {
    const contacts = localStorage.getItem('contacts')

    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      setContacts(parsedContacts)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      case 'filter':
        setFilter(value)
        break

      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomId = uuidv4()
    const checkName = contacts.map((contact) => contact.name).includes(name)
    const checkNumber = contacts
      .map((contact) => contact.number)
      .includes(number)

    if (checkName) {
      alert(`${name} is already in contacts`)
    } else if (checkNumber) {
      alert(`Number ${number} is already in contacts`)
    } else {
      setContacts([...contacts, { id: randomId, name: name, number: number }])
    }

    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setNumber('')
  }

  const removeContact = (contactId) => {
    setContacts((prevState) => prevState.filter(({ id }) => id !== contactId))
  }

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  return (
    <div>
      <Phonebook
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={name}
        number={number}
      ></Phonebook>
      <Filter filter={filter} onChange={handleChange}></Filter>
      <Contacts
        contactsData={visibleContacts()}
        onDeleteContact={removeContact}
      ></Contacts>
    </div>
  )
}

export default App
