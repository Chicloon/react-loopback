import React from 'react';

import { observer } from 'mobx-react';

@observer (['contacts'])
class Show extends React.Component {
  componentWillMount() {
    const contact = this.props.contacts.find(this.props.params.contactId);
    // передаем параменты айдишникика из роутера, как указанао в routes.js ':contactId'
    // получаем его чезе this.props.params, которые забивает react-router    
    this.setState ({
      contact   
    });
   
  }

  render() {     
    return (
      <div id='Show'>     
        {this.state.contact.name}
      </div>
    );
  }
}

export default Show;