var MingVis4 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation?",
    title: "Precipitation related to the TFP across all agriculture industries (1991-2000)",
    width: 400,
    height: 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_1991_2000_AUS.csv"
    },
    encoding: {
      x: {
        field: "Year",
        type: "ordinal",
        sort: []
      }
    },
    layer: [
      {
        mark: {
          opacity: 1,
          type: "line",
          color: "#ff0000"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "TFP",
            title: "TFP (all industries)",
            axis: {
              titleColor: "#fd0000"
            }
          }
        }
      },
      {
        mark: {
          type: "point",
          interpolate: "monotone"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {
              titleColor: "#85A9C5"
            }
          }
        }
      }
    ],
    resolve: {
      scale: {
        y: "independent"
      }
    }
};
  
// More argument info at https://github.com/vega/vega-embed
vegaEmbed('#MingVis4', MingVis4);

var MingVis5 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation?",
    title: "Precipitation related to the TFP across all agriculture industries (2001-2010)",
    width: 400,
    height: 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_2001_2010_AUS%20.csv"
    },
    encoding: {
      x: {
        field: "Year",
        type: "ordinal",
        sort: []
      }
    },
    layer: [
      {
        mark: {
          opacity: 1,
          type: "line",
          color: "#ff0000"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "TFP",
            title: "TFP (all industries)",
            axis: {
              titleColor: "#fd0000"
            }
          }
        }
      },
      {
        mark: {
          type: "point",
          interpolate: "monotone"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {
              titleColor: "#85A9C5"
            }
          }
        }
      }
    ],
    resolve: {
      scale: {
        y: "independent"
      }
    }
};
  
// More argument info at https://github.com/vega/vega-embed
vegaEmbed('#MingVis5', MingVis5);

var MingVis6 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "This Visualization shows that How climate change affects the precipitation?",
    title: "Precipitation related to the TFP across all agriculture industries (2011-2019)",
    width: 400,
    height: 300,
    data: {
      url: "https://raw.githubusercontent.com/MingHin-Cheung/Vege-lite/main/pr_2011_2019_AUS.csv"
    },
    encoding: {
      x: {
        field: "Year",
        type: "ordinal",
        sort: []
      }
    },
    layer: [
      {
        mark: {
          opacity: 1,
          type: "line",
          color: "#ff0000"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "TFP",
            title: "TFP (all industries)",
            axis: {
              titleColor: "#fd0000"
            }
          }
        }
      },
      {
        mark: {
          type: "point",
          interpolate: "monotone"
        },
        encoding: {
          y: {
            aggregate: "average",
            field: "Rainfall - (MM)",
            title: "Precipitation (mm)",
            axis: {
              titleColor: "#85A9C5"
            }
          }
        }
      }
    ],
    resolve: {
      scale: {
        y: "independent"
      }
    }
};
  
// More argument info at https://github.com/vega/vega-embed
vegaEmbed('#MingVis6', MingVis6);