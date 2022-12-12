import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor(private http: HttpClient) { }

    getCursos() {
        /*
        Filtrar pelo campus...

        return this.http.get<any>('assets/cursos.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
        */
        return [
            { id: 1, nome: "Ciência da Computação" },
            { id: 2, nome: "Engenharia Ambiental" },
            { id: 3, nome: "Química" },
            { id: 4, nome: "Engenharia Mecânica" }
        ];
    }
}