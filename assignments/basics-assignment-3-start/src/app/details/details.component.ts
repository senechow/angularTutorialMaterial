import { Component } from '@angular/core';

@Component({
	'selector': 'app-details',
	'templateUrl': './details.component.html',
	'styleUrls': [
		'./details.component.css'
	]
})
export class DetailsComponent {

	displayDetails = true;
	buttonClicksLogItems = [];

	constructor() {

	}

	onDisplayDetailsClick() {
		this.displayDetails = !this.displayDetails;
		this.buttonClicksLogItems.push(new Date());	
	}

}