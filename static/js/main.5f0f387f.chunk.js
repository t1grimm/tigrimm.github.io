(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{89:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(36),i=a(43),c=a(44),s=a(27),l=a(45),o=a(0),u=a.n(o),m=a(80),h=a.n(m),d=(a(98),a(125)),f=a(82),p=a(69),E=a(60),b=a(46),v=a(122),y=a(126);function k(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var N=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(k,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(u.a.Component),j=(u.a.Component,function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(l.a)(t,e),t}(function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();x(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=x(n.squares),i=a.map(function(e,a){var n=a?"Go to move #"+a:"RESTART GAME";return u.a.createElement("li",{key:a},u.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))});return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",{class:"container"},u.a.createElement(E.a,{bg:"light",expand:"lg"},u.a.createElement(f.a,null,u.a.createElement(E.a.Brand,{href:"#home"},"Tito Rodda"),u.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),u.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},u.a.createElement(p.a,{className:"me-auto"},u.a.createElement(p.a.Link,{href:"#home"},"Home"),u.a.createElement(p.a.Link,{href:"https://www.linkedin.com/in/titorodda/"},"Linkedin"),u.a.createElement(b.a,{title:"Portfolio",id:"basic-nav-dropdown"},u.a.createElement(b.a.Item,{href:"#action/3.1"},"Portfolio"),u.a.createElement(b.a.Item,{href:"#action/3.2"},"Another action"),u.a.createElement(b.a.Item,{href:"#action/3.3"},"Something"),u.a.createElement(b.a.Divider,null),u.a.createElement(b.a.Item,{href:"#action/3.4"},"Separated link")))))),u.a.createElement(v.a,{severity:"error"},"Unfortunately my site is down - but you can still play some tic-tac-toe"),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"d-flex justify-content-center p-lg-3"},e),u.a.createElement("div",{className:"d-flex justify-content-center p-4"},u.a.createElement(d.a,{sx:{maxWidth:345}},u.a.createElement(y.a,null,u.a.createElement(N,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})))),u.a.createElement("div",{className:"flex justify-content-center p-lg-5"},u.a.createElement("ol",{class:"list-group-item p-lg-5"},i))))}}]),t}(u.a.Component)));function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),i=r[0],c=r[1],s=r[2];if(e[i]&&e[i]===e[c]&&e[i]===e[s])return e[i]}return null}h.a.createRoot(document.getElementById("root")).render(u.a.createElement(j,null))},98:function(e,t,a){}},[[89,2,1]]]);
//# sourceMappingURL=main.5f0f387f.chunk.js.map