var w = 500;
h = 600;


var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
       11, 12, 15, 20, 18, 29, 16, 18, 23, 25];
var dataset2 = [20];

var currentData = dataset;

var mySVG = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

function update(myData) {
    //clear the page
    //document.body.innerHTML = "";

    //create an svg element 



    //draw stuff with svg 

    //FEED NEW DATA
    var myBars = mySVG.selectAll("rect")
        .data(myData);

    //SELECT NEW NODES THAT R IN THE NEW DATASET BUT ARE NOT DRAWN TO THE DOM
    //APPEND NEW SHAPES/NODES TO THE DOM
    myBars.enter()
        .append("rect");
    //myBars now contains the old nodes AND the new nodes
    //These lines below sets attributes of all the nodes in the selection
    myBars
        .attr("x", function (d, i) {
            console.log(d);
            return i * 20 + 20;
        })
        .attr("y", function (d) {
            return 500 - d * 10;
        })
        .attr("width", 5)
        .attr("height", function (d) {
            console.log("yes");
            return d * 10;

        })
        .on("mouseover", function (d, i) {
            d3.select(document.getElementById("text" + i))
                .transition()
                .duration(300)
                .attr("fill-opacity", 1);
        })
        .on("mouseout", function (d, i) {
            d3.select(document.getElementById("text" + i))
                .transition()
                .duration(500)
                .attr("fill-opacity", 0);

        });

    myBars.exit().remove();

}

//INITIAL DRAWING
update(dataset);

//MAKE DATA CHANGE 
setTimeout(function () {
//
//    dataset = [30];
//
//    currentData = dataset;
//    console.log(currentData);

        console.log(dataset2);
        if (currentData == dataset) {
            currentData = dataset2;
        } else {
            currentData = dataset;
        }
    update(currentData);

}, 2000);