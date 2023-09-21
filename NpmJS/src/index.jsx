// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// Radial Gauge Module
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';

// register the modules
ModuleManager.register(
  IgcRadialGaugeModule
);

// 加入更新此元件函式
window.updateRgValue = function (value) {
  var rg = document.getElementById("rg");
  rg.value = value;
}
 