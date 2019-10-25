import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Corretor } from '../model/corretor.model';

@Injectable({
  providedIn: 'root'
})
export class CorretorService {

  corretor:Corretor;
  constructor(private router: Router) { }

  setCorretor(corretor:Corretor){
    this.corretor = corretor
  }

  getCorretor(){
    return this.corretor
  }

}
