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
    fill: true,
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
      }
    ]
  }).draw();</code></pre>

The following options can be included in <code class="language-javascript">chartLine</code> dataset to configure options for that specific dataset.

<table>
<thead>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>labels</td>
    <td><strong><i>Array</i></strong></td>
    <td>The label for the dataset which appears in the legend and tooltips</td>
  </tr>
  <tr>
    <td>datasets</td>
    <td><strong><i>Array</i></strong></td>
    <td>Arrays of data objects. Example:<br><pre><code class="language-javascript">data: [], // array of numbers
points: true, //default: false
pointsColor: "green", //default: null
line: "1px dotted green" //default: "1px solid #000"</code></pre></td>
  </tr>
  <tr>
    <td>fill</td>
    <td><strong><i>Boolean</i></strong></td>
    <td>If true, fill the area under the line</td>
  </tr>
  <tr>
    <td>animation</td>
    <td><strong><i>String</i></strong></td>
    <td><p>The chart animation. Options: <code class="language-javascript">fade</code><br><a href="https://github.com/raphamorim/origami.js/issues/new">Suggest an animation</a></p></td>
  </tr>
  <tr>
    <td>gridLines</td>
    <td><strong><i>Object</i></strong></td>
    <td>Chart grid line configurations. Example: <br>
        <pre><code class="language-javascript">vertical: true, //default: true
horizontal: false //default: true</code></pre>
    </td>
  </tr>
  <tr>
    <td>labelColor</td>
    <td><strong><i>String</i></strong></td>
    <td>The Labels colors, default is #5e5e5e</td>
  </tr>
  <tr>
    <td>gridLinesColor</td>
    <td><strong><i>String</i></strong></td>
    <td>The Grid Line colors, default is #e7e7e7</td>
  </tr>
</tbody>
</table>