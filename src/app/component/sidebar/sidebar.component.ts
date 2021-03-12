import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  title = 'Filters';
  launchingYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

  launchingStatus = ['Ture', 'False'];

  constructor(private _launchData: LaunchService) { }

  ngOnInit() {
    // this.getData();
  }

  // getData() {
  //   this._launchData.fetchLaunchData()
  //     .subscribe(
  //       data => { this.launchingYears = data },
  //       err => console.error(err),
  //       () => console.log('done loading Data')
  //     );
  // }

  getYearWiseData(year) {
    console.log('Year wise data ' + year)
  }

  getLaunchingData(status) {
    console.log('Year Launching data ' + status)
  }

  getLandingData(status) {
    console.log('Year Landing Data ' + status)
  }
}
