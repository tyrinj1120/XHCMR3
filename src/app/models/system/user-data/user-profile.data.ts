
import { AccessRole } from "../access-control/access-role.data";

export class UserProfile {
    public name: string;
    public image: any;

    public accessRoles: AccessRole[] = [];

    constructor() {}
 }