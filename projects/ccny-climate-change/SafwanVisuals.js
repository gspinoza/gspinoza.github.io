//Agricultural Productivity (Beef) 
//1980s
var SafwanVis1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Agricultural Productivity (Beef)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/australian-agricultural-beef_80s.csv"
  },
  mark: "point",
  encoding: {
    x: {
      field: "Input",
      type: "quantitative",
      scale: {domain: [60, 90]}
    },
    y: {
      field: "Output",
      type: "quantitative",
      scale: {domain: [60, 90]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "category20b"}},
    size: {field: "TFP", type: "quantitative", scale: {domain: [90, 150]}}
  }
  };
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#SafwanVis1', SafwanVis1);
  
  //1990s
  var SafwanVis2 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Agricultural Productivity (Beef)",
    data: {
      url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/australian-agricultural-beef_90s.csv"
    },
    mark: "point",
    encoding: {
      x: {
        field: "Input",
        type: "quantitative",
        scale: {domain: [60, 80]}
      },
      y: {
        field: "Output",
        type: "quantitative",
        scale: {domain: [70, 110]}
      },
      color: {field: "Year", type: "ordinal", scale: {scheme: "category20b"}},
      size: {field: "TFP", type: "quantitative", scale: {domain: [90, 150]}}
    }
  };
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#SafwanVis2', SafwanVis2);
  
  //2000s
  var SafwanVis3 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Agricultural Productivity (Beef)",
    data: {
      url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/australian-agricultural-beef_2000s.csv"
    },
    mark: "point",
    encoding: {
      x: {
        field: "Input",
        type: "quantitative",
        scale: {domain: [60, 100]}
      },
      y: {
        field: "Output",
        type: "quantitative",
        scale: {domain: [90, 150]}
      },
      color: {field: "Year", type: "ordinal", scale: {scheme: "category20b"}},
      size: {field: "TFP", type: "quantitative", scale: {domain: [90, 150]}}
    }
  };
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#SafwanVis3', SafwanVis3);
  
  
  //2010s
  var SafwanVis4 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Agricultural Productivity (Beef)",
    data: {
      url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/australian-agricultural-beef_2010s.csv"
    },
    mark: "point",
    encoding: {
      x: {
        field: "Input",
        type: "quantitative",
        scale: {domain: [60, 100]}
      },
      y: {
        field: "Output",
        type: "quantitative",
        scale: {domain: [90, 120]}
      },
      color: {field: "Year", type: "ordinal", scale: {scheme: "category20b"}},
      size: {field: "TFP", type: "quantitative", scale: {domain: [90, 150]}}
    }
  };
  
  // More argument info at https://github.com/vega/vega-embed
  vegaEmbed('#SafwanVis4', SafwanVis4);



// CLIMATE CHANGE IN AUSTRALIA

//1980s
var SafwanVis5 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia (1980s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_1980s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal",
      sort: [""]
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [12.5, 30]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 1,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis5', SafwanVis5);

//1990s
var SafwanVis6 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia (1990s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_1990s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal",
      sort: [""]
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [12.5, 30]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 1,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis6', SafwanVis6);

//2000s
var SafwanVis7 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia (2000s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_2000s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal",
      sort: [""]
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [12.5, 30]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 1,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis7', SafwanVis7);

//2010s
var SafwanVis8 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia (2010s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_2010s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal",
      sort: [""]
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [12.5, 30]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 1,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis8', SafwanVis8);

// CLIMATE CHANGE IN AUSTRALIA DECEMBER
//1980s
var SafwanVis9 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia In December (1980s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_In_DEC_1980s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal"
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [26, 28]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 1,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis9', SafwanVis9);

//1990s
var SafwanVis10 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia In December (1990s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_In_DEC_1990s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal"
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [25.5, 28.5]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 3,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis10', SafwanVis10);

//2000s
var SafwanVis11 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia In December (2000s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_DEC_2000s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal"
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [26, 28]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 3,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis11', SafwanVis11);

//2010s
var SafwanVis12 =  {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Climate Change In Australia In December (2010s)",
  data: {
    url: "https://raw.githubusercontent.com/safwan216/Vegalite/main/Fluxuation_In_Climate_In_DEC_2010s.csv"
  },
  mark: "tick",
  encoding: {
    x: {
      field: "Month",
      type: "ordinal"
    },
    y: {
      field: "Temperature (Celsius)",
      type: "quantitative",
      scale: {"domain": [26, 30]}
    },
    color: {field: "Year", type: "ordinal", scale: {scheme: "tableau10"}}
  },
  config: {
    tick: {
      thickness: 3,
      bandSize: 15
    }
  }
};
vegaEmbed('#SafwanVis12', SafwanVis12);