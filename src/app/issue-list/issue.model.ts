export class IssueModel
{
  // Initialize variables
  id: number;
  title: string;
  description: string;
  // Added Oct 20th
  modifiedBy: number;
  riskCategory: string;
  assignee: number;
  // Added Nov 19th
  parentIssue: number;

  // Constructor
  constructor(id: number, title: string, description: string,
              modifiedBy: number, riskCategory: string, assignee: number, parentIssue: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.modifiedBy = modifiedBy;
    this.riskCategory = riskCategory;
    this.assignee = assignee;
    this.parentIssue = parentIssue;
  }
}
