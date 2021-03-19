import {RiskProfileModel} from '../risk-profile/risk-profile.model';


export class PolicyModel
{
    // Initialize variables
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    dateModified: string;
    riskprofile: RiskProfileModel[];


    constructor(id: number, title: string, description: string,  riskprofile: RiskProfileModel[] ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.riskprofile = riskprofile;

    }




}
