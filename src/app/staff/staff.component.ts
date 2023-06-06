import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  list:any
constructor(private service:ServiceService,public route:Router){
   
}
  ngOnInit(): void {
    this.getAllStaff();
  }

getAllStaff(){
  this.service.getAllStaff().subscribe((data)=>{
    this.list=data;
    console.log(this.list);   
  })
}
deleteStaff(id:number){
  this.service.deleteStaff(id).subscribe(()=>{
    console.log('id:',id,'deleted succesfully' );
    this.getAllStaff();
  })
}
edit(id:any){
  this.route.navigate(['create',id])
}

}

