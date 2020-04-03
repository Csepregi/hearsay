import callHistory from '../../src/callHistory.json';

const historydata = JSON.stringify(callHistory);
const newJson = JSON.parse(historydata)
const data = newJson.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)


const dateFunction = (dat) => {
	let nowDate = new Date().getTime()
	let diff = nowDate - (dat * 1000)
	let res = Math.floor(diff / (1000 * 3600 * 24))
	return res
}


var result = data.reduce(function (acc, cV) {
	if (!acc[cV.lastName]) {
		acc[cV.lastName] = {
			firstName: [cV.firstName, cV.lastName],
			called: dateFunction(cV.called),
			count: 1
		};
	} else {
		acc[cV.lastName].count++;
	}
	return acc;
}, {});



const reduceHistory = Object.values(result).sort((x, y) => {
	return y.count - x.count
})

export default reduceHistory