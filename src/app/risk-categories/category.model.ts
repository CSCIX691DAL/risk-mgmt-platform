export class CategoryModel
{
  // Initialize variables
  id: number;
  name: string;
  parentCategory: CategoryModel;
  description: string;
  isSpeculativeRisk: boolean;
  dateCreated: string;
  dateModified: string;

  // Constructor
  constructor(id: number, name: string, parentCategory: CategoryModel, description: string,
              isSpeculativeRisk: boolean, dateCreated: string, dateModified: string) {
    this.id = id;
    this.name = name;
    this.parentCategory = parentCategory;
    this.description = description;
    this.isSpeculativeRisk = isSpeculativeRisk;
    this.dateCreated = dateCreated;
    this.dateModified = dateModified;
  }

  // Get Parent Name
  getParentName(): string {
    if (this.parentCategory != null) {
      return this.parentCategory.name;
    } else {
      return 'None';
    }
  }
}
