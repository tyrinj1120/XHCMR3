
import { EnvSettingsSigninCoordinatesData } from "./env-settings-signin-coordinates.data";
import { EnvSettingsApiAccessData } from "./env-settings-api-access.data";

export class EnvSettingsData {
    public name: string;
    public production: boolean;
    public appName: string;    

    public apiAccess: EnvSettingsApiAccessData = new EnvSettingsApiAccessData();
    public signinCoordinates: EnvSettingsSigninCoordinatesData = new EnvSettingsSigninCoordinatesData();

    constructor() {}
 }