// from data.js
var tableData = data;

console.log(tableData)

// get references to the table
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

// select the filter button
var button = d3.select("#filter-btn");
var form = d3.select("form");

// create event handler
// set up filter button
button.on("click", search)
form.on("submit", search)

// create event handler function
function search() {
    // prevent page from refreshing
    d3.event.preventDefault();
    
    var tableDate = d3.select("#datetime");
    var value = tableDate.property("value");
    var filtered = tableData.filter(tableData => tableData.datetime === value);
    var sightingData = d3.selectAll('tbody>tr');
    sightingData.html("");
    let response = {filtered};
    // create condition if filtered date doesnt exist
    if (response.filtered.length !== 0) {
        ufoData(filtered);
    }
        else {
            tbody.append("tr").append("td").text("No UFO sightings on this date");
        }
};