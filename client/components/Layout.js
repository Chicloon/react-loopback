import React, { Component } from 'react';

import Contact from './Contact';
import data from './data';

class Layout extends Component {
	componentWillMount() {
		this.setState({
			contacts: data,
		});
	}


//  add  = function () {
// 	console.log(test);
// }

// sdf = e => {
// 	conso
// }

	addContact = (e) => {
		e.preventDefault();

		const contacts = this.state.contacts;
		const newId =  contacts[contacts.length - 1].id + 1;
		this.setState ({
			contacts: contacts.concat ({id: newId, 
																	name: `New contact ${newId}`, 
																	email: `newEmail ${newId}@mail.com`})
		});

		console.log('clicked');
	};

	render() {
		return (
			<div id='Layout'>
				<a href="#" className="pure-button" onClick={this.addContact}>Add Contact</a>
				{/*<a href="#" className="pure-button" onClick={this.add}>Add Contact</a>*/}
				<div className='pure-g'>
					{this.state.contacts.map(info => 
						<Contact key={info.id} {... info} />
					)}				
				</div>
			</div>
		);
	}
}

export default Layout;