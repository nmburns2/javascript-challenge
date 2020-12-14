// from data.js
var tableData = data;

console.log(tableData)

// get references
var tbody = d3.select('tbody');
var columns = ['datetime', "city", "state", "country", "shape", "durationMinutes", "comments"];

// populate html with data from the table
var ufoData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
        
    });
}

ufoData(tableData);


var button = d3.select("#filter-btn");