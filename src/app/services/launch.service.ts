import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LaunchService {

    basUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    yearWiseData = '&launch_success={{launchingStatus}}&land_success={{landingStatus}}&launch_year={{year}}';

    launchData: string[] = [];

    private _rocketLaunchData = new Subject<string>();
    launchRocketData$ = this._rocketLaunchData.asObservable();

    constructor(private http: HttpClient) { }

    fetchLaunchData(queryString?: string) {
        return this.http.get(this.basUrl + (queryString || ''));
    }

    sendData(data: string) {
        this._rocketLaunchData.next(data);
    }
}