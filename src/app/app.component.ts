import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
})
export class AppComponent {
  title = 'noticias';
  listaNoticias: any[]=[];
  constructor(private noticeService :NoticiasService  ) { }
  login =false;

  buscar(parametros:any){ 
    this.login =true;               
    this.noticeService.getServicio(parametros).subscribe(data=>{
      this.login =false;      
      this.listaNoticias =data.articles;
    })

  };
}
