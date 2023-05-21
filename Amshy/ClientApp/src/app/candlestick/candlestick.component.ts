import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import candlestick from '../models/candlestick';
import chartData from '../models/chartData';

@Component({
  selector: 'candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.css']
})
export class CandlestickComponent implements AfterViewInit {
  @ViewChild('chartContainer') chartContainer: ElementRef<HTMLCanvasElement> | undefined;
  datasString: string = "{\"riskRewardRatioArray\": [{\"highestHigh\": 0, \"lowestLow\": 0, \"window\": 3, \"fillStyle\": \"rgba(255, 0, 0, 0.2)\"}], \"candlestickArray\": [{\"open\": 13105.349, \"high\": 13116.899, \"low\": 13105.249, \"close\": 13110.599},\r\n{\"open\": 13110.769, \"high\": 13112.879, \"low\": 13103.207, \"close\": 13112.219},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13112.329},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299},\r\n{\"open\": 13105.369, \"high\": 13108.059, \"low\": 13094.119, \"close\": 13094.709},\r\n{\"open\": 13094.809, \"high\": 13104.897, \"low\": 13090.879, \"close\": 13103.889},\r\n{\"open\": 13104.129, \"high\": 13106.789, \"low\": 13096.549, \"close\": 13105.879},\r\n{\"open\": 13106.519, \"high\": 13113.189, \"low\": 13101.209, \"close\": 13107.179},\r\n{\"open\": 13107.239, \"high\": 13111.289, \"low\": 13104.789, \"close\": 13110.219},\r\n{\"open\": 13110.177, \"high\": 13110.399, \"low\": 13099.809, \"close\": 13100.319},\r\n{\"open\": 13100.329, \"high\": 13105.089, \"low\": 13092.369, \"close\": 13095.899},\r\n{\"open\": 13095.829, \"high\": 13096.489, \"low\": 13090.119, \"close\": 13094.549},\r\n{\"open\": 13094.567, \"high\": 13099.909, \"low\": 13086.639, \"close\": 13089.799},\r\n{\"open\": 13089.807, \"high\": 13095.789, \"low\": 13087.859, \"close\": 13090.829},\r\n{\"open\": 13090.897, \"high\": 13096.099, \"low\": 13088.719, \"close\": 13092.779},\r\n{\"open\": 13092.899, \"high\": 13108.809, \"low\": 13090.249, \"close\": 13105.909},\r\n{\"open\": 13105.819, \"high\": 13118.199, \"low\": 13105.179, \"close\": 13117.819},\r\n{\"open\": 13117.907, \"high\": 13128.889, \"low\": 13117.059, \"close\": 13124.139},\r\n{\"open\": 13123.919, \"high\": 13128.169, \"low\": 13119.899, \"close\": 13121.327},\r\n{\"open\": 13121.259, \"high\": 13123.609, \"low\": 13111.349, \"close\": 13112.409},\r\n{\"open\": 13112.569, \"high\": 13116.189, \"low\": 13104.709, \"close\": 13110.399},\r\n{\"open\": 13110.209, \"high\": 13111.849, \"low\": 13101.529, \"close\": 13109.829},\r\n{\"open\": 13112.329, \"high\": 13116.989, \"low\": 13103.529, \"close\": 13104.149},\r\n{\"open\": 13104.289, \"high\": 13108.329, \"low\": 13102.799, \"close\": 13105.299}]}";

  screenPixelWidth: string | undefined;
  screenPixelHeight: string | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenPixelWidth = window.innerWidth + 'px';
    this.screenPixelHeight = window.innerHeight + 'px';
  }

  plotCandlesticksToChart(jsonData: string) {
    const data: chartData = JSON.parse(jsonData);

    // Use nativeElement to access the actual DOM element
    const canvas = this.chartContainer?.nativeElement;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) {
      console.error('chartContainer or the nativeElement within is undefined');
      return;
    }

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

      if (ctx) {
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

  ngAfterViewInit() {
    this.onResize();
    this.plotCandlesticksToChart(this.datasString);
  }
}
