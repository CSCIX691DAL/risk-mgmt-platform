import {RiskProfileModel} from '../risk-profile/risk-profile.model';


export class PolicyModel
{
    // Initialize variables
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    dateModified: string;
    riskProfile: RiskProfileModel[];


    constructor(id: number, title: string, description: string,  riskProfile: RiskProfileModel[] ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.riskProfile = riskProfile;

    }




}
