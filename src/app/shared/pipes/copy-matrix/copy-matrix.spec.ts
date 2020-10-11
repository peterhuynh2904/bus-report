import { CopyMatrixPipe } from './copy-matrix.pipe';

describe('CopyMatrixPipe', () => {
  let pipe: CopyMatrixPipe;

  beforeEach(() => {
    pipe = new CopyMatrixPipe({
      page: { title: 'Page Title' }
    });
  });

  it('should transform the copy path to text then exist', () => {
    expect(pipe.transform('page.title')).toBe('Page Title');
  });

  it("should return the path when key doesn't exist", () => {
    expect(pipe.transform('page.description')).toBe('page.description');
    expect(pipe.transform('page.description', true)).toBe('page.description');
  });

  it("should return undefined when the path when key doesn't exist and returnKey set to false", () => {
    expect(pipe.transform('page.description', false)).toBeUndefined();
  });
});
