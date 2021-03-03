import {InfluxDB, Point} from 'influxdb-nodejs'

// add functionlity for hamburger and header
document.querySelector("#hamburger").addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.querySelector("#right-nav").classList.toggle("active");
	document.querySelector("#header-ip").classList.toggle("active");
});

//influx stuff still not complete -- taken from https://docs.influxdata.com/influxdb/cloud/tools/client-libraries/js/#
// const proxy = '/influx'
// const token = 'example-token'
// const org = 'example-org'
// const bucket = 'example-bucket'

// const influxDB = new InfluxDB({proxy, token})
// const queryApi = influxDB.getQueryApi(org)
//end influx stuff

//maybe we can use the id's to denote the servers in the queries?
const toggleActiveServer = (s) => {
	document.querySelector(".servers button.active").classList.remove("active");
	s.classList.add("active");
	console.log(s.id)
}

const toggleActiveTimeframe = (t) => {
	document.querySelector(".times button.active").classList.remove("active");
	t.classList.add("active");
	console.log(t.id)
}

//chart colors
let chartBackgroundColor = "rgba(73, 122, 149, 0.2)"
let chartLineColor = "rgba(73, 122, 149, 1)"

//renders the charts
//options for player count chart
let playerChartCanvas = document.querySelector('#players').getContext('2d');
let playerChart = new Chart(playerChartCanvas, {
    type: 'line',
    data: {
			labels: ['6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM'],
        datasets: [{
            label: 'Players Online',
            data: [126, 190, 113, 125, 168, 140],
            backgroundColor: [
                chartBackgroundColor,
            ],
            borderColor: [
                chartLineColor,
            ],
            borderWidth: 3,
						lineTension: 0,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});

//options for tps chart
let tpsChartCanvas = document.querySelector('#tps').getContext('2d');
let tpsChart = new Chart(tpsChartCanvas, {
    type: 'line',
    data: {
			labels: ['6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM'],
        datasets: [{
            label: 'Ticks Per Second (TPS)',
            data: [20, 19.5, 18.3, 20, 20, 12.3],
            backgroundColor: [
                chartBackgroundColor,
            ],
            borderColor: [
                chartLineColor,
            ],
            borderWidth: 3,
						lineTension: 0,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});
