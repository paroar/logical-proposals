export const firstProposal = (p, q, r) => {
    return Boolean((!p & q) || (p & q) || (!p & !r))
}

export const secondProposal = (p, q, r) => {
    return Boolean( q || !(p || r))
}