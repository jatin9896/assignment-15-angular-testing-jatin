import {Showtaskcomponent} from "./showtask.component";
import {RouterOutletMap, Router, NavigationExtras} from "@angular/router";
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
describe('ShowComponent', function () {
  let de: DebugElement;
  let comp: Showtaskcomponent;
  let fixture: ComponentFixture<Showtaskcomponent>;
  let service: DetailService;
  let router: Router;

  class MockRouter {
   navigate():Promise<boolean>{
     return Promise.resolve(true)
   }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Showtaskcomponent],
      providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, DetailService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showtaskcomponent);
    comp = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(DetailService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create show component', () => expect(comp).toBeDefined());


  it('it should get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: 'd1',
          priority: '',
          _id: ''
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.detail).toEqual([{
      date: '',
      title: '',
      description: 'd1',
      priority: '',
      _id: ''
    }])
  });

  it('it should delete data from service',() =>{
    spyOn(window, "alert");
    spyOn(service,'deleteData').and.returnValue(
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
    comp.delete(0);
    expect(window.alert).toHaveBeenCalledWith('delete Press On index 0');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
});
