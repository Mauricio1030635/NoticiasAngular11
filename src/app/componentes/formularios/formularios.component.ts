import { EventEmitter,Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  
  @Output() parametrosSele = new EventEmitter<any>();
  categoriaselect  ="general";
  paisriaselect  ="ar";
  categoria :any =[
    {valor:"general", nombre:"General"},
    {valor:"business", nombre:"Negocio"},
    {valor:"health", nombre:"Salud"},
    {valor:"sports", nombre:"Deportes"}
  ];

  pais :any =[
    {valor:"ar", nombre:"Argentina"},
    {valor:"br", nombre:"Brazil"},
    {valor:"fr", nombre:"Francia"},
    {valor:"mx", nombre:"Mexico"},
    {valor:"gb", nombre:"Reino Unido"},
    {valor:"us", nombre:"Estados Unidos"},
    {valor:"co", nombre:"Colombia"}
  ];
  constructor() { }


  ngOnInit(): void {
  }

  validar(){
    const  parametros :any=[
      {valorx:this.categoriaselect},
      {valor:this.paisriaselect}];       
      this.parametrosSele.emit(parametros);
  }

}
