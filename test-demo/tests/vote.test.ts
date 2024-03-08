import { VoteService } from "../src/vote";

describe('vote tests', () => {
    let voteService: VoteService;

    beforeEach(() => {
        // Arrange
        voteService = new VoteService(0);
    });

    test('should return 0 when nothing is voted', () => {
        // Arrange
        //let voteService: VoteService = new VoteService(0);

        // Act

        // Assert
        expect(voteService.currentVote).toBe(0);
    });

    test('should increase vote when voteUp() is called', () => {
        // Arrange
        //let voteService: VoteService = new VoteService(0);
        
        // Act
        voteService.voteUp();

        // Assert
        expect(voteService.currentVote).toBe(1);
    })

    test('should NOT decrease vote when voteDown() is called by start 0', () => {
        // Arrange
        //let voteService: VoteService = new VoteService(0);
        
        // Act
        voteService.voteDown();

        // Assert
        expect(voteService.currentVote).toBe(0);
    })

    test('should add 2 votes when voteUp() is called twice', () => {
        // Arrange
        //let voteService: VoteService = new VoteService(0);
        
        // Act
        voteService.voteUp();
        voteService.voteUp();

        // Assert
        expect(voteService.currentVote).toBe(2);
    })
});