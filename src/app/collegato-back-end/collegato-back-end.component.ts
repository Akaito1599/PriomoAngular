import {Component, inject} from '@angular/core';
import {Book} from '../../model/Book';
import {NgForOf} from '@angular/common';
import {BookDaoService} from '../../servizi/book-dao.service';

@Component({
  selector: 'app-collegato-back-end',
  imports: [
    NgForOf
  ],
  templateUrl: './collegato-back-end.component.html',
  styleUrl: './collegato-back-end.component.css'
})
export class CollegatoBackEndComponent
{
  dao:BookDaoService = inject(BookDaoService);

  books:Book[] = [];

  constructor()
  {
    //con il metodo getAllBooks() ottienamo un Observable<Book[]>
    //subscribe si aspetta come parametro una callback, una funzione da richiamare
    //quando l'Observable viene riempito con un Array di Book
    //in questo caso la callback si occupa di riempire la proprietà books con l'array arrivato
    //dal backend
    this.dao.getAllBooks().subscribe(resp=>this.books=resp);
  }
}
