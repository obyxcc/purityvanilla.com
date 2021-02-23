// add functionlity for hamburger and header
document.getElementById("hamburger").addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.getElementById("right-nav").classList.toggle("active");
	document.getElementById("header-ip").classList.toggle("active");
});

function toggleActiveServer(element) {
	document.querySelector(".servers button.active").classList.remove("active");
	element.classList.add("active");
	console.log(element.id)
}

function toggleActiveTimeframe(element) {
	document.querySelector(".times button.active").classList.remove("active");
	element.classList.add("active");
	console.log(element.id)
}

var chartBackgroundColor = "rgba(73, 122, 149, 0.2)"
var chartLineColor = "rgba(73, 122, 149, 1)"

//options for player count chart
var playerChartCanvas = document.getElementById('players').getContext('2d');
var playerChart = new Chart(playerChartCanvas, {
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
var tpsChartCanvas = document.getElementById('tps').getContext('2d');
var tpsChart = new Chart(tpsChartCanvas, {
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
				resposive: true
    }
});
