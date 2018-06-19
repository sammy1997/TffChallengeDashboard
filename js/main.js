var myTheme = {
  palette:{
    line:[
        ['#FBFCFE', '#00BAF2', '#00BAF2', '#00a7d9'], /* light blue */
    ]
  },
  graph:{
    backgroundColor:'#242f3e',
    title: {
      fontFamily: 'Lato',
      fontSize: 14,
      // border: "1px solid black",
      padding: "15",
      fontColor : "#1E5D9E",
      adjustLayout:true
    },
    subtitle: {
      fontFamily: 'Lato',
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
        visible:true,
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
        fontFamily: 'Montserrat',
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
        visible: true,
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
        fontFamily: 'Montserrat',
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
        visible: true,
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
  },
  subtitle: {
    text: "(in million tonnes)",
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
    zooming:true,
  },
  preview:{},
  scrollX:{},
  scrollY:{},
  series : [
    {
      text: "Internal",
      values : [6,6,3.5, 4.5, 4.5, 4.5, 2.5, 4.5, 4.5, 5, 5, 4, 5, 5],
    },
  ]
  };

  zingchart.render({
  id : 'myChart',
  data: {
    gui:{
      contextMenu:{
        button:{
          visible: true,
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
          fontFamily: "Lato",
          color:"#fff"
        }
      }
    },
    graphset:[myConfig]
  },
  height: 390,
  width: '100%',
  defaults: myTheme
  });
