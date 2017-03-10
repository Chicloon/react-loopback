import React, { Component } from 'react';

import Contact from './Contact';
import data from './data';

import './Collection.css';


class Collection extends Component {
	componentWillMount() {
		this.setState({
			contacts: data,
		});
	}

	addContact = (e) => {
		e.preventDefault();

		const contacts = this.state.contacts;
		const newId =  contacts[contacts.length - 1].id + 1;
		this.setState ({
			contacts: contacts.concat ({id: newId, 
																	name: this.refs.name.value, 
																	email: this.refs.email.value})
		});

		this.refs.name.value = null;
		this.refs.email.value = null;
	}

	newContact = () => {
		return (
			<div className="pure-g">
				<div className="pure-u-12-24">
					<form className="pure-form" onSubmit={this.addContact}>
							<fieldset>
									<legend>New contact</legend>
									<input ref='name' type="text" placeholder="Email" />
									<input ref='email' type="text" placeholder="Name" />
									<button type="submit" className="pure-button pure-button-primary">Add</button>
							</fieldset>
					</form>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div id='Collection'>
				{this.newContact()}					
				<div className='pure-g'>
					{this.state.contacts.map(info => 
						<Contact key={info.id} {... info} />
					)}				
				</div>
			</div>
		);
	}
}

export default Collection;