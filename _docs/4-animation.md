---
title: animation
layout: docs
topics:
  - sprite
  - examples
order: 4
description: Animation Guide - Origamijs is a Powerful and Lightweight Library to create using HTML5 Canvas
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
  }).load(function(octx){
    octx.draw();
  })</code></pre>

## Start Render

Causes execution of a callback (using <code class="language-javascript">requestAnimationFrame</code>).

<pre><code class="language-javascript">origami('#demo-1').startRender(frame)</code></pre>

## Stop Render

Stop rendering animation

<pre><code class="language-javascript">origami('#demo-1').stopRender()</code></pre>

If you want to play the stopped animation, you must to use <code class="language-javascript">able</code> method before <code class="language-javascript">startRender</code>, example:

<pre><code class="language-javascript">origami('#demo-1').play().startRender(frame)</code></pre>

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
    .translate(370,150)
    .rotate('slow')
    .translate(105,0)
    .image('images/Canvas_earth.png', -12, -12)
    .save()
    .restore()
    .save()
    .rotate('fast')
    .translate(0, 28.5)
    .image('images/Canvas_moon.png', -3.5, -3.5)
    .restore()
    .restore()
    .arc(370,150,105, {
      border: '1px solid #FFF'
    })
    .image('images/Canvas_sun.png', 220, 0)
    .load(function(octx){
      octx.startRender(draw);
    })
}

draw();</code></pre>
