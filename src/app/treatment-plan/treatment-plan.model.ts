import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TaskModel} from '../task-list/task.model';

export class TreatmentPlanModel {
    // variables
    riskProfile: RiskProfileModel;
    tasks: Array<TaskModel>;
    public title: string;
    public id: number;

    constructor(riskProfile: RiskProfileModel, tasks: Array<TaskModel>, title: string, id: number) {
        this.riskProfile = riskProfile;
        this.tasks = tasks;
        this.title = title;
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
    setId(setId: number): void {
        this.id = setId;
    }

    addTaskDetail(td: string): void{
        // this.tasks.push(td);
    }
    orderByRisk(): void{
        // order treatment plans by risk
    }
}
