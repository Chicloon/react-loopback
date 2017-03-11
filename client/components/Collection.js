import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Contact from './Contact';
// import data from './data';

import styles from './Collection.sass';

@observer(['contacts'])
class Collection extends Component {
	componentWillMount() {		
		this.props.contacts.fetchAll();
	}

	addContact = (e) => {
		e.preventDefault();

		this.props.contacts.add({		
			first_name: this.refs.first_name.value, 
			last_name: this.refs.last_name.value, 
			email: this.refs.email.value
		});

		this.refs.first_name.value = null;
		this.refs.last_name.value = null;
		this.refs.email.value = null;
	}

	newContact = () => {
		return (
			<div className="pure-g">
				<div className="pure-u-12-24">
					<form className="pure-form" onSubmit={this.addContact}>
							<fieldset>
									<legend>New contact</legend>

									<input ref='email' type="text" placeholder="Email" />
									<input ref='first_name' type="text" placeholder="First name" />
									<input ref='last_name' type="text" placeholder="Last name" />

									<button type="submit" className="pure-button pure-button-primary">Add</button>
							</fieldset>
					</form>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div id='Collection' className={styles.main}>			
				{this.newContact()}					
				<div className='pure-g'>				
					{this.props.contacts.all.slice().map(info => 
						<Contact key={info.id} {... info} />
					)}				
				</div>
			</div>
		);
	}
}

export default Collection;