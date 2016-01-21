var w = 500;
h = 600;


var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
       11, 12, 15, 20, 18, 29, 16, 18, 23, 25];




function update(data) {
    //clear the page
    document.body.innerHTML = "";

    //create an svg element 
    var mySVG = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    //draw stuff with svg 
    mySVG.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
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



    var myText = mySVG.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d;
        })
        //attr is normally for SVG 
        .attr({
            x: function (d, i) {
                return i * 20 + 20;
            },
            y: function (d) {
                return 500 - d * 10 - 20;
            }
        })
        //style manipulates CSS 
        .style("text-anchor", "middle")
        .attr("fill", "black")
        .attr("fill-opacity", 0)
        //giving it an ID for individual manipulation
        .attr("id", function (d, i) {
            return "text" + i;

        })
        .attr("class", "oldData")

    ;
    console.log("drawn!");

}

//INITIAL DRAWING
update(dataset);

//MAKE DATA CHANGE 
setInterval(function () {
    dataset.push(10);
    dataset.splice(0, 1);
    console.log(dataset);
    update(dataset);
}, 1000);