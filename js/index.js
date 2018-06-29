var myTheme = {
  palette:{
    line:[
        ['#4dac82', '#4dac82', '#4dac82', '#4dac82'], /* light blue */
    ]
  },
  graph:{
    backgroundColor:'#060606',
    title: {
      fontFamily: 'Lato Light',
      fontSize: 14,
      // border: "1px solid black",
      padding: "15",
      fontColor : "#1E5D9E",
      adjustLayout:true
    },
    subtitle: {
      fontFamily: 'Lato Light',
      fontSize: 12,
      fontColor: "#777",
      padding: "5"
    },
    plot: {
      backgroundColor:'#FBFCFE',
      marker: {
        size: 4
      }
    },
   tooltip : {
        visible:false,
        text: "%kl<br><span style='color:%color'>%t: </span>%v<br>",
        backgroundColor : "white",
        borderColor : "#e3e3e3",
        borderRadius : "5px",
        bold : true,
        fontSize : "12px",
        fontColor : "#2f2f2f",
        textAlign : 'left',
        padding : '15px',
        shadow : true,
        shadowAlpha : 0.2,
        shadowBlur : 5,
        shadowDistance : 4,
        shadowColor : "#a1a1a1"
    },
    plotarea: {
      backgroundColor: 'transparent',
      borderRadius: "0 0 0 10",
      borderRight: "0px",
      borderTop: "0px",
      margin:"dynamic",
      borderLeft:'1px solid #1E5D9E',
      borderBottom:'1px solid #1E5D9E',
    },
    scaleX: {
      zooming:true,
      offsetY: -20,
      lineWidth: 0,
      padding: 20,
      margin: 20,
      label:{
        text:"Scale-X"
      },
      item: {
        padding: 5,
        fontColor : "#1E5D9E",
        fontFamily: 'Lato Light',
        rules: [
          {
            rule: "%i == 0",
            visible: false
          }
        ]
      },
      tick: {
        lineColor: '#D1D3D4',
        rules: [
          {
            rule: "%i == 0",
            visible: false
          }
        ]
      },
      guide: {
        visible: false,
        lineColor : '#D7D8D9',
        lineStyle: 'dotted',
        lineGapSize: '4px',
        rules: [
          {
            rule: "%i == 0",
            visible: false
          }
        ]
      }
    },
    scaleY: {
      zooming:true,
      lineWidth: 0,
      label:{
        text:"Scale-Y"
      },
      item: {
        padding: "0 10 0 0",
        fontColor : "#1E5D9E",
        fontFamily: 'Lato Light',
        rules: [
          {
            rule: "%i == 0",
            offsetX:10,
            offsetY:10,
            backgroundColor:'none'
          }
        ]
      },
      tick: {
        lineColor: '#D1D3D4',
        rules: [
          {
            rule: "%i == 0",
            visible:false
          }
        ]
      },
      guide: {
        visible: false,
        lineColor : '#D7D8D9',
        lineStyle: 'dotted',
        lineGapSize: '4px',
        rules: [
          {
            rule: "%i == 0",
            visible: false
          }
        ]
      }
    },
    scrollX:{
      bar:{
        backgroundColor:'none',
        borderLeft:'none',
        borderTop:'none',
        borderBottom:'none'
      },
      handle:{
        backgroundColor:'#1E5D9E',
        height:5
      }
    },
    scrollY:{
      borderWidth:0,
      bar:{
        backgroundColor:'none',
        width:14,
        borderLeft:'none',
        borderTop:'none',
        borderBottom:'none'
      },
      handle:{
        borderWidth:0,
        backgroundColor:'#1E5D9E',
        width:5
      }
    },
    zoom:{
      backgroundColor:'#1E5D9E',
      alpha:.33,
      borderColor:'#000',
      borderWidth:1
    },
    preview:{
      borderColor:'#1E5D9E',
      borderWidth:1,
      adjustLayout:true,
      handle:{
        backgroundColor:'#1E5D9E',
        borderColor:'#1E5D9E'
      },
      mask:{
        backgroundColor:'#FFF',
        alpha:.95,
      }
    }
  }
  };

  var myConfig = {
  type: "line",
  title: {
    text: "Predicted Outputs",
    fontFamily: 'Lato Light'
  },
  subtitle: {
    text: "(in million tonnes)",
    fontFamily: 'Lato Light'
  },
  plotarea: {
    marginTop:10,
    marginBottom:80
  },
  scaleX: {
    zooming:true,
    labels:['6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20']
  },
  scaleY: {
    zooming:true
  },
  preview:{},
  scrollX:{},
  scrollY:{},
  series : [
    {
      text: "Internal",
      values : [6,6,3.5, 4.5, 4.5, 4.5, 2.5, 4.5, 4.5, 5, 5, 4, 5, 5]
    }
  ]
  };
  var chartOptions = {
  id : 'myChart',
  data: {
    gui:{
      contextMenu:{
        button:{
          visible: false,
          lineColor: "#2D66A4",
          backgroundColor: "#2D66A4"
        },
        gear: {
          alpha: 1,
          backgroundColor: "#2D66A4"
        },
        position: "right",
        backgroundColor:"#306EAA", /*sets background for entire contextMenu*/
        docked: true,
        item:{
          backgroundColor:"#306EAA",
          borderColor:"#306EAA",
          borderWidth: 0,
          fontFamily: "Lato Light",
          color:"#fff"
        }
      }
    },
    graphset:[myConfig]
  },
  height: 350,
  width: 470,
  defaults: myTheme
  };

  zingchart.render(chartOptions);

var map;
var infowindow;
var markers= new Array(10);
var overlay;
var mapOptions = {
		center: {lat: 35.517563, lng: -94.518766},
		zoom: 5,
		styles: [
			{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#263c3f'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#6b9a76'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#38414e'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{color: '#212a37'}]
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9ca5b3'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#746855'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{color: '#1f2835'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#f3d19c'}]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{color: '#2f3948'}]
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#17263c'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#515c6d'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{color: '#17263c'}]
			}
		]
	};

var triangleCoords = [
	 {lat: 35.450975, lng: -97.603001},
	 {lat: 37.336609, lng: -92.625502},
	 {lat: 36.336609, lng: -90.625502},
	 {lat: 35.421799, lng: -91.200251},
	 {lat: 33.939227, lng: -94.113750},
	 {lat: 35.450975, lng: -97.603001},
 ];

var center = {lat: 35.417563, lng: -94.018766};
var contentString = "<strong style = 'color:black;'>Hello! Some info you see!</strong>";
var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
var image,markerOptions;

function initMap() {
	// Styles a map in night mode.
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    image = {
		url: 'https://res.cloudinary.com/dnm9rqyum/image/upload/v1530283133/pixxel/crops.png',
		size: new google.maps.Size(50, 50),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(10, 10)
	};

	infowindow = new google.maps.InfoWindow({
		content: contentString
	});
    markerOptions = {
		 position: center,
		 icon: image,
		 shape: shape,
		 map: map,
		 title: 'Info'
	 };
    for(var i=0; i< 10; i++){
        markers[i]= new google.maps.Marker();
    }

	markers[0].addListener('click', function() {
		infowindow.open(map, markers[0]);
	});



 // Construct the polygon.
 overlay = new google.maps.Polygon({
	 paths: triangleCoords,
	 strokeColor: '#4DB6AC',
	 strokeOpacity: 0.7,
	 strokeWeight: 2,
	 fillColor: '#4DB6AC',
	 fillOpacity: 0.25
 });
 // overlay.setMap(map);
}

$('#state-sel').change(function () {
   var rajasthan = '<option value="pilani">Pilani</option>';
   var west_bengal = '<option value="kolkata">Kolkata</option>';
   var maharashtra = '<option value="pune">Pune</option><option value="bombay">Mumbai</option>';
   var cities = document.getElementById('city-sel');
   var state = document.getElementById('state-sel');
   if(state.value === 'rajasthan'){
        cities.innerHTML = rajasthan
   }else if(state.value === 'west-bengal'){
        cities.innerHTML = west_bengal
   }else if(state.value === 'maharashtra'){
        cities.innerHTML = maharashtra
   }
});

$('#apply-search').click(function () {
   var cities = document.getElementById('city-sel');
   if( cities.value === 'kolkata'){
        var overlayCoords = [
         {lat: 22.566548, lng: 88.459425},
         {lat: 22.501336, lng: 88.387769},
         {lat: 22.490140, lng: 88.329812},
         {lat: 22.539299, lng: 88.280811},
         {lat: 22.593306, lng: 88.286607},
         {lat: 22.629298, lng: 88.329812},
         {lat: 22.645744, lng: 88.395099}
        ];

       mapOptions.center = {lat: 22.589967, lng: 88.370380};
       mapOptions.zoom = 11;
       var overlayOptions = {
         paths: overlayCoords,
         strokeColor: '#4DB6AC',
         strokeOpacity: 0.7,
         strokeWeight: 2,
         fillColor: '#4DB6AC',
         fillOpacity: 0.25
       };
       map.setOptions(mapOptions);
       overlay.setMap(map);
       overlay.setOptions(overlayOptions);
       for( var i=0; i< overlayCoords.length; i++){
           markerOptions.position=overlayCoords[i];
           markers[i].setOptions(markerOptions);
       }
       myConfig.series = [
        {
          text: "Yield",
          values : [6.5,5,3, 4.5, 4, 4, 3.5, 4.5, 5, 4.5, 4, 5, 6, 3.5]
        }
      ];
       chartOptions.data.graphset=[myConfig];
       zingchart.render(chartOptions);
   }
   return false;
});