import NumbersValidator from '../../app/numbers_validator.js'
import { expect } from 'chai'

describe('NumbersValidator', () => {
  let validator

  beforeEach(() => {
    validator = new NumbersValidator()
  })

  afterEach(() => {
    validator = null
  })

  describe('isNumberEven', () => {
    it('should return true when provided with an even number', () => {
      const validationResult = validator.isNumberEven(4)
      expect(validationResult).to.be.equal(true)
    })

    it('should return false when provided with an odd number', () => {
      const validationResult = validator.isNumberEven(5)
      expect(validationResult).to.be.equal(false)
    })

    it('should throw an error when provided with null', () => {
      expect(() => validator.isNumberEven(null)).to.throw('[null] is not of type "Number" it is of type "object"')
    })

    it('should throw an error when provided with undefined', () => {
      expect(() => validator.isNumberEven(undefined)).to.throw('[undefined] is not of type "Number" it is of type "undefined"')
    })

    it('should throw an error when provided a string', () => {
      expect(() => validator.isNumberEven('4')).to.throw('[4] is not of type "Number" it is of type "string"')
    })
  })

  describe('getEvenNumbersFromArray', () => {
    it('should return an empty array when an empty array is provided', () => {
      const result = validator.getEvenNumbersFromArray([])
      expect(result).to.be.an('array').that.is.empty
    })

    it('should return an array containing only even numbers when an array with both even and odd numbers is provided', () => {
      const result = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6])
      expect(result).to.have.members([2, 4, 6])
    })

    it('should throw an error when provided with an array containing non-number elements', () => {
      expect(() => validator.getEvenNumbersFromArray([1, 2, '3', 4])).to.throw('[1,2,3,4] is not an array of "Numbers"')
    })
  })

  describe('isAllNumbers', () => {
    it('should return true when an array containing only numbers is provided', () => {
      const result = validator.isAllNumbers([1, 2, 3])
      expect(result).to.be.true
    })

    it('should return false when an array containing non-number elements is provided', () => {
      const result = validator.isAllNumbers([1, 2, '3'])
      expect(result).to.be.false
    })

    it('should throw an error when provided with a non-array value', () => {
      expect(() => validator.isAllNumbers(123)).to.throw('[123] is not an array')
    })
  })

  describe('isInteger', () => {
    it('should return true when an integer is provided', () => {
      const result = validator.isInteger(5)
      expect(result).to.be.true
    })

    it('should return false when a non-integer number is provided', () => {
      const result = validator.isInteger(3.14)
      expect(result).to.be.false
    })

    it('should throw an error when provided with a non-number value', () => {
      expect(() => validator.isInteger('abc')).to.throw('[abc] is not a number')
    })
  })
})