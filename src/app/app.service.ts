import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
//import { Router } from '@angular/router';
 import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private _http: Http) { }

   getweather(lat,lng) {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        // return this._http.get(' https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hyderabad%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
        //     {
        //         headers: headers
        //     }).map(res => res.json());
             return this._http.get('http://samples.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=AIzaSyBj35yLYfE98khlVwKb721Nwi76XjxnLIA',
            {
                headers: headers
            }).map(res => res.json());
    }

}
