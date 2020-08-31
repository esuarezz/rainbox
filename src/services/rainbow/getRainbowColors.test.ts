import {getRainbowColors} from './getRainbowColors'

const hexadecimalMock = ['#ff0000', '#ffa900', '#4c4d4c', '#e1d9d6', '#bcaad6']

global.fetch = jest.fn().mockImplementation(() => {
  var p = new Promise((resolve) => {
    resolve({
      json: function() { 
        return hexadecimalMock
      }
    });
  });
  return p;
});


//In out useCase always return a 5 colors in hexadecimal
describe('Get Colors from lambda ', () => {
  test('return an array', async() => {
    expect.assertions(1)
    expect(Array.isArray(await getRainbowColors())).toBeTruthy()
  })
  test('return hexadecimal number', async() => {
    const colors = await getRainbowColors()
    expect(colors[0].indexOf('#')===0).toBeTruthy()
  })
})
