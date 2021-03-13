import { Component, OnInit, Output } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  title = 'Filters';
  launchingYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

  launchingStatus = ['True', 'False'];

  data: any = [];

  // @Output() public filterEvent = new EventEmitter();

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

  // getYearWiseData(year) {
  //   console.log('Year wise data ' + year)
  //   this.data = this._launchData.fetchYearWiseData(year).subscribe(
  //     data => { this.data = data }
  //   )
  // }

  // getLaunchingData(status) {
  //   // console.log('Year Launching data ' + status)
  //   this.filterEvent.emit(status);
  // }

  // getLandingData(status) {
  //   console.log('Year Landing Data ' + status)
  // }


  getFilterData(filter, value) {
    const filterVal = {} as FilterLaunchData;
    filterVal.filter = filter;
    filterVal.value = value;
    this._launchData.sendData(filterVal);
  }

  // getLaunchingData(status) {
  //   this._launchData.sendData(status);
  // }

  // getLandingData(status) {
  //   this._launchData.sendData(status);
  // }

}

export interface FilterLaunchData {
  filter: string,
  value: string
}
