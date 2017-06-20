
import { AppModuleData } from "../models/system/app-data/app-module.data";
import { MyFileMap } from "../struct-map/work-force/my-file.map";
import { CompensationMap } from "../struct-map/work-force/compensation.map";

export class AppStructureMap {
  public static getMap() {     
    let data: AppModuleData[] = [];

    data.push(MyFileMap.get());
    data.push(CompensationMap.get());

    return data;
   }
}