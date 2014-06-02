// this is what I might do if I didn't like to learn things:
// var stringifyJSON = JSON.stringify;

// but I do, so I'm going to write it from scratch:

// This function receives a value of any type, and returns a stringified version
// of it analogous to JSON.stringify
var stringifyJSON = function(obj) {
	var result;
	//determine what obj is
	//if obj is an Array or an object
	function check(obj) {
		if(Array.isArray(obj)) {
			//iterate over obj
			for(var i = 0; i < obj.length; i++) {
				check(obj[i]);
			}
		}

		//if obj is string handle escape characters of the string
		else if(typeof obj === 'string') {
			escapeStrings(obj);
		}

		//if obj is number or null or boolean return string of obj
		else if(typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
			return String(obj);
		}

		//if obj is undefined return undefined
		else if(obj === undefined) {
			return undefined;
		}

		else {
			for(var key in obj) {
				check(obj[key]);
			}
		}
	}
	return result.join(', ');
};
