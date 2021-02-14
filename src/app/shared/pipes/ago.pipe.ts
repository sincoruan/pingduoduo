import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        if(value){
            const seconds = Math.floor((+new Date()- +new Date(value))/1000);
            if(seconds<30) return 'just now';
            const intervals = {
                年: 3600*24*365,
                月: 3600*24*12,
                周: 3600*24*6,
                天: 3600*24,
                小时: 3600,
                分钟: 60,
                秒: 1
            }
            let counter =0;
            for(const unitName in intervals){
                if(intervals.hasOwnProperty(unitName)){
                    const unitValue = intervals[unitName];
                    counter = Math.floor(seconds/unitValue);
                    if(counter>0){
                        return `${counter} ${unitName} 前`
                    }
                }
            }
            return value;
        }
    }
}