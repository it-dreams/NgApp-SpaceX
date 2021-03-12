import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  launchDetails: any = [];

  constructor(private _launchData: LaunchService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._launchData.fetchLaunchData()
      .subscribe(
        data => { this.launchDetails = data },
        err => console.error(err),
        () => console.log('done loading Data')
      );
  }

}
