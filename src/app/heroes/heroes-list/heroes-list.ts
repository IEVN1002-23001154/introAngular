import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }

  heroes: any[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'Goku',
      description: 'Kame H',
      race: 'Saiyan',
      ki: '60.000.000'
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'Vegeta',
      description: '',
      race: 'Saiyan',
      ki: '54.000.000'
    },
    {
      imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre: 'Piccolo',
      description: '',
      race: 'Namekian',
      ki: '2.000.000'
    },
    {
      imagen: 'https://dragonball-api.com/characters/gohan.webp',
      nombre: 'Gohan',
      description: '',
      race: 'Human/Saiyan',
      ki: '50.000.000'
    }
  ];
}