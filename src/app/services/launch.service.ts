import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterLaunchData } from '../component/sidebar/sidebar.component';

@Injectable({
    providedIn: 'root',
})
export class LaunchService {

    basUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    yearWiseData = '&launch_success={{launchingStatus}}&land_success={{landingStatus}}&launch_year={{year}}';

    launchData: string[] = [];

    private _rocketLaunchData = new Subject<FilterLaunchData>();
    launchRocketData$ = this._rocketLaunchData.asObservable();

    constructor(private http: HttpClient) { }

    fetchLaunchData(queryString?: string) {
        return this.http.get(this.basUrl + (queryString || ''));
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

    sendData(data: FilterLaunchData) {
        this._rocketLaunchData.next(data);
    }

    // clear() {
    //     this.launchData = [];
    // }
}