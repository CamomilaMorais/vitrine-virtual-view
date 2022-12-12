import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [CursosService]
})
export class AccountComponent implements OnInit {

  cursos: any[] = [];
  filteredCursos: any[] = [];
  valueCurso: any;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    // this.cursos = this.cursosService.getCursos();
  }

  searchCursos(event: { query: any; }): void {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.cursos.length; i++) {
      let country = this.cursos[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCursos = filtered;
  }

}
