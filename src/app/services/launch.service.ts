import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LaunchService {

    basUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    yearWiseData = '&launch_success=true&land_success=true&launch_year=';
    launchSuccess = '&launch_success=';
    landSuccess = '&launch_success=true&land_success=';

    launchData: string[] = [];

    private _rocketLaunchData = new Subject<String>();
    launchRocketData$ = this._rocketLaunchData.asObservable();

    constructor(private http: HttpClient) { }

    fetchLaunchData() {
        return this.http.get(this.basUrl);
    }

    // fetchYearWiseData(year) {
    //     return this.http.get(`${this.basUrl + this.yearWiseData}/${year}`)
    // }

    // getContact(contactId) {
    //     return this.http.get(`${this.API_URL + this.yearWiseData}/${year}`)
    // }


    // fetchLaunchingData() {
    //     return this.http.get(this.basUrl + this.launchSuccess);
    // }

    // fetchLandingData() {
    //     return this.http.get(this.basUrl + this.landSuccess);
    // }

    sendData(data: string) {
        this._rocketLaunchData.next(data);
    }

    // clear() {
    //     this.launchData = [];
    // }
}