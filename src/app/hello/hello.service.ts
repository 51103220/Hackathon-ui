import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HelloService {

    constructor(private _http: Http) {}

    getTest() {
        return this._http.get('http://localhost:9000')
            .map((res:Response) => res.json());
    }
}
