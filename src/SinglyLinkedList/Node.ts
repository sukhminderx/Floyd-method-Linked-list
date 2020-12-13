export class Node implements INode {
    data: number;
    next: Node | null;
    constructor(el: number) { // ideally any 
        this.data = el;
        this.next = null;
    }
    set _next(node: Node | null) {
        this.next = node;
    }
    get _next() {
        return this.next;
    }
    get _data() {
        return this.data;
    }
}

interface INode {    
    data: number;
    next: Node | null;
}

