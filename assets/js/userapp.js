// Exporting the database to allow access
import {db} from './indexDB.js';

// On Document load 
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("id") == "1") {
        swapper1()
    }
    if (localStorage.getItem("id") == "2") {
        swapper2()
    }
    if (localStorage.getItem("id") == "3") {
        swapper3()
    }
    if (localStorage.getItem("id") == "4") {
    swapper4()
    }
    expenseGetData1();
});
// Ui Variables For Expense and Income Block
var click1 = document.querySelector(".click1")
var click2 = document.querySelector(".click2")
var click3 = document.querySelector(".click3")
var click4 = document.querySelector(".click4")
var block1 = document.querySelector(".block1")
var block2 = document.querySelector(".block2")
var block3 = document.querySelector(".block3")
var block4 = document.querySelector(".block4")

// Event Listner for Bottons
click1.addEventListener('click', swapper1)
click2.addEventListener('click', swapper2)
click3.addEventListener('click', swapper3)
click4.addEventListener('click', swapper4)

// Display Functions For the Divs of Expense And Income

function swapper1() {
    block1.classList.remove("blocka");
    block2.classList.add("blocka")
    block3.classList.add("blocka")
    block4.classList.add("blocka")
    console.log("successful1")
    localStorage.setItem("id", "1")
  // boxx1.children.style.transform = "translate()";
}
function swapper2() {
    block2.classList.remove("blocka");
    block1.classList.add("blocka")
    block3.classList.add("blocka")
    block4.classList.add("blocka")
    console.log("successful2")
    localStorage.setItem("id", "2")
}
function swapper3() {
  block3.classList.remove("blocka");
  block1.classList.add("blocka")
  block2.classList.add("blocka")
  block4.classList.add("blocka")
  console.log("successful3")
  localStorage.setItem("id", "3")
}
function swapper4() {
  block4.classList.remove("blocka");
  block1.classList.add("blocka")
  block2.classList.add("blocka")
  block3.classList.add("blocka")
  console.log("successful4")
  localStorage.setItem("id", "4")
}

// Increment amount value


var plus1 = document.querySelector(".plus1")
var minus1 = document.querySelector(".minus1")
var plus2 = document.querySelector(".plus2")
var minus2 = document.querySelector(".minus2")
var plus3 = document.querySelector(".plus3")
var minus3 = document.querySelector(".minus3")
var plus4 = document.querySelector(".plus4")
var minus4 = document.querySelector(".minus4")
var plus5 = document.querySelector(".plus5")
var minus5 = document.querySelector(".minus5")
var amount1 = document.querySelector(".amount1")
var amount2 = document.querySelector(".amount2")

// Increment value event listeners

plus1.addEventListener('click', increment1)
plus2.addEventListener('click', increment2)
plus3.addEventListener('click', increment3)
plus4.addEventListener('click', increment4)
plus5.addEventListener('click', increment5)
minus1.addEventListener('click', decrement1)
minus2.addEventListener('click', decrement2)
minus3.addEventListener('click', decrement3)
minus4.addEventListener('click', decrement4)
minus5.addEventListener('click', decrement5)
let y = "0.00"

// Increment value functions

function increment1() {
    if (amount1.value == "") {
      amount1.value = y
    }
    amount1.value = parseFloat(amount1.value) + 1.00
  }
  function increment2() {
    if (amount2.value == "") {
      amount2.value = y
    }
    amount2.value = parseFloat(amount2.value) + 1.00
  }
  function increment3() {
    if (days1.value == "") {
      days1.value = y
    }
    days1.value = parseFloat(days1.value) + 1.00
  }
  function increment4() {
    if (amntperrnd.value == "") {
      amntperrnd.value = y
    }
    amntperrnd.value = parseFloat(amntperrnd.value) + 1.00
  }
  function increment5() {
    if (pnshmntfee.value == "") {
      pnshmntfee.value = y
    }
    pnshmntfee.value = parseFloat(pnshmntfee.value) + 1.00
  }
  function decrement1() {
    if (amount1.value == "") {
      amount1.value = y
    }
    amount1.value = parseFloat(amount1.value) - 1.00
  }
  function decrement2() {
    if (amount2.value == "") {
      amount2.value = y
    }
    amount2.value = parseFloat(amount2.value) - 1.00
  }
  function decrement3() {
    if (days1.value == "") {
      days1.value = y
    }
    days1.value = parseFloat(days1.value) - 1.00
  }
  function decrement4() {
    if (amntperrnd.value == "") {
      amntperrnd.value = y
    }
    amntperrnd.value = parseFloat(amntperrnd.value) - 1.00
  }
  function decrement5() {
    if (pnshmntfee.value == "") {
      pnshmntfee.value = y
    }
    pnshmntfee.value = parseFloat(pnshmntfee.value) - 1.00
  }

  
//   End for Increment values



// Statistics Page

//  variables for swapping between the daily weekly and monthly tabs
var tab1 = document.querySelector(".tab1")
var tab2 = document.querySelector(".tab2")
var tab3 = document.querySelector(".tab3")
var stat1 = document.querySelector(".stat1")
var stat2 = document.querySelector(".stat2")
var stat3 = document.querySelector(".stat3")

// Event listeners for the tabs indicated above
tab1.addEventListener('click', swappers1)
tab2.addEventListener('click', swappers2)
tab3.addEventListener('click', swappers3)

// Functions for the swapping tabs in the statistics page
function swappers1() {
    stat1.classList.remove("blocka");
    stat2.classList.add("blocka")
    stat3.classList.add("blocka")
    expenseGetData1()
    console.log("successful3")
  }
  function swappers2() {
    stat2.classList.remove("blocka");
    stat1.classList.add("blocka")
    stat3.classList.add("blocka")
    expenseGetData2()
    console.log("successful3")
  }
  function swappers3() {
    stat3.classList.remove("blocka");
    stat1.classList.add("blocka")
    stat2.classList.add("blocka")
    expenseGetData3()
    console.log("successful3")
  }
  

// Getting random colors for the pie chart
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Getting data for the pie chart and plotting the pie chart


// Pie chart drawer for the daily tab
var chartData1;
var chartOptions1;
function expenseGetData1(){
  var track1 = true
  let track2 = new Array()
  let obj1 = new Array()
  db.expense.each(entity => {
  obj1.push(entity)}).then(()=>{
    var today = new Date().getDay()
    console.log(obj1)
    chartOptions1 = [{
      "captions": [{}],
      "color": [{}],
      "xaxis": "Catagory",
      "xaxisl1": "Type",
      "yaxis": "Price"
      }]
    chartData1 = []
      for (let i =0; i < obj1.length; i++){
          console.log("I hate you")
          var str = obj1[i].date.slice(8, 10);
          console.log(str)
          console.log("25")
          console.log(track2)
          console.log(obj1[i].category.toUpperCase())
          track2.forEach(element => {
            console.log(obj1[i].category.toUpperCase())
            console.log(element)
            if (obj1[i].category.toUpperCase() == element) {
              track1 = false
              console.log(track2)
            }
            });
            if (track1 == false) {
              for (var key in chartOptions1[0]["captions"][0]) {
                if (chartOptions1[0]["captions"][0].hasOwnProperty(key)) {
                    if(chartOptions1[0]["captions"][0][key] == obj1[i].category.toUpperCase()){
                      var object1 = {}
                      object1["Catagory"] = key
                      object1["Type"] = obj1[i].expense_type
                      object1["Price"] = parseInt(obj1[i].amount)
                      chartData1.push(object1)
                      track1 = true
                    }
                }
              }
            }


            if(str === "25" && track1){
              var cat = obj1[i].category.toUpperCase()
              console.log(cat)
              chartOptions1[0]["captions"][0]["SAKS" + i] = cat
              chartOptions1[0]["color"][0]["SAKS" + i] = getRandomColor()
              console.log(chartOptions1)
                var object1 = {}
                object1["Catagory"] = "SAKS" + i
                object1["Type"] = obj1[i].expense_type
                object1["Price"] = parseInt(obj1[i].amount)
                chartData1.push(object1)
                track2.push(cat)
              console.log(chartData1)
              track1 = true
            }
            console.log(track2)
      }
}).then(()=> {
  $(document).ready(function () {
    Plot1(innerCont1, chartInnerDiv1);
});
})
}



// Pie chart drawer for the weekly tab

var chartData2;
var chartOptions2;
function expenseGetData2(){
  var track1 = true
  let track2 = new Array()
  let obj1 = new Array()
  db.expense.each(entity => {
  obj1.push(entity)}).then(()=>{
    var today = new Date().getDay()
    chartOptions2 = [{
      "captions": [{}],
      "color": [{}],
      "xaxis": "Catagory",
      "xaxisl1": "Type",
      "yaxis": "Price"
      }]
    chartData2 = []
      for (let i =0; i < obj1.length; i++){
          console.log("I hate you")
          var str = obj1[i].date.slice(8, 10);
          console.log(str)
          console.log("25")
          track2.forEach(element => {
            if (obj1[i].category.toUpperCase() == element) {
              track1 = false
            }
            });
            if (track1 == false) {
              for (var key in chartOptions2[0]["captions"][0]) {
                if (chartOptions2[0]["captions"][0].hasOwnProperty(key)) {
                    if(chartOptions2[0]["captions"][0][key] == obj1[i].category.toUpperCase()){
                      var object1 = {}
                      object1["Catagory"] = key
                      object1["Type"] = obj1[i].expense_type
                      object1["Price"] = parseInt(obj1[i].amount)
                      chartData2.push(object1)
                      break
                    }
                }
              }
            }

            if(str === "25" && track1){
              var cat = obj1[i].category.toUpperCase()
              console.log(cat)
              chartOptions2[0]["captions"][0]["SAKS" + i] = cat
              chartOptions2[0]["color"][0]["SAKS" + i] = getRandomColor()
              console.log(chartOptions2)
                var object1 = {}
                object1["Catagory"] = "SAKS" + i
                object1["Type"] = obj1[i].expense_type
                object1["Price"] = parseInt(obj1[i].amount)
                chartData2.push(object1)
                track2.push(cat)
              console.log(chartData2)
              track1 = true
            }
      }
}).then(()=> {
  $(document).ready(function () {
    Plot2(innerCont2, chartInnerDiv2);
});
})
}



// Pie chart drawer for the monthly tab

var chartData3;
var chartOptions3;
function expenseGetData3(){
  var track1 = true
  let track2 = new Array()
  let obj1 = new Array()
  db.expense.each(entity => {
  obj1.push(entity)}).then(()=>{
    var today = new Date().getDay()
    chartOptions3 = [{
      "captions": [{}],
      "color": [{}],
      "xaxis": "Catagory",
      "xaxisl1": "Type",
      "yaxis": "Price"
      }]
    chartData3 = []
      for (let i =0; i < obj1.length; i++){
          console.log("I hate you")
          var str = obj1[i].date.slice(8, 10);
          console.log(str)
          console.log("25")
          track2.forEach(element => {
            if (obj1[i].category.toUpperCase() == element) {
              track1 = false
            }
            });
            if (track1 == false) {
              for (var key in chartOptions3[0]["captions"][0]) {
                if (chartOptions3[0]["captions"][0].hasOwnProperty(key)) {
                    if(chartOptions3[0]["captions"][0][key] == obj1[i].category.toUpperCase()){
                      var object1 = {}
                      object1["Catagory"] = key
                      object1["Type"] = obj1[i].expense_type
                      object1["Price"] = parseInt(obj1[i].amount)
                      chartData3.push(object1)
                      break
                    }
                }
              }
            }

            if(str === "25" && track1){
              var cat = obj1[i].category.toUpperCase()
              console.log(cat)
              chartOptions3[0]["captions"][0]["SAKS" + i] = cat
              chartOptions3[0]["color"][0]["SAKS" + i] = getRandomColor()
              console.log(chartOptions1)
                var object1 = {}
                object1["Catagory"] = "SAKS" + i
                object1["Type"] = obj1[i].expense_type
                object1["Price"] = parseInt(obj1[i].amount)
                chartData3.push(object1)
                track2.push(cat)
              console.log(chartData3)
              track1 = true
            }
      }
}).then(()=> {
  $(document).ready(function () {
    Plot3(innerCont3, chartInnerDiv3);
});
})
}



// Pie chart main plotter functions

// Variables

var innerCont1 = " .innerCont1"
var innerCont2 = " .innerCont2"
var innerCont3 = " .innerCont3"
var chartInnerDiv1 = '<div class="innerCont1" style="overflow: auto;top:0px; left: 0px; height:91% ; Width:100% ;overflow: hidden;"/>';
var chartInnerDiv2 = '<div class="innerCont2" style="overflow: auto;top:0px; left: 0px; height:91% ; Width:100% ;overflow: hidden;"/>';
var chartInnerDiv3 = '<div class="innerCont3" style="overflow: auto;top:0px; left: 0px; height:91% ; Width:100% ;overflow: hidden;"/>';
var runningColors;
var runningData;
    
// main functions


function Plot1(innerCont, chartInnerDiv) {
    TransformChartData(chartData1, chartOptions1, 0);
    BuildPie("chart1", chartData1, chartOptions1, 0, innerCont, chartInnerDiv)
}
function Plot2(innerCont, chartInnerDiv) {
    TransformChartData(chartData2, chartOptions2, 0);
    BuildPie("chart2", chartData2, chartOptions2, 0, innerCont, chartInnerDiv)
}
function Plot3(innerCont, chartInnerDiv) {
    TransformChartData(chartData3, chartOptions3, 0);
    BuildPie("chart3", chartData3, chartOptions3, 0, innerCont, chartInnerDiv)
}
function BuildPie(id, chartData, options, level, innerCont, chartInnerDiv) {
    var xVarName;
    var divisionRatio = 2.5;
    var legendoffset = (level == 0) ? 0 : -40;

    d3.selectAll("#" + id + innerCont).remove();
    $("#" + id).append(chartInnerDiv);
    var chart = d3.select("#" + id + innerCont);

    var yVarName = options[0].yaxis;
    var width = $(chart[0]).outerWidth(),
    height = $(chart[0]).outerHeight(),
    radius = Math.min(width, height) / divisionRatio;
    console.log(width)
    console.log(height)
    if (level == 1) {
        xVarName = options[0].xaxisl1;
    }
    else {
        xVarName = options[0].xaxis;
    }

    var rcolor = d3.scale.ordinal().range(runningColors);

    var arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius - 160);

    var arcOver = d3.svg.arc().outerRadius(radius + 20).innerRadius(radius - 150);

    chart = chart
            .append("svg")  //append svg element inside #chart
            .attr("width", width)    //set width
            .attr("height", height)  //set height
            .append("g")
            .attr("transform", "translate(" + (width / divisionRatio) + "," + ((height / divisionRatio) + 30) + ")");

    var pie = d3.layout.pie()
                .sort(null)
                .value(function (d) {
                    return d.Price;
                });

    var g = chart.selectAll(".arc")
                .data(pie(runningData))
                .enter().append("g")
                .attr("class", "arc");

    var count = 0;

    var path = g.append("path")
                .attr("d", arc)
                .attr("id", function (d) { return "arc-" + (count++); })
                .style("opacity", function (d) {
                    return d.data["op"];
                });

    path.on("mouseenter", function (d) {
        d3.select(this)
            .attr("stroke", "white")
            .transition()
            .duration(200)
            .attr("d", arcOver)
            .attr("stroke-width", 1);
    })
     .on("mouseleave", function (d) {
         d3.select(this).transition()
             .duration(200)
             .attr("d", arc)
             .attr("stroke", "none");
     })
     .on("click", function (d) {
         if (this._listenToEvents) {
             // Reset inmediatelly
             d3.select(this).attr("transform", "translate(0,0)")
             // Change level on click if no transition has started
             path.each(function () {
                 this._listenToEvents = false;
             });
         }
         d3.selectAll("#" + id + " svg").remove();
         if (level == 1) {
             TransformChartData(chartData, options, 0, d.data[xVarName]);
             BuildPie(id, chartData, options, 0, innerCont, chartInnerDiv);
         }
         else {
             var nonSortedChart = chartData.sort(function (a, b) {
                 return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
             });
             TransformChartData(nonSortedChart, options, 1, d.data[xVarName]);
             BuildPie(id, nonSortedChart, options, 1, innerCont, chartInnerDiv);
         }

     });

    path.append("svg:title")
    .text(function (d) {
        return d.data["title"] + " (" + d.data[yVarName] + ")";
    });

    path.style("fill", function (d) {
        return rcolor(d.data[xVarName]);
    })
     .transition().duration(1000).attrTween("d", tweenIn).each("end", function () {
         this._listenToEvents = true;
     });


    g.append("text")
     .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
     .attr("dy", ".35em")
     .style("text-anchor", "middle")
     .style("opacity", 1)
     .text(function (d) {
         return d.data[yVarName];
     });

    count = 0;
    var legend = chart.selectAll(".legend")
        .data(runningData).enter()
        .append("g").attr("class", "legend")
        .attr("legend-id", function (d) {
            return count++;
        })
        .attr("transform", function (d, i) {
            return "translate(15," + (parseInt("-" + (runningData.length * 10)) + i * 28 + legendoffset) + ")";
        })
        .style("cursor", "pointer")
        .on("click", function () {
            var oarc = d3.select("#" + id + " #arc-" + $(this).attr("legend-id"));
            oarc.style("opacity", 0.3)
            .attr("stroke", "white")
            .transition()
            .duration(200)
            .attr("d", arcOver)
            .attr("stroke-width", 1);
            setTimeout(function () {
                oarc.style("opacity", function (d) {
                    return d.data["op"];
                })
               .attr("d", arc)
               .transition()
               .duration(200)
               .attr("stroke", "none");
            }, 1000);
        });

    var leg = legend.append("rect");

    leg.attr("x", width / 2)
        .attr("width", 18).attr("height", 18)
        .style("fill", function (d) {
            return rcolor(d[yVarName]);
        })
        .style("opacity", function (d) {
            return d["op"];
        });
    legend.append("text").attr("x", (width / 2) - 5)
        .attr("y", 9).attr("dy", ".35em")
        .style("text-anchor", "end").text(function (d) {
            return d.caption;
        });

    leg.append("svg:title")
    .text(function (d) {
        return d["title"] + " (" + d[yVarName] + ")";
    });

    function tweenOut(data) {
        data.startAngle = data.endAngle = (2 * Math.PI);
        var interpolation = d3.interpolate(this._current, data);
        this._current = interpolation(0);
        return function (t) {
            return arc(interpolation(t));
        };
    }

    function tweenIn(data) {
        var interpolation = d3.interpolate({ startAngle: 0, endAngle: 0 }, data);
        this._current = interpolation(0);
        return function (t) {
            return arc(interpolation(t));
        };
    }

}

function TransformChartData(chartData, opts, level, filter) {
    var result = [];
    var resultColors = [];
    var counter = 0;
    var hasMatch;
    var xVarName;
    var yVarName = opts[0].yaxis;

    if (level == 1) {
        xVarName = opts[0].xaxisl1;

        for (var i in chartData) {
            hasMatch = false;
            for (var index = 0; index < result.length; ++index) {
                var data = result[index];

                if ((data[xVarName] == chartData[i][xVarName]) && (chartData[i][opts[0].xaxis]) == filter) {
                    result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
                    hasMatch = true;
                    break;
                }

            }
            if ((hasMatch == false) && ((chartData[i][opts[0].xaxis]) == filter)) {
                if (result.length < 9) {
                    var ditem = {}
                    ditem[xVarName] = chartData[i][xVarName];
                    ditem[yVarName] = chartData[i][yVarName];
                    ditem["caption"] = chartData[i][xVarName].substring(0, 10) + '...';
                    ditem["title"] = chartData[i][xVarName];
                    ditem["op"] = 1.0 - parseFloat("0." + (result.length));
                    result.push(ditem);

                    resultColors[counter] = opts[0].color[0][chartData[i][opts[0].xaxis]];

                    counter += 1;
                }
            }
        }
    }
    else {
        xVarName = opts[0].xaxis;

        for (var i in chartData) {
            hasMatch = false;
            for (var index = 0; index < result.length; ++index) {
                var data = result[index];

                if (data[xVarName] == chartData[i][xVarName]) {
                    result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
                    hasMatch = true;
                    break;
                }
            }
            if (hasMatch == false) {
                ditem = {};
                ditem[xVarName] = chartData[i][xVarName];
                ditem[yVarName] = chartData[i][yVarName];
                ditem["caption"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
                ditem["title"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
                ditem["op"] = 1;
                result.push(ditem);

                resultColors[counter] = opts[0].color != undefined ? opts[0].color[0][chartData[i][xVarName]] : "";

                counter += 1;
            }
        }
    }


    runningData = result;
    runningColors = resultColors;
    return;
}


// End of the pie chart plotter function