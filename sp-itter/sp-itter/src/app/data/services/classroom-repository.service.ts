import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, from } from 'rxjs';

import { initializeApp } from 'firebase/app'
import { Firestore, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import { Classroom } from '../model/classroom';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassroomRepositoryService {

  private _classrooms: Classroom[] = [];
  private _classroomsObservable: BehaviorSubject<Classroom[]> = new BehaviorSubject<Classroom[]>([]);
  private _classroomObservable: BehaviorSubject<Classroom> = new BehaviorSubject<Classroom>(null!);

  private _db: Firestore;

  constructor() { 
    this._db = getFirestore(initializeApp(environment.firebase));
  }

  private loadClassrooms(): void {
    const querySnapshot = getDocs(collection(this._db, '/classrooms'));
    querySnapshot.then(((snapshot) => { 
      snapshot.forEach((data) => {
        let classroom: Classroom = data.data() as Classroom;
        this._classrooms.push(new Classroom(data.id, classroom.name));
      })
      this._classroomsObservable.next(this._classrooms);
    })).catch((err) => { });
  }

  private loadClassroom(id: string): void {
    //const q = query(collection(this._db, "cities"), where("capital", "==", true));
    const querySnapshot = getDoc(doc(this._db, `/classrooms/${id}`));
    querySnapshot.then(((snapshot) => { 
        let classroom: Classroom = snapshot.data() as Classroom;
        this._classroomObservable.next(new Classroom(snapshot.id, classroom.name));
    })).catch((err) => { });
  }

  public getClassrooms(): Observable<Classroom[]> {
    this.loadClassrooms();
    return from(this._classroomsObservable);
  }

  public getClassroom(id: string): Observable<Classroom> {
    this.loadClassroom(id);
    return from(this._classroomObservable);
  }
}
