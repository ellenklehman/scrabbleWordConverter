describe("scrabbleConverter", function() {
  it ("should attach a value to a given letter", function () {
    scrabbleConverter("j").should.equal(8);
  });
  it("should return a sum of the letters in a word", function () {
    scrabbleConverter("doo").should.equal(4);
  });
});
