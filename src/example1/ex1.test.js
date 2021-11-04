const ex1 = require('./ex1')

const truthTableTwoParams = [
  [0,0],
  [0,1],
  [1,0],
  [1,1],
]

const firstProposal = ex1.firstProposal
const secondProposal = ex1.secondProposal

describe("Example 1: (p || !q) & !p", () => {
  test.each(truthTableTwoParams)('p:%p, q:%p', (p, q) => {
    const fPResult = firstProposal(p, q)
    const sPResult = secondProposal(p, q)
    expect(fPResult).toEqual(sPResult);
  })
});