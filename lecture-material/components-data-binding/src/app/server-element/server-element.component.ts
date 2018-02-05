import { 
	Component, 
	OnInit, 
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit, 
	AfterViewChecked,
	OnDestroy,
	Input, 
	ViewEncapsulation, 
	SimpleChanges,
	ViewChild,
	ContentChild,
	ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
	OnInit, 
	OnChanges, 
	DoCheck, 
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

	@Input('srvElement') element: {type: string, name: string, conent: string};
	@Input() name;
	@ViewChild('heading') header: ElementRef
	@ContentChild('contentParagraph')paragraph : ElementRef;

	constructor() { }

	ngOnInit() {
		console.log(this.header.nativeElement.textContent); // Will print empty value
	}

	ngOnChanges(changes : SimpleChanges) {
		console.log(changes);
	}

	ngDoCheck() {

	}

	ngAfterContentInit() {

	}

	ngAfterContentChecked() {

	}

	ngAfterViewInit() {
		console.log(this.header.nativeElement.textContent); // Will finally print something
	}

	ngAfterViewChecked() {

	}

	ngOnDestroy() {

	}

}
