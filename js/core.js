const test = new Triangle({
	div: document.getElementById("static"),
});
test.step();
test.step();
test.step();
test.step();
test.step();
test.step();
test.draw();

const dynamic = new Triangle({
	div: document.getElementById("dynamic"),
});
document.getElementById("dynamic-button").addEventListener("click", (e) => {
	dynamic.step();
	dynamic.draw();
});
dynamic.step();
dynamic.step();
dynamic.step();
dynamic.draw();

const static2 = new Triangle({
	div: document.getElementById("static2"),
});
static2.step();
static2.step();
static2.step();
static2.step();
static2.draw();
