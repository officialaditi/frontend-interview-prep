export const FindUnique = () => {
  const names = ["Alice", "Bob", "Alice", "John", "Charlie", "Bob"];
  return (
    <div>
      {names
        .filter((name, index) => {
          return names.indexOf(name) === index;
        })
        .map((name) => {
          return <li key={name}>{name}</li>;
        })}
    </div>
  );
};

// breakdown of this code to understand it better

// Maan lo names array hai: ["Alice", "Bob", "Alice", "John", "Charlie", "Bob"].

// Iteration 1: name = "Alice", index = 0

// names.indexOf("Alice") → 0 (yeh pehli baar hai).
// 0 === 0 → true, toh "Alice" include hoga.
// Iteration 2: name = "Bob", index = 1

// names.indexOf("Bob") → 1 (yeh bhi pehli baar hai).
// 1 === 1 → true, toh "Bob" include hoga.
// Iteration 3: name = "Alice", index = 2

// names.indexOf("Alice") → 0 (pehli baar "Alice" index 0 pe mila tha).
// 0 === 2 → false, toh yeh "Alice" ignore hoga.
// Iteration 4: name = "John", index = 3

// names.indexOf("John") → 3.
// 3 === 3 → true, toh "John" include hoga.
// Iteration 5: name = "Charlie", index = 4

// names.indexOf("Charlie") → 4.
// 4 === 4 → true, toh "Charlie" include hoga.
// Iteration 6: name = "Bob", index = 5

// names.indexOf("Bob") → 1.
// 1 === 5 → false, toh yeh "Bob" ignore hoga.
// Final Output
// Filtered array: ["Alice", "Bob", "John", "Charlie"]
