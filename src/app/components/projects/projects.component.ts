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
      titleProject: 'Inclusión asegurados',
      description: 'Para garantizar la transparencia sobre el ingreso de la información al tomar un seguro, se crea el proyecto Inclusión Asegurados en el cual ayudamos a los usuarios a través de un proceso guiado la toma de su inclusión y la de sus familiares.',
      imageIn: './../../../assets/images/project1-sura-offcanvas.jpg',
      link: 'https://xd.adobe.com/view/704a8277-4450-41e0-91e2-50dffee0de5e-2519/'
    },
    {
      client: 'xm',
      clientName: 'XM',
      imageOut: './../../../assets/images/project2@2x.png',
      class: 'project-2',
      titleProject: 'Proyecto: Portal Web',
      description: 'XM contaba con un portal en sharepoint el cual no le permitia tener mucha interacción y buena experiencia para los usuarios finales. Es por esto que se decide migrar a drupal y desarrollar los componentes funcionales de indicadores y gráficas en Angular y Java.',
      imageIn: './../../../assets/images/project2-xm-offcanvas.jpg',
      link: 'https://www.xm.com.co/'
    },
    {
      client: 'fp',
      clientName: 'Fondo Presente',
      imageOut: './../../../assets/images/project3@2x.png',
      class: 'project-3',
      titleProject: 'Fondo de ahorros Grupo Presente',
      description: 'Este proyecto fué uno de los más significativos para mi ya que se realizó una muy buena investigación de usuario, un muy buen prototipo y cuando plasmamos esto en el desarrollo fué un éxito. La idea principal del proyecto es brindar una solución de administración para los agentes de Fondo Presente la cual es una aplicación del Grupo Éxito y se requeria una aplicación que pudiera tomar todas las solicitudes que este Fondo recibe por parte de sus empleados.',
      imageIn: './../../../assets/images/project3-fondopresente-offcanvas.jpg',
      link: ''
    },
    {
      client: 'vf',
      clientName: 'Vegaflor',
      imageOut: './../../../assets/images/project4@2x.png',
      class: 'project-4',
      titleProject: 'Aplicación Vegaflor',
      description: 'En este proyecto se realizó. consultoria UX, Laboratorios con usuarios, UI, Desarrollo. El objetivo del proyecto era organizar el inventario y despacho a nivel Colombia y Miami la distribución de las flores con sus diferentes variedades que se solicitan y venden a las distribuidoras a nivel nacional e internacional.',
      imageIn: './../../../assets/images/project5-vegaflor-offcanvas.jpg',
      link: ''
    },
    {
      client: 'arkd',
      clientName: 'ARKD',
      imageOut: './../../../assets/images/project5@2x.png',
      class: 'project-5',
      titleProject: 'Sitio web ARKD',
      description: 'Un proyecto full UI, en el cual participé hace poco y aún está en desarrollo. La idea principal es un sitio web donde se realizará la inscripción a torneos de video juegos en todas las plataformas (xbox, ps5, pc).',
      imageIn: './../../../assets/images/project4-arkd-offcanvas.jpg',
      link: 'https://xd.adobe.com/view/00c730d4-d946-4e52-a07c-de75e3b4781a-5594/'
    },
    {
      client: 'arus',
      clientName: 'ARUS',
      imageOut: './../../../assets/images/project6@2x.png',
      class: 'project-6',
      titleProject: 'Sistema de diseño',
      description: 'Con motivo de tener un orden consecuente en el desarrollo de las aplicaciones que ARUS pueda llegar a tener; se decide realizar un sistema de diseño con todos los elementos gráficos atómicos que se necesitan para la construcción de nuevos componentes o proyectos.',
      imageIn: './../../../assets/images/project6-arus-offcanvas.jpg',
      link: 'https://sistemasdediseno.ceiba.com.co/arus/'
    },
    {
      client: 'spotyfy',
      clientName: 'Spotify',
      imageOut: './../../../assets/images/project7@2x.png',
      class: 'project-7',
      titleProject: 'Integración Api Spotify',
      description: 'El objetivo de esté proyecto fué conectarse a la Api de Spotify y realizar una petición a través de una promesa (fetch) para recibir constantemente los datos y en el front poder visualizar los datos de un artista y organizar su presentación.',
      imageIn: './../../../assets/images/project7-spotify-offcanvas.jpg',
      link: 'https://portafolio-santiago-restrepo.web.app/clienteSpotify/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
