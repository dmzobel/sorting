describe('Bubble Sort', function () {

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with length of 1', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('sorts an array', function() {
    expect(bubbleSort([3, 6, 1, 7, 5])).toEqual([1, 3, 5, 6, 7]);
  });

  it(`doesn't use the built-in .sort method`, function() {
    spyOn(Array.prototype, 'sort').and.callThrough();
    bubbleSort([3, 6, 1, 7, 5]);
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });

  it('calls the swap function the proper number of times', function() {
    spyOn(window, 'swapInPlace').and.callThrough();
    bubbleSort([3, 2, 1]);
    expect(swapInPlace.calls.count()).toEqual(3);
  });
});
