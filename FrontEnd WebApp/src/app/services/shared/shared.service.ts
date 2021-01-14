import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subject = new Subject<any>();

  // send msg to header compont
  sendMessage(object: any) {
    this.subject.next(object);
  }

  // header recuper msg from produit compont
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
