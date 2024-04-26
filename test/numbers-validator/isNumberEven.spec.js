import NumbersValidator from '../../app/numbers_validator.js'
import { expect } from 'chai'
describe('isNumberEven positiv tests', () => {
  let validator
  beforeEach(() => {
    validator = new NumbersValidator()
  })

  afterEach(() => {
    validator = null
  })

  it('should return true when provided with an even number', () => {
    const validatonResults = validator.isNumberEven(4)
    expect(validatonResults).to.be.equal(true)
  })

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4')
    }).to.throw('[4] is not type of "Number" it is of type "string"')
  })
})
