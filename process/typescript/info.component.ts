import {Component} from 'angular2/core';
import {AppJobs} from './job.component'
import {UserJobs} from './jobs'

@Component(
  {
    selector: 'my-info',
    templateUrl:"views/info.component.html",
    directives:[AppJobs],
    styleUrls:['css/info.css']
  }
)

export class AppInfo{
  name:string;
  age:string;
  jobs:UserJobs;
  chAge(){
    this.age='working';
  }
  btnAdd(item:string){
    this.jobs.push(item);
  }
  constructor(){
    this.name="wiame kazdari";
    this.age ="23";
    this.jobs=[new UserJobs("developer","New York"),
    new UserJobs("tester","London")];
  }
}
