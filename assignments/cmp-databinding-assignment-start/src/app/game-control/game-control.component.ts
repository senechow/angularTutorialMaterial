import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	currInterval = 0;

	@Output() gameStarted = new EventEmitter<number>();

	intervalRef;

  	constructor() { }

	ngOnInit() {

	}

	onGameStart() {
		this.intervalRef = setInterval(() => {
			this.currInterval++;
			this.gameStarted.emit(this.currInterval);
		}, 1000);
	}

	onGameStop() {
		clearInterval(this.intervalRef);
	}

}
