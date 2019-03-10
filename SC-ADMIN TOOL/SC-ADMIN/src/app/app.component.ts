import { Component, OnInit } from '@angular/core';
import { Column, GridOption, AngularGridInstance, GridService } from 'angular-slickgrid';


@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SC-ADMIN';
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];
  angularGrid: AngularGridInstance;
  gridService: GridService;
  dataView: any;
  grid: any;


  angularGridReady(angularGrid: AngularGridInstance) {
    this .angularGrid = angularGrid;
    this .dataView = angularGrid.dataView;
    this .grid = angularGrid.slickGrid;
    this .gridService = angularGrid.gridService;

  }
  ngOnInit(): void {
    this
    .columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', sortable: true },
      { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
      { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
      { id: 'start', name: 'Start', field: 'start' },
      { id: 'finish', name: 'Finish', field: 'finish' },
      { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true }
    ];
    this
    .gridOptions = {
      enableAutoResize: false,       // true by default
      enableCellNavigation: true
    };

    // fill the dataset with your data
    this
    .dataset = [];

    // for demo purpose, let's mock a 1000 lines of data
    for (let i = 0; i < 1000; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 28));
      const randomPercent = Math.round(Math.random() * 100);

      this
      .dataset[i] = {
        id: i, // again VERY IMPORTANT to fill the "id" with unique values
        title: 'Task ' + i,
        duration: Math.round(Math.random() * 100) + '',
        percentComplete: randomPercent,
        start: `${randomMonth}/${randomDay}/${randomYear}`,
        finish: `${randomMonth}/${randomDay}/${randomYear}`,
        effortDriven: (i % 5 === 0)
      };
    }
  }
}
