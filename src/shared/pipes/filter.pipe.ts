import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "../models/task";
import { DatePipe } from "@angular/common";
@Pipe({
    name: 'filter',
    standalone: true
})

export class FilterPipe implements PipeTransform{
    datePipe : DatePipe = new DatePipe("en-us");
    transform(taskList : Task[], filterBy: string){
        if(filterBy === "All"){
            return taskList;
        }
        else if (filterBy === "Active"){
            return taskList.filter((task) => {
                return !task.isCompleted;
            })
        }
        else if (filterBy === "Due"){
            return taskList.filter((task) =>{
                let todayDate = this.datePipe.transform(new Date(), 'YYYY-MM-dd')
                return task.dueDate?.toString() === todayDate;
            })
        }
        else if (filterBy === "Completed"){
            return taskList.filter((task) => {
                return task.isCompleted;
            }) 
        }
        return taskList;
    }
}