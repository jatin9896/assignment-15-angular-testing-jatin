import  {RouterModule, Route} from '@angular/router';
import {Createtaskcomponent} from './createtask/createtask.component';
import {Showtaskcomponent} from './showtask/showtask.component';
import {AppComponent} from './app.component';
import {Edittaskcomponent} from './edittask/edittask.component'
export const routes =[{
    path: 'createtask',
    component: Createtaskcomponent
},{
    path: 'showtask',
    component: Showtaskcomponent
},{
    path:'createtask/:id',
    component: Createtaskcomponent
},{
     path:'edittask/:id',
    component: Edittaskcomponent
}]