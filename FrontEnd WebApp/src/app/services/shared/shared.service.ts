
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subject = new Subject<any>();
  private removeSubject=new Subject<any>();
  private commandeSubject=new Subject<any>();
  private removeCommandeSubject=new Subject<any>();
  private subjectProfile = new Subject<any>();


  sendMessage(object: any) {
    this.subject.next(object );
  }



  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
