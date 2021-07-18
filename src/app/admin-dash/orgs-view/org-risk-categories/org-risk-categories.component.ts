import { Component, Input, OnInit } from '@angular/core';
import { OrganizationModel } from '../../../organization.model';
import { OrganizationService } from '../../../organization.service';
import { CategoryModel } from '../../../risk-categories/category.model';

@Component({
  selector: 'app-org-risk-categories',
  templateUrl: './org-risk-categories.component.html',
  styleUrls: ['./org-risk-categories.component.css']
})

export class OrgRiskCategoriesComponent implements OnInit {


  constructor(public orgService: OrganizationService) { }

  @Input() org: OrganizationModel;

  categoryList: CategoryModel[] = [];


  ngOnInit(): void {
    this.orgService.getAllCategoriesByOrgReal(this.org.orgName).then((result) => {
      this.categoryList = result;
    });
  }

}
