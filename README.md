# Logical Proposals

In **propositional logic** a **proposition** is represented by **letters** whose relationship with other propositions is defined via **connectives**.

## Connectives

| Connective        | Description   | Symbol        |
| :-------------    | :-----------: | :-----------: |
| Negation          | NOT           | !             |
| Conjunction       | AND           | &             |
| Disjunction       | OR            | \|\|          |

## Propositions

Examples of propositions

```sh
Date is available and has three rooms ⟷ p & q
```

```sh
Room has TV or WIFI, and allows pets ⟷ (p || q) & r
```

## Theory

- Law of double negation
  
```sh
!!p ⟷ p
```

- Laws of simplification

```sh
p || p ⟷ p
```

```sh
p & p ⟷ p
```

- Law of excluded middle

```sh
p || !p ⟷ 1
```

- Law of contradiction

```sh
p & !p ⟷ 0
```

- Identity Laws

```sh
p || 0 ⟷ p
```

```sh
p & 1 ⟷ p
```

```sh
p || 1 ⟷ 1
```

```sh
p & 0 ⟷ 0
```

- Commutative Laws

```sh
p || q ⟷ q || p
```

```sh
p & q ⟷ q & p
```

- Morgan Laws

```sh
!(p || q) ⟷ !p & !q
```

```sh
!(p & q) ⟷ !p || !q
```

- Associative Laws

```sh
(p || q) || r ⟷ p || (q || r)
```

```sh
(p & q) & r ⟷ p & (q & r)
```

- Distributive Laws

```sh
p || (q & r) ⟷ (p || q) & (p || r)
```

```sh
p & (q || r) ⟷ (p & q) || (p & r)
```

## Practice

### Example 1

```sh
(p || !q) & !p
```

```sh
(p & !p) || (!q & !p)       Distributive Law
0 || (!q & !p)              Contradiction Law
!q & !p                     Identity Law
```

### Example 2

```sh
(!p & q) || (p & q) || (!p & !r)
```

```sh
q || (!p & p) || (!p & !r)  Distributive Law
q || 0 || (!p & !r)         Contradiction Law
q || !(p || r)              Morgan and Identity Laws
```
