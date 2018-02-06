import { async, ComponentFixture, TestBed, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Needed after components are updated
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the usser name from the service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);

  });

  it('should display the user name if user is logged in', () => {
     component.isLoggedIn = true;
     fixture.detectChanges();
     let compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

    it('shouldn\'t display the user name if user is not logged in', () => {
     fixture.detectChanges();
     let compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

    it('should fetch data successfully if not called asynchronously', async(() => {
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, 'getDetails')
        .and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.data).toBe('Data');
      }); //react to async functions
      
    }));

     it('should fetch data successfully if not called fake asynchronously', fakeAsync(() => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, 'getDetails')
        .and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      tick(); //Finish all async tasks immediately
      expect(app.data).toBe('Data');
      
    }));

});
