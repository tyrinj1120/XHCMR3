
import { AppModuleData } from "../../models/system/app-data/app-module.data";
import { AppModuleWorkItemData } from "../../models/system/app-data/app-module-work-item.data";
import { ModuleNames, ModuleShortNames } from "../../constants/app-module-name.constants";
import * as AppMWINameConstants from "../../constants/app-module-work-item-name.constants";

export class CompensationMap {
    public static get(): AppModuleData {
        let appModule = new AppModuleData('81532009-6cda-4aac-804b-13b729ffe5a7', ModuleNames.COMPENSATION, ModuleShortNames.COMPENSATION, '', '', '', 3);
        
            // LOANS
            let loans: AppModuleWorkItemData = new AppModuleWorkItemData('ff4e42c0-e86a-4ab9-9e17-c9f6e931948d', AppMWINameConstants.COMPENSATION.Names.LOANS, AppMWINameConstants.COMPENSATION.ShortNames.LOANS, '', '', '', '', true, 1);
                loans.appModuleWorkItemList.push(new AppModuleWorkItemData('f95a210a-c1ec-4eb8-9aa0-610f72a22a25', AppMWINameConstants.COMPENSATION.Names.LOAN_APPLICATIONS, AppMWINameConstants.COMPENSATION.ShortNames.LOAN_APPLICATIONS, '', '', '/compensation/loans', '', false, 1));
                loans.appModuleWorkItemList.push(new AppModuleWorkItemData('2ae84a7f-3409-4a55-95bb-70abd59d987b', AppMWINameConstants.COMPENSATION.Names.LOAN_APPLY, AppMWINameConstants.COMPENSATION.ShortNames.LOAN_APPLY, '', '', '/compensation/loans/apply', '', false, 1));
            appModule.appModuleWorkItemList.push(loans);



        return appModule;
    }
}