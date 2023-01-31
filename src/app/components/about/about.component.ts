import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public appsAbout = [
    {
      image: './../../../assets/images/img-vscode.jpg',
      title: 'VS Code'
    },
    {
      image: './../../../assets/images/img-adobe.jpg',
      title: 'Creative Cloud'
    },
    {
      image: './../../../assets/images/img-dribbble.jpg',
      title: 'Dribbble'
    },
    {
      image: './../../../assets/images/img-telegram.jpg',
      title: 'Telegram'
    },
    {
      image: './../../../assets/images/img-slack.jpg',
      title: 'Slack'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
