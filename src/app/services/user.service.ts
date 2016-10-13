import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiUrls } from '../common/api-urls'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private _http: Http) {}

    updateInfo() { //TODO:[THY] Implement service
        return this._http.get(ApiUrls.updateInfoUrl)
            .map((res:Response) => res.json());
    }

    verifyMenu() { //TODO:[THY] Implement service
        return this._http.get(ApiUrls.verifyMenuUrl)
            .map((res:Response) => res.json());
    }

    getSuggestMenu() { //TODO:[THY] Implement service
        return this._http.get(ApiUrls.getSuggestUrl)
            .map((res:Response) => res.json());
    }

}