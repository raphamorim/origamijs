---
title: why
layout: docs
order: 1
---

# Why?

For many developers, learning the canvas API can be challenging. But the learning curve might be reduced with a few simplifications: a chainable canvas, stylization of objects using familiar CSS notation, and easy access to the context using selectors.

Origami began as a project to teach javascript and geometry to children and today has been used to simplify the way we work with canvas (currently only in the 2d context, but in the future it will also support WebGL).

## Styling with CSS

For those who use native canvas, you need to adapt to a different way to apply styles to a shape. The origami.js lets you use the CSS notation in a javascript object to use and apply on a shape.

Let's see:

canvas class="canvas-class"></canvas

var style = {
  color: '#000',
  font: '70px Helvetica',
  align: 'center',
  border: '2px solid gold'
};

origami('.canvas-class')
  .text("Nice!", 100, 100, style)
  .text("Really Nice!", 150, 150, style)

origami.draw();
You can use pure CSS to style a shape. See Shape.

## Smart Coordinates

Available for the following methods: rect, arc, image

<div class="read-wrapper">
    <a href="../2-getting" class="btn btn-read">Getting</a>
</div>
