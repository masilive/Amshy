import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { candlestick } from '../models/candlestick';

@Component({
  selector: 'candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.css']
})
export class CandlestickComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef | undefined;

  screenPixelWidth: string | undefined;
  screenPixelHeight: string | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenPixelWidth = window.innerWidth + 'px';
    this.screenPixelHeight = window.innerHeight + 'px';
  }

  plotCandlesticksToChart(jsonData: string) {
    const data = JSON.parse(jsonData);

    // Use nativeElement to access the actual DOM element
    const canvas = this.chartContainer?.nativeElement;
    const ctx = canvas.getContext('2d');

    const scaleFactor = 2;

    canvas.width = window.innerWidth * scaleFactor;
    canvas.height = window.innerHeight * scaleFactor;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(scaleFactor, scaleFactor);

    const canvasWidth = canvas.width / scaleFactor;
    const canvasHeight = canvas.height / scaleFactor;
    const chartPaddingWidth = 0.01;
    const chartPaddingHeight = 0.03;
    const candlestickPadding = 0.2;
    const paddedWidth = canvasWidth * (1 - chartPaddingWidth * 2);
    const paddedHeight = canvasHeight * (1 - chartPaddingHeight * 2);
    const maxHigh = Math.max(...data.candlestickArray.map((d: candlestick) => d.high));
    const minLow = Math.min(...data.candlestickArray.map((d: candlestick) => d.low));
    const range = maxHigh - minLow;
    const candleWidth = (paddedWidth / data.candlestickArray.length * (1 - candlestickPadding)) * .8;
    const wickWidth = candleWidth * 0.1;
    const height = paddedHeight / range;

    const xOffset = paddedWidth / data.candlestickArray.length * candlestickPadding;

    function drawCandlestick(data: candlestick, x: number, y: number) {
      const openY = y + (data.high - data.open) * height;
      const closeY = y + (data.high - data.close) * height;
      const lowY = y + (data.high - data.low) * height;

      ctx.strokeStyle = data.open > data.close ? 'red' : 'green';
      ctx.lineWidth = wickWidth;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x + candleWidth / 2, y);
      ctx.lineTo(x + candleWidth / 2, lowY);
      ctx.stroke();

      ctx.lineWidth = candleWidth;
      ctx.beginPath();
      ctx.moveTo(x + candleWidth / 2, openY);
      ctx.lineTo(x + candleWidth / 2, closeY);
      ctx.stroke();
    }

    function drawCandlestickChart() {
      let x = 0;
      let y = 0;

      data.candlestickArray.forEach((d: candlestick, i: number) => {
        x = canvasWidth * chartPaddingWidth + i * (candleWidth + xOffset);
        y = canvasHeight * chartPaddingHeight + (maxHigh - d.high) / range * paddedHeight;

        drawCandlestick(d, x, y);
      });
    }

    drawCandlestickChart();
  }

  ngOnInit() {

  }
}
