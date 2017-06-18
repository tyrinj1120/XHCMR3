import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor() {   }

    public ngOnInit() {
        console.log('Dashboard: ngOnInit is called');
    }
}
