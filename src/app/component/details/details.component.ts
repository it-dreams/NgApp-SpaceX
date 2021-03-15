import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  launchDetails: any = [];
  year;
  launchSuccess;
  landSuccess;
  isLoading = false;
  constructor(private _launchData: LaunchService) { }

  ngOnInit() {
    this.getData();
    this.getFilterData();
  }

  getData(queryString?: string) {
    this.isLoading = true;
    this._launchData.fetchLaunchData(queryString)
      .subscribe(
        data => {
          this.isLoading = false;
          this.launchDetails = data
        },
        err => {
          console.error(err)
          this.isLoading = false;
        },
        () => console.log('Loading Data ...')
      );
  }

  getFilterData() {
    this.isLoading = true;
    this._launchData.launchRocketData$
      .subscribe(
        (launchString: string) => {
          this.getData(launchString);
        }
      )
  }

}
