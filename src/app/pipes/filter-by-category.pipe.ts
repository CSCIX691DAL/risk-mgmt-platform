import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(value: any[], catName = ''): unknown {

    var sortedList = [];

    value.forEach(
      element => {
        if (element.riskCategory !== undefined && (element.riskCategory.name === catName || catName === '')){
          sortedList.push(element);
        }
      }
    );

    return sortedList;
  }

}
