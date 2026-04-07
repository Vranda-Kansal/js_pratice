let obj = {
  a: 1,
  b: {
    c: 2,
  },
  c: {
    d: {
      e: {
        f: 3,
      },
    },
  },
};
// function helper(obj, ans) {
//   const temp = Object.entries(obj);
//   if (temp.length === 1 && typeof temp[0][1] !== "object") {
//     ans.push(`${temp[0][0] + "," + temp[0][1]}`);
//     return;
//   }
//   Object.entries(obj).forEach((key) => {
//     if (typeof key[1] !== "object") {
//       ans.push(key[0] + "," + key[1]);
//     } else {
//       helper(key[1], ans);
//       let res = ans.pop();
//       res = key[0] + "_" + res;
//       ans.push(res);
//     }
//   });
// }

// function obj_to_string(obj) {
//   let ans = new Array();
//   helper(obj, ans);
//   let res = {};
//   ans.forEach((item) => {
//     const occ = item.split(",");
//     res[occ[0]] = +occ[1];
//   });
//   return res;
// }

// function flattenObject(obj, prefix = "", result = {}) {
//   for (const key in obj) {
//     const newKey = prefix ? `${prefix}_${key}` : key;

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       flattenObject(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(flattenObject(obj));
// console.log(obj_to_string(obj, ans));

// let obj = {
//   a: 1,
//   b_c: 2,
//   c_d_e_f: 3,
// };

let arr = [1, 2, 3, 4];

function reverseArr(arr) {
  //   let temp = new Array();
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     temp.push(arr[i]);
  //   }
  //   return temp;
  //   return arr.reduce((acc, curr) => {
  //     acc = [curr, ...acc];
  //     return acc;
  //   }, []);
}
console.log(reverseArr(arr));

// Here are all the questions and answers from our conversation:

// ---

// **Q1. What is JavaScript?**
// JavaScript is a interpreted, dynamically typed, single-threaded, multi-paradigm programming language originally created to make web pages interactive. It runs via a JS engine (like V8) which can be embedded anywhere — not just browsers.

// ---

// **Q2. Is there any real-life scenario where JavaScript is not run in the browser?**
// Yes — Server (Node.js), Mobile apps (React Native), Desktop apps (Electron), Edge/Serverless (Vercel, Cloudflare Workers), IoT devices (Espruino), and CLI scripting (Deno, Bun).

// ---

// **Q3. Can JS run in car infotainment systems?**
// Yes. Many car UIs (Tesla, Volvo) are built with HTML/CSS/JS running inside an embedded Chromium/WebKit engine. JS handles touch interactions, maps, media, and vehicle data display.

// ---

// **Q4. What is Hoisting?**
// Hoisting is JS's behavior of registering all declarations in memory before executing code. `var` is hoisted and initialized as `undefined`. `let`/`const` are hoisted but stay in the Temporal Dead Zone (TDZ) — accessing them before declaration throws a ReferenceError. Function declarations are fully hoisted and callable before their definition. Function expressions are not fully hoisted.

// ---

// **Q5. Why is `let` in TDZ but `var` is not?**
// `var` is legacy (1995) and was designed to silently return `undefined` before declaration — which caused hidden bugs. `let` and `const` (ES6, 2015) were intentionally designed with TDZ to throw an error if accessed before declaration, making bugs visible early.

// ---

// **Q6. What is the difference between `==` and `===`?**
// `==` (loose equality) converts both values to the same type before comparing (type coercion). `===` (strict equality) checks both value and type with no conversion. Always prefer `===` in real code.

// ---

// **Q7. What is type coercion?**
// Type coercion is when JS automatically converts one data type to another. Implicit coercion happens automatically (`"5" - 1 → 4`). Explicit coercion is done manually (`Number("5")`). The `+` operator is tricky — it does string concatenation if either operand is a string, while `-` always forces a number.

// ---

// **Q8. What is the output of `console.log(1 > 2 > 3)`?**
// Output is `false`. JS evaluates left to right — `1 > 2` gives `false`, then `false > 3` coerces `false` to `0`, so `0 > 3` is `false`. Similarly `3 > 2 > 1` is also `false` because `3 > 2` gives `true` → `1 > 1` → `false`.

// ---

// **Q9. How do you reverse an array without using `.reverse()`?**
// Four approaches:
// - **New array + loop** — iterate from end to start, push to new array. O(n) space.
// - **Two pointer (in-place)** — swap left and right elements moving inward. O(1) space. Best for interviews.
// - **reduce** — `arr.reduce((acc, curr) => [curr, ...acc], [])` prepends each element.
// - **Recursion** — take last element, prepend to recursive call on rest of array.
