import { Component } from '@angular/core';
import { LaunchService } from './services/launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgApp-SpaceX';
  data: any = [];

  constructor(private _launchData: LaunchService) {
    // this.data = this._launchData.fetchLaunchData();
    // console.log(this.data)
  }

  ngOnInit() {
    // this.getData();
  }

  // getData() {
  //   this._launchData.fetchLaunchData()
  //     .subscribe(
  //       data => { console.log(data) },
  //       err => console.error(err),
  //       () => console.log('done loading Data')
  //     );
  // }
}
