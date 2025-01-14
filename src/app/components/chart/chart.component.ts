import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: any;

  constructor() {
    // تسجيل جميع المكونات المطلوبة من Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('myChart', {
      type: 'bar', // نوع الرسم البياني (عمودي)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // التسميات
        datasets: [
          {
            label: 'Sales',
            data: [10, 20, 30, 40, 50], // القيم
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales Chart'
          }
        }
      }
    });
  }
}
