class Triangle {
	constructor({ div = document.createElement("div") }) {
		this.div = div;
		this.numbers = [[1]];
	}
	step = () => {
		if (this.numbers.length === 1) {
			this.numbers.push([1, 1]);
			return;
		}
		const level = [];
		const lastLevel = this.numbers[this.numbers.length - 1];
		for (let i = 0; i < lastLevel.length; i++) {
			if (lastLevel.length - i === 1) {
				break;
			}
			level.push(lastLevel[i] + lastLevel[i + 1]);
		}
		this.numbers.push([1, ...level, 1]);
	};
	draw = () => {
		this.div.innerHTML = "";
		this.numbers.forEach((item) => {
			const level = document.createElement("div");
			item.forEach((item) => {
				const number = document.createElement("span");
				number.innerHTML = item;
				level.appendChild(number);
			});
			this.div.appendChild(level);
		});
	};
}
