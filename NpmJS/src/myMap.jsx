import { Maps } from '@syncfusion/ej2-maps';

const map = new Maps({
  layers: [
    {
      layerType: "OSM"
    }
  ]
});

map.appendTo('#element');