import {RiskProfileModel} from '../risk-profile/risk-profile.model';


export class TreatmentPlanModel {
    // variables
    riskProfile: RiskProfileModel;
    title: string;
    continueRiskActivity: boolean;
    updateRiskConsequences: boolean;
    retainRisk: boolean;

    constructor(riskProfile: RiskProfileModel, title: string, continueRiskActivity: boolean, updateRiskConsequences: boolean, retainRisk: boolean) {
        this.riskProfile = riskProfile;
        this.title = title;
        this.updateRiskConsequences = updateRiskConsequences;
        this.continueRiskActivity = continueRiskActivity;
        this.retainRisk = retainRisk;
    }

    orderByRisk(): void{
        // order treatment plans by risk
    }
    getTreatmentPlan(): any{
        // return treatment plan
    }
}
