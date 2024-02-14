
var IdeVis1 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  repeat: {
    row: ["Input", "Output", "TFP"],
    column: ["TFP", "Output", "Input"]
  },
  spec: {
    data: {"url": "https://gist.githubusercontent.com/itchapo/5f63fb96d6f21e4c617700f6bc4bba8d/raw/5220ee94c7c55ae9dfe06a75e955069dd7b1e80e/data_project_iot.csv"},
    mark: "point",
    params: [
      {
        name: "brush",
        select: {
          type: "interval",
          resolve: "union",
          on: "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
          translate: "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
          zoom: "wheel![event.shiftKey]"
        }
      },
      {
        name: "grid",
        select: {
          type: "interval",
          resolve: "global",
          translate: "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
          zoom: "wheel![!event.shiftKey]"
        },
        bind: "scales"
      }
    ],
    encoding: {
      x: {field: {repeat: "column"}, type: "quantitative"},
      y: {
        field: {repeat: "row"},
        type: "quantitative",
        axis: {"minExtent": 20}
      },
      color: {
        condition: {
          param: "brush",
          field: "Period",
          type: "nominal"
        },
        value: "grey"
      }
    }
  }
};
vegaEmbed('#IdeVis1', IdeVis1);


var IdeVis2 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  data: {"url": "https://gist.githubusercontent.com/itchapo/b94126844e42092d644f6f3852a55907/raw/2846855c747d846ddd1c133ba4b28fb3c6ee3eaf/data_project_air_temp.csv"},
  mark: "point",
  encoding: {
    x: {field: "Surface_Air_Temp", type: "quantitative"},
    y: {field: "See_Surface_Temp", type: "quantitative"}
  }
};
vegaEmbed('#IdeVis2', IdeVis2);



var IdeVis3 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  repeat: {
    row: ["Surface_Air_Temp","See_Surface_Temp", "TFP"],
    column: ["TFP","Surface_Air_Temp","See_Surface_Temp"]
  },
  spec: {
    data: {"url": "https://gist.githubusercontent.com/itchapo/f862d56456ec68cbf7729891c063339f/raw/034ba176d099a59c78794ae3a9e96cbcbde07d9d/data_project_both.csv"},
    mark: "point",
    params: [
      {
        name: "brush",
        select: {
          type: "interval",
          resolve: "union",
          on: "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
          translate: "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
          zoom: "wheel![event.shiftKey]"
        }
      },
      {
        name: "grid",
        select: {
          type: "interval",
          resolve: "global",
          translate: "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
          zoom: "wheel![!event.shiftKey]"
        },
        bind: "scales"
      }
    ],
    encoding: {
      x: {field: {repeat: "column"}, type: "quantitative"},
      y: {
        field: {repeat: "row"},
        type: "quantitative",
        axis: {"minExtent": 20}
      },
      color: {
        condition: {
          param: "brush",
          field: "Period",
          type: "nominal"
        },
        value: "grey"
      }
    }
  }
};
  vegaEmbed('#IdeVis3', IdeVis3);
