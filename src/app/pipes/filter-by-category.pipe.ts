import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(value: any[], catName = ''): unknown {

    // Initialize empty array
    var sortedList = [];

    // For each Risk Category, push to previously defined 'sortedList' array
    // Checks to ensure Risk Category is NOT undefined,
    // and that the value either equals the 'catName' input OR is empty.
    value.forEach(
      element => {
        if (element.riskCategory !== undefined && (element.riskCategory.name === catName || catName === '')){
          sortedList.push(element);
        }
      }
    );

    // Return filtered array of Risk Categories
    return sortedList;

  }

}
