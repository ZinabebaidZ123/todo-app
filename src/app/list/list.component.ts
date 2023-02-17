import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnChanges{
 iscomolete:boolean=false;
@Input() task:String='';
tasks:any = [];



constructor(){


}



ngOnChanges(): void {
  console.log(this.tasks)
  this.tasks.push(this.task);

}
deleteTask(index :any){
  let i=index+1;
  this.tasks.splice(index,1);

}

completeTask(index:Number){
this.iscomolete=!this.iscomolete






}


undoTask(index:Number){

  this.deleteTask(index)


this.iscomolete=!this.iscomolete
}
}
