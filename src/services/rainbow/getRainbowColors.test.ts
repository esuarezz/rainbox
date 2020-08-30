import {getRainbowColors} from './getRainbowColors'

describe('Get Colors from lambda ', () => {
    test('returns array', () => {
      expect(Array.isArray(getRainbowColors)).toBe(true);
    })
    test('lenght is more than 0', () => {
      expect((getRainbowColors).length).toBeGreaterThan(5);
    })
  

})
  
