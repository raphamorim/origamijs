---
title: animation
layout: docs
jpn: アニメーション
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

<pre><code class="language-javascript">origami('#demo-1')
  .canvasBackground('#2A80B9')
  .sprite(40, 30, {
    src: 'images/coin-sprite.png',
    frames: 10,
    speed: 60,
    loop: true
  })</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/sprite.gif" alt="Sprite"/>
</div>

## NextFrame

Causes execution of a callback (using <code class="language-javascript">requestAnimationFrame</code>).

<pre><code class="language-javascript">origami('#demo-1').nextFrame(frame)</code></pre>

## StopFrame

Stop frame animation 

<pre><code class="language-javascript">origami('#demo-1').stop(frame)</code></pre>

# Examples

## 1: "An animated solar system"

<p>This example animates a small model of our solar system (original <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations" alt="Example of MDN translation and rotation"> example of MDN on translation and rotation)</a>.</p>

### Original code:

<pre><code class="language-javascript">var sun = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
  ctx.drawImage(sun,0,0,300,300);
  window.requestAnimationFrame(draw);
}

init();</code></pre>

### Rewritten code with Origami.js:

<pre><code class="language-javascript">function draw() {
  origami('#canvas')
    .composition('destination-over')
    .clear()
    .save()
    .translate(150,150)
    .rotate('slow')
    .translate(105,0)
    .image('images/Canvas_earth.png', -12, -12)
    .restore()
    .arc(150,150,105, {
      border: '1px solid #FFF'
    })
    .image('images/Canvas_sun.png')
    .load(function(canvas){
      canvas.draw()
      canvas.nextFrame(draw)
    })
}

draw();</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/animation-earth.gif" alt="Animation Earth"/>
</div>

<div class="read-wrapper">
    <a href="../5-components" class="btn btn-read">Read Components Guide</a>
</div>