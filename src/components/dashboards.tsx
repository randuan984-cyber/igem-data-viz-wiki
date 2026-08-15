import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import type { EChartsOption } from 'echarts';
import Chart from './Chart';

export function SampleBadge({
  text = '示意数据 · 待替换为真实实验数据',
  children,
}: {
  text?: string;
  children?: ReactNode;
}) {
  return <span className="sample-badge">{children ?? text}</span>;
}

/** Project Results：工程菌株 vs 初始菌株产量对比 */
export function ResultsYieldChart() {
  const option = useMemo<EChartsOption>(
    () => ({
      tooltip: { trigger: 'axis' },
      legend: { data: ['Cyclopentadecanolide', 'Ambrettolide'], top: 0 },
      grid: { left: 56, right: 24, top: 44, bottom: 40 },
      xAxis: { type: 'category', data: ['初始菌株', '工程菌株'], name: '菌株' },
      yAxis: { type: 'value', name: '产量 (mg/L)' },
      series: [
        {
          name: 'Cyclopentadecanolide',
          type: 'bar',
          barWidth: 28,
          data: [17, 248],
          itemStyle: { color: '#ad8b72', borderRadius: [6, 6, 0, 0] },
        },
        {
          name: 'Ambrettolide',
          type: 'bar',
          barWidth: 28,
          data: [0, 175],
          itemStyle: { color: '#a5bb8a', borderRadius: [6, 6, 0, 0] },
        },
      ],
    }),
    [],
  );

  return (
    <div className="chart-block">
      <SampleBadge />
      <Chart option={option} height={340} />
    </div>
  );
}

/** Modeling Results：模型预测 vs 实测值验证散点图 */
export function ModelValidationChart() {
  const option = useMemo<EChartsOption>(
    () => ({
      tooltip: { trigger: 'item' },
      legend: { data: ['预测 vs 实测', 'y = x 参考线'], top: 0 },
      grid: { left: 56, right: 32, top: 44, bottom: 44 },
      xAxis: { type: 'value', name: '实测值', min: 0, max: 5 },
      yAxis: { type: 'value', name: '模型预测值', min: 0, max: 5 },
      series: [
        {
          name: '预测 vs 实测',
          type: 'scatter',
          symbolSize: 10,
          data: [
            [0.4, 0.42],
            [1.1, 1.05],
            [1.9, 1.82],
            [2.6, 2.71],
            [3.2, 3.05],
            [3.8, 3.94],
            [4.5, 4.42],
          ],
          itemStyle: { color: '#a5bb8a' },
        },
        {
          name: 'y = x 参考线',
          type: 'line',
          symbol: 'none',
          data: [
            [0, 0],
            [5, 5],
          ],
          lineStyle: { type: 'dashed', color: '#ad8b72' },
        },
      ],
    }),
    [],
  );

  return (
    <div className="chart-block">
      <SampleBadge text="示意模型验证 · R² 等指标待真实数据替换" />
      <Chart option={option} height={340} />
    </div>
  );
}

/** Modeling Implementation：碳流分配交互演示 */
export function SensitivityDemo() {
  const [flux, setFlux] = useState(62);

  const option = useMemo<EChartsOption>(() => {
    const rest = 100 - flux;
    return {
      tooltip: { trigger: 'axis' },
      grid: { left: 56, right: 32, top: 44, bottom: 40 },
      xAxis: { type: 'category', data: ['TAG 分解', 'β-氧化', '内酯化 (目标)', '生物质'] },
      yAxis: { type: 'value', name: '碳流分配 (%)' },
      series: [
        {
          name: '碳流分配',
          type: 'bar',
          barWidth: 36,
          data: [
            { value: Math.round(rest * 0.42), itemStyle: { color: '#b9cfa0' } },
            { value: Math.round(rest * 0.3), itemStyle: { color: '#a5bb8a' } },
            { value: flux, itemStyle: { color: '#a5bb8a' } },
            { value: Math.round(rest * 0.28), itemStyle: { color: '#a5bb8a' } },
          ],
          label: { show: true, position: 'top', formatter: '{c}%' },
        },
      ],
    };
  }, [flux]);

  return (
    <div className="chart-block">
      <SampleBadge text="示意模型 · 交互演示：拖动滑杆观察碳流重分配" />
      <label className="range-label" htmlFor="flux-slider">
        内酯化路径碳流占比：<strong>{flux}%</strong>
      </label>
      <input
        id="flux-slider"
        type="range"
        min={25}
        max={80}
        value={flux}
        onChange={(event) => setFlux(Number(event.target.value))}
        className="range-input"
      />
      <Chart option={option} height={320} />
    </div>
  );
}

/** Modeling Application：大环麝香市场价格（示意） */
export function MarketValueChart() {
  const option = useMemo<EChartsOption>(
    () => ({
      tooltip: { trigger: 'axis' },
      grid: { left: 180, right: 48, top: 24, bottom: 40 },
      xAxis: { type: 'value', name: 'USD / kg' },
      yAxis: {
        type: 'category',
        data: ['Civettone', 'Cyclopentadecanolide', 'Ambrettolide'],
      },
      series: [
        {
          type: 'bar',
          barWidth: 26,
          data: [
            { value: 1200, itemStyle: { color: '#a5bb8a' } },
            { value: 800, itemStyle: { color: '#a5bb8a' } },
            { value: 650, itemStyle: { color: '#ad8b72' } },
          ],
          label: { show: true, position: 'right', formatter: '${c}' },
        },
      ],
    }),
    [],
  );

  return (
    <div className="chart-block">
      <SampleBadge text="示意市场数据 · 请以权威行业报告为准" />
      <Chart option={option} height={280} />
    </div>
  );
}

/** Modeling Background：POME 处置去向（示意） */
export function WasteImpactChart() {
  const option = useMemo<EChartsOption>(
    () => ({
      tooltip: { trigger: 'item', formatter: '{b}: {c}%' },
      legend: { bottom: 0 },
      series: [
        {
          name: 'POME 处置去向',
          type: 'pie',
          radius: ['38%', '62%'],
          center: ['50%', '44%'],
          data: [
            { value: 45, name: '无害化处置', itemStyle: { color: '#ad8b72' } },
            { value: 30, name: '直接排放/低效处理', itemStyle: { color: '#b9cfa0' } },
            { value: 25, name: '资源化利用', itemStyle: { color: '#a5bb8a' } },
          ],
          label: { formatter: '{b}: {d}%' },
        },
      ],
    }),
    [],
  );

  return (
    <div className="chart-block">
      <SampleBadge text="示意行业数据 · 待替换为引用来源" />
      <Chart option={option} height={300} />
    </div>
  );
}

/** Modeling Assumptions：模型假设敏感性雷达（示意） */
export function AssumptionsRadar() {
  const option = useMemo<EChartsOption>(
    () => ({
      tooltip: {},
      radar: {
        indicator: [
          { name: '基因拷贝数', max: 100 },
          { name: '发酵温度', max: 100 },
          { name: 'pH 控制', max: 100 },
          { name: '碳源配比', max: 100 },
          { name: '溶氧水平', max: 100 },
        ],
        radius: '65%',
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [78, 64, 55, 82, 47],
              name: '影响度 (示意)',
              areaStyle: { color: 'rgba(185,207,160,0.3)' },
              lineStyle: { color: '#a5bb8a' },
              itemStyle: { color: '#ad8b72' },
            },
          ],
        },
      ],
    }),
    [],
  );

  return (
    <div className="chart-block">
      <SampleBadge text="示意敏感性分析 · 结论待真实数据校准" />
      <Chart option={option} height={320} />
    </div>
  );
}
