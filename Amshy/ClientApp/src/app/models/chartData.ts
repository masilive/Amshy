import candlestick from './candlestick';
import riskRewardRatio from './riskRewardRatio';

export default interface chartData {
  candlestickArray: candlestick[];
  riskRewardRatioArray: riskRewardRatio[];
}
