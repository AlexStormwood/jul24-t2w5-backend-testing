
function repeater(messageToRepeat){

	console.log(messageToRepeat, typeof messageToRepeat);
	// if messageToRepeat is not a string, throw an error
	if (typeof messageToRepeat !== 'string'){
		throw new Error("Only give strings to this function!");
	}

	// JS way:
	return messageToRepeat + messageToRepeat + messageToRepeat;
	
	// Python way of solving this functionality:
	// return messageToRepeat * 3;
}

module.exports = repeater;