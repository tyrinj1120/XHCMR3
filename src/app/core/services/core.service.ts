import { Injectable, OnInit } from '@angular/core';
import { Headers, RequestOptions } from "@angular/http";

import { LocalStorageService } from "angular-2-local-storage/dist";

/* Constants */
import { AppConstants } from "../../constants/app.constants";


@Injectable()
export class CoreService {
    constructor (private localStore: LocalStorageService) {}

    public getHttpRequestOptions(): RequestOptions {
        let headers = new Headers();
        let token = this.getAccessToken();

        headers.append(AppConstants.HTTP_AUTHORIZATION_HEADER, AppConstants.HTTP_AUTHORIZATION_HEADER_BEARER  + token);
        let options = new RequestOptions({ headers: headers });

        return options;
    }

    public getAccessToken(): string{
        let token = this.localStore.get(AppConstants.ACCESS_TOKEN);
        if (token != null) {
            return <string>token;
        } else {
            return '';
        }
    }
}