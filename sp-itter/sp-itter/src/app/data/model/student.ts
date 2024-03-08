export class Student {
    
    constructor(id: string, username: string) { 
        this.id = id;
        this.username = username; 
     }
    
    public id: string;
    public username: string = "";
}