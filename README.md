1️⃣ What is the difference between var, let, and const?

   Ans : 

1️⃣ var :>>>>

Old way to declare variables (before ES6).

Features
- Function scoped (not block scoped)
-Can be re-declared
-Can be reassigned
-Gets hoisted (moved to the top of scope with undefined)



2️⃣ let
Introduced in ES6 (2015).

Features
-Block scoped
-Cannot be re-declared
-Can be reassigned


3️⃣ const
Used for constant variables.

Features
-Block scoped
-Cannot be re-declared
-Cannot be reassigned

[Must be initialized when declared]


 2️⃣ What is the spread operator (...)?

Ans : 

The spread operator (...) in JavaScript is used to expand (spread) elements of an array, object, or iterable into individual elements.

It was introduced in ES6 and is very useful for copying, merging, and passing values.

    It expands array elements===>

      Example
        const numbers = [1, 2, 3];

        console.log(...numbers);
      
        Output : 

        1 2 3

       The array [1,2,3] becomes separate values.

      ----------------------------------------------

       Spread is often used to copy arrays===>

        const arr1 = [1, 2, 3];

       const arr2 = [...arr1];

        console.log(arr2);
        Output

        [1,2,3]

      Without spread:

        const arr2 = arr1; // same reference
        Spread creates a new copy.

       Merge Arrays:
        const a = [1, 2];
        const b = [3, 4];

        const result = [...a, ...b];

        console.log(result);

        Output

        [1,2,3,4]
        Spread with Objects

  You can copy or merge objects===>

      Copy Object
      const user = { name: "Mizan", age: 20 };

      const newUser = { ...user };

      console.log(newUser);
      Merge Objects
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };

      const merged = { ...obj1, ...obj2 };

      console.log(merged);

      Output

      {a:1, b:2}

 Spread in Function Arguments ==>

      Spread can pass array elements as function arguments.

      function sum(a, b, c) {
      return a + b + c;
      }

      const nums = [1, 2, 3];

      console.log(sum(...nums));

      Output

      6
🔑 
3️⃣ What is the difference between map(), filter(), and forEach()?

    map(), filter(), and forEach() are JavaScript array methods used to loop through arrays, but they behave differently.


    1️⃣ map()
        map() creates a new array by transforming every element of the original array.

        Key Points:==>
        Returns a new array

        Same length as the original array

        Used when you want to modify each element

    2️⃣ filter()
      filter() creates a new array with elements that pass a condition.

      Key Points:==>
      Returns a new array

      Length may be smaller

      Used when you want to select specific items

    3️⃣ forEach()
      forEach() simply loops through the array and performs an action.

      Key Points
      Does NOT return a new array

      Used for side effects like logging, updating UI, etc.


  | Method      | Returns New Array | Main Use               |
  | ----------- | ----------------- | ---------------------- |
  | `map()`     | ✅ Yes             | Transform data         |
  | `filter()`  | ✅ Yes             | Select data            |
  | `forEach()` | ❌ No              | Run code for each item |





- 4️⃣ What is an arrow function?

    An arrow function is a shorter way to write a function in JavaScript, introduced in ES6 (ECMAScript 2015).

    It uses the arrow symbol => instead of the function keyword.

      1️⃣ Basic Syntax
      Normal Function
      function add(a, b) {
        return a + b;
      }
      Arrow Function
      const add = (a, b) => {
        return a + b;
      };
      Both do the same thing.

      2️⃣ Shorter Arrow Function
        If the function has one line,  can remove {} and return.

        const add = (a, b) => a + b;
      3️⃣ One Parameter
        If there is only one parameter, parentheses are optional.

        const square = x => x * x;
      4️⃣ No Parameters
          You must use parentheses.

          const sayHello = () => {
            console.log("Hello");
          };
      5️⃣ Example with Array Methods
          Arrow functions are commonly used with map().

          const numbers = [1, 2, 3];

          const doubled = numbers.map(n => n * 2);

          console.log(doubled);
          Output

          [2, 4, 6]
    6️⃣ Important Difference ( this )
        Arrow functions do not have their own this.
        They inherit this from the parent scope.


- 5️⃣ What are template literals?


      Template literals are a modern way to create strings in JavaScript using backticks ( ` ) instead of quotes.

      They were introduced in ES6 and allow you to embed variables and expressions directly inside a string.

        *${} is used to insert variables or expressions inside the string. such as below 
          
          const name = "Mizan";

          console.log(`Hello ${name}`);

        * we can run JavaScript expressions inside ${}.

          const a = 5;
          const b = 10;

          console.log(`Sum is ${a + b}`);
          Output

        *Template literals allow multiple lines without \n.

            const text = `This is line 1
            This is line 2
            This is line 3`;

            console.log(text);







