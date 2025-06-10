// ep :-16 Namaste js - JS Engine & V8 Architecture

// JavaScript Runtime Environment (JRE)
// - Container with everything needed to run JS
// - Contains: JS Engine, Web APIs, Event Loop, Callback Queue, Microtask Queue

// JS Engines
// - V8 (Chrome/Node.js)
// - SpiderMonkey (Firefox) - First JS engine by Brendan Eich
// - Chakra (Edge)

// How JS Engine works - 3 steps:
// 1. Parsing:
//    - Code broken into tokens
//    - Syntax parser converts to AST (Abstract Syntax Tree)

// 2. Compilation:
//    - Just-In-Time (JIT) compilation
//    - Interpreter converts code to bytecode
//    - Compiler optimizes code during runtime

// 3. Execution:
//    - Memory Heap - for memory allocation
//    - Call Stack - execution context management
//    - Garbage Collector - frees unused memory (Mark & Sweep algorithm)

// V8 Architecture Components:
// - Ignition: Interpreter
// - TurboFan: Optimizing compiler
// - Orinoco: Garbage collector

console.log("JS Engine makes JavaScript run everywhere!");