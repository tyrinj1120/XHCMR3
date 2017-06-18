import { Injectable } from '@angular/core';

/* Services */
import { CoreDataService } from "../../../core/services/core-data.service";

@Injectable()
export class ServiceUrlsAuth {
    public verifyToken : string = this.coreDataService.getcoreDataApi() + '/verify-token';

    constructor (private coreDataService: CoreDataService) {}
}

@Injectable()
export class ServiceUrlsEmployee {
    public personalInfo : string = this.coreDataService.getcoreDataApi() + '/employees/personal-info';
    public personalProfileImage : string = this.coreDataService.getcoreDataApi() + '/employees/profile-image';

    constructor (private coreDataService: CoreDataService) {}
}