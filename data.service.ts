import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  addMessage(message: string) {
    this.messageSource.next(message)
  }

 
}
