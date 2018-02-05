import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  	const myNumbers = Observable.interval(1000)
  		.map(
  			(data: number) => {
  				return data * 2;
  			}
  		);
  	this.numbersObsSubscription = myNumbers.subscribe(
  		(number: number) => {
  			console.log(number);
  		}
  	);

  	// Observer param is not the subscribe function
  	// It is what will happen when it subscribes to the observable
  	// The observable tells when it will receive data
  	const myObservable = Observable.create((observer: Observer<string>) => {
  		setTimeout(() => {
  			observer.next('first package'); // Pushes the next data package
  		}, 2000);
  		setTimeout(() => {
  			observer.next('second package'); // Pushes the next data package
  		}, 4000);
  		setTimeout(() => {
  			observer.error('this does not work'); // Pushes an error message
  		}, 5000);
  		setTimeout(() => {
  			observer.complete(); // Completed
  		}, 6000);
  	});

  	this.customObsSubscription = myObservable.subscribe(
  		(data: string) => { console.log(data) },
  		(error: string) => { console.log(error) },
  		() => { console.log('completed') }
  	);
  }

  ngOnDestroy() {
  	this.numbersObsSubscription.unsubscribe();
  	this.customObsSubscription.unsubscribe();
  }

}
