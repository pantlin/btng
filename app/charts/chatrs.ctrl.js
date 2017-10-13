'use strict';
angular
    .module('app').controller('chartsCtrl',['$scope',chartsCtrl]);

function chartsCtrl($scope) {



    var randomScalingFactor3 = function() {
        return Math.round(Math.random() * 100);
    };
    var randomColorFactor3 = function() {
        return Math.round(Math.random() * 255);
    };
    var randomColor3 = function(opacity) {
        return 'rgba(' + randomColorFactor3() + ',' + randomColorFactor3() + ',' + randomColorFactor3() + ',' + (opacity || '.3') + ')';
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                ],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 1'
            }, {
                hidden: true,
                data: [
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                ],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 2'
            }, {
                data: [
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                    randomScalingFactor3(),
                ],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 3'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Dark Grey"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '图表插件 Chart.js Doughnut Chart (环形)'
            }
        }
    };


    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);

    $('#randomizeData3').click(function() {
        $.each(config.data.datasets, function(i, dataset) {
            dataset.data = dataset.data.map(function() {
                return randomScalingFactor3();
            });

            dataset.backgroundColor = dataset.backgroundColor.map(function() {
                return randomColor3(0.7);
            });
        });

        window.myDoughnut.update();
    });

    $('#addDataset3').click(function() {
        var newDataset = {
            backgroundColor: [],
            data: [],
            label: 'New dataset ' + config.data.datasets.length,
        };

        for (var index = 0; index < config.data.labels.length; ++index) {
            newDataset.data.push(randomScalingFactor3());
            newDataset.backgroundColor.push(randomColor3(0.7));
        }

        config.data.datasets.push(newDataset);
        window.myDoughnut.update();
    });

    $('#addData3').click(function() {
        if (config.data.datasets.length > 0) {
            config.data.labels.push('data #' + config.data.labels.length);

            $.each(config.data.datasets, function(index, dataset) {
                dataset.data.push(randomScalingFactor3());
                dataset.backgroundColor.push(randomColor3(0.7));
            });

            window.myDoughnut.update();
        }
    });

    $('#removeDataset3').click(function() {
        config.data.datasets.splice(0, 1);
        window.myDoughnut.update();
    });

    $('#removeData3').click(function() {
        config.data.labels.splice(-1, 1); // remove the label first

        config.data.datasets.forEach(function(dataset, datasetIndex) {
            dataset.data.pop();
            dataset.backgroundColor.pop();
        });

        window.myDoughnut.update();
    });
}