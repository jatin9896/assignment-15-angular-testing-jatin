import {Createtaskcomponent} from "./createtask.component";
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
describe('Createcomponent', function () {
  let de: DebugElement;
  let comp: Createtaskcomponent;
  let fixture: ComponentFixture<Createtaskcomponent>;
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
      declarations: [Createtaskcomponent],
      providers: [{provide: Router, useClass: MockRouter},{provide : ActivatedRoute, useClass: MockActivatedRoute}, DetailService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createtaskcomponent);
    comp = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(DetailService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('it should create component', () => expect(comp).toBeDefined());
 



  it('it should insert new data to service',() =>{
    spyOn(window, "alert");

    spyOn(service,'addTask').and.returnValue(
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
    comp.submit("","","","");
    expect(window.alert).toHaveBeenCalledWith('Insert completed');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
});
