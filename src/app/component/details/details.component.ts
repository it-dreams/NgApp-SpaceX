import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';
import { FilterLaunchData } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  launchDetails: any = [];
  year;
  launchSuccess;
  landSuccess;

  constructor(private _launchData: LaunchService) { }

  ngOnInit() {
    this.getData();
    this.getFilterData();
  }

  getData(queryString?: string) {
    this._launchData.fetchLaunchData(queryString)
      .subscribe(
        data => { this.launchDetails = data },
        err => console.error(err),
        () => console.log('done loading Data')
      );
  }

  getFilterData() {
    this._launchData.launchRocketData$
      .subscribe(
        (item: FilterLaunchData) => {
          let launchString = '';
          if (item.filter === 'launchYear') {
            this.year = item.value
          }
          if (item.filter === 'launchStatus') {
            this.launchSuccess = item.value
          }
          if (item.filter === 'landStatus') {
            this.landSuccess = item.value
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
          
          this.getData(launchString);
        }
      )
  }

}
