
import { AppModuleData } from "../../models/system/app-data/app-module.data";
import { AppModuleWorkItemData } from "../../models/system/app-data/app-module-work-item.data";
import { ModuleNames, ModuleShortNames } from "../../constants/app-module-name.constants";
import * as AppMWINameConstants from "../../constants/app-module-work-item-name.constants";

export class MyFileMap {
    public static get(): AppModuleData {
        let appModule = new AppModuleData('6f0ebe34-626a-41a9-aba8-5a6b48a0abcc', ModuleNames.MY_FILE, ModuleNames.MY_FILE, '', '', '', 3);
        
            // PERSONAL_DATA
            let personalData: AppModuleWorkItemData = new AppModuleWorkItemData('daa66b63-b053-4a68-a077-5f99c043ac06', AppMWINameConstants.MyFile.Names.PERSONAL_DATA, '', '', '', '', '', true, 1);
            personalData.appModuleWorkItemList.push(new AppModuleWorkItemData('749df1a5-48eb-4697-849d-8149b08d942c', AppMWINameConstants.MyFile.Names.GENERAL, '', '', '', '', '', false, 1));
            personalData.appModuleWorkItemList.push(new AppModuleWorkItemData('8b00589c-b48c-4487-81c2-eccabd807da3', AppMWINameConstants.MyFile.Names.IDENTIFICATION, '', '', '', '', '', false, 2));
            personalData.appModuleWorkItemList.push(new AppModuleWorkItemData('8c2011ec-422f-4ae7-8e01-0c2775fd6f99', AppMWINameConstants.MyFile.Names.CONTACT, '', '', '', '', '', false, 3));
            personalData.appModuleWorkItemList.push(new AppModuleWorkItemData('3ada2e2a-16ce-4d0c-b9b8-a8ce65ebb4dd', AppMWINameConstants.MyFile.Names.PAYMENT, '', '', '', '', '', false, 4));
            appModule.appModuleWorkItemList.push(personalData);

            // PROFESSIONAL_QUALIFICATIONS
            let professionalQualifications: AppModuleWorkItemData = new AppModuleWorkItemData('aa3ea6d9-f7f3-4af9-9bbb-d7dfda50649c', AppMWINameConstants.MyFile.Names.PROFESSIONAL_QUALIFICATIONS, '', '', '', '', '', false, 1);
            appModule.appModuleWorkItemList.push(professionalQualifications);



        return appModule;
    }
}