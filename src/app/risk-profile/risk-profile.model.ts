import {CategoryModel} from '../risk-categories/category.model';

export class RiskProfileModel
{
  // Initialize variables
  id: number;
  title: string;
  description: string;
  likelihood: number;
  impact: number;
  category: CategoryModel;
  riskCategory: CategoryModel;
  dateCreated: string;
  dateModified: string;
  sourceOfRisk: string;
  levelOfRisk: number;

  constructor(id: number, title: string, description: string, likelihood: number, impact: number,
              category: CategoryModel, riskCategory: CategoryModel, sourceOfRisk: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.likelihood = likelihood;
    this.impact = impact;
    this.category = category;
    this.riskCategory = riskCategory;
    this.sourceOfRisk = sourceOfRisk;
  }

  getLevelOfRisk(): number{
    return this.likelihood + this.impact;
  }

  /* Risk Badge Level based on impact and likelihood:*/
  getLevelOfRiskBadge(): any{
    if ( this.impact < 2) {
      if ( this.likelihood < 8) {
        return {css: 'low', level: 'Low'};
      } else {
        return {css: 'low-med', level: 'Low Medium'};
      }
    }// if 2
    if ( this.impact < 4) {
      if ( this.likelihood < 2) {
        return {css: 'low', level: 'Low'};
      } else if ( this.likelihood < 8) {
        return {css: 'low-med', level: 'Low Medium'};
      } else {
        return {css: 'med', level: 'Medium'};
      }
    }// if 4
    if ( this.impact < 6) {
      if ( this.likelihood < 4) {
        return {css: 'low-med', level: 'Low Medium'};
      } else if (this.likelihood < 8) {
        return {css: 'med', level: 'Medium'};
      } else {
        return {css: 'med-hi', level: 'High Medium'};
      }
    }// if 6
    if ( this.impact < 8) {
      if (this.likelihood < 4) {
        return {css: 'med', level: 'Medium'};
      } else if (this.likelihood < 8) {
        return {css: 'med-hi', level: 'High Medium'};
      } else {
        return {css: 'hi', level: 'High'};
      }
    }
    else {
      if ( this.likelihood < 2) {
        return {css: 'med', level: 'Medium'};
      } else if ( this.likelihood < 6) {
        return {css: 'med-hi', level: 'High Medium'};
      }
      return {css: 'hi', level: 'High'};
    }
  }
}
