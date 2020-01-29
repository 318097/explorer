(this.webpackJsonpexplorer=this.webpackJsonpexplorer||[]).push([[0],{133:function(e,t,n){e.exports=n(208)},138:function(e,t,n){},204:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(109),l=n(126),u=n(38),d=(n(138),n(210)),p=n(35),s=n(128),m=n(16),f=n(111),h=n.n(f),v=function(e,t){for(var n=[],a=t;a;){n.push({name:a.name,id:a.id});var r=a.parent;(a=e[r])&&(a.id=r)}return n.reverse()},E=function(e,t){var n=e.parentId,a=e.itemType,r=e.name,o=h()();return n&&t[n].children.push(o),t[o]={name:r,type:a,parent:n||null,children:"folder"===a?[]:void 0,status:"todos"===a?"none":void 0},t},b=function(e,t){var n=t[e],a=n.parent,r=t[a];a&&(r.children=r.children.filter((function(t){return t!==e})),t[a]=Object(m.a)({},r));var o=[e];if("folder"===n.type){!function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o.push.apply(o,Object(s.a)(n)),n.forEach((function(n){var a=t[n];a&&a.children&&a.children.length>0&&e(a.children)}))}(n.children)}return o.forEach((function(e){return delete t[e]})),t},g=n(14),y=n(211),x=n(9),O=n(15);function j(){var e=Object(g.a)(["\n  transition: 0.5s;\n  cursor: pointer;\n  &:hover {\n    color: #337cca;\n  }\n"]);return j=function(){return e},e}var k=O.b.span(j()),I=function(e){var t=e.navigate,n=e.path,a=void 0===n?[]:n;return r.a.createElement("div",{className:"title-bar"},r.a.createElement(y.a,null,r.a.createElement(y.a.Item,null,r.a.createElement(k,{onClick:t()},r.a.createElement(x.a,{type:"home"})," ",r.a.createElement("span",null,"Home"))),a.map((function(e){return r.a.createElement(y.a.Item,{key:e.id},r.a.createElement(k,{onClick:t(e.id)},e.name))}))))},w=n(18),N=n(212),C=n(55),T=function(e){return{type:"ADD_ITEM",payload:e}},S=function(e){return{type:"UPDATE_ITEM",payload:e}},_=function(e){return{type:"DELETE_ITEM",payload:e}},z=n(209);function D(){var e=Object(g.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    position: absolute;\n    background: #e8e8e8;\n    padding: 2px 10px;\n    right: 0;\n    left: 0;\n    top: 0;\n    & > * {\n      margin: 1px;\n    }\n  }\n"]);return D=function(){return e},e}function F(){var e=Object(g.a)(["\n  right: -2px;\n  top: 2px;\n  position: absolute;\n  font-size: 0.8rem;\n  z-index: 1;\n"]);return F=function(){return e},e}var P=Object(O.b)(x.a)(F()),A=O.b.div(D()),M=function(e){var t=e.renameFolder,n=e.handleDelete,o=Object(a.useState)(!1),i=Object(w.a)(o,2),c=i[0],l=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement(P,{type:"more",onClick:function(e){e.stopPropagation(),l((function(e){return!e}))}}),c&&r.a.createElement(A,{onClick:function(e){return e.stopPropagation()}},r.a.createElement(x.a,{onClick:function(){l(!1),t()},type:"edit"}),r.a.createElement(z.a,{title:"Delete?",onConfirm:function(){n(),l(!1)},placement:"right",okText:"Yes",cancelText:"No"},r.a.createElement(x.a,{type:"delete"}))))};function U(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  height: 60px;\n  width: 60px;\n  padding: 1px 0;\n  display: inline-block;\n  margin: 2px;\n  cursor: pointer;\n  transition: all 0.5s;\n  position: relative;\n  &:hover {\n    background: lightgrey;\n  }\n  .icon-wrapper {\n    text-align: center;\n    .icon {\n      font-size: 2.5rem;\n    }\n  }\n  .filename {\n    flex: 1 0 auto;\n    padding: 0 2px;\n    text-align: center;\n    word-break: break-word;\n    font-size: 0.8rem;\n    line-height: 10px;\n    ",";\n  }\n  .rename-folder-input {\n    padding: 2px;\n    margin: 0;\n    background: #ececec;\n    border: none;\n    width: 100%;\n    font-size: 0.8rem;\n  }\n"]);return U=function(){return e},e}function L(){var e=Object(g.a)(["\n  position: relative;\n  bottom: 5px;\n  font-size: 0.7rem;\n"]);return L=function(){return e},e}var X=Object(O.a)(L()),H=O.b.div(U(),(function(e){return e.fileName.length>10&&X})),B=function(e){var t=e.file,n=e.navigate,o=e.updateItem,i=e.deleteItem,c=Object(a.useState)(!1),l=Object(w.a)(c,2),u=l[0],d=l[1],p=Object(a.useState)(""),s=Object(w.a)(p,2),m=s[0],f=s[1];return r.a.createElement(H,{fileName:t.name,onClick:n(t.id)},r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement(x.a,{className:"icon",type:"folder"})),u?r.a.createElement("input",{className:"rename-folder-input",type:"text",value:m,autoFocus:!0,onClick:function(e){return e.stopPropagation()},onChange:function(e){var t=e.target.value;return f(t)},onKeyUp:function(e){var n=e.which;13===n?(o({fileId:t.id,key:"name",value:m}),f(""),d(!1)):27===n&&(f(""),d(!1))}}):r.a.createElement("div",{className:"filename"},function(e){return e.length>18?e.slice(0,18)+"..":e}(t.name)),r.a.createElement(M,{handleDelete:function(){return i(t.id)},renameFolder:function(){f(t.name),d(!0)}}))};function J(){var e=Object(g.a)(["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  align-items: center;\n  justify-content: flex-end;\n  button,\n  input {\n    font-size: 0.7rem;\n    margin: 0 2px;\n  }\n  .container {\n    display: flex;\n    align-items: center;\n    background: lightgrey;\n    padding: 5px 10px;\n    input {\n      width: 100px;\n    }\n  }\n"]);return J=function(){return e},e}var K=O.b.div(J()),R={addItem:T,updateItem:S,deleteItem:_},V=Object(p.b)(null,R)((function(e){var t=e.navigate,n=e.files,o=void 0===n?[]:n,i=e.path,c=e.addItem,l=e.updateItem,u=e.deleteItem,d=Object(a.useState)(!1),p=Object(w.a)(d,2),s=p[0],m=p[1],f=Object(a.useState)(""),h=Object(w.a)(f,2),v=h[0],E=h[1],b=function(){var e=v.trim()||"New Folder";c({itemType:"folder",name:e,parentId:i.length&&i[i.length-1].id}),m(!1),E("")};return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"folder-list"},o.length>0?o.map((function(e){return r.a.createElement(B,{updateItem:l,deleteItem:u,key:e.id,navigate:t,file:e})})):r.a.createElement("p",{className:"empty-message"},"Empty folder"),r.a.createElement(K,null,s?r.a.createElement("div",{className:"container"},r.a.createElement(N.a,{size:"small",value:v,autoFocus:!0,placeholder:"Folder Name",onChange:function(e){var t=e.target.value;return E(t)},onPressEnter:b}),r.a.createElement(C.a,{size:"small",onClick:function(){return m(!1)}},"Cancel"),r.a.createElement(C.a,{size:"small",onClick:b},"Create")):r.a.createElement(C.a,{size:"small",onClick:function(){return m((function(e){return!e}))}},"New Folder",r.a.createElement(x.a,{type:"folder-add"})))))}));function W(){var e=Object(g.a)(['\n  display: flex;\n  flex-direction: row;\n  border: 1px solid lightgrey;\n  margin: 3px;\n  padding: 0;\n  position: relative;\n  &:before {\n    content: "";\n    display: block;\n    height: 100%;\n    width: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ',";\n  }\n  .name {\n    padding: 3px 10px;\n    flex: 1 1 auto;\n    ",";\n  }\n  .status {\n    padding: 0 1px;\n    background: #ececec;\n    & > * {\n      margin: 2px;\n    }\n    .anticon {\n      transition: 0.5s;\n      border-radius: 50%;\n      padding: 4px;\n      &:hover {\n        background: lightgrey;\n      }\n    }\n  }\n  .edit-todo-input {\n    padding-left: 5px;\n    flex: 1 1 auto;\n    z-index: 1;\n    margin: 0;\n    background: #f1f1f1;\n    border: none;\n    font-size: 0.8rem;\n  }\n"]);return W=function(){return e},e}function Y(){var e=Object(g.a)(["\n  text-decoration: line-through;\n  color: grey;\n  font-style: italic;\n"]);return Y=function(){return e},e}var $=Object(O.a)(Y()),q=O.b.div(W(),(function(e){return"done"===e.status?"green":"lightgrey"}),(function(e){return"done"===e.status&&$})),G=function(e){var t=e.todo,n=t.name,o=t.status,i=t.id,c=e.updateItem,l=e.deleteItem,u=Object(a.useState)(!1),p=Object(w.a)(u,2),s=p[0],m=p[1],f=Object(a.useState)(""),h=Object(w.a)(f,2),v=h[0],E=h[1];return r.a.createElement(q,{status:o},s?r.a.createElement("input",{className:"edit-todo-input",type:"text",autoFocus:!0,value:v,onClick:function(e){return e.stopPropagation()},onChange:function(e){var t=e.target.value;return E(t)},onKeyUp:function(e){var t=e.which;13===t?(c({fileId:i,key:"name",value:v}),E(""),m(!1)):27===t&&(E(""),m(!1))}}):r.a.createElement("span",{className:"name"},n),r.a.createElement("div",{className:"status"},r.a.createElement(x.a,{type:"edit",onClick:function(){m((function(e){return!e})),E(n)}}),r.a.createElement(z.a,{title:"Delete?",onConfirm:function(){return l(i)},placement:"top",okText:"Yes",cancelText:"No"},r.a.createElement(x.a,{type:"delete"})),r.a.createElement(d.a,{type:"vertical"}),r.a.createElement(x.a,{type:"check",onClick:function(){return c({fileId:i,key:"status",value:"done"})}})))};function Q(){var e=Object(g.a)(["\n  text-align: center;\n  margin: 10px auto;\n  button,\n  input {\n    font-size: 0.7rem;\n    margin: 2px;\n  }\n  .container {\n    width: 300px;\n    margin: 2px auto;\n  }\n"]);return Q=function(){return e},e}var Z=O.b.div(Q()),ee={addItem:T,updateItem:S,deleteItem:_},te=Object(p.b)(null,ee)((function(e){var t=e.todos,n=void 0===t?[]:t,o=e.path,i=e.addItem,c=e.updateItem,l=e.deleteItem,u=Object(a.useState)(!1),d=Object(w.a)(u,2),p=d[0],s=d[1],m=Object(a.useState)(""),f=Object(w.a)(m,2),h=f[0],v=f[1],E=function(){h.trim()&&(i({name:h,itemType:"todos",parentId:o.length&&o[o.length-1].id||null}),s(!1),v(""))};return r.a.createElement("div",{className:"todo-list"},n.length>0?n.map((function(e){return r.a.createElement(G,{updateItem:c,deleteItem:l,key:e.id,todo:e})})):r.a.createElement("p",{className:"empty-message"},"No todos"),r.a.createElement(Z,null,p?r.a.createElement("div",{className:"container"},r.a.createElement(N.a,{size:"small",value:h,autoFocus:!0,placeholder:"Task..",onChange:function(e){var t=e.target.value;return v(t)},onPressEnter:E}),r.a.createElement(C.a,{size:"small",onClick:function(){return s(!1)}},"Cancel"),r.a.createElement(C.a,{size:"small",onClick:E},"Create")):r.a.createElement(C.a,{size:"small",onClick:function(){return s((function(e){return!e}))}},"New Todo",r.a.createElement(x.a,{type:"plus"}))))})),ne=function(e){return e.id?e.id:"/"},ae={setPath:function(e){return{type:"SET_PATH",payload:e}}},re=Object(p.b)((function(e,t){var n=e.rootStructure,a=e.path,r=ne(t.match.params),o=n[r];return{path:a,pathContent:"/"===r||o?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=[],a=[];return t?t.children.forEach((function(t){var r=e[t];"todos"===r.type?a.push(Object(m.a)({},r,{id:t})):n.push(Object(m.a)({},r,{id:t}))})):Object.keys(e).forEach((function(t){var r=e[t];r.parent||("todos"===r.type?a.push(Object(m.a)({},r,{id:t})):n.push(Object(m.a)({},r,{id:t})))})),{files:n,todos:a}}(n,o):null}}),ae)((function(e){var t=e.path,n=e.pathContent,o=e.match,i=e.setPath,c=e.history;Object(a.useEffect)((function(){var e=ne(o.params);i(e)}),[o]);var l=function(e){return function(){return c.push(e?"/explorer/".concat(e):"/explorer")}};return r.a.createElement("div",null,r.a.createElement(I,{navigate:l,path:t}),n?r.a.createElement(a.Fragment,null,r.a.createElement(V,{navigate:l,files:n.files,path:t}),r.a.createElement(d.a,{style:{margin:"12px 0"}}),r.a.createElement(te,{path:t,todos:n.todos})):r.a.createElement("p",{className:"empty-message"},"Invalid path"))})),oe=function(){return r.a.createElement("header",null,"Explorer")},ie=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"app"},r.a.createElement(oe,null),r.a.createElement("section",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/explorer/:id",component:re}),r.a.createElement(u.b,{exact:!0,path:"/explorer/",component:re}),r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/explorer"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(204),n(205);var ce=n(33),le=n(94),ue=n(127),de={path:[],rootStructure:{id1:{name:"Folder 1",type:"folder",parent:null,children:["id3","id4"]},id2:{name:"Folder 2",type:"folder",parent:null,children:[]},id3:{name:"Sub Folder 1",type:"folder",parent:"id1",children:[]},id4:{name:"Todo 1",type:"todos",parent:"id1",status:"none"}}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PATH":var n,a=t.payload,r=e.rootStructure,o=r[a];return"/"===t.payload?n=[]:o&&(n=v(r,Object(m.a)({},o,{id:a}))),Object(m.a)({},e,{path:n});case"ADD_ITEM":var i=E(t.payload,Object(m.a)({},e.rootStructure));return Object(m.a)({},e,{rootStructure:i});case"UPDATE_ITEM":var c=t.payload,l=c.fileId,u=c.key,d=c.value,p=Object(m.a)({},e.rootStructure);return p[l][u]=d,Object(m.a)({},e,{rootStructure:p});case"DELETE_ITEM":var s=t.payload,f=b(s,Object(m.a)({},e.rootStructure));return Object(m.a)({},e,{rootStructure:f});default:return e}},se={key:"root",storage:n.n(ue).a},me=Object(le.a)(se,pe),fe=function(){var e=Object(ce.c)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return{store:e,persistor:Object(le.b)(e)}}(),he=fe.store,ve=fe.persistor;i.a.render(r.a.createElement(p.a,{store:he},r.a.createElement(c.a,{persistor:ve},r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[133,1,2]]]);
//# sourceMappingURL=main.23298636.chunk.js.map