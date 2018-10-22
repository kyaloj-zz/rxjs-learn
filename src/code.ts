import { Observable, Subject, BehaviorSubject } from 'rxjs';

// Observable
let observable = Observable.create((observer:any) => {
  observer.next("Hey ya'll")
  observer.next("How you doing?")
  setInterval(() => observer.next('I am good'), 2000);
});

let observer = observable.subscribe(
  (data:any) => addItem(data),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

setTimeout(() => observer.unsubscribe(), 6001);


// Subject

let subject = new Subject();


subject.subscribe(
  (data: any) => addItem('Observer 1 ' + data),
  (error: any) => addItem(error),
  () => addItem('Observer1 Done')
);

subject.next('The first thing has been sent')

var observer2 = subject.subscribe(
    data => addItem('Observer 2: '+ data)
)

subject.next('The second thing has been sent');
subject.next('A third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');

// BehaviorSubject

let behaviorSubject = new BehaviorSubject('Behavior Guy');

behaviorSubject.next('...Behavior Guy is about to subscribe...');
behaviorSubject.subscribe(
  (data: any) => addItem('B guy' + data),
  (error: any) => addItem(error),
  () => addItem('Done')
);

function addItem(val:any) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}