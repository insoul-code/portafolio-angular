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
      title: 'Frontend Development',
      description: 'I create and develop all the interaction in the Front end of the application; always using three essential components HTML5, CSS3 and Javascript, so we can create a functional application!',
    },
    {
      icon: './../../../assets/images/skill-2.svg',
      title: 'UX Consulting',
      description: 'My role as UX/UI has allowed me to know in depth research and consulting methodologies to perform research and labs with users which is key for a good result.',
    },
    {
      icon: './../../../assets/images/skill-3.svg',
      title: 'UI interface design',
      description: 'Before being a developer I am a designer. When designing interfaces we create and capture the graphical needs that the application according to the findings with the users requires.',
    },
    {
      icon: './../../../assets/images/skill-4.svg',
      title: 'Team workshops',
      description: "Teaching is learning twice! I've always enjoyed sharing knowledge and coaching teams that are looking for professional maturity in HTML, CSS, Javascript, UX or UI.",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
