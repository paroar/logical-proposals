const ex2 = require('./ex2')

const truthTableThreeParams = [
  [0,0,0],
  [0,0,1],
  [0,1,0],
  [0,1,1],
  [1,0,0],
  [1,0,1],
  [1,1,0],
  [1,1,1],
]

const firstProposal = ex2.firstProposal
const secondProposal = ex2.secondProposal

describe("Example 2: (!p & q) || (!p & !r) || (p & q)", () => {
  test.each(truthTableThreeParams)('p:%p, q:%p', (p, q) => {
    const fPResult = firstProposal(p, q)
    const sPResult = secondProposal(p, q)
    expect(fPResult).toEqual(sPResult);
  })
});