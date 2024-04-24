import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '../../../../../assets/icons/knowledge/csharp.svg',
      alt: 'Ícone CSharp',
    },
    {
      src: '../../../../../assets/icons/knowledge/html5.svg',
      alt: 'Ícone Html5',
    },
    {
      src: '../../../../../assets/icons/knowledge/css3.svg',
      alt: 'Ícone CSS3',
    },
    {
      src: '../../../../../assets/icons/knowledge/javascript.svg',
      alt: 'Ícone JavaScript',
    },
    {
      src: '../../../../../assets/icons/knowledge/angular.svg',
      alt: 'Ícone Angular',
    },
  ]);
}
