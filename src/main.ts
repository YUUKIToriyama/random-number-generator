class LinearCongruentialGenerator {
	x: bigint;
	f: (x: bigint) => bigint;

	constructor(a: bigint, b: bigint, m: bigint, seed?: bigint) {
		this.x = seed || BigInt(Date.now());
		this.f = (x: bigint) => {
			return (a * x + b) % m;
		}
	}

	generate = () => {
		const rand = this.f(this.x);
		this.x = rand;
		return rand;
	}
}

const LCG = new LinearCongruentialGenerator(4n, 1n, 9n, 1n);
for (let i = 0; i < 20; i++) {
	console.log(i + "回目");
	console.log(LCG.generate());
}