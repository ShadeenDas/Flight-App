import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  carouselImages = [
    '../../assets/flightImages/aeroplane_img.jpg',
    'https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://images.moneycontrol.com/static-mcnews/2021/09/Air-India.jpg?impolicy=website&width=770&height=431',
  ];
  constructor() {}

  ngOnInit(): void {}
}
