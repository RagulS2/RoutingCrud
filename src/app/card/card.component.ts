import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  info:any;
   constructor(private service:ServiceService,private route:Router,private router:ActivatedRoute){}
  ngOnInit(): void {
this.getStudentById();
  }

   getStudentById(){
    let id:number=Number(this.router.snapshot.paramMap.get('id'));
    this.service.getStudentById(id).subscribe((data)=>{
      this.info=data;
      console.log(this.info);
      
    })
   
   }
   getBack(){
    this.route.navigate(['Student'])
  }
}
