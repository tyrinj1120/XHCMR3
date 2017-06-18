
import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

/* Services */
import { LocalStorageService } from "angular-2-local-storage/dist";

/* Constants */
import { AppConstants } from "../../constants/app.constants";

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    constructor(private localStore: LocalStorageService) {
        super();

        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/json');
    }
}

export const REQUEST_OPTIONS_PROVIDER = { provide: RequestOptions, useClass: DefaultRequestOptions };
