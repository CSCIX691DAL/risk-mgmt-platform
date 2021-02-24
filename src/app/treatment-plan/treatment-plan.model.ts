import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TaskModel} from '../task-list/task.model';

export class TreatmentPlanModel {
    // variables
    riskProfile: RiskProfileModel;
    tasks: Array<TaskModel>;
    public title: string;
    continueRiskActivity: boolean;
    updateRiskConsequences: boolean;
    retainRisk: boolean;

    constructor(riskProfile: RiskProfileModel, tasks: Array<TaskModel>, title: string, continueRiskActivity: boolean, updateRiskConsequences: boolean, retainRisk: boolean) {
        this.riskProfile = riskProfile;
        this.tasks = tasks;
        this.title = title;
        this.continueRiskActivity = continueRiskActivity;
        this.updateRiskConsequences = updateRiskConsequences;
        this.retainRisk = retainRisk;
    }
    addTaskDetail(td: string): void{
        // this.tasks.push(td);
    }
    orderByRisk(): void{
        // order treatment plans by risk
    }
}
