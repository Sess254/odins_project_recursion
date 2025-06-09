#!/usr/bin/env node

function fib(n) {
	if (n === 0) return []
	if (n === 1) return [0]

	let arr = [0, 1]

	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1])
	}

	return arr
}

const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

if (isNaN(n) || n < 0) {
    console.error('Usage: ./fib.js <non-negative-integer>');
    process.exit(1);
}

console.log(fib(n));
