import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {

  students : Student[];

  studentForm: boolean = false;
  isNewForm: boolean;
  newStudent: any = {};

  constructor(private _studentService: StudentService) { }
  ngOnInit() {
   this.getStudents();  
  }
 
   /* getStudents(){
    this.students = this._studentService.getStudentsFromService();
  }  */

  getStudents(){
    this.students = this._studentService.getStudentsFromData();
  } 

  showEditStudentForm(student: Student){
    if(!student){
      this.studentForm = false;
      return;
    }

    this.studentForm = true;
    this.isNewForm = false;
    this.newStudent = student;
  }
    
    showAddStudentForm(){
    //reset form if edited student
    if(this.students.length){
      this.newStudent={};
    }
    this.studentForm = true;
    this.isNewForm = true;
  }

  saveStudent(student: Student){
    if(this.isNewForm){
      //add new student
      this._studentService.addStudent(student);
    }else{
      //update existing student
    }
    this.studentForm = false;
  }
  removeStudent(index: number):void{
    this.students.splice(index,1);

  }
  cancelNewStudent(){
    this.newStudent={};
    this.studentForm = false;
  }
}
