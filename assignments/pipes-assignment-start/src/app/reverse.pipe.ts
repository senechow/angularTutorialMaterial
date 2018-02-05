import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {

	transform(value: any) {
		let reversedStr = '';

		// A one line solution:
		// reversedStr = value.split('').reverse().join('');

		// Classic solution
		for(let i = value.length - 1; i >= 0; i--) {
			reversedStr += value[i];
		}

		return reversedStr;
	}
}