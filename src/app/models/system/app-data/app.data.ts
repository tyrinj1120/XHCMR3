import { AppModuleData } from './app-module.data';

export class AppData {
    public appModuleData: AppModuleData[];

    constructor(public name: string,  public edition: string, public description: string, public faviconUrl: string, public logoUrl: string) {
    }
 }