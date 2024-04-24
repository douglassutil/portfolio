import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Analista Desenvolvedor Sênior',
        p: 'AEVO | 2020 - 2024',
      },
      text: '<p>Desenvolvimento de Sistemas Web (Angular + .NetCore) e Mobile (Flutter).</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor',
        p: 'Autoglass | 2020',
      },
      text: '<p>Desenvolvimento de Sistemas Web (Angular + .NetCore).</p>',
    },
    {
      summary: {
        strong: 'Analista de Sistemas',
        p: "Code N'App | 2020",
      },
      text: '<p>Principal atividade foi o desenvolvimento de Sistemas Web (Razor + Asp.Net Core) e Mobile (Flutter).</p>',
    },
    {
      summary: {
        strong: 'Analista de Sistemas',
        p: 'CSC Serviços (Grupo Dadalto) | 2019',
      },
      text: `<p>Desenvolvimento de novas funcionalidades para os sistemas do grupo, edição e manutenção de sistemas legado.</p>
    <p>Principais tecnologias utilizadas: C#, Visual Basic, JavaScript, Sql Server, Visual Basic Script, ASP.Net, HTML, CSS, Flutter(Dart), Angular.</p>`,
    },
    {
      summary: {
        strong: 'Estagiário de Desenvolvimento',
        p: 'CSC Serviços (Grupo Dadalto) | 2018',
      },
      text: `<p>Desenvolvimento de novas funcionalidades para os sistemas do grupo, edição e manutenção de sistemas legado.</p>
    <p>Principais tecnologias utilizadas: C#, Visual Basic, JavaScript, Sql Server, Visual Basic Script, ASP.Net, HTML, CSS, Flutter(Dart), Angular.</p>`,
    },
    {
      summary: {
        strong: 'Estagiário de Desenvolvimento',
        p: 'Conexos Consultoria | 2018',
      },
      text: `<p> Migração de um ERP de comércio exterior em Oracle forms para web. Trabalhei na equipe de front-end desenvolvendo em JavaScript(Angular.js).</p>`,
    },
    {
      summary: {
        strong: 'Estagiário de Desenvolvimento',
        p: 'Prefeitura Municipal da Serra | 2018',
      },
      text: '<p>Desenvolvimento de pequenos sistemas web utilizando as linguagens PHP, JavaScript, framework Bootstrap.</p>',
    },
  ]);
}
