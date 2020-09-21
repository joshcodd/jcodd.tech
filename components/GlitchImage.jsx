import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Headshot = styled.canvas`
  width: 100%;
  height: 100%;
`;

function GlitchImage(props) {
  const canvasRef = React.createRef(null);
  const [mousePosition, setMousePosition] = useState({
    rOffsetX: -8,
    gOffsetX: 0,
    bOffsetX: 16,

    rOffsetY: 0,
    gOffsetY: 0,
    bOffsetY: 0,
  });
  let canvas = null;

  function handleMouseMove(event) {
    //Mouse position.
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const imagePosition = canvas.getBoundingClientRect();
    let centerCanvasX = imagePosition.left + imagePosition.width / 2;
    let centerCanvasY = imagePosition.top + imagePosition.height / 2;

    //Work out how far away the mouse is from center of image.
    let mouseCanvasDiffX = mouseX - centerCanvasX;
    let mouseCanvasDiffY = mouseY - centerCanvasY;

    //Make movement less sensitive and slower.
    mouseCanvasDiffX = Math.floor(mouseCanvasDiffX / 50);
    mouseCanvasDiffY = Math.floor(mouseCanvasDiffY / 50);

    //Add boundry at 15 and -15
    const actualX =
      mouseCanvasDiffX > 0
        ? Math.min(15, mouseCanvasDiffX)
        : Math.max(-15, mouseCanvasDiffX);
    const actualY =
      mouseCanvasDiffY > 0
        ? Math.min(15, mouseCanvasDiffY)
        : Math.max(-15, mouseCanvasDiffY);

    setMousePosition({
      rOffsetX: 0 - actualX,
      gOffsetX: 0,
      bOffsetX: actualX + actualX,

      rOffsetY: 0 - actualY,
      gOffsetY: 0,
      bOffsetY: actualY + actualY,
    });
  }

  //Update canvas when mouse moves.
  useEffect(() => {
    updateCanvas();
    document.onmousemove = handleMouseMove;
    console.log(mousePosition);
  }, [mousePosition]);

  function updateCanvas() {
    canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let image = new Image();
    image.src = props.src;

    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const newImageData = shiftChannels(imageData, mousePosition);
      ctx.putImageData(newImageData, 0, 0);
    };
  }

  function shiftChannels(imageData, offsets) {
    const {
      rOffsetX = 0,
      gOffsetX = 0,
      bOffsetX = 0,
      rOffsetY = 0,
      gOffsetY = 0,
      bOffsetY = 0,
    } = offsets;

    //Shift pixels horizontally
    const data = imageData.data;
    let xData = new Uint8ClampedArray(data);
    for (let i = 0; i < data.length; i += 4) {
      xData[i + 0 + rOffsetX * 4] = data[i + 0];
      xData[i + 1 + gOffsetX * 4] = data[i + 1];
      xData[i + 2 + bOffsetX * 4] = data[i + 2];
    }

    //Shift pixels vertically
    let yData = new Uint8ClampedArray(xData);
    for (let j = 0; j < xData.length; j += 4) {
      yData[j + 0 + rOffsetY * 4 * imageData.width] = xData[j + 0];
      yData[j + 1 + gOffsetY * 4 * imageData.width] = xData[j + 1];
      yData[j + 2 + bOffsetY * 4 * imageData.width] = xData[j + 2];
    }

    return new ImageData(yData, imageData.width, imageData.height);
  }

  return <Headshot width="375" height="500" ref={canvasRef}></Headshot>;
}

export default GlitchImage;
