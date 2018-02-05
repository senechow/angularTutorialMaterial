import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	intervals: number [] = [];

	onIntervalUpdate(interval: number) {
		this.intervals.push(interval);
	}

}
