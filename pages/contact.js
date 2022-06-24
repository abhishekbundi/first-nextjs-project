import React from 'react'
export default function contact()
{
	return(
		<><div className="page">
			<div className="page_header center-align">
				<div className="heading"><h1>Contact Us</h1></div>
			</div>
			<div className="row">
				<div className="col s12 m6">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113825.44974614264!2d75.6573486328125!3d26.93377818984317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ee9905a2c9%3A0xef21f8c0acacd3f3!2sJaipurtravels.co.in!5e0!3m2!1sen!2sin!4v1654949188106!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				</div>
				<div className="col s12 m6">
					<form className="col s12">
					<div className="row">
					<div className="input-field col s12">
					<i className="material-icons prefix">account_circle</i>
					<input id="icon_prefix" type="text" className="validate"/>
					<label for="icon_prefix">Full Name</label>
					</div>
					<div className="input-field col s12">
					<i className="material-icons prefix">phone</i>
					<input id="icon_telephone" type="tel" className="validate"/>
					<label for="icon_telephone">Contact Number</label>
					</div>
					<div className="input-field col s12">
					<i className="material-icons prefix">email</i>
					<input id="icon_telephone" type="email" className="validate"/>
					<label for="icon_telephone">Email</label>
					</div>
					<div className="input-field col s12">
					<i className="material-icons prefix">message</i>
					<textarea id="textarea1" class="materialize-textarea"></textarea>
					<label for="textarea1">Message</label>
					</div>
					<div className="input-field col s12">
					<i className="material-icons left"></i>
					<a className="waves-effect waves-light btn send_btn">Send</a>
					</div>

					</div>
					</form>
				</div>
			</div>
		</div></>
		);
	}
