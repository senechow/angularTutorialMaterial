import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('f') form : NgForm;
	user = {
		email: '',
		subscription: '',
		password: ''
	};
	defaultSubscription = 'Advanced';
	submitted = false;

	onSubmit() {
		this.submitted = true;
		this.user.email = this.form.value.email;
		this.user.subscription = this.form.value.subscription;
		this.user.password = this.form.value.password;
		console.log(this.user);

		this.form.reset();

	}

}
