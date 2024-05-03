import { ForbiddenNamePipe } from './forbidden-name.pipe';

describe('Forbidden Name Pipe', () => {
  let forbiddenNamePipe: ForbiddenNamePipe;

  beforeEach(() => {
    forbiddenNamePipe = new ForbiddenNamePipe();
  })

  it('create an instance', () => {
    const pipe = new ForbiddenNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value, when no forbidden text', () => {
    // Arrange
    const actual: string = "Martin";
    const expected: string = "Martin";
    
    // Act
    let result: string = forbiddenNamePipe.transform(actual, "Homer");

    // Assert
    expect(result).toBe(expected);
  })
});
