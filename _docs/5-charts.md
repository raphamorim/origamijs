---
title: charts
layout: docs
topics:
  - line
order: 5
description: Chats Guide - Origamijs is a Powerful and Lightweight Library to create using HTML5 Canvas
---

# Charts

To display data, the chart must be passed a data object that contains all of the information needed by the chart. The data object can contain different parameters.

## Line

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets.

<pre><code class="language-javascript">octx.chartLine(config)</code></pre>

<div class="example mid pure">
  <canvas id="chart-line"></canvas>
</div>

<pre><code class="language-javascript">origami('canvas#chart-line')
  .chartLine({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      data: [65, 59, 40, 31, 56, 30, 60],
      points: true,
      pointsColor: "red",
      line: "1px dashed #000",
  })
  .draw();</code></pre>