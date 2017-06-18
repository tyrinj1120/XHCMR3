import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { EnvSettingsData } from "../../models/system/env-settings/env-settings.data";
import { EnvSettingsSigninCoordinatesData } from "app/models/system/env-settings/env-settings-signin-coordinates.data";

import { AppData } from "../../models/system/app-data/app.data";
import { UserProfile } from "../../models/system/user-data/user-profile.data";

@Injectable()
export class CoreDataService {
    private envSettingsData: EnvSettingsData;
    private appData: AppData;
    public userProfile: UserProfile;

    constructor () {
        if (this.envSettingsData == null) {
            this.envSettingsData = environment;
        }
    }

    public getEnvironmentData():  EnvSettingsData{
        return this.envSettingsData;
    }

    public getAppData():  AppData{
        return this.appData;
    }

    public setAppData(value: AppData): void {
        if (value != null) {
            this.appData = value;
        }
    }

    public getcoreDataApi(): string {
        if (this.envSettingsData) {
            return this.envSettingsData.apiAccess.coreDataApi;
        }else{
            return "";
        }
    }

    public getSigninCordinates(): EnvSettingsSigninCoordinatesData {
        if (this.envSettingsData) {
            return this.envSettingsData.signinCoordinates;
        }else{
            
             let value: EnvSettingsSigninCoordinatesData = new EnvSettingsSigninCoordinatesData();
             value.tenant = 'common';
             value.instance = 'https://login.microsoftonline.com/';
             value.clientId = 'f227b60a-44f3-4965-b5ea-19938cd71554';
             value.redirectUri = 'http://localhost:5818/authorization';
             value.postLogoutRedirectUri = 'http://localhost:5818/';

            return value;
        }
    }
}