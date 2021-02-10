import { Injectable } from '@angular/core';
import {DbService} from './db.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() {
    this.currentOrganization = 'default-organization';
  }

  // This refers to the ID of the document within the organizations collection; this should change when user selects a different org
  public currentOrganization;

}
