import { Component, OnInit, ViewChild } from '@angular/core';
import {  Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  details = [];
  path;
  Info=[];
  dropdown=false;
  @ViewChild('name') name;
  @ViewChild('search') search;
  hideColumn = true;


  constructor(private http:Http){
  }

  ngOnInit(){
  }

  onDetail(){
    this.getData('http://www.omdbapi.com/?s=' + this.search.nativeElement.value + '&apikey=c45e510b').subscribe(
      resData =>{
      this.Info=resData.Search;
        if(this.Info){
          this.dropdown=true;
        }
      });
      console.log(this.Info);
  }

getData(str){
  return this.http.get(str).
  map((res:Response)=>res.json());
}

onMovieInfo(){
console.log(this.name.nativeElement.value);
this.getData('http://www.omdbapi.com/?s=' + this.name.nativeElement.value + '&apikey=c45e510b').subscribe(
  data =>{
   console.log(data);
  this.details=data.Search;
  });
}
  
}

