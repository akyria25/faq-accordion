import { Component , NgModule } from '@angular/core';
import {  } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faq-accordion';

  faqs = [
    {
      question : "Mollit drumstick prosciutto, boudin ullamco",
      answer: "Bacon ipsum dolor amet corned beef in non ex esse excepteur brisket sunt, tenderloin minim ball tip eiusmod beef ribs. Cillum shoulder dolore shankle swine spare ribs boudin pork.",
      isOpen: false
    },
    {
      question : "Capicola in pork loin ipsum",
      answer: "Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      isOpen: false
    },    
    {
      question : "Veniam velit kielbasa, picanha tongue aute cupim",
      answer: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
      isOpen: false
    },   
    {
    question : "Ribeye deserunt shank, doner spare ribs",
    answer: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. ",
    isOpen: false
   },
  ];

  toggleFAQ(index: number){
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }



}
