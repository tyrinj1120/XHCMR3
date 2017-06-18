import { AppModuleWorkItemData } from './app-module-work-item.data';

export class AppModuleData {
    public appModuleWorkItemList: AppModuleWorkItemData[];

    constructor(public id: string, public name: string, public shortName: string, public description: string, public imageUrl: string, public defaultUrl: string, public rank: number) {
        this.appModuleWorkItemList = [];
    }
 }