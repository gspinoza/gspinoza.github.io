  var MingVis1 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation",
    title:"The Change in Precipitation from 1991 to 2000 in Australia",
    width: 400, "height": 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_1991_2000_AUS.csv"
    },
    encoding: {
      x: {field: "Month", type: "ordinal","sort":[]}
    },
    layer: [
      {
        mark: {opacity: 1, type: "line", color: "#ff0000"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Temperature - (Celsius)",
            title: "Avg. Temperature (°C)",
            axis: {titleColor: "#fd0000"}
          }
        }
      },
      {
        mark: { type: "point", interpolate: "monotone"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {titleColor:"#85A9C5"}
          }
          ,
      color: {field: "Year"}
        }
      }
  
    ],
    resolve: {scale: {y: "independent"}}
  };
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#MingVis1', MingVis1);

  var MingVis2 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation?",
    title:"The Change in Precipitation from 2001 to 2010 in Australia",
    width: 400, "height": 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_2001_2010_AUS%20.csv"
    },
    encoding: {
      x: {field: "Month", type: "ordinal","sort":[]}
    },
    layer: [
      {
        mark: {opacity: 1, type: "line", color: "#ff0000"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Temperature - (Celsius)",
            title: "Avg. Temperature (°C)",
            axis: {titleColor: "#fd0000"}
          }
        }
      },
      {
        mark: { type: "point", interpolate: "monotone"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {titleColor:"#85A9C5"}
          }
          ,
      color: {field: "Year"}
        }
      }
  
    ],
    resolve: {scale: {y: "independent"}}
  };
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#MingVis2', MingVis2);

  var MingVis3 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation",
    title:"The Change in Precipitation from 2011 to 2020 in Australia",
    width: 400, "height": 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_2011_2020_AUS.csv"
    },
    encoding: {
      x: {field: "Month", type: "ordinal","sort":[]}
    },
    layer: [
      {
        mark: {opacity: 1, type: "line", color: "#ff0000"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Temperature - (Celsius)",
            title: "Avg. Temperature (°C)",
            axis: {titleColor: "#fd0000"}
          }
        }
      },
      {
        mark: { type: "point", interpolate: "monotone"},
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {titleColor:"#85A9C5"}
          }
          ,
      color: {field: "Year"}
        }
      }
  
    ],
    resolve: {scale: {y: "independent"}}
  };  
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#MingVis3', MingVis3);