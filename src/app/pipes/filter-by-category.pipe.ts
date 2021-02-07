import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(value: any[], catName = ''): unknown {

    var sortedList = [];

    console.log(value[0]);
    console.log("value: " + value[0].riskCategory);
    console.log("category: " + catName);

    value.forEach(
      element => {
        if (element.riskCategory.name === catName || catName === ''){
          sortedList.push(element);
        }
      }
    );

    return sortedList;
  }

}
