import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html'
})
export class UserNameComponent implements OnInit {

	userName = '';

  	constructor() { }

	ngOnInit() {
	}

	disableClearButton() {
		return this.userName.length === 0;
	}

	clearUserName() {
		this.userName = '';
	}

}
