import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faIdBadge
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: [`
    .icon-list {
      font-size: 1.5rem;
      position: fixed;
      top: 0;
      right: 0;

      display: flex;
    }

    a {
      color: inherit;
      margin: 0.5rem;
    }
  `]
})
export class SocialComponent {
  icons = [
    {
      name: 'Github',
      title: 'Check out my Github',
      icon: faGithub,
      link: 'https://github.com/chrismilson'
    },
    {
      name: 'Linkedin',
      title: '...or my Linkedin',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/chris-milson/'
    },
    {
      name: 'CV',
      title: 'Have a look at my CV too',
      icon: faIdBadge,
      link: 'assets/CV.pdf'
    }
  ];
}
