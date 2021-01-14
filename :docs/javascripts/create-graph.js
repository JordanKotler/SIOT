/*
 * Parse the data and create a graph with the data.
 */
function parsedata(path, createGraph) {
	Papa.parse(path, {
		download: true,
		complete: function (results) {
			createGraph(results.data);
		}
	});
}


function toiletGraph(data) {

	var Hour = [];
	var Third = ["2021-01-03"];
	var Fourth = ["2021-01-04"];
	var Fifth = ["2021-01-05"];
	var Sixth = ["2021-01-06"];
	var Seventh = ["2021-01-07"];
	var Eighth = ["2021-01-08"];
	var Ninth = ["2021-01-09"];
	var Tenth = ["2021-01-10"];
	var meantoilet = ["Mean time spent on toilet for 7 day period"]

	for (var i = 1; i < data.length - 1; i++) {
		Hour.push(data[i][0]);
		Third.push(data[i][1])
		Fourth.push(data[i][2])
		Fifth.push(data[i][3])
		Sixth.push(data[i][4])
		Seventh.push(data[i][5])
		Eighth.push(data[i][6])
		Ninth.push(data[i][7])
		Tenth.push(data[i][8])
		meantoilet.push(data[i][9]);
	}

	var chart = c3.generate({
		bindto: '#chart',
		data: {
			columns: [
				Third,
				Fourth,
				Fifth,
				Sixth,
				Seventh,
				Eighth,
				Ninth,
				Tenth,
				meantoilet
			]
		},
		axis: {
			x: {
				label: {
					text: 'Hour of the day (24H Format)',
					position: 'outer-center'
				},
				type: 'category',
				categories: Hour,
				tick: {
				}
			},
			y: {
				label: {
					text: 'Time spent on toilet (seconds)',
					position: 'outer-middle'
				},


			}
		},
		zoom: {
			enabled: true
		},
		legend: {
			position: 'right'
		},
		tooltip: {
			show: false,
			point: true,
		},
	});
}


function cryptoGraph(data) {

	var Hour = [];
	var Third = ["2021-01-03"];
	var Fourth = ["2021-01-04"];
	var Fifth = ["2021-01-05"];
	var Sixth = ["2021-01-06"];
	var Seventh = ["2021-01-07"];
	var Eighth = ["2021-01-08"];
	var Ninth = ["2021-01-09"];
	var Tenth = ["2021-01-10"];
	var meanbtc = ["Mean Bitcoin prices for 7 day period"]

	for (var i = 1; i < data.length - 1; i++) {
		Hour.push(data[i][0]);
		Third.push(data[i][1])
		Fourth.push(data[i][2])
		Fifth.push(data[i][3])
		Sixth.push(data[i][4])
		Seventh.push(data[i][5])
		Eighth.push(data[i][6])
		Ninth.push(data[i][7])
		Tenth.push(data[i][8])
		meanbtc.push(data[i][9]);
	}

	var chart = c3.generate({
		bindto: '#chart2',
		data: {
			columns: [
				Third,
				Fourth,
				Fifth,
				Sixth,
				Seventh,
				Eighth,
				Ninth,
				Tenth,
				meanbtc
			]
		},

		axis: {
			x: {
				label: {
					text: 'Hour of the day (24H Format)',
					position: 'outer-center'
				},
				type: 'category',
				categories: Hour,
				tick: {
				}
			},
			y: {
				label: {
					text: 'Bitcoin rate in GBP',
					position: 'outer-middle'
				}
			},

		},
		zoom: {
			enabled: true
		},
		legend: {
			position: 'right'
		},
		tooltip: {
			show: false,
			point: true,
		},
	});
}


function toiletMean(data) {

	var Hour = []
	var meantoilet = ["Mean time spent on toilet for 7 day period"]

	for (var i = 1; i < data.length - 1; i++) {
		Hour.push(data[i][0]);
		meantoilet.push(data[i][9]);
	}

	var chart2 = c3.generate({
		bindto: '#chart3',
		size: {
			height: 240,
			width: 500
		},
		data: {
			columns: [
				meantoilet
			]
		},
		axis: {
			x: {
				label: {
					text: 'Hour of the day (24H Format)',
					position: 'outer-center'
				},
				type: 'category',
				categories: Hour,
				tick: {
				}
			},
			y: {
				label: {
					text: 'Time spent on toilet (seconds)',
					position: 'outer-middle'
				}
			},
			zoom: {
				enabled: true
			}
		}
	});
}

function cryptoMean(data) {

	var Hour = []
	var meanbtc = ["Mean Bitcoin values for 7 day period"]

	for (var i = 1; i < data.length - 1; i++) {
		Hour.push(data[i][0]);
		meanbtc.push(data[i][9]);
	}

	var chart2 = c3.generate({
		bindto: '#chart4',
		size: {
			height: 240,
			width: 500
		},
		data: {
			columns: [
				meanbtc
			]
		},
		axis: {
			x: {
				label: {
					text: 'Hour of the day (24H Format)',
					position: 'outer-center'
				},
				type: 'category',
				categories: Hour,
				tick: {
				}
			},
			y: {
				label: {
					text: 'Bitcoin rate to GBP',
					position: 'outer-middle'
				}
			},
			zoom: {
				enabled: true
			}
		}
	});
}

parsedata("../data/toiletusage.csv", toiletGraph)
parsedata("../data/cryptodata.csv", cryptoGraph)
parsedata("../data/toiletusage.csv", toiletMean)
parsedata("../data/cryptodata.csv", cryptoMean)