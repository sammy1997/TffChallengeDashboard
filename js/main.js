
var trace1 = {
  x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
  y: [ 350, 430, 474, 526, 488, 537, 500, 439],
  name: 'Rest of world',
  marker: {color: 'rgb(55, 83, 109)'},
  type: 'bar'
};

var trace2 = {
  x: [ 2017, 2018, 2019, 2020],
  y: [  3.40, 4.03, 5.49, 4.99],
  name: 'China',
  marker: {color: 'rgb(26, 118, 255)'},
  type: 'bar'
};

var data = [ trace2];

var layout = {
  title: 'Years',
  xaxis: {tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }},
  yaxis: {
    title: 'Predicted Yeild ( in million tonnes )',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: "rgb(107, 107, 107)"
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('myDiv', data, layout);
