---
title: why
jpn: なぜ
topics:
    - styling-with-css
    - component-ecosystem
    - smart-coordinates
layout: docs
order: 1
---

# Why?

For many developers, learning the canvas API can be challenging. But the learning curve might be reduced with a few simplifications: a chainable canvas, stylization of objects using familiar CSS notation, and easy access to the context using selectors.

Origami began as a project to teach javascript and geometry to children and today has been used to simplify the way we work with canvas (currently only in the 2d context, but in the future it will also support WebGL).

## Styling with CSS

For those who use native canvas, you need to adapt to a different way to apply styles to a shape. The origami.js lets you use the CSS notation in a javascript object to use and apply on a shape.

Let's see:

<p><pre>
<code class="language-markup">&#60;canvas class="canvas-class"></canvas&#62;</code>
</pre></p>

<p><pre><code class="language-javascript">var style = {
  color: '#000',
  font: '70px Helvetica',
  align: 'center',
  border: '2px solid gold'
};

origami('.canvas-class')
  .text("Nice!", 100, 100, style)
  .text("Really Nice!", 150, 150, style)

origami.draw();
</code></pre></p>

You can use pure CSS to style a shape. See Shape.

## Component Ecosystem

The Origamijs let you to create components based on the OrigamiContext and CanvasContext2D, enabling the use of components stateless and isolated to be reused:

<pre><code class="language-javascript">origami.createComponent('Header', function(octx, props) {
  var style = {
    color: '#000',
    font: '70px Helvetica',
    align: 'center',
    border: '2px solid gold'
  };

  octx.text(props.text, 200, 100, style);
})

origami('#canvas-id')
  .Header({text: 'Random Text'})
  .draw();</code></pre>

You can render each of these components in SVG or another format, [read about plugins to know more]().

## Smart Coordinates

Available for the following methods: rect, arc, image

<p>Based on Canvas Axis ( x = right, left, center | y = top, bottom, center )</p>

<pre><code class="language-javascript">origami('.rect')
  .rect('left', 'top', 20, style)
  .rect('center', 'top', 20, style)
  .rect('right', 'top', 20, style)

  .rect('left', 'center', 20, style)
  .rect('center', 'center', 20, style)
  .rect('right', 'center', 20, style)

  .rect('left', 'bottom', 20, style)
  .rect('center', 'bottom', 20, style)
  .rect('right', 'bottom', 20, style)

  .draw();
</code></pre>

<div class="read-wrapper">
    <a href="../2-getting" class="btn btn-read">Getting</a>
</div>
