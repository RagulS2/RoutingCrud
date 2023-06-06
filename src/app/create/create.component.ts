import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { ActivatedRoute } from '@angular/router';
interface Data{
  id:number;
  Name:string;
  position:string;
  salary:number;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  body:Data={
    id:0,
    Name:'',
    position:'',
    salary:0
  }
  list:any;
  // isDisabled:boolean=true;

constructor(private service:ServiceService,public router:ActivatedRoute){}
  ngOnInit(): void {
    this.editStaff();
  }

editStaff(){
  //  this.isDisabled=true;
  let  id:number=Number(this.router.snapshot.paramMap.get('id'));
  console.log(id,"edit id");
  
  this.service.getId(id).subscribe((data:any)=>{
    this.list=data;
    console.log(data);
    
    this.body={
      id:data[0].id,
      Name:data[0].Name, 
      position:data[0].position,
      salary:data[0].salary
    }
 
    
  })
}
updateStaff(){
  this.service.updateStaff(this.body).subscribe();
   console.log(this.body);
   this.getAllStaff();
   this.resetForm();

   
 }

createStaff(){
  this.service.createStaff(this.body).subscribe(()=>{
    console.log(this.body);
    this.getAllStaff();
    this.resetForm();
    
  })

}
getAllStaff(){
  this.service.getAllStaff().subscribe((data)=>{
    this.list=data;
  })
}
resetForm() {
  this.body = { // Reset the form data object
    id:0,
    Name: '',
    position: '',
    salary:0,
  };
}

}