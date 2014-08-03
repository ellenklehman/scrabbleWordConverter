describe("scrabbleConverter", function() {
  it ("attaches a value to a given letter", function () {
    scrabbleConverter("j").should.equal(8);
  });

  it("returns a sum of the letters in a word", function () {
    scrabbleConverter("doo").should.equal(4);
  });
});
