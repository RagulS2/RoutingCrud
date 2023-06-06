import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
interface Data{
  id:number,
  Name:string,
  Degree:string,
  College:string,
  Location:string
}
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  isDisable:boolean=false;
  body:Data={
    id:0,
    Name:'',
    Degree:'',
    College:'',
    Location:''
  }

  // table:string='block'

  list:any;
  constructor(private service:ServiceService,public route:Router){

  }
  ngOnInit():void {
   this.getAllStudent();
  }
getAllStudent(){
  this.service.getAllStudent().subscribe((data)=>{
    this.list=data;
  })
}
show(id:number){
  this.route.navigate(['Student',id])
}

getBack(){
  this.route.navigate([''])
}

deleteStudent(id:number){
    this.service.deleteStudent(id).subscribe()
      console.log('Deleted successfully.');
      this.getAllStudent();
    
  }
  edit(id:number){
    this.isDisable=true;
    this.service.getStudentById(id).subscribe((data:any)=>{
      console.log(data,'alldataaaaaaaaaa')
    this.body={
    id:data[0].id,
    Name:data[0].Name,
    Degree:data[0].Degree,
    College:data[0].College,
    Location:data[0].Location
  }
  console.log(this.body.id,'idddddddddddddd');
    })
  }


  createStudent() {
    this.service.createStudent(this.body).subscribe(() => {
      console.log(this.body);
      this.getAllStudent();
      this.resetForm();
    });
  }
  
  resetForm() {
    this.body = { // Reset the form data object
      id:0,
      Name: '',
      Degree: '',
      College: '',
      Location: ''
    };
  }
  
    updateStudent(){
      this.isDisable=false;
        this.service.updateStudent(this.body).subscribe()
        console.log(this.body);
        this.getAllStudent();
        this.resetForm();
      }

      // Hide(){
      //   this.table='none'
      // }
  
}


