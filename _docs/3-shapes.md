---
title: shapes
topics:
  - draw
  - rect
  - line
  - arc
  - polygon
  - shape
  - text
  - image
  - opacity
  - flip
  - translate
  - composition
layout: docs
order: 3
description: Origamijs Basic Usage. Origamijs is a Powerful and Lightweight Library to create using HTML5 Canvas.
---

# Shapes

## Draw

Method that performs the operation of drawing the current <code class="language-javascript">OrigamiContext</code> queue.

<pre><code class="language-javascript">octx.draw(delay)</code></pre>

**Parameters**

<code class="language-markup">delay</code> • (optional) Execute after a specified number of milliseconds. Tip: 1000 ms = 1 second.

<div class="example dark">
  <canvas id="draw"></canvas>
</div>

<pre><code class="language-javascript">origami('#canvas')
  .background('#330031')
  .arc('center', 'center', 50, {
      background: '#180019',
      borderSize: '4px',
      borderColor: '#FFF',
      borderStyle: 'dotted'
  })
  .draw();
</code></pre>

## Rect

Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.

<pre><code class="language-javascript">octx.rect(x, y, width, height)</code></pre>

**Parameters**

<code class="language-markup">x</code> • The x axis of the coordinate for the rectangle starting point.

<code class="language-markup">y</code> • The y axis of the coordinate for the rectangle starting point.

<code class="language-markup">width</code> • The rectangle's width.

<code class="language-markup">height</code> • The rectangle's height.

<code class="language-markup">style</code> • The style object.

<div class="example">
  <canvas id="rect"></canvas>
</div>

<pre><code class="language-javascript">origami('.canvas')
  .rect(80, 60, 50, 100, {
    background: 'lightblue',
    border: '4px solid #999'
  })
  .rect(150, 70, 40, {
      background: 'lightgreen',
      border: '4px dashed green'
  })
  .rect(20, 70, 40, 80, {
      background: '#330031',
      border: '10px dotted #af79a5'
  }).draw();
</code></pre>

## Line

Connects the points (for each point argument) in the sub-path to the x, y coordinates with a straight line.

<pre><code class="language-javascript">octx.line(...arguments)</code></pre>

**Parameters**

<code class="language-markup">point</code> • The point in current line, which is a object with **x** and **y** keys.

<code class="language-markup">style</code> • The style object.

<div class="example">
  <canvas id="line"></canvas>
</div>

<pre><code class="language-javascript">var styleLine = {
  border: '2px dotted #E40068'
};

origami('canvas#line')
  .line({x: 40, y: 50}, {x: 200, y: 50},  styleLine)
  .line({x: 40, y: 50}, {x: 300, y: 70},  styleLine)
  .line({x: 40, y: 50}, {x: 400, y: 100}, styleLine)
  .line({x: 40, y: 50}, {x: 500, y: 140}, styleLine)
  .draw();
</code></pre>

## Arc

Adds an arc to the path which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction by anticlockwise (defaulting to clockwise).

<pre><code class="language-javascript">octx.arc(x, y, radius, style, startAngle, endAngle, anticlockwise)</code></pre>

**Parameters**

<code class="language-markup">x</code> • The x axis of the coordinate for the arc starting point.

<code class="language-markup">y</code> • The y axis of the coordinate for the arc starting point.

<code class="language-markup">radius</code> • The arc's radius.

<code class="language-markup">style</code> • The style object.

<code class="language-markup">startAngle</code> • (optional) The angle at which the arc starts, measured clockwise from the positive x axis and expressed in radians.

<code class="language-markup">endAngle</code> • (optional) The angle at which the arc ends, measured clockwise from the positive x axis and expressed in radians.

<code class="language-markup">anticlockwise</code> • (optional) If true, causes the arc to be drawn counter-clockwise between the two angles. By default it's drawn clockwise.

<div class="example dark">
  <canvas id="arc"></canvas>
</div>

<pre><code class="language-javascript">origami('canvas#arc')
  .background('#720034')
  .arc(200, 100, 80, {
    background: '#E40068',
    border: '10px solid #E9E9E9'
  })
  .arc(400, 100, 80, {
    background: '#E40068',
    border: '8px dotted #E9E9E9'
  })
  .arc(300, 100, 80, {
    background: '#E40068',
    border: '6px dashed #E9E9E9'
  })
  .draw();
</code></pre>

## Polygon

Connects the points (for each point argument) in the sub-path to the x, y coordinates with a transparent line, on the draw process will fill the generated shape.

<pre><code class="language-javascript">octx.polygon(...arguments)</code></pre>

**Parameters**

<code class="language-markup">point</code> • The point in current line, which is a object with **x** and **y** keys.

<code class="language-markup">style</code> • The style object.

<div class="example">
  <canvas id="polygon"></canvas>
</div>

<pre><code class="language-javascript">origami('canvas#polygon')
  .polygon({x: 200, y: 160}, {x: 300, y: 40}, {x: 400, y: 160},
    {background: '#2A80B9'})
  .draw();
</code></pre>

## Border

<div class="example">
  <canvas id="border"></canvas>
</div>

<pre><code class="language-javascript">origami('#canvas')
  .border({
      border: '4px dotted #654'
    })
  .draw();
</code></pre>

## Shape

<div class="example">
  <canvas id="shape"></canvas>
</div>

CSS properties:

<pre><code class="language-css">.pac-man {
  position: absolute;
  top: 40px;
  left: 20%;
  width: 0px;
  height: 0px;
  border-right: 60px solid transparent;
  border-top: 60px solid #330031;
  border-bottom: 60px solid #330031;
  border-left: 60px solid #330031;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  border-bottom-left-radius: 60px;
}</code></pre>

Load Styles and apply style rules on Shape (empty object canvas):

<pre><code class="language-javascript">origami('#canvas-id')
  .styles('.pac-man')
  .shape('.pac-man')
  .draw();
</code></pre>

## Text

Fills a given text at the given (x,y) position.

<pre><code class="language-javascript">octx.text(text, x, y, style)</code></pre>

**Parameters**

<code class="language-markup">text</code> • The text.

<code class="language-markup">x</code> • (optional) The x axis of the coordinate for the text block starting point.

<code class="language-markup">y</code> • (optional) The y axis of the coordinate for the text block starting point.

<code class="language-markup">style</code> • The style object.

<div class="example dark">
  <canvas id="text"></canvas>
</div>

<pre><code class="language-javascript">origami('canvas#text')
  .background('#720034')
  .text("Canvas", 140, 180, {
    color: '#E40068',
    font: '60px Helvetica',
    align: 'center',
    border: '2px solid #330031'
  })
  .text("Rocks!!", 480, 180, {
    color: '#330031',
    font: '140px Helvetica',
    align: 'center',
    border: '2px dotted #E40068'
  })
  .text("origamijs", 120, 115, {
    color: '#FFF',
    font: '50px Arial'
  })
  .draw()</code></pre>

## Image

<pre><code class="language-javascript">octx.text(imgSrc, x, y, width, height)</code></pre>

**Parameters**

<code class="language-markup">imgSrc</code> • The Image source.

<code class="language-markup">x</code> • (optional) The x axis of the coordinate for the image block starting point.

<code class="language-markup">y</code> • (optional) The y axis of the coordinate for the image block starting point.

<code class="language-markup">width</code> • The image width.

<code class="language-markup">height</code> • The image height.

<div class="example">
  <canvas id="image"></canvas>
</div>

<pre><code class="language-javascript">origami('.canvas').image('images/origamijs.png', 10, 10)

// Or
var img = document.querySelector('#my-image');
origami('.canvas').image(img, 10, 10, width, height)
</code></pre>

## Load

When you use images, external resources if you do not load them. The script cannot run. The load method expects to obtain these resources when not cached.

<pre><code class="language-javascript">origami('.canvas')
  .image('images/dog.jpg')
  .load(function(canvas) {
    canvas.draw();
  })</code></pre>

## Clear

Alias to <code class="language-javascript">CanvasRenderingContext2D.clearRect(0, 0, canvas.width, canvas.height)</code>

<pre><code class="language-javascript">origami('.one').clear()</code></pre>

## Background

Set canvas background color

<pre><code class="language-javascript">origami('#demo-1').background('#2A80B9')</code></pre>

## CanvasCtx

Get <code class="language-javascript">CanvasRenderingContext2Dcanvas</code> from specified canvas

<pre><code class="language-javascript">var ctx = origami('#canvas').canvasCtx(); // CanvasRenderingContext2Dcanvas

// After loaded you can use without specify selector/context
console.log(ctx) // CanvasRenderingContext2Dcanvas from '#canvas'

// You can use origami with contextObject too :)
origami(ctx).canvasBackground('blue');
</code></pre>

## Composition

Sets the type of compositing operation to apply when drawing new shapes, where type is a string identifying which of the compositing or blending mode operations to use.

Alias to <code class="language-javascript">CanvasRenderingContext2Dcanvas.globalCompositeOperation</code>

Default is **source-over**.

<pre><code class="language-javascript">origami('#my-canvas').composition('source-in')</code></pre>

## Translate

The translate() method remaps position on the canvas.

**Options:**

<code class="language-javascript">center</code> • canvas center position.

<code class="language-javascript">reset</code> • canvas <code class="language-markup">x: 0, y: 0</code> coordinates.

<pre><code class="language-javascript">origami('#my-canvas').translate('center');

// OR

origami('#my-canvas').translate(10, 50);

// OR

origami('#my-canvas').translate(); // Equals: reset</code></pre>

## Flip

Default: <code class="language-markup">horizontal</code>

Options: <code class="language-markup">vertical</code>, <code class="language-markup">horizontal</code>

<div class="example">
  <canvas id="flip-image"></canvas>
</div>

<pre><code class="language-javascript">origami('#demo-1')
  .image('images/person.jpg', 0, 0, 200, 200)
  .flip('horizontal')
  .image('images/person.jpg', 0, 220, 200, 200)
  .flipEnd()
  .flip('vertical')
  .image('images/person.jpg', 220, 0)
  .flipEnd()
  .load(function(canvas) {
    canvas.draw();
  })
</code></pre>

## Rotate

The rotate() method rotates the current drawing. The rotation will only affect drawings made **after** the rotation is done.

Default: <code class="language-markup">slow</code>

Options: <code class="language-markup">slow</code>, <code class="language-markup">normal</code> and <code class="language-markup">fast</code>

<pre><code class="language-javascript">origami('#my-canvas').rotate(degrees);</code></pre>

## Opacity

Specifies the alpha value that is applied to shapes and images before they are drawn onto the canvas. The value is in the range from 0.0 (fully transparent) to 1.0 (fully opaque).

<div class="example dark">
  <canvas id="opacity"></canvas>
</div>

<pre><code class="language-javascript">var style = {
  background: 'red',
  borderSize: '4px',
  borderColor: '#FFF',
  borderStyle: 'dotted'
};

origami('#my-canvas')
  .arc(80, 100, 50, style)
  .opacity(0.6)
  .arc(200, 100, 50, style)
  .opacity(0.3)
  .arc(320, 100, 50, style)
  .opacity(0.1)
  .arc(440, 100, 50, style)
  .draw();
</code></pre>

## Restore

Restores the most recently saved canvas state by popping the top entry in the drawing state stack. If there is no saved state, this method does nothing.

<pre><code class="language-javascript">origami('#my-canvas').restore();</code></pre>

## Save

Saves the entire state of the canvas by pushing the current state onto a stack.

<pre><code class="language-javascript">origami('#my-canvas').save();</code></pre>

## On

Wrapper to <code class="language-javascript">addEventListener</code>

<pre><code class="language-javascript">origami(".canvas-class").on('click', clickEvent)

function clickEvent(e) {
  console.log(e.pageX, e.pageY);
}</code></pre>
