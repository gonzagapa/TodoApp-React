
export class Todo {
    readonly id:number;
    title:string;
    description: string;
    done:boolean;

    constructor(description:string, title:string){
        this.id = new Date().getMilliseconds() * Math.random();
        this.title = title;
        this.description = description;
        this.done = false;
    }

    
}