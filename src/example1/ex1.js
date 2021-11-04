export const firstProposal = (p, q) => {
    return Boolean((p || !q) & !p)
}

export const secondProposal = (p, q) => {
    return Boolean(!q & !p)
}