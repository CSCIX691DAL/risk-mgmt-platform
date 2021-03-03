import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TaskModel} from '../task-list/task.model';

export class TreatmentPlanModel {
    // variables
    riskProfile: RiskProfileModel;
    tasks: Array<TaskModel>;
    public title: string;

    constructor(riskProfile: RiskProfileModel, tasks: Array<TaskModel>, title: string) {
        this.riskProfile = riskProfile;
        this.tasks = tasks;
        this.title = title;
    }
    addTaskDetail(td: string): void{
        // this.tasks.push(td);
    }
    orderByRisk(): void{
        // order treatment plans by risk
    }
}
