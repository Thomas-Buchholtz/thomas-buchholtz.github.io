import { Component, Input, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexDataLabels,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export interface PieChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  colors: string[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'lib-pie-chart',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() series: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = [];
  @Input() dataLabelFontSize = '14px';
  @Input() title = '';

  public chartOptions!: PieChartOptions;

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series as ApexNonAxisChartSeries,
      chart: { type: 'pie' },
      labels: this.labels,
      colors: this.colors,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: this.dataLabelFontSize,
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          // colors: ['#fff'] // optional: Label-Farbe
        },
        dropShadow: {
          enabled: false
        },
        formatter: (val) => Math.round(val as number) + '%',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: 'bottom' },
            dataLabels: {
              style: {
                fontSize: '14px'
              }
            }
          }
        }
      ],
      legend: { position: 'bottom', fontSize: '20px' },
      title: { text: this.title }
    };
  }
}
