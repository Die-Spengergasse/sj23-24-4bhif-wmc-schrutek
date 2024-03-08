import { VoteService } from "./vote.js"; 

const voteService: VoteService = new VoteService(0);
voteService.voteUp();
voteService.voteUp();
voteService.voteUp();
voteService.voteUp();
voteService.voteUp();

voteService.currentVote = 1;

console.log(voteService.currentVote);
