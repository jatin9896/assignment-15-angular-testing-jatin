import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
import { Router } from '@angular/router'
@Component({
    moduleId: module.id,
 selector: 'showtask',
 templateUrl: './showtask.component.html',
 styleUrls: [''],

})
export class Showtaskcomponent implements OnInit {

 detail: any[]

 detailfield:any;

 constructor(private service: DetailService, private router:Router) {
  this.detail = this.service.detail
 }

 ngOnInit() {
  this.service.getData().subscribe((data:any)=>{
    console.log(JSON.stringify(data));
    
          this.detail=data

       console.log("detail array"+JSON.stringify(data));
         console.log("after for");
         console.log(JSON.stringify(this.detail));
  },
  err=>{
    alert(err);
  });

 }

 delete(index:number) {
  alert("delete Press On index " + index);
   this.service.deleteData(""+index).subscribe((data:any)=>{
     console.log(JSON.stringify(data));
   })
//     location.reload()
 
 }

 edit(index:number) {
 console.log("inside edit"+index);
  this.router.navigate(['edittask',index]);
 }
}