//Think of layout as a tool that use the data you feed in to generate all the data( xy position, size of shapes, path coordinates) to draw the shapes later. 


var width = 800;
var height = 600;

var mySVG = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(50,50)");

//create a layout instance


//load the data, then:
//1.use the layout instance to generate drawing data
//2.draw the shapes using the generated data
