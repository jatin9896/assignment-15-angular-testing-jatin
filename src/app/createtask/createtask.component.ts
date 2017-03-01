import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
import {ActivatedRoute, Router} from "@angular/router";
@Component({
   moduleId: module.id,
 selector: 'createtask',
 templateUrl: './createtask.component.html',
 styleUrls: ['']
})
export class Createtaskcomponent implements OnInit {
 detail: Detail[];
 index:number;
 detailfield=new Detail();
 constructor(private service: DetailService, private route: ActivatedRoute, private router:Router) {
 // this.detail = this.service.detail
 }

 ngOnInit() {
 
  // this.route.params.subscribe((data: any) => {
  //  console.log("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
  //  this.index = +data.id;
  //  this.detailfield=this.service.detail[this.index];
  // alert("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
//  });
 }

 submit(date: string, title: string, desc: string, priority: string) {
 // event.preventDefault();
  this.detailfield.date=date;
  this.detailfield.title=title;
  this.detailfield.description=desc;
  this.detailfield.priority=priority;
  this.service.addTask(this.detailfield).subscribe((data:any)=>{
    
  },
  err=>{
    alert(err);
  },
  ()=>{
      alert("Insert completed");
  });
this.router.navigate(['showtask']); 
}
}
