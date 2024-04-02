// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided

*/

describe("Iteration 2", () => {
    describe("Function divide", () => {

      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(10, 5)).toEqual(2);
        expect(divide(150, 5)).toEqual(30);
        expect(divide(1000, 2)).toEqual(500);
      });

      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the two arguments is not a number.", () => {
        expect(divide("a", 5)).toEqual(undefined);
        expect(divide(5, "c")).toEqual(undefined);
        expect(divide("b", "c")).toEqual(undefined);
      });
    });
});
  