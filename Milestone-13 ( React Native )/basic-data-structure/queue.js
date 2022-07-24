// First in First Out => FIFO

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
}

const premiks = new Queue();
premiks.enqueue('Ashiq')
premiks.enqueue('Dewan')
premiks.enqueue('Prem')
premiks.enqueue('Sagor')
premiks.enqueue('Raj')
premiks.dequeue();
premiks.dequeue();
premiks.dequeue();
console.log(premiks.queue);