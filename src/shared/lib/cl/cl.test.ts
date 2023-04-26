import { cl } from './cl';

describe('cl()', () => {
  it('should return an empty string if no arguments are passed in', () => {
    expect(cl()).toEqual('');
  });

  it('should return a class name string when given a single string argument', () => {
    expect(cl('my-class')).toEqual('my-class');
  });

  it('should ignore falsy values and return only valid class names', () => {
    expect(cl('class1', undefined, null, false, 'class2')).toEqual(
      'class1 class2'
    );
  });

  it('should extract the key from an object as a class name if its value is truthy', () => {
    expect(
      cl('class1', { class2: true }, { class3: false }, { class4: 0 })
    ).toEqual('class1 class2');
  });
});
