import { platformPay } from './PlatformPay';

describe('platformPay', () => {
  it('should work', () => {
    expect(platformPay()).toEqual('PlatformPay');
  });
});
