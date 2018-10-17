import { Observable } from 'rxjs';

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

function addItem(val:any) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}