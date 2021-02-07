export class CategoryModel
{
  // Initialize variables
  id: number;
  name: string;
  parentCategory: CategoryModel;
  description: string;
  isSpeculativeRisk: boolean;

  // Constructor
  constructor(id: number, name: string, parentCategory: CategoryModel, description: string,
              isSpeculativeRisk: boolean) {
    this.id = id;
    this.name = name;
    this.parentCategory = parentCategory;
    this.description = description;
    this.isSpeculativeRisk = isSpeculativeRisk;
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
