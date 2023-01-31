import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills = [
    {
      icon: './../../../assets/images/skill-1.svg',
      title: 'Desarrollo Frontend',
      description: 'Creo y desarrollo toda la interacción en el Front de la aplicaciones; siempre usando tres componentes imprescindibles HTML5, CSS3 y Javascript. ¡Así podemos crear una aplicación funcional!.',
    },
    {
      icon: './../../../assets/images/skill-2.svg',
      title: 'Consultoria UX',
      description: 'Mi rol como UX/UI me ha permitido conocer a profundidad metodologías de investigación y consultoria para realizar investigación y laboratorios con usuarios lo cual es clave para un buen resultado.',
    },
    {
      icon: './../../../assets/images/skill-3.svg',
      title: 'Diseño de interfaces UI',
      description: 'Antes que desarrollador soy Diseñador. Al diseñar interfaces creamos y capturamos las necesidades gráficas que la aplicación de acuerdo con los hallazgos con los usuarios requiere.',
    },
    {
      icon: './../../../assets/images/skill-4.svg',
      title: 'Workshops para equipos',
      description: '¡Enseñar es aprender dos veces!. Siempre me ha gustado compartir el conocimiento y entrenar equipos que están en busca de una madurez profesional en HTML, CSS, Javascript, UX o UI.',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
