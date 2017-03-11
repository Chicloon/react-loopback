import { observable, action } from 'mobx';

class Contacts {
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await fetch ('http://localhost:3000/api/Contacts');
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
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(newContact)
    };

    const request = new Request ('http://localhost:3000/api/Contacts', options);
    const response = await fetch (request);
    const status = await response.status;

    if (status === 200) {
      console.log('POST success');
    }


  }
  
  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== contactId
    );    
  }
}
export default new Contacts();