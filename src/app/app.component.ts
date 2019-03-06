// app.component.ts

import { Component, Injectable } from '@angular/core';

import { NgForm }   from '@angular/forms';
import { Http, Headers } from '@angular/http';
import {Personne} from './personne';
//import 'rxjs/add/operator/toPromise';
@Injectable()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public file_src: string = '../assets/images/avatar3.jpg';
    constructor(private _http: Http){}
    private headers = new Headers({'Content-Type': 'application/json'});
    title = '';

    onSubmit(form:NgForm): Promise <Personne> {
        return this._http.post('http://127.0.0.1:8000/api/personnes', JSON.stringify(form.value), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
