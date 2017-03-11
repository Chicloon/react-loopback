import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    {
      id: 1,
      name: 'Efim',
      email: 'Chicloon@mail.ru'
    },
    {
      id:2,
      name: 'Jack',
      email: 'jack@mail.ru'
    },
    {
      id:3,
      name: 'Bob',
      email: 'bob@mail.ru'
    }
  ];

  @action find(contactId) {
    return (
      this.all.slice().filter(c => c.id === parseInt(contactId, 10))[0]
    );
  }

  @action add (newContact) {
    this.all.push (newContact);
  }
  
  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== contactId
    );    
  }
}
export default new Contacts();