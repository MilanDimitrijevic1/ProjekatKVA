import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { OdecaService } from '../services/odeca/odeca.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  @Input()
  odecaPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];

  constructor(private odecaService:OdecaService) {  }

  ngOnInit(): void {
    if(!this.odecaPageTags)
      this.tags = this.odecaService.getAllTags();
  }

}
