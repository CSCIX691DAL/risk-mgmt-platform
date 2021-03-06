/*import {stringify} from "querystring";
import {isBoolean} from "util";*/

export class OrganizationModel
{
    // Initialize variables
    orgName: string;
    orgStatus: string;

    constructor(orgName: string, orgStatus: string) {
        this.orgName = orgName;
        this.orgStatus = orgStatus;
    }
}
