import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string, format : string) {
       var datePipe = new DatePipe("en-US");
        value = (format === "12-hours" ? datePipe.transform(value, 'dd/MM/yyyy hh:mm:ss a') : datePipe.transform(value, 'dd/MM/yyyy H:mm'));
        return value;
    }
}