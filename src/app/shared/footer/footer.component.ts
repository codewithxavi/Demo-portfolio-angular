import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isAboutPage: boolean=false;
  constructor(public _servicio:InfoPaginaService){
    
  }
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    this.isAboutPage = window.location.pathname === '/about.html';
  }
}
