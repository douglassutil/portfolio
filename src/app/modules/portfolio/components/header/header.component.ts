import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public fullName = "Douglas Campos Sutil";
  public myPrincipalStack = "Full-Stack Angular | C# | Flutter";
  public myLocation = "Vitória, Espírito Santo, Brasil";
  public moreAboutMe = `Formado em Sistemas de Informação pelo IFES. Atuo como desenvolvedor 
  sênior e me especializei em Front-end (Angular) e Mobile(Flutter/Dart). 
  Além disso,trabalhei com diversas tecnologias ao longo de minha trajetória 
  profissional, entre elas: C#/.NET, C#/.NET Core,
  Javascript, HTML, CSS, SQL Server, entre outras.`
}
