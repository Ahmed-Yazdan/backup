// Last in first out => LIFO
class Stack {
    constructor() {
        this.stack = []
    }
    add(element){
        this.stack.push(element)
    }
    remove(){
        return this.stack.pop();
    }
}

const plates = new Stack();
plates.add('Abul')
plates.add('Babul')
plates.add('Kabul')
plates.add('Dabul')
plates.add('Eabul')
plates.remove()
plates.remove()
plates.remove()
plates.remove()
console.log(plates.stack)
