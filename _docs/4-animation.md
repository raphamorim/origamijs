---
title: animation
layout: docs
topics:
  - examples
order: 4
description: Origamijs Animation Methods
---

# Animation

## Sprite

<code class="language-javascript">frames</code> • required

<code class="language-javascript">src</code> • required

<code class="language-javascript">speed</code> • optional

<code class="language-javascript">loop</code> • optional, default: <code class="language-javascript">true</code>

<div class="example dark">
  <canvas id="sprite"></canvas>
</div>

<pre><code class="language-javascript">origami('#demo-1')
  .background('#2A80B9')
  .sprite(310, 50, {
    src: '/assets/images/examples/coin-sprite.png',
    frames: 10,
    speed: 60,
    loop: true
  }).draw();</code></pre>

## NextFrame

Causes execution of a callback (using <code class="language-javascript">requestAnimationFrame</code>).

<pre><code class="language-javascript">origami('#demo-1').nextFrame(frame)</code></pre>

## StopFrame

Stop frame animation

<pre><code class="language-javascript">origami('#demo-1').stop(frame)</code></pre>

# Examples

## 1: "An animated solar system"

<p>This example animates a small model of our solar system (based on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations" alt="Example of MDN translation and rotation"> example of MDN on translation and rotation)</a>.</p>

<div class="example dark mid">
  <canvas id="animation-1"></canvas>
</div>

<pre><code class="language-javascript">function draw() {
  origami('canvas#animation-1')
    .background('black')
    .composition('destination-over')
    .clear()
    .save()
    .translate(350,150)
    .rotate('slow')
    .translate(105,0)
    .image('/assets/images/examples/Canvas_earth.png', -12, -12)
    .restore()
    .arc(350,150,105, {
      border: '1px solid #FFF'
    })
    .image('/assets/images/examples/Canvas_sun.png', 200, 0)
    .load(function(canvas){
      canvas.draw()
      canvas.nextFrame(draw)
    })
}

draw();</code></pre>

<div class="read-wrapper">
    <a href="../5-components" class="btn btn-read">Read Components Guide</a>
</div>