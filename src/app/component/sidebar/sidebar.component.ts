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

  constructor(private _launchData: LaunchService) { }

  ngOnInit() { }

  getFilterData(filter, value) {
    const filterVal = {} as FilterLaunchData;
    filterVal.filter = filter;
    filterVal.value = value;
    this._launchData.sendData(filterVal);
  }
}

export interface FilterLaunchData {
  filter: string,
  value: string
}
