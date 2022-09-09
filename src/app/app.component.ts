import { Component } from '@angular/core';

export interface PeriodElement{
  Name : any;
  Email : any;
  Location : any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  values : any;
  searchString : any; 
  sortedcolumn : any;
  icon = "&#8645;";
  searchVal : any;
  ngOnInit(){
    this.values=[
      {
        Name : "Value 1",
        Email : "Value 2",
        Location : "Value 3"
      },
      {
        Name : "Value 4",
        Email : "Value 5",
        Location : "Value 6"
      },
      {
        Name : "Value 7",
        Email : "Value 8",
        Location : "Value 9"
      },
      {
        Name : "Value 10",
        Email : "Value 11",
        Location : "Value 12"
      },
      {
        Name : "Value 13",
        Email : "Value 14",
        Location : "Value 15"
      },
      {
        Name : "Value 16",
        Email : "Value 17",
        Location : "Value 18"
      },
      {
        Name : "Value 19",
        Email : "Value 20",
        Location : "Value 21"
      },
      {
        Name : "Value 22",
        Email : "Value 23",
        Location : "Value 24"
      },
      {
        Name : "Value 25",
        Email : "Value 26",
        Location : "Value 27"
      },
      {
        Name : "Value 28",
        Email : "Value 29",
        Location : "Value 30"
      },
    ];
  }
  displayedColumns: any[] = ['Name', 'Email', 'Location'];
  booleanValue : any=false;

  onsort(colName : any, boolean : any){
    if(boolean == true){
      this.values.sort((a : any, b: any) => a[colName] < b[colName] ? 1 :
      a[colName] > b[colName] ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
    else{
      this.values.sort((a : any, b: any) => a[colName] > b[colName] ? 1 :
      a[colName] < b[colName] ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

  // Pagination parameters.
  page: number = 1;
  count: number = 4;
  value : any[]=[];
}
