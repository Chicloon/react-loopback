import React from 'react';

import data from './data';

class Show extends React.Component {
  componentWillMount() {
    // передаем параменты айдишникика из роутера, как указанао в routes.js ':contactId'
    // получаем его чезе this.props.params, которые забивает react-router
    this.setState ({
      contact: data.filter(c => c.id === parseInt(this.props.params.contactId))[0],      
      test: data
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