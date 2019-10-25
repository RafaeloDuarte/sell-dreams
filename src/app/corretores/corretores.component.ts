import { Component, OnInit } from '@angular/core';
import { Corretor } from '../model/corretor.model';
import { CorretorService } from '../service/corretor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.css']
})
export class CorretoresComponent implements OnInit {

  corretores:Corretor[]

  constructor(private dataService:CorretorService, private router:Router) {
    this.corretores = [
      {
        name:"Felipe",
        description:"Um corretor",
        contact:11984708101,
        email:"felipe@selldreams.com.br",
        photoUrl:"assets/images/felipe.jpg"
      },{
        name:"Dodo",
        description:"Um corretor",
        contact:11984708101,
        email:"dodo@selldreams.com.br",
        photoUrl:"assets/images/dodo.jpg"
      },{
        name:"Clarice",
        description:"Um corretor",
        contact:11984708101,
        email:"clarice@selldreams.com.br",
        photoUrl:"assets/images/clarice.jpg"
      },{
        name:"Isabel",
        description:"Um corretor",
        contact:11984708101,
        email:"isabel@selldreams.com.br",
        photoUrl:"assets/images/isabel.jpg"
      },{
        name:"Juan",
        description:"Um corretor",
        contact:11984708101,
        email:"juan@selldreams.com.br",
        photoUrl:"assets/images/juan.jpg"
      },
    ]
  }

  ngOnInit() {
  }

  selecionarCorretor(corretor:Corretor){
    this.dataService.setCorretor(corretor)
    this.router.navigateByUrl('/produto')
  }

}
