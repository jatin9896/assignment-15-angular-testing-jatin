import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
import {ActivatedRoute, Router} from "@angular/router";
@Component({
   moduleId: module.id,
 selector: 'edittask',
 templateUrl: './edittask.component.html',
 styleUrls: ['']
})
export class Edittaskcomponent implements OnInit {
 detail: any[];
 index:string;
 detailfield:any;
 temp=new Detail();
 constructor(private service: DetailService, private route: ActivatedRoute, private router:Router) {
 // this.detail = this.service.detail
 this.detailfield={
   id:'',
    date:'',
    title:'',
    description:'',
    priority:''
 }
 }

 ngOnInit() {
     this.service.getData().subscribe((data:any)=>{
            this.detail=data
            
       console.log("detail array"+JSON.stringify(data));
         console.log("detail filled"+JSON.stringify(this.detail));
          this.route.params.subscribe((data: any) => {     
      this.index=data.id;
   console.log("recieved data id : "+data.id+"index : "+this.index);
  
   console.log("data receive is : "+this.detail)
  this.detailfield=this.detail.filter(x=> this.index==x._id)[0]
  console.log("filed to be edited "+JSON.stringify(this.detailfield));
 });
    });
   
 }

 edit(date: string, title: string, desc: string, priority: number, event: Event) {
  event.preventDefault();
  console.log("edit call")
  this.temp.id=this.index
  this.temp.date=this.detailfield.date
  this.temp.title=this.detailfield.title
  this.temp.description=this.detailfield.description
  this.temp.priority=this.detailfield.priority
  console.log("before edit call data"+this.temp)
  
  this.service.editData(this.index,this.temp).subscribe((data:any)=>{
   console.log(JSON.stringify(data));
   alert("updated data");
  this.router.navigate(['showtask']);
 },
  err=>{
    alert(err);
  });
 }
}
