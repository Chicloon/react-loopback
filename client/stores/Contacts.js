import { observable } from 'mobx';

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
}

export default data;