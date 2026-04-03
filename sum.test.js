import sum from "./sum.js";


describe("test for sum funx", ()=>{
    test("2+2 = 4 or not", ()=>{
    expect(sum(2,2)).toBe(4);
});

test("-5 + -5  = -10 or not", ()=>{
    expect(sum(-5,-5)).toBe(-10);
});

})
