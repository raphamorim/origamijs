---
title: basic usage
layout: docs
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

Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.


<pre><code class="language-javascript">octx.rect(x, y, width, height)</code></pre>

**Parameters**

<code class="language-markup">x</code> • The x axis of the coordinate for the rectangle starting point.

<code class="language-markup">y</code> • The y axis of the coordinate for the rectangle starting point.

<code class="language-markup">width</code> • The rectangle's width.

<code class="language-markup">height</code> • The rectangle's height.

<code class="language-markup">style</code> • The style object.



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

## Shape

CSS properties:

<pre><code class="language-css">.pac-man {
  width: 0px;
  height: 0px;
  border-right: 60px solid transparent;
  border-top: 60px solid red;
  border-bottom: 60px solid red;
  border-left: 60px solid red;
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

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/shape.png" alt="Shape Example"/>
</div>

## Text

<pre><code class="language-javascript">origami('.one')
  .text("Nice!", 100, 100, {
    color: '#000',
    font: '70px Helvetica',
    align: 'center',
    border: '2px solid gold'
  })
  .draw()</code></pre>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/text.png" alt="Text Example"/>
</div>

## Image

<pre><code class="language-javascript">var img = document.querySelector('#my-image');
origami('.canvas').image(img, 10, 10, width, height)

// OR

origami('.canvas').image('images/dog.jpg', 10, 10)</code></pre>

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

<div class="result">
    <p>Original Image:</p>
    <img src="{{ site.baseurl }}assets/images/examples/flip-original.jpg" alt="Original Image"/>
</div>

<div class="result">
    <p>Result:</p>
    <img src="{{ site.baseurl }}assets/images/examples/flip.png" alt="Flipped Image"/>
</div>

## Rotate

The rotate() method rotates the current drawing. The rotation will only affect drawings made **after** the rotation is done.

Default: <code class="language-markup">slow</code>

Options: <code class="language-markup">slow</code>, <code class="language-markup">normal</code> and <code class="language-markup">fast</code>

<pre><code class="language-javascript">origami('#my-canvas').rotate(degrees);</code></pre>

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

<div class="read-wrapper">
    <a href="../4-animation" class="btn btn-read">Read Animation Guide</a>
</div>