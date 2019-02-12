import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  modelAngular: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(params => {
      const paramsJs = params['paramsJs'];
     this.modelAngular=paramsJs;
      console.log(params);
      console.log(this.modelAngular,'modelAngular');
    });
  }

}
