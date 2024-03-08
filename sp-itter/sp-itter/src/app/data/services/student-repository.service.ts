import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, from } from 'rxjs';

import { initializeApp } from 'firebase/app';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import { Student } from '../model/student';
import { environment } from '../../../environment/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsRepositoryService {

  private _students: Student[] = [];
  private _studentsObservable: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  private _studentObservable: BehaviorSubject<Student> = new BehaviorSubject<Student>(null!);

  private _db: Firestore;

  constructor(public _accountService: AccountService) { 
    this._db = getFirestore(initializeApp(environment.firebase));
  }

  private loadStudents(classroomId: string): void {
    const querySnapshot = getDocs(collection(this._db, `/classrooms/${classroomId}/students`));
    querySnapshot.then(((snapshot) => { 
      snapshot.forEach((data) => {
        let student: Student = data.data() as Student;
        this._students.push(new Student(data.id, student.username));
      })
      //console.log(this._accountService?.userName ?? "User unknown");
      this._studentsObservable.next(this._students);
    })).catch((err) => { });
  }

  private loadStudent(classroomId: string, studentId: string): void {
    const querySnapshot = getDoc(doc(this._db, `/classrooms/${classroomId}/students/${studentId}`));
    querySnapshot.then(((snapshot) => { 
        let classroom: Student = snapshot.data() as Student;
        this._studentObservable.next(new Student(snapshot.id, classroom.username));
    })).catch((err) => { });
  }

  public getStudents(classroomId: string): Observable<Student[]> {
    this.loadStudents(classroomId);
    return from(this._studentsObservable);
  }

  public getStudent(classroomId: string, studentId: string): Observable<Student> {
    this.loadStudent(classroomId, studentId);
    return from(this._studentObservable);
  }
}
