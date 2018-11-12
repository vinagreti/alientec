import * as NumberHelpers from './number-helpers';

describe('NumberHelpers', () => {

  const ramdomUID = NumberHelpers.ramdomUid();

  it('should create ramdom uid', () => {
    expect(ramdomUID).toBeTruthy();
  });

});
