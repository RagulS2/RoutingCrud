import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  getAllStudent(){
    const url='http://localhost:3000/allStudent'
    return this.http.get(url);
  }
  getStudentById(id:number){
    const url="http://localhost:3000/getById/"
    return this.http.get(url+id)
  }
  createStudent(body:any){
    const url="http://localhost:3000/insert";
    return this.http.post(url,body);
  }
  deleteStudent(id:number){
    const url="http://localhost:3000/delete";
    return this.http.put(url,{id:id})
  }
  updateStudent(body:any){
    const url="http://localhost:3000/update";
    return this.http.put(url,body)
  }
  getAllStaff(){
    const url='http://localhost:3000/allStaff';
    return this.http.get(url)
  }
 createStaff(body:any){
  const url="http://localhost:3000/add";
  return this.http.post(url,body)
 }
 deleteStaff(id:number){
  const url="http://localhost:3000/deletestaff"
  return this.http.put(url,{id:id})
 }
 updateStaff(body:any){
  const url="http://localhost:3000/updatestaff";
  return this.http.put(url,body)
 }
//This code gets the id from the url and then returns the url with the id added to the end of the url.

 getId(id:number){
  const url="http://localhost:3000/getId/";
  return this.http.get(url+id)
 }
}
