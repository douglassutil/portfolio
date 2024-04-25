import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Projeto Portfolio',
      title: 'Portfolio',
      width: '120px',
      height: '61px',
      description: '<p>Veja alguns dos meus projetos desenvolvidos.</p>',
      links: [
        {
          name: 'Repositório do Projeto',
          href: 'https://github.com/douglassutil',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      disableClose: true
    });
  }
}
