---
title: charts
layout: docs
topics:
  - line-chart
order: 5
description: Chats Guide - Origamijs is a Powerful and Lightweight Library to create using HTML5 Canvas
---

# Charts

To display data, the chart must be passed a data object that contains all of the information needed by the chart. The data object can contain different parameters.

<h2 id="line-chart">Line</h2>

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets.

<pre><code class="language-javascript">octx.chartLine(config)</code></pre>

<div class="example mid pure">
  <canvas id="chart-line"></canvas>
</div>

<pre><code class="language-javascript">origami('canvas#chart-line')
  .chartLine({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [1, 9, 8, 71, 56, 30, 60],
        line: "2px solid pink",
      },
      {
        data: [21, 29, 30, 25, 43, 50, 80],
        points: true,
        pointsColor: "purple",
        line: "4px dotted purple",
      },
      {
        data: [85, 40, 20, 10, 15, 18, 0],
        line: "1px dashed orange",
      },
      {
        data: [10, 60, 50, 90],
        points: true,
        pointsColor: "green",
        line: "1px dotted green",
      }
    ]
  }).draw();</code></pre>