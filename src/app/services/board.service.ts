import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from 'src/models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl = "http://localhost:8080/boards"

  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.baseUrl}`);
  }

  addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(`${this.baseUrl}`, board)
  }

  deleteBoard(boardId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${boardId}`)
  }

}
