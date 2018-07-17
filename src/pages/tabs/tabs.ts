import { Component } from '@angular/core';
import { Chart1Page } from "../chart1/chart1";
import { Chart2Page } from "../chart2/chart2";
import { Chart3Page } from "../chart3/chart3";
import { Chart4Page } from "../chart4/chart4";
import { Chart5Page } from "../chart5/chart5";
import { Chart6Page } from "../chart6/chart6";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Chart1Page;
  tab2Root: any = Chart2Page;
  tab3Root: any = Chart3Page;
  tab4Root: any = Chart4Page;
  tab5Root: any = Chart5Page;
  tab6Root: any = Chart6Page;
}