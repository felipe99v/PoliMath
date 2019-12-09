import React, { Component } from "react";
import JXGBoard from "jsxgraph-react-js";
import JXG from "jsxgraph";

let f, curve; // global objects

export default class FunctionPlotter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: { axis: true, boundingbox: [-5, 8, 8, -5] },
      logicJS: brd => {
        var txtraw = "sin(x)*x";
        f = brd.jc.snippet(txtraw, true, "x", true);
        curve = brd.create(
          "functiongraph",
          [
            f,
            function() {
              var c = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], brd);
              return c.usrCoords[1];
            },
            function() {
              var c = new JXG.Coords(
                JXG.COORDS_BY_SCREEN,
                [brd.canvasWidth, 0],
                brd
              );
              return c.usrCoords[1];
            }
          ],
          { name: txtraw, withLabel: true }
        );
        var q = brd.create("glider", [2, 1, curve], { withLabel: false });
        brd.create(
          "text",
          [
            function() {
              return q.X() + 0.1;
            },
            function() {
              return q.Y() + 0.1;
            },
            function() {
              return (
                "The slope of the function f(x)=" +
                txtraw +
                "<br>at x=" +
                q.X().toFixed(2) +
                " is equal to " +
                JXG.Math.Numerics.D(f)(q.X()).toFixed(2)
              );
            }
          ],
          { fontSize: 15 }
        );
        if (JXG.isFunction(f)) {
          brd.create(
            "functiongraph",
            [
              JXG.Math.Numerics.D(f),
              function() {
                var c = new JXG.Coords(JXG.COORDS_BY_SCREEN, [0, 0], brd);
                return c.usrCoords[1];
              },
              function() {
                var c = new JXG.Coords(
                  JXG.COORDS_BY_SCREEN,
                  [brd.canvasWidth, 0],
                  brd
                );
                return c.usrCoords[1];
              }
            ],
            { dash: 2 }
          );
        }
      }
    };
  }

  render() {
    return (
      <div>
        <JXGBoard
          logic={this.state.logicJS}
          boardAttributes={this.state.property}
          style={{
            border: "3px solid red"
          }}
        />
      </div>
    );
  }
}
