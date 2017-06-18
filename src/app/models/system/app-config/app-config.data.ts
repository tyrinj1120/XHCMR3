
import { AppConfigOrgData } from './app-config-org.data';
import { AppConfigApiAccessData } from './app-config-api-access.data';
import { AppConfigSigninCoordinatesData } from './app-config-signin-coordinates.data';

export class AppConfigData {
    public name: string;
    public description: string;
    public logoUrl: string;

    public org: AppConfigOrgData;
    public apiAccess: AppConfigApiAccessData = new AppConfigApiAccessData();
    public signinCoordinates: AppConfigSigninCoordinatesData = new AppConfigSigninCoordinatesData();

    constructor() {}
 }