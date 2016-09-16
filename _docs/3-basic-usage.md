---
title: basic usage
layout: docs
jpn: 基本的な使用法
order: 3
description: Origamijs Basic Usage
---

# Basic Usage

## Draw

Method that performs the operation of drawing. If you forget to use, nothing will happen :)

<pre><code class="language-javascript">origami('#canvas')
  .arc(100, 75, 50, {
    background: '#2A80B9',
    borderSize: '4px',
    borderColor: 'gold',
    borderStyle: 'dotted' })
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/arc.png" alt="Draw Example"/>
</div>

## Rect

<pre><code class="language-javascript">origami('.canvas')
  .rect(10, 10, 50, 100, {
    background: 'lightblue',
    border: '4px solid #999'
  })
  .rect(50, 10, 40, {
    background: 'lightgreen',
    border: '10px solid green'
  })
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/rect.png" alt="Rect Example"/>
</div>

## Line

<pre><code class="language-javascript">origami('.one')
  .line({x: 10, y: 10}, {x: 150, y: 200},
    {border: '1px dashed #888'})
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/line.png" alt="Line Example"/>
</div>

## Arc

<pre><code class="language-javascript">var style = {
  background: '#2A80B9',
  border: '4px dotted gold'
}

origami('.element')
  .arc(100, 75, 50, style)
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/arc.png" alt="Arc Example"/>
</div>

## Polygon

<pre><code class="language-javascript">origami('.one')
  .polygon({x: 100, y: 110}, {x: 200, y: 10}, {x: 300, y: 110}, {
    background: '#2A80B9' })
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/polygon.png" alt="Polygon Example"/>
</div>

## Border

<pre><code class="language-javascript">origami('#canvas')
  .border({
      border: '4px dotted #654'
    })
  .draw();
</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/border.png" alt="Border Example"/>
</div>