import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  title = 'Filters';
  launchingYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  launchingStatus = ['True', 'False'];
  data: any = [];

  year;
  launchSuccess;
  landSuccess;

  constructor(private _launchData: LaunchService) { }

  ngOnInit() { }

  getFilterData(filter, value) {
    let launchString = '';
    if (filter === 'launchYear') {
      this.year = value
    }
    if (filter === 'launchStatus') {
      this.launchSuccess = value
    }
    if (filter === 'landStatus') {
      this.landSuccess = value
    }

    if (this.year) {
      launchString += `&launch_year=${this.year}`;
    }
    if (this.launchSuccess) {
      launchString += `&launch_success=${this.launchSuccess}`;
    }
    if (this.landSuccess) {
      launchString += `&land_success=${this.landSuccess}`;
    }

    this._launchData.sendData(launchString);
  }
}
