import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



  lista:string[] = ["uno", "dos", "tres","cuatro","cinco"]
  img:string = 'https://www.ortopedicoswyw.com/file/Producto/3302_PHOTO_2020_09_01_16_27_09.jpg'

  //variable:tipodedato = valor 
/*  car: object[]= [
    {
      name: "Bandeja Paisa",
      descripcion: "Platillo exotico de la zona mas peligrosa de colombia",
      imgUrl: "https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif"
    },
    {
      name: "Sancocho Trifasico",
      descripcion: "Platillo exotico de la zona mas rosa de colombia",
      imgUrl: "https://cdn.colombia.com/gastronomia/2017/01/05/sancocho-trifasico-3123.jpg"
    },
    {
      name: "Frijolada",
      descripcion: "Platillo de colombia fomoso por su variedad de carnes",
      imgUrl: "https://lafrijolada.com/sitio/wp-content/uploads/2020/06/frijolada-bandeja-2.jpg"
    },
    {
      name: "Moñona",
      descripcion: "Platillo popular colombiano mas conocido como desayuno y almuerzo",
      imgUrl: "https://pbs.twimg.com/media/DsS1i8RXgAENrQ5.jpg"
    },
    {
      name: "Ajiaco",
      descripcion: "Platillo Colombiano donde culturalmente se le adiciona crema de leche",
      imgUrl: "https://d1uz88p17r663j.cloudfront.net/original/b0c08e47afd3a2d0868a897cbf1bb958_ajiaco-img.jpg"
    },
    {
      name: "Empanadas",
      descripcion: "Platillo Colombiano donde culturalmente se le adiciona crema de leche",
      imgUrl: "https://d1uz88p17r663j.cloudfront.net/original/b0c08e47afd3a2d0868a897cbf1bb958_ajiaco-img.jpg"
    }
  ]*/

  constructor() { }

  ngOnInit(): void {
  }

}
