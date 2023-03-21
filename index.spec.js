import {
    describe,
    expect,
    test
  } from "@jest/globals";
  import wordle from "./index.js"

describe('Base tests to make sure the algorithm works as intended', () => {

    test('Are output in the initial order and capital letters ', () => {
        const res = wordle("abcde", "abcde")
        expect(res[0].letter).toBe('A')
        expect(res[1].letter).toBe('B')
        expect(res[2].letter).toBe('C')
        expect(res[3].letter).toBe('D')
        expect(res[4].letter).toBe('E')
        
    })
    test('hallå != cykla', () => {
        const res = wordle("hallå", "cykla")
        expect(res[0].result).toBe('incorrect')
        expect(res[1].result).toBe('missplaced')
        expect(res[2].result).toBe('incorrect')
        expect(res[3].result).toBe('correct')
        expect(res[4].result).toBe('incorrect')

        expect(res[0].letter).toBe('H')
        expect(res[1].letter).toBe('A')
        expect(res[2].letter).toBe('L')
        expect(res[3].letter).toBe('L')
        expect(res[4].letter).toBe('Å')
    })
    test('result of 5 L on cykla should show four incorrect and one correct at index 3', () => {
        const res = wordle("lllll", "cykla")
        expect(res[0].result).toBe('incorrect')
        expect(res[1].result).toBe('incorrect')
        expect(res[2].result).toBe('incorrect')
        expect(res[3].result).toBe('correct')
        expect(res[4].result).toBe('incorrect')

        expect(res[0].letter).toBe('L')
        expect(res[1].letter).toBe('L')
        expect(res[2].letter).toBe('L')
        expect(res[3].letter).toBe('L')
        expect(res[4].letter).toBe('L')
    })
    test('input and aswer is the same result in shoud all be correct and letters inte the same order', () => {
        const res = wordle("cykla", "cykla")
        expect(res[0].result).toBe('correct')
        expect(res[1].result).toBe('correct')
        expect(res[2].result).toBe('correct')
        expect(res[3].result).toBe('correct')
        expect(res[4].result).toBe('correct')
        
        expect(res[0].letter).toBe('C')
        expect(res[1].letter).toBe('Y')
        expect(res[2].letter).toBe('K')
        expect(res[3].letter).toBe('L')
        expect(res[4].letter).toBe('A')

    })
})