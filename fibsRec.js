#!/usr/bin/env node

function fibs(n) {
	if (n < 2) return n
	return fibs(n - 1) + fibs(n - 2)
}

function fibsRec(n) {
	if (n <= 0) return []
	if (n === 1) return [0]
	if (n === 2) return [0, 1] 

	const prev = fibsRec(n - 1)
	return [...prev, fibs(prev.length - 1) + fibs(prev.length - 2)]
	
}

const args = process.argv.slice(2)
const n = parseInt(args[0], 10)

console.log(fibsRec(n))
