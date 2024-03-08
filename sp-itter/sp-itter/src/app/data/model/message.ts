export class Message {

    constructor(id: string, body: string, timeStamp: Date, username: string, isOwn: boolean) {
        this.id = id;
        this.body = body;
        this.timeStamp = timeStamp;
        this.username = username;
        this.isOwn = isOwn;
    }

    public id: string;
    public body: string;
    public timeStamp: Date;
    public username: string;
    public isOwn: boolean;
}