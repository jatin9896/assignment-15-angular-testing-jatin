import {Injectable} from '@angular/core';
import {Detail} from './detail';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/of';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import {Http, Headers}from '@angular/http';
@Injectable()
export class DetailService {
  detail: Detail[];

  constructor(private http:Http){

  }
  addTask(detail:Detail):Observable<any>{
 // return Observable.of<any>(this.detail)
 // return Promise.reject<any>(new Error('my error'));
 //return Observable.throw(new Error("my error"))
 let jsonHeader=new Headers({
   'Content-type':'application/json'
 });
 let obj={
   date:detail.date,
   title:detail.title,
   description:detail.description,
   priority:detail.priority,
   id:""
 };
 return this.http.post("http://localhost:9000/add",obj,{headers:jsonHeader}).map((response:any)=>{
   return this.extractData(response);
 }) .catch(e => this.handleError(e));
}
extractData(res:any){
 let body=res.json();
 return body;
}
private handleError(error:any){
  let errMsg:string;
  try{
    if(JSON.parse(error._body).message){
      errMsg=JSON.parse(error._body).message;
    }
    else{
      errMsg="something went wrong Please try again";
    }
  }
  catch(e){
    errMsg="something went wrong Please try again";
  }
  return Observable.throw(new Error(errMsg));
}

getData():Observable<any>{
  let jsonHeader=new Headers({
   'Content-type':'application/json'
 });
 
 return this.http.get("http://localhost:9000/get/all",{headers:jsonHeader}).map((response:any)=>{
   return this.extractData(response);
 }) .catch(e => this.handleError(e));

}
deleteData(id:string):Observable<any>{
  let jsonHeader=new Headers({
   'Content-type':'application/json'
 });
 console.log("before delete"+id);
 return this.http.get("http://localhost:9000/remove/"+id,{headers:jsonHeader}).map((response:any)=>{
   return this.extractData(response);
   
 }) .catch(e => this.handleError(e));

}
editData(id:string,detail:Detail):Observable<any>{
  let jsonHeader=new Headers({
   'Content-type':'application/json'
 });
 let obj={
            _id:id,
            date:detail.date,
            title:detail.title,
            description:detail.description,
            priority:detail.priority
        }
 console.log("before edit id :"+id);
 console.log("obj data : "+obj);


 return this.http.post("http://localhost:9000/update",obj,{headers:jsonHeader}).map((response:any)=>{
   return this.extractData(response);
   
 }) .catch(e => this.handleError(e));

}
}
