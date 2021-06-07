export class IssueModel
{
  // Initialize variables
  id: number;
  title: string;
  description: string;
  // Added Oct 20th
  modifiedBy: number;
  riskCategory: string;
  assignee: string;
  // Added Nov 19th
  parentIssue: string;

  // Constructor
  constructor(id: number, title: string, description: string,
              modifiedBy: number, riskCategory: string, assignee: string, parentIssue: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.modifiedBy = modifiedBy;
    this.riskCategory = riskCategory;
    this.assignee = assignee;
    this.parentIssue = parentIssue;
  }
}
