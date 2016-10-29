  origami('canvas#flip-image')
    .image('/assets/images/examples/megaman.png', 20, 50, 120, 120)
    .flip('horizontal')
    .image('/assets/images/examples/megaman.png', 150, 50, 120, 120)
    .flipEnd()
    .flip('vertical')
    .image('/assets/images/examples/megaman.png', 280, 50, 120, 120)
    .flipEnd()
    .load(function(octx) {
      octx.draw();
    })

  origami('canvas#image')
    .image('/assets/images/favicon.png', 300, 50, 100, 100)
    .load(function(octx) {
      octx.draw();
    })

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

  var style = {
    background: 'red',
    borderSize: '4px',
    borderColor: '#FFF',
    borderStyle: 'dotted'
  };
  origami('canvas#opacity')
    .arc(80, 100, 50, style)
    .opacity(0.6)
    .arc(200, 100, 50, style)
    .opacity(0.3)
    .arc(320, 100, 50, style)
    .opacity(0.1)
    .arc(440, 100, 50, style)
    .draw();

  origami('canvas#shape')
    .styles('.pac-man')
    .shape('.pac-man')
    .draw();

  origami('canvas#text')
    .background('#720034')
    .text("Canvas", 140, 140, {
      color: '#E40068',
      font: '60px Helvetica',
      align: 'center',
      border: '2px solid #330031'
    })
    .text("Rocks!!", 480, 120, {
      color: '#330031',
      font: '140px Helvetica',
      align: 'center',
      border: '2px dotted #E40068'
    })
    .text("origamijs", 120, 85, {
      color: '#FFF',
      font: '50px Arial'
    })
    .draw();

  origami('canvas#sprite')
    .background('#2A80B9')
    .sprite(310, 50, {
      src: '/assets/images/examples/coin-sprite.png',
      frames: 10,
      speed: 60,
      animation: true,
      loop: true
    }).load(function(octx){
      octx.draw();
    })

  function draw() {
      origami('canvas#animation-1')
        .background('black')
        .composition('destination-over')
        .clear()
        .save()
        .translate(370,150)
        .rotate('slow')
        .translate(105,0)
        .image('/assets/images/examples/Canvas_earth.png', -12, -12)
        .save()
        .restore()
        .save()
        .rotate('fast')
        .translate(0, 28.5)
        .image('/assets/images/examples/Canvas_moon.png', -3.5, -3.5)
        .restore()
        .restore()
        .arc(370,150,105, {
        border: '1px solid #FFF'
      }) .image('/assets/images/examples/Canvas_sun.png', 220, 0)
        .load(function(octx){
        octx.startRender(draw);
      })
    }

    draw();

  // setTimeout(function(){
  //   origami('canvas#animation-1').stopRender();
  //   origami('canvas#animation-1').on('mouseover', function(octx) {
  //     origami('canvas#animation-1').play().startRender(draw);
  //   });
  //   origami('canvas#animation-1').on('mouseout', function(octx) {
  //     origami('canvas#animation-1').stopRender();
  //   });
  // }, 3000);

  origami('canvas#chart-line')
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
          data: [90, 40, 20, 10, 15, 18, 0],
          line: "1px dashed orange",
        }
      ]
  }).draw();
