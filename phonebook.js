// START
class PhoneBook {
    constructor() {
      this.phonebook = []
    }
  
    createContact(newContact) {
      const exists = this.phonebook.find((contact) => {
        return contact.phoneNumber === newContact.phoneNumber
      })
  
      if (exists) {
        return 'Contact already exists'
      }
  
      this.phonebook.push(newContact)
  
      return newContact
    }
  
    getContact(phoneNumber) {
      return this.phonebook.find((contact) => contact.phoneNumber === phoneNumber)
    }
  
    getContacts() {
      return this.phonebook
    }
  }
  
  // usage
  const phonebook = new PhoneBook()
  
  phonebook.createContact({
    name: 'JHorlamide',
    phoneNumber: '+447548934756',
    email: 'jh@email.com',
    dateCreated: new Date(),
    someOtherProp: 'i shouldn\'t be allowed',
  })
  
  phonebook.createContact({
    name: 'GreggOD',
    phoneNumber: '+447549057579',
    email: 'go@email.com',
    dateCreated: new Date(),
  })
  
  console.log('getting JH', phonebook.getContact('+447548934756'))
  
  console.log('getting GO', phonebook.getContact('+447549057579'))
  
  console.log("getting a contact that doesn't exist" ,phonebook.getContact('+447549057'),)
   
  console.log('getting all contacts', phonebook.getContacts())
  