export class CounterService {

	numActiveToInactive : number = 0;
	numInactiveToActive : number = 0;

	onActiveToInactive() {
		this.numActiveToInactive++;
		console.log('Active to inactive: ' + this.numActiveToInactive);
	}

	onInactiveToActive() {
		this.numInactiveToActive++;
		console.log('Inactive to active: ' + this.numInactiveToActive);
	}
}