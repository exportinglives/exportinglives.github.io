import {Component, OnInit} from '@angular/core';
import {Document} from './Models/Document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  documents: Array<Document> = [];

  constructor() {}

  onClick(document) {
    window.open(document.src)
  }

  ngOnInit() {
    this.documents.push(
      new Document(
        'Laudo veterinário feito por decisão judicial',
        './../../assets/doc/Laudo da veterinária Magda Regina realizado no Navio Nada em fevereiro de 2018.pdf'
      ),
      new Document(
        'Pedido de liminar',
        './../../assets/doc/Pedido de liminar para impedir a exportação de animais vivos.pdf'
      ),
      new Document(
        'Parecer do procurador geral da República',
        './../../assets/doc/Parecer do procurador geral da República condenando a exportação de animais vivos.pdf'
      ),
      new Document(
        'PL 31 é plenamente Constitucional',
        './../../assets/doc/PL 31 é plenamente Constitucional.pdf'
      )
    );
  }
}
