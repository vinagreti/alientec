import * as ArrayHelpers from './array-helpers';

describe('ArrayHelpers', () => {

  ArrayHelpers.sortById([]);

  it('should sort by id', () => {
    const unsorted = [{ id: 3 }, { id: 1 }, { id: 0 }, { id: 5 }];
    const sorted = ArrayHelpers.sortById(unsorted);
    const expected = [{ id: 0 }, { id: 1 }, { id: 3 }, { id: 5 }];
    const resultEqualExpected = JSON.stringify(sorted) === JSON.stringify(expected);
    expect(resultEqualExpected).toBeTruthy();
  });

});
