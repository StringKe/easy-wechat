import { accessToken } from './AccessToken';

describe('accessToken', () => {
  it('should work', () => {
    expect(accessToken()).toEqual('AccessToken');
  });
});
