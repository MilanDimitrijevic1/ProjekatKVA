import { Component, OnInit } from '@angular/core';
import{OdecaService} from '../services/odeca/odeca.service';
import { Odeca } from '../shared/models/Odeca';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  odeca:Odeca[] = [];
  constructor(private odecaService:OdecaService, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const searchTerm = params['searchTerm'];
      if(searchTerm)
        this.odeca = this.odecaService.getAllOdecaBySearchTerm(params['searchTerm']);
      else if(params['tag'])
        this.odeca = this.odecaService.getAllOdecaByTag(params['tag']);
      else
      this.odeca = this.odecaService.getAll();
    })
  }

}
