export class AppModuleWorkItemData {
    public appModuleWorkItemList: AppModuleWorkItemData[];

    constructor(public id: string, public name: string, public shortName: string, public description: string, public icon: string, public routePath: string, public title: string, public isGroup: boolean, public rank: number) {
        this.appModuleWorkItemList = [];
    }
 }