// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// console.log(3 > 2 > 1);
// console.log(1 + "1" - 1);
// console.log(["1", "2"] + 90);
// console.log(["1", "2"] - 90);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[2], arr.length);
// arr.length = 0;
// console.log(arr[2], arr.length);
// console.log(arr[103]);

// const data = [
//   { buy: 1, name: "mohan" },
//   { buy: 15, name: "RADHA" },
//   { buy: 3, name: "mohan" },
//   { buy: 2, name: "RADHA" },
//   { buy: 8, name: "RADHA" },
//   { buy: 4, name: "mohan" },
// ];

// const getTotal = (name, arr) => {
//   const temp = arr.reduce((acc, curr) => {
//     if (!name || curr.name === name) {
//       acc = acc + curr.buy;
//     }
//     return acc;
//   }, 0);
//   return `${name ? name : "Both"} bought ${temp} quantity`;
// };

// const container = document.getElementById("quantityByName");
// const tempstr = document.createElement("p");
// const res = getTotal("", data);
// tempstr.innerText = res;
// container.appendChild(tempstr);

// const data = [
//   { buy: 1, name: "mohan" },
//   { buy: 15, name: "RADHA" },
//   { buy: 3, name: "mohan" },
//   { buy: 2, name: "RADHA" },
//   { buy: 8, name: "RADHA" },
//   { buy: 4, name: "mohan" },
// ];

// Array.prototype.myReduce = function (cb, intialVal) {
//   console.log(this);
//   const temp = this;
//   for (let i = 0; i < temp.length; i++) {
//     intialVal = cb(intialVal, temp[i]);
//   }
//   return intialVal;
// };

// const getTotal = (name, arr) => {
//   const temp = arr.myReduce((acc, curr) => {
//     if (!name || curr.name === name) {
//       acc = acc + curr.buy;
//     }
//     return acc;
//   }, 0);
//   return `${name ? name : "Both"} bought ${temp} quantity`;
// };

// const container = document.getElementById("quantityByName");
// const tempstr = document.createElement("p");
// const res = getTotal("RADHA", data);
// tempstr.innerText = res;
// container.appendChild(tempstr);

// what is Array.prototype
// what will happen behind the scene when we call the Array.prototype behind the scene?
// Sure! Here's everything clean and simple:

// ---

// **What is `Array.prototype`?**

// It is just an object that stores all array methods like `.push`, `.map`, `.filter`, `.reduce` etc.

// Every array you create secretly has a hidden link to this object. That hidden link is called the prototype chain.

// ---

// **What happens behind the scene when you call `nums.push(4)`?**

// Step 1 — JS looks at `nums` directly. No `push` found.

// Step 2 — JS follows the hidden link and goes to `Array.prototype`. Found `push` here.

// Step 3 — JS calls `push` and sets `this = nums` so it knows which array to work on.

// ---

// **What is `.reduce`?**

// It is a method that lives on `Array.prototype` just like `.push`.

// When you call `nums.reduce(...)`, JS does the same prototype chain walk to find it.

// What reduce actually does is — it goes through every item in the array one by one, and keeps adding to a "running result" called the accumulator. At the end it gives you one final value.

// ```js
// const nums = [1, 2, 3, 4];
// const total = nums.reduce((acc, item) => acc + item, 0);
// // total = 10
// ```

// - `acc` = running result, starts at 0
// - `item` = current element
// - each step: `acc + item` becomes the new `acc`
// - last step gives the final answer

// ---

// **What is `Object.prototype`?**

// It is the grandparent of everything in JavaScript.

// Every array, every plain object, every function — they all go up to `Object.prototype` at the top of the chain.

// It stores the most basic methods that every object gets for free:

// - `.toString()`
// - `.hasOwnProperty()`
// - `.valueOf()`

// That is why you can call `.toString()` on an array, a number, or an object — none of them define it themselves. They all borrow it from `Object.prototype`.

// ---

// **The full chain looks like this:**

// ```
// your array
//     ↓
// Array.prototype   (.push, .map, .reduce ...)
//     ↓
// Object.prototype  (.toString, .hasOwnProperty ...)
//     ↓
// null              (end — nothing above this)
// ```

// **Q1. What is Array.prototype?**

// It is an object that stores all array methods like `.push`, `.map`, `.filter`, `.reduce`. Every array you create has a hidden link to it called the prototype chain.

// ---

// **Q2. What happens behind the scene when you call `nums.push(4)`?**

// JS looks at `nums` directly — no `push` found. Then follows the hidden link to `Array.prototype` — found `push` here. Calls it with `this = nums`.

// ---

// **Q3. What is the prototype chain?**

// It is the chain of hidden links between objects. When JS cannot find a method on an object, it keeps going up the chain until it finds it or hits `null`.

// ```
// your array → Array.prototype → Object.prototype → null
// ```

// ---

// **Q4. What is `.reduce`?**

// A method on `Array.prototype` that collapses an array into one single value by carrying a running result (accumulator) through every item.

// ```js
// [1,2,3,4].reduce((acc, item) => acc + item, 0) // 10
// ```

// ---

// **Q5. What is `Object.prototype`?**

// It is the grandparent of everything in JavaScript. Every array, object, and function goes up to it at the top of the chain. It holds basic methods like `.toString()`, `.hasOwnProperty()`, `.valueOf()`.

// ---

// **Q6. What happens when you type amazon.in in the browser?**

// - DNS lookup — domain name converted to IP address
// - TCP handshake — connection established
// - TLS handshake — secure connection built
// - HTTP request sent — browser asks for the page
// - Server sends HTML
// - Browser parses HTML, finds CSS/JS/images, fetches them separately
// - DOM and CSSOM built
// - Render Tree built from DOM + CSSOM
// - Layout — positions calculated
// - Paint — pixels drawn on screen
// - JS executes

// ---

// **Q7. Does HTML parsing stop when browser finds a CSS file?**

// No. CSS downloads in the background and HTML parsing continues. But CSS blocks JavaScript — JS will not run until CSS is fully downloaded.

// ---

// **Q8. Does HTML parsing stop when browser finds a `<script>` tag?**

// Yes. HTML parsing stops completely. Browser waits for CSS to finish, downloads JS, executes JS, then resumes HTML parsing. This is called parser blocking.

// Fix — use `defer` or put script at bottom of body.

// ```html
// <script src="app.js" defer></script>
// ```

// ---

// **Q9. What is the difference between `defer` and `async`?**

// - `defer` — downloads in background, runs after full HTML is parsed, maintains order
// - `async` — downloads in background, runs immediately when ready, order not guaranteed

// ---

// **Q10. What are Core Web Vitals?**

// Three metrics Google uses to measure user experience:

// - **LCP** — how fast the biggest element loads. Target: under 2.5s
// - **INP** — how fast page responds to user clicks. Target: under 200ms
// - **CLS** — how much page layout jumps around. Target: under 0.1

// Bad scores = bad user experience + lower Google ranking.

// ---

// **Q11. What are Resource Hints?**

// HTML tags that tell browser to prepare for resources early:

// - `dns-prefetch` — look up IP address of a domain early. Cheap.
// - `preconnect` — full connection setup early (DNS + TCP + TLS). Use sparingly.
// - `prefetch` — download file for the next page in background. Low priority.
// - `preload` — download file for current page immediately. High priority.

// ```html
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preload" href="/hero.jpg" as="image">
// ```

// ---

// **Q12. What is Critical Rendering Path (CRP)?**

// The steps browser must complete before user sees anything on screen:

// ```
// HTML → DOM
// CSS  → CSSOM
// DOM + CSSOM → Render Tree
// Render Tree → Layout → Paint → Composite
// ```

// What makes it slow:
// - CSS is render blocking — page won't paint until CSS is fully loaded
// - JS without defer is parser blocking — HTML parsing stops

// How to optimize:
// - Put CSS in `<head>`
// - Inline critical CSS
// - Use `defer` on scripts
// - Use `preload` for critical files
// - Minify and reduce file size
