import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  @Input() titulo:string;
  constructor() {
    this.titulo="";
   }

  ngOnInit(): void {
  }
  

}