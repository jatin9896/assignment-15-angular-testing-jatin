import {Edittaskcomponent} from "./edittask.component";
import {RouterOutletMap, Router, NavigationExtras,ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {DetailService} from "../detail.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
describe('EditComponent', function () {
  let de: DebugElement;
  let comp: Edittaskcomponent;
  let fixture: ComponentFixture<Edittaskcomponent>;
  let service: DetailService;
  let router: Router;

  class MockRouter {
   navigate():Promise<boolean>{
     return Promise.resolve(true)
   }
  }
class MockActivatedRoute{
  
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Edittaskcomponent],
      providers: [{provide: Router, useClass: MockRouter},{provide : ActivatedRoute, useClass: MockActivatedRoute}, RouterOutletMap, DetailService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edittaskcomponent);
    comp = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(DetailService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create edit task component', () => expect(comp).toBeDefined());

  it('it should edit data to service',() =>{
    spyOn(window, "alert");
    spyOn(service,'editData').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: '',
          _id: ''
        }]
      )
    );
    comp.edit("","","",9,event);
    expect(window.alert).toHaveBeenCalledWith('updated data');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
});
