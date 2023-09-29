import { BehaviorSubject, Observable } from 'rxjs';

function consumeObserver() {
    let observer = {
        next: (data: string) => { console.log(data); },
        error: (err: string) => { console.log(err); },
        complete: () =>  console.log('Completed')
    }
    return observer;
}

function createObserver(observer) {
    let observable = new Observable<string>((o) => {
        let i = 42;
        //setTimeout(() => o.next('i=' + i++), 2000);
        o.next('i=' + i++); 
        o.next('i=' + i++);
        //o.error('Fehler!!');
        //o.complete()
    });
    observable.subscribe(observer);

    console.log('weitere Dinge.........');
}

let myObservable: BehaviorSubject<string> = new BehaviorSubject<string>('init');

// Im Service (Producer)
function changeMyObservable() {
    setTimeout(() => {
        myObservable.next('myObservable=1');
        myObservable.next('myObservable=2');
        myObservable.next('myObservable=3');
    }, 2000);
}

// In der Komponente (Consumer)
function subscribeToMyObservable() {
    myObservable.subscribe((val: string) => { console.log(val) });
}

// const observer = consumeObserver();
// createObserver(observer);

changeMyObservable();
subscribeToMyObservable();
