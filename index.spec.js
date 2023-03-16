import {
    describe,
    expect,
    test
  } from "@jest/globals";
  import wordle from "./index.js"

describe('describe', () => {

    test('is cykla == cykla', () => {
        const res = wordle("cykla", "hallå")
    })
})