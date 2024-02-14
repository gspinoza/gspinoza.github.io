var IdeVis4 =  {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A simple pie chart with embedded data.",
    data: {
      url: "https://gist.githubusercontent.com/itchapo/5f63fb96d6f21e4c617700f6bc4bba8d/raw/5220ee94c7c55ae9dfe06a75e955069dd7b1e80e/data_project_iot.csv"
    },
    mark: "arc",
    encoding: {
      theta: {
        field: "TFP",
        type: "quantitative"
      },
      color: {
        field: "Period"
      }
    },
    view: {
      stroke: null
    }
};
vegaEmbed('#IdeVis4', IdeVis4);

  var IdeVis5 =  {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Stock prices of 5 Tech Companies over Time.",
    data: {
      url: "https://gist.githubusercontent.com/itchapo/5f63fb96d6f21e4c617700f6bc4bba8d/raw/5220ee94c7c55ae9dfe06a75e955069dd7b1e80e/data_project_iot.csv"
    },
    mark: {
      type: "line",
      point: {
        filled: false,
        fill: "white"
      }
    },
    encoding: {
      x: {
        field: "Period"
      },
      y: {
        field: "TFP",
        type: "quantitative"
      }
    }
};
vegaEmbed('#IdeVis5', IdeVis5);