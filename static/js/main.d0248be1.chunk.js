(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(3),s=a(4),i=a(6),l=a(5),u=a(7),c=a(0),o=a.n(c),m=a(11),d=a.n(m),h=a(12),v=a.n(h);a(21);function f(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();E(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"restartGame",value:function(){var e=Array(9).fill(null);this.setState({squares:e,xIsNext:!0})}},{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(f,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this,a=E(this.state.squares);return e=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"status"},e),o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),o.a.createElement(v.a,{variant:"primary",onClick:function(){return t.restartGame()}},"Primary"))}}]),t}(o.a.Component),q=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(b,null)),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null),o.a.createElement("ol",null)))}}]),t}(o.a.Component);function E(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],l=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[l])return e[s]}return null}d.a.render(o.a.createElement(q,null),document.getElementById("root"))},21:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.d0248be1.chunk.js.map