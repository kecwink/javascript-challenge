// from data.js
var tableData = data;
//console.log(tableData)


// make a function to fill the ufo table
function fillUFOTable(data) {

    //get a reference to the ufo table
    var ufoTable = d3.select('#ufo-table');
    console.log(ufoTable)

    // get a reference to the ufo table body
    var tbody = d3.select('tbody');



    //loop through each sighting and print each sighting object
    data.forEach(function (ufoSighting) {
        //console.log(ufoSighting);

        //append a table row for each sighting
        var row = tbody.append('tr');

        //print each value from each sighting
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            //console.log(key, value);


            // append a cell to the row for each value
            var cell = row.append("td");

            // update each cell with the corresponding data
            cell.text(value);
        });

        //filter the ufo table to the inputted date
        //select the date-time input with d3
        var datetimeInput = d3.select("#datetime");

        //d3.event.preventDefault();

        // clean this to select rows that correspond with the given datetime
        // Input fields can trigger a change event when new text is entered.
        datetimeInput.on("change", function () {
            var ufotable2 = d3.select('#ufo-table');
            var clearTable = d3.select(".tbody")
            tbody.html(" ")
            var inputValue = datetimeInput.property("value");
            //console.log(inputValue)
            var sightingDate = tableData.filter(tableData => tableData.datetime == inputValue);



            //check the sightDate is properly working
            //console.log(sightingDate)
            //populate the ufo table with filtered data
            fillUFOTable(sightingDate)


        });
    });
};
//populate the ufo table with current data
fillUFOTable(tableData);






