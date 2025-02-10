
const messageRepeater = require("../src/messageRepeater.js");

// messageRepeater("bananas");
// bananasbananasbananas



describe("messageRepeater functionality", () => {
	test("messageRepeater returns a repeated string", () => {
		let result = messageRepeater("bananas");
	
		expect(result).toBe("bananasbananasbananas");
	});
	
	test("messageRepeater returns a string", () => {
		let result = messageRepeater("bananas");
	
		expect(typeof result).toBe("string");
	});

	test("messageRepeater repeats the given word or string", () => {

		let inputString = "bananas";

		let result = messageRepeater(inputString);
	
		expect(result.includes(inputString)).toBeTruthy();
	});

	test("messageRepeater does not repeat data that is not a string", () => {

		expect(() => messageRepeater(0)).toThrow();

		expect(() => messageRepeater({})).toThrow();
	});

});
