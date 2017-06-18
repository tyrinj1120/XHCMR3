import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ServiceUrlsAuth } from './../../../shared/general-shared-module/services/service-urls.service';

import { CoreService } from "../../../core/services/core.service";
import { AppConstants } from "../../../constants/app.constants";

@Injectable()
export class AuthService {
    constructor (private http: Http, private auth: ServiceUrlsAuth) {}

    public verifyUserToken(token: string): Observable<string> {
        return this.http.get(this.auth.verifyToken, this.getRequestOptions(token))
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    private getRequestOptions(token: string): RequestOptions {
        let headers = new Headers();
        headers.append(AppConstants.HTTP_AUTHORIZATION_HEADER, AppConstants.HTTP_AUTHORIZATION_HEADER_BEARER + token);
        let options = new RequestOptions({ headers: headers });

        return options;
    }

    private extractData(res: Response) {
        let body = res.json();
        return res.json(); //body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}