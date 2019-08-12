
import Test from './index';



describe('basic test', () => {
    var elm;
  beforeEach(() => {

    elm = document.createElement('div');

    elm.id = 'range';

    console.log(elm);

    document.body.appendChild(elm);

  });

  test('should not crash', () => {

    expect(new Test(elm)).toBeDefined();

  });

});
