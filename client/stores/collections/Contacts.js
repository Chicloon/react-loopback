import { observable, action } from 'mobx';

import Api from 'helpers/api';

class Contacts {
  path = 'Contacts/';
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await Api.get(this.path);
    const status = await response.status;
   
    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(c => c.id === parseInt(contactId, 10))[0]
    );
  }

  @action async add (newContact) {
    console.log(newContact);
    
    const response = await Api.post(this.path, newContact);
    const status = await response.status;

    if (status === 200) {
      // this.fetchAll();
      this.all.push(newContact);
      console.log('POST success');
    }
  }
  
  @action async remove(contactId) {
    // const existing = this.all;
    // this.all = existing.filter(
    //   c => c.id !== contactId
    // );    

    const response = await Api.delete(this.path, contactId);
    const status = await response.status;

    if (status === 200) {
      const existing = this.all;
      this.all = existing.filter(
        c => c.id !== contactId
      );   
      console.log('DELETE successful');
    }

  }
}
export default new Contacts();