//Think of layout as a tool that use the data you feed in to generate all the data( xy position, size of shapes, path coordinates) to draw the shapes later. 


var width = 800;
var height = 600;

var mySVG = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(50,50)");

//Generate the layout data 
var myPack = d3.layout.pack()
    .size([width, height - 50])
    .padding(10);

console.log(myPack);

//load the data, then:
//1.use the layout instance to generate drawing data
//2.draw the shapes using the generated data
d3.json("itpProfessors.json", function (data) {
    var nodes = myPack.nodes(data);
    console.log(nodes);

    var node = mySVG.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", function (d) {
            return d.r;
        })
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
        .attr("fill", "steelblue")
        .attr("opacity", 0.25)
        .attr("stroke", "#ADADAD").attr("stroke-width", "2");


});