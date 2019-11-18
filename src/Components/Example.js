import React, { Component } from 'react'
import JXGBoard from 'jsxgraph-react-js'
import JXG from 'jsxgraph'

let logicJS = (brd) => {
    var p = [];
    p.push(brd.create('point', [-2.7, (Math.random() - 0.2) * 5]));
    p.push(brd.create('point', [-1, (Math.random() - 0.2) * 5]));
    p.push(brd.create('point', [0, (Math.random() - 0.2) * 5]));
    p.push(brd.create('point', [1, (Math.random() - 0.2) * 5]));
    p.push(brd.create('point', [2.7, (Math.random() - 0.2) * 5]));

    var f = JXG.Math.Numerics.lagrangePolynomial(p);
    var n = brd.create('slider', [[-1, 3], [2, 3], [1, 10, 50]], { name: 'n', snapWidth: 1 });
    var plot = brd.create('functiongraph', [f, -3, 3]);

    var up = brd.create('riemannsum', [f, function () { return n.Value(); }, 'upper', -3, 3], { fillColor: '#ff0000', fillOpacity: 0.3 });
    var lo = brd.create('riemannsum', [f, function () { return n.Value(); }, 'lower', -3, 3], { fillColor: '#ffff00', fillOpacity: 0.3 });

    brd.create('text', [-2, -2, function () { return 'Diff=' + (JXG.Math.Numerics.riemannsum(f, n.Value(), 'upper', -3, 3) - JXG.Math.Numerics.riemannsum(f, n.Value(), 'lower', -3, 3)).toFixed(4); }]);
}

export default class Example extends Component {
    render() {
        return (
            <div>
                <h1>JSXGraph with javascript function and style:</h1>
                <JXGBoard
                    logic={logicJS}
                    boardAttributes={{ axis: true, boundingbox: [-3, 5, 3, -3] }}
                    style={{
                        border: "3px solid red"
                    }}
                />
            </div>
        )
    }
}
