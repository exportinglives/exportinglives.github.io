import {Component, OnInit} from '@angular/core';
import {Petition} from './Models/Petition';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css'],
})
export class PetitionsComponent implements OnInit {
  petitions: Array<Petition> = [];

  constructor() {}

  ngOnInit() {
    this.petitions.push(
      new Petition(
        '#NãoExportemVidas: ',
        'Pelo fim da exportação de animais nos portos do estado de São Paulo ',
        new URL(
          // tslint:disable-next-line:max-line-length
          'https://www.change.org/p/pelo-fim-da-exporta%C3%A7%C3%A3o-cruel-de-animais-em-portos-do-estado-de-s%C3%A3o-paulo-n%C3%A3oexportemvidas'
        )
      ),
      new Petition(
        '#ExportandoVidas: ',
        'Consulta pública para proibir a exportação de animais vivos destinados ao abate ',
        new URL(
          // tslint:disable-next-line:max-line-length
          'https://www12.senado.leg.br/ecidadania/visualizacaomateria?id=134057&voto=favor'
        )
      )
    );
  }
}
