import {Component} from 'angular2/core';

@Component(
  {
    selector:'my-job',
    templateUrl:"views/job.component.html",
    inputs:['title','place']
  }
)

export class AppJobs{

}
