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
  public loading = false;

  constructor(private _launchData: LaunchService) { }

  ngOnInit() {
    this.getData();
    this.getFilterData();
  }

  getData(queryString?: string) {
    this.loading = true;
    this._launchData.fetchLaunchData(queryString)
      .subscribe(
        data => {
          this.launchDetails = data
          this.loading = false;
        },
        err => console.error(err),
        () => console.log('done loading Data')
      );
  }

  getFilterData() {
    this._launchData.launchRocketData$
      .subscribe(
        (launchString: string) => {
          this.getData(launchString);
        }
      )
  }

}
