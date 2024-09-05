import { Injectable } from '@angular/core';
import {Odeca} from '../../shared/models/Odeca'
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class OdecaService {

  constructor() { }

  getOdecaById(id: number): Odeca{
    return this.getAll().find(odeca => odeca.id == id)!;
  }

  getAllOdecaBySearchTerm(searchTerm:string) :Odeca[]{
    return this.getAll().filter(odeca => odeca.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return[
      { name: 'All', count: 25 },
      { name: 'Fudbal', count: 1 },
      { name: 'Dres', count: 1 },
      { name: 'Biciklizam', count: 1 },
      { name: 'Zene', count: 3 },
      { name: 'Haljina', count: 1 },
      { name: 'Muskarci', count: 7 },
      { name: 'Majica', count: 2 },
      { name: 'Trenerka', count: 2 },
      { name: 'Papuca', count: 2 },
      { name: 'Patike', count: 4 },
      { name: 'Kosarka', count: 1 }
    ]
  }

  getAllOdecaByTag(tag:string):Odeca[]{
    if(tag == "All")
      return this.getAll();
    else 
      return this.getAll().filter(odeca => odeca.tags?.includes(tag))
  }

  getAll():Odeca[]{
    return[
      {
        id: 1,
        name: 'Liverpul dres',
        stars: 4.5,
        price: 100,
        tags: ['Fudbal', 'Dres'],
        favorite: true,
        imageUrl: 'https://www.gogoalshopcloud.com/upload/ttmall/img/20220507/ff6289a098dddb7d9b51f4527e2ccf70.png',
        size: 'L',
        type: 'majica',
      },
      {
        id: 2,
        name: 'Haljina',
        stars: 4.9,
        price: 20,
        tags: ['Zene', 'Haljina'],
        favorite: false,
        imageUrl: 'https://www.avangardia.rs/files/t/images/slike_proizvoda/t_800_1120/803306-Roze_590572a243ee1e7b6e657b212ca54f7c.jpg.webp', 
        size: 'M',
        type: 'haljina',
      },
      {
        id: 3,
        name: 'Majica',
        stars: 4.1,
        price: 5,
        tags: ['Muskarci', 'Majica'],
        favorite: true,
        imageUrl: 'https://www.pikgroup.rs/images/9707/70/550x550/majica-kratkih-rukava-payper-sunset-jpg.jpg', 
        size: 'L',
        type: 'majica',
      },
      {
        id: 4,
        name: 'Majica za biciklizam',
        stars: 3.7,
        price: 40,
        tags: ['Biciklizam', 'Majica'],
        favorite: true,
        imageUrl: 'https://img.ep-cdn.com/i/500/500/px/pxljzyvihecuomwqtkna/nakamura-racing-jersey-muska-majica-za-biciklizam-crna-100522-cene.jpg', 
        size: 'M',
        type: 'majica',
      },
      {
        id: 5,
        name: 'Trenerka',
        stars: 5.0,
        price: 10,
        tags: ['Muskarci', 'Trenerka'],
        favorite: true,
        imageUrl: 'https://pantera.rs/wp-content/uploads/2020/09/Superdry-muska-trenerka.jpg', 
        size: 'L',
        type: 'trenerka',
      },
      {
        id: 6,
        name: 'Adidas trenerka',
        stars: 4.0,
        price: 35,
        tags: ['Muskarci', 'Trenerka'],
        favorite: false,
        imageUrl: 'https://www.intersport.rs/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//g/h/gh6849_app_photo_front-center_white.jpg', 
        size: 'XL',
        type: 'trenerka',
      },
      {
        id: 7,
        name: 'Papuca Grubin',
        stars: 3.3,
        price: 8,
        tags: ['Zene', 'Papuca'],
        favorite: false,
        imageUrl: 'https://www.apoteka-zivanovic.rs/images/5470/800/grubin-zenske-papuce-cloudy-32937-crvena-0.jpg', 
        size: '39',
        type: 'papuca',
      },
      {
        id: 8,
        name: 'Papuca',
        stars: 3.7,
        price: 8,
        tags: ['Zene', 'Papuca'],
        favorite: false,
        imageUrl: 'https://www.avangardia.rs/files/t/images/slike_proizvoda/t_800_1120/765046-45_8aae8eb23613f3c4136f24345d87072f.jpg.webp', 
        size: '38',
        type: 'papuca',
      },
      {
        id: 9,
        name: 'Patike Nike',
        stars: 4.7,
        price: 50,
        tags: ['Muskarci', 'Patike'],
        favorite: true,
        imageUrl: 'https://www.tike.rs/files/watermark/files/images/products/media/FB9/FB9660-001/images/thumbs_w/FB9660-001_w_800_800px.jpg.webp', 
        size: '42',
        type: 'patike',
      },
      {
        id: 10,
        name: 'Patike Reebok',
        stars: 4.2,
        price: 35,
        tags: ['Muskarci', 'Patike'],
        favorite: false,
        imageUrl: 'https://www.tike.rs/files/watermark/files/images/products/media/GY0/GY0955/images/thumbs_w/GY0955_w_800_800px.jpg.webp', 
        size: '41',
        type: 'patike',
      },
      {
        id: 11,
        name: 'Patike Tommy',
        stars: 4.6,
        price: 80,
        tags: ['Muskarci', 'Patike'],
        favorite: false,
        imageUrl: 'https://www.avangardia.rs/files/t/images/slike_proizvoda/t_800_1120/787070-YBR_15114505623b6cc4c47df67007877684.jpg.webp', 
        size: '43',
        type: 'patike',
      },
      {
        id: 12,
        name: 'Patike za kosarku',
        stars: 4.2,
        price: 40,
        tags: ['Muskarci', 'Patike', 'Kosarka'],
        favorite: true,
        imageUrl: 'https://peaksport.rs/wp-content/uploads/2024/03/1254-600x600.jpg', 
        size: '44',
        type: 'patike',
      },
    ]
  }

}
