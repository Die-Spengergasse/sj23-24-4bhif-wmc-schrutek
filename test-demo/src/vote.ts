class VoteService {

    constructor(private _currentVote: number) {
        _currentVote = 0;
    }

    public get currentVote() {
        return this._currentVote;
    }
    public set currentVote(v: number) {
        this._currentVote = v;
    }

    public voteUp(): void {
        this._currentVote++;
    }

    public voteDown(): void {
        if (this._currentVote > 0)
        {
            this._currentVote--;
        }
    }

}

export { VoteService }
