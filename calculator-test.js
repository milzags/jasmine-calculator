
describe('checking for correct rate calculation', function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 1,
    }
    expect(calculateMonthlyPayment(values)).toEqual('108.43');
  });
});


describe('checking for decimal places accuracy', function() {
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10000,
      years: 8,
      rate: 1,
    }
    expect(calculateMonthlyPayment(values)).toEqual('108.43');
  });
});


