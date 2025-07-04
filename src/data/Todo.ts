
export class Todo {
    readonly id:number;
    description: string;
    done:boolean;

    constructor(description:string){
        this.id = new Date().getMilliseconds() * Math.random();
        this.description = description;
        this.done = false;
    }

    
}