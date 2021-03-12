import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LaunchService {

    url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    launchData: string[] = [];

    constructor(private http: HttpClient) { }

    fetchLaunchData() {
        return this.http.get(this.url);
    }

    clear() {
        this.launchData = [];
    }
}