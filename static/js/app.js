

Plotly.d3.json("samples.json",function(error,samples) {
      console.log(samples);
      var sampledata=samples.samples;
      console.log(sampledata);
      var sortedSample=sampledata.sort((a,b) => b.sample_values-a.sample_values);
console.log(sortedSample)
var listofID=[]

  for (var i = 0; i < sampledata.length; i++ ){
    if (listofID.indexOf(sampledata[i]) === -1 ){
        listofID.push(sampledata[i].id);
    }
}
console.log(listofID)

 
    setScatterPlot('940'); 
    function setScatterPlot(chosenID) {


    var Result = sortedSample.filter(sampleObj => sampleObj.id == chosenID);
    var result = Result[0];  
    var otu_id = result.otu_ids;
    var label = result.otu_labels;
    var value = result.sample_values;  

          var trace2 = {
            x: otu_id,
            y: value,
            text:label,
            mode:'markers',
            marker:{
                size: value,
                color:otu_id,
    
            },
            };
            
    
    
          // Create the data array for the plot
          var data2 = [trace2];
        
          // Define the plot layout
          var layout2 = {
            title: "Sample Value vs OTU ID Scatter Plot",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Sample Value" },
          };
        
          // Plot the chart to a div tag with id "plot"
          Plotly.newPlot("bubble", data2, layout2);
        
     


      var trace1 = {
        x:value.slice(0,10).reverse(),
        y: otu_id.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        type: "bar",
        orientation: 'h',
        name: "Top 10 Sample Value by OTU ID",
        text:label.slice(0,10).reverse()
        
      };
    console.log(value)
    console.log(otu_id)
    console.log(label)
      // Create the data array for the plot
      var data = [trace1];
    
      // Define the plot layout
      var layout = {
        title: "Top 10 Sample Value by OTU ID",
        xaxis: { title: "value" },
        yaxis: { title: "OTU ID" },
      };
    
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("bar", data, layout);
     
    };

    var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    countrySelector = innerContainer.querySelector('.countrydata'),
    countrySelector = document.querySelector('.countrydata')


function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length;  i++) {
        var currentOption = document.createElement('option');
        currentOption.text = textArray[i];
        selector.appendChild(currentOption);
    }
}

assignOptions(listofID, countrySelector);

function updateCountry(){
    setScatterPlot(countrySelector.value);
}

countrySelector.addEventListener('change', updateCountry, false);
});

