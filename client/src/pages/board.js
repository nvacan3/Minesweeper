import React from "react";
import { Button, Container } from "@mui/material";
import "./board.css";

const Board = () => {
  const dimension = {
    height: 10,
    width: 10,
  };

  const array2D = Array(dimension.width)
    .fill()
    .map((_, indexH) =>
      Array(dimension.height)
        .fill()
        .map((_, indexW) => indexW)
    );
  console.log("array2D: ", array2D);
  return (
    <Container component="main" maxWidth="xs">
      <div className="center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${dimension.width}, 30px)`,
            gridTemplateRows: `repeat(${dimension.height}, 30px)`,
          }}
        >
          {array2D.map((row, i) =>
            row.map((col, j) => (
              <div
                className="Grids"
                key={`${i}-${j}`}
                data-dimension={`${i}-${j}`}
              >
                {col}
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Board;
