import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	statuses: string[] = ['Stable', 'Critical', 'Finished'];
	forbiddenNamesList: string[] = ['Test'];

	projectForm: FormGroup;

	ngOnInit() {
		this.projectForm = new FormGroup({
			'name': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'status': new FormControl('Critical')
		});
	}

	onSubmit() {
		console.log(this.projectForm);
	}

	// Synchronise one
	synForbiddenNames(control: FormControl) : {[s: string]: boolean} {

		if(this.forbiddenNamesList.indexOf(control.value) !== -1) {
			return {'nameIsForbidden': true};
		}
		return null;

	}

	forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() =>
			{
				if (this.forbiddenNamesList.indexOf(control.value) !== -1) {
					resolve({'nameIsForbidden': true});
				} else {
					resolve(null);
				}
			}, 1500);
		});
		return promise;
	}




}
