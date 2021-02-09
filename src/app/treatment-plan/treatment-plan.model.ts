import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TreatmentOptionsModel} from './treatment-options.model';

export class TreatmentPlanModel {
    // variables
    riskProfile: RiskProfileModel;
    title: string;
    treatmentPlan: TreatmentOptionsModel; // maybe use a model like category does for risk-profile
    constructor(riskProfile, title, treatmentPlan) {
        this.riskProfile = riskProfile;
        this.title = title;
        this.treatmentPlan = treatmentPlan;
    }

    orderByRisk(): void{
        // order treatment plans by risk
        this.riskProfile.getLevelOfRisk();
    }
    getTreatmentPlan(): any{
        // return treatment plan
    }
}
