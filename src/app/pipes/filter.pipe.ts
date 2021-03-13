import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, searchData: any) {
        return value.filter(function (search) {
            return search.year.indexOf(searchData) > -1
        })
    }
}