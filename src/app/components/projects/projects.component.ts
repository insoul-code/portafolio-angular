import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public gridProject = [
    {
      client: 'sura',
      clientName: 'SURA',
      imageOut: './../../../assets/images/project1@2x.png',
      class: 'project-1',
      titleProject: 'Inclusion of insured',
      description: 'In order to guarantee transparency in the entry of information when taking out insurance, the Insured Inclusion project was created, in which we help users through a guided process to take out their inclusion and that of their family members.',
      imageIn: './../../../assets/images/project1-sura-offcanvas.jpg',
      link: 'https://xd.adobe.com/view/704a8277-4450-41e0-91e2-50dffee0de5e-2519/'
    },
    {
      client: 'xm',
      clientName: 'XM',
      imageOut: './../../../assets/images/project2@2x.png',
      class: 'project-2',
      titleProject: 'Web Portal',
      description: 'XM had a sharepoint portal which did not allow much interaction and good experience for end users. That is why it was decided to migrate to drupal and develop the functional components of indicators and graphs in Angular and Java.',
      imageIn: './../../../assets/images/project2-xm-offcanvas.jpg',
      link: 'https://www.xm.com.co/'
    },
    {
      client: 'fp',
      clientName: 'Fondo Presente',
      imageOut: './../../../assets/images/project3@2x.png',
      class: 'project-3',
      titleProject: 'Grupo Presente Savings Fund',
      description: 'This project was one of the most significant for me because we did a very good user research, a very good prototype and when we translated this into the development it was a success. The main idea of the project is to provide a management solution for the agents of Fondo Presente, which is an application of Grupo Éxito, and we needed an application that could take all the requests that this Fund receives from its employees.',
      imageIn: './../../../assets/images/project3-fondopresente-offcanvas.jpg',
      link: ''
    },
    {
      client: 'vf',
      clientName: 'Vegaflor',
      imageOut: './../../../assets/images/project4@2x.png',
      class: 'project-4',
      titleProject: 'Vegaflor Application',
      description: 'In this project we performed. UX consulting, User Labs, UI, Development. The objective of the project was to organize the inventory and dispatch in Colombia and Miami the distribution of flowers with their different varieties that are requested and sold to distributors nationally and internationally.',
      imageIn: './../../../assets/images/project5-vegaflor-offcanvas.jpg',
      link: ''
    },
    {
      client: 'arkd',
      clientName: 'ARKD',
      imageOut: './../../../assets/images/project5@2x.png',
      class: 'project-5',
      titleProject: 'ARKD website',
      description: 'A full UI project, in which I participated recently and is still under development. The main idea is a website where you can register to video game tournaments on all platforms (xbox, ps5, pc).',
      imageIn: './../../../assets/images/project4-arkd-offcanvas.jpg',
      link: 'https://xd.adobe.com/view/00c730d4-d946-4e52-a07c-de75e3b4781a-5594/'
    },
    {
      client: 'arus',
      clientName: 'ARUS',
      imageOut: './../../../assets/images/project6@2x.png',
      class: 'project-6',
      titleProject: 'Design system',
      description: 'In order to have a consistent order in the development of the applications that ARUS may have, it was decided to create a design system with all the atomic graphic elements that are needed for the construction of new components or projects.',
      imageIn: './../../../assets/images/project6-arus-offcanvas.jpg',
      link: 'https://sistemasdediseno.ceiba.com.co/arus/'
    },
    {
      client: 'spotyfy',
      clientName: 'Spotify',
      imageOut: './../../../assets/images/project7@2x.png',
      class: 'project-7',
      titleProject: 'Spotify Api Integration',
      description: 'The objective of this project was to connect to the Spotify Api and make a request through a promise (fetch) to constantly receive the data and in the front end to visualize the data of an artist and organize his presentation.',
      imageIn: './../../../assets/images/project7-spotify-offcanvas.jpg',
      link: 'https://portafolio-santiago-restrepo.web.app/clienteSpotify/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
