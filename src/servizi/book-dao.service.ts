import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookDaoService
{
  //identico a
  //@Autowired
  //HttpClient http;
  http:HttpClient = inject(HttpClient);



  //Observable è ciò che viene utilizzato per gestire ASINCRONICITÀ in Angular
  getAllBooks():Observable<Book[]>
  {
    return this.http.get<Book[]>('/api/books');
    //this.http.get('uri') manda la request
    //il <Book[]> è il tipo in cui deve convertire il JSON
    //un Observable è una scatola che un giorno conterrà qualcosa
    //in questo caso un array di Book
  }
}
