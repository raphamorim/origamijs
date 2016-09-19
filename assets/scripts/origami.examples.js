if (document.body.classList.contains('api-docs')) {
  origami('canvas#draw')
    .background('#330031')
    .arc('center', 'center', 50, {
        background: '#180019',
        borderSize: '4px',
        borderColor: '#FFF',
        borderStyle: 'dotted'
    })
    .draw();

  origami('canvas#rect')
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
    })
    .draw();

  var styleLine = {
    border: '2px dotted #E40068'
  };
  origami('canvas#line')
    .line({x: 40, y: 50}, {x: 200, y: 50}, styleLine)
    .line({x: 40, y: 50}, {x: 300, y: 70}, styleLine)
    .line({x: 40, y: 50}, {x: 400, y: 100}, styleLine)
    .line({x: 40, y: 50}, {x: 500, y: 140}, styleLine)
    .draw();

  origami('canvas#arc')
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

  origami('canvas#polygon')
    .polygon({x: 200, y: 160}, {x: 300, y: 40}, {x: 400, y: 160}, 
      {background: '#2A80B9'})
    .draw();

  origami('canvas#border')
    .border({
      border: '4px dotted #654'
    })
    .draw();

  origami('canvas#shape')
    .styles('.pac-man')
    .shape('.pac-man')
    .draw();

  origami('canvas#text')
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
    .draw();

  origami('canvas#flip-image')
    .image('/assets/images/favicon.png', 0, 0, 200, 200)
    .flip('horizontal')
    .image('/assets/images/favicon.png', 0, 220, 200, 200)
    .flipEnd()
    .flip('vertical')
    .image('/assets/images/favicon.png', 220, 0)
    .flipEnd()
    .load(function(octx) {
      octx.draw();
    })
}

