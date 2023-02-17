import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl ,FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

@Output() task:EventEmitter<string>=new EventEmitter<string>();
//,[Validators.required,Validators.minLength(3)]
taskForm :FormGroup= new FormGroup({taskName:new FormControl(null)})


addTask(taskForm:FormGroup){


//if(taskForm.valid){
  this.task.emit(taskForm.value.taskName);
//}
// console.log(taskForm.value.taskName)

}

}
