(this.webpackJsonpexplorer=this.webpackJsonpexplorer||[]).push([[0],{130:function(e,t,n){e.exports=n(203)},135:function(e,t,n){},201:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(124),l=n(37),u=(n(135),n(205)),d=n(34),p=n(125),s=n(14),m=n(109),f=n.n(m),h=function(e,t){for(var n=[],a=t;a;){n.push({name:a.name,id:a.id});var r=a.parent;(a=e[r])&&(a.id=r)}return n.reverse()},v=function(e,t){var n=e.parentId,a=e.itemType,r=e.name,o=f()();return n&&t[n].children.push(o),t[o]={name:r,type:a,parent:n,children:"folder"===a?[]:void 0,status:"todos"===a?"none":void 0},t},E=function(e,t){var n=t[e],a=n.parent,r=t[a];a&&(r.children=r.children.filter((function(t){return t!==e})),t[a]=Object(s.a)({},r));var o=[e];if("folder"===n.type){!function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o.push.apply(o,Object(p.a)(n)),n.forEach((function(n){var a=t[n];a&&a.children&&a.children.length>0&&e(a.children)}))}(n.children)}return o.forEach((function(e){return delete t[e]})),t},g=n(17),b=n(206),y=n(9),x=n(18);function O(){var e=Object(g.a)(["\n  transition: 0.5s;\n  cursor: pointer;\n  &:hover {\n    color: #337cca;\n  }\n"]);return O=function(){return e},e}var j=x.a.span(O()),k=function(e){var t=e.navigate,n=e.path,a=void 0===n?[]:n;return r.a.createElement("div",{className:"title-bar"},r.a.createElement(b.a,null,r.a.createElement(b.a.Item,null,r.a.createElement(j,{onClick:t()},r.a.createElement(y.a,{type:"home"})," ",r.a.createElement("span",null,"Home"))),a.map((function(e){return r.a.createElement(b.a.Item,{key:e.id},r.a.createElement(j,{onClick:t(e.id)},e.name))}))))},I=n(16),C=n(207),w=n(54),T=function(e){return{type:"ADD_ITEM",payload:e}},N=function(e){return{type:"UPDATE_ITEM",payload:e}},S=function(e){return{type:"DELETE_ITEM",payload:e}},_=n(204);function z(){var e=Object(g.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    position: absolute;\n    background: #e8e8e8;\n    padding: 2px 10px;\n    right: 0;\n    left: 0;\n    top: 0;\n    & > * {\n      margin: 1px;\n    }\n  }\n"]);return z=function(){return e},e}function D(){var e=Object(g.a)(["\n  right: -2px;\n  top: 2px;\n  position: absolute;\n  font-size: 0.8rem;\n  z-index: 1;\n"]);return D=function(){return e},e}var P=Object(x.a)(y.a)(D()),F=x.a.div(z()),A=function(e){var t=e.renameFolder,n=e.handleDelete,o=Object(a.useState)(!1),i=Object(I.a)(o,2),c=i[0],l=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement(P,{type:"more",onClick:function(e){e.stopPropagation(),l((function(e){return!e}))}}),c&&r.a.createElement(F,{onClick:function(e){return e.stopPropagation()}},r.a.createElement(y.a,{onClick:function(){l(!1),t()},type:"edit"}),r.a.createElement(_.a,{title:"Delete?",onConfirm:function(){n(),l(!1)},placement:"right",okText:"Yes",cancelText:"No"},r.a.createElement(y.a,{type:"delete"}))))};function M(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  height: 60px;\n  width: 60px;\n  padding: 1px 0;\n  display: inline-block;\n  margin: 2px;\n  cursor: pointer;\n  transition: all 0.5s;\n  position: relative;\n  &:hover {\n    background: lightgrey;\n  }\n  .icon-wrapper {\n    text-align: center;\n    flex: 1 1 auto;\n    .icon {\n      font-size: 2.2rem;\n    }\n  }\n  .filename {\n    padding: 0 2px;\n    text-align: center;\n    position: relative;\n    word-break: break-all;\n    font-size: 0.8rem;\n  }\n  .rename-folder-input {\n    padding: 2px;\n    margin: 0;\n    background: #f1f1f1;\n    border: none;\n    width: 100%;\n    font-size: 0.8rem;\n  }\n"]);return M=function(){return e},e}var U=x.a.div(M()),L=function(e){var t=e.file,n=e.navigate,o=e.updateItem,i=e.deleteItem,c=Object(a.useState)(!1),l=Object(I.a)(c,2),u=l[0],d=l[1],p=Object(a.useState)(""),s=Object(I.a)(p,2),m=s[0],f=s[1];return r.a.createElement(U,{onClick:n(t.id)},r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement(y.a,{className:"icon",type:"folder"})),u?r.a.createElement("input",{className:"rename-folder-input",type:"text",value:m,autoFocus:!0,onClick:function(e){return e.stopPropagation()},onChange:function(e){var t=e.target.value;return f(t)},onKeyUp:function(e){var n=e.which;13===n?(o({fileId:t.id,key:"name",value:m}),f(""),d(!1)):27===n&&(f(""),d(!1))}}):r.a.createElement("div",{className:"filename"},function(e){return e.length>8?e.slice(0,8)+"..":e}(t.name)),r.a.createElement(A,{handleDelete:function(){return i(t.id)},renameFolder:function(){f(t.name),d(!0)}}))};function X(){var e=Object(g.a)(["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  align-items: center;\n  justify-content: flex-end;\n  button,\n  input {\n    font-size: 0.7rem;\n    margin: 0 2px;\n  }\n  .container {\n    display: flex;\n    align-items: center;\n    background: lightgrey;\n    padding: 5px 10px;\n    input {\n      width: 100px;\n    }\n  }\n"]);return X=function(){return e},e}var H=x.a.div(X()),B={addItem:T,updateItem:N,deleteItem:S},J=Object(d.b)(null,B)((function(e){var t=e.navigate,n=e.files,o=void 0===n?[]:n,i=e.path,c=e.addItem,l=e.updateItem,u=e.deleteItem,d=Object(a.useState)(!1),p=Object(I.a)(d,2),s=p[0],m=p[1],f=Object(a.useState)(""),h=Object(I.a)(f,2),v=h[0],E=h[1],g=function(){var e=v.trim()||"New Folder";c({itemType:"folder",name:e,parentId:i.length&&i[i.length-1].id}),m(!1),E("")};return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"folder-list"},o.length>0?o.map((function(e){return r.a.createElement(L,{updateItem:l,deleteItem:u,key:e.id,navigate:t,file:e})})):r.a.createElement("p",{className:"empty-message"},"Empty folder"),r.a.createElement(H,null,s?r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{size:"small",value:v,autoFocus:!0,placeholder:"Folder Name",onChange:function(e){var t=e.target.value;return E(t)},onPressEnter:g}),r.a.createElement(w.a,{size:"small",onClick:function(){return m(!1)}},"Cancel"),r.a.createElement(w.a,{size:"small",onClick:g},"Create")):r.a.createElement(w.a,{size:"small",onClick:function(){return m((function(e){return!e}))}},"New Folder",r.a.createElement(y.a,{type:"folder-add"})))))}));function K(){var e=Object(g.a)(['\n  display: flex;\n  flex-direction: row;\n  border: 1px solid lightgrey;\n  margin: 3px;\n  padding: 0;\n  position: relative;\n  &:before {\n    content: "";\n    display: block;\n    height: 100%;\n    width: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ',";\n  }\n  .name {\n    padding: 3px 10px;\n    flex: 1 1 auto;\n  }\n  .status {\n    padding: 0 1px;\n    background: #ececec;\n    & > * {\n      margin: 2px;\n    }\n    .anticon {\n      transition: 0.5s;\n      border-radius: 50%;\n      padding: 4px;\n      &:hover {\n        background: lightgrey;\n      }\n    }\n  }\n  .edit-todo-input {\n    padding-left: 5px;\n    flex: 1 1 auto;\n    z-index: 1;\n    margin: 0;\n    background: #f1f1f1;\n    border: none;\n    font-size: 0.8rem;\n  }\n"]);return K=function(){return e},e}var R=x.a.div(K(),(function(e){return"done"===e.status?"green":"lightgrey"})),V=function(e){var t=e.todo,n=t.name,o=t.status,i=t.id,c=e.updateItem,l=e.deleteItem,d=Object(a.useState)(!1),p=Object(I.a)(d,2),s=p[0],m=p[1],f=Object(a.useState)(""),h=Object(I.a)(f,2),v=h[0],E=h[1];return r.a.createElement(R,{status:o},s?r.a.createElement("input",{className:"edit-todo-input",type:"text",autoFocus:!0,value:v,onClick:function(e){return e.stopPropagation()},onChange:function(e){var t=e.target.value;return E(t)},onKeyUp:function(e){var t=e.which;13===t?(c({fileId:i,key:"name",value:v}),E(""),m(!1)):27===t&&(E(""),m(!1))}}):r.a.createElement("span",{className:"name"},n),r.a.createElement("div",{className:"status"},r.a.createElement(y.a,{type:"edit",onClick:function(){return m((function(e){return!e})),E(n)}}),r.a.createElement(_.a,{title:"Delete?",onConfirm:function(){return l(i)},placement:"right",okText:"Yes",cancelText:"No"},r.a.createElement(y.a,{type:"delete"})),r.a.createElement(u.a,{type:"vertical"}),r.a.createElement(y.a,{type:"check",onClick:function(){return c({fileId:i,key:"status",value:"done"})}})))};function W(){var e=Object(g.a)(["\n  text-align: center;\n  margin: 10px auto;\n  button,\n  input {\n    font-size: 0.7rem;\n    margin: 2px;\n  }\n  .container {\n    width: 300px;\n    margin: 2px auto;\n  }\n"]);return W=function(){return e},e}var Y=x.a.div(W()),$={addItem:T,updateItem:N,deleteItem:S},q=Object(d.b)(null,$)((function(e){var t=e.todos,n=void 0===t?[]:t,o=e.path,i=e.addItem,c=e.updateItem,l=e.deleteItem,u=Object(a.useState)(!1),d=Object(I.a)(u,2),p=d[0],s=d[1],m=Object(a.useState)(""),f=Object(I.a)(m,2),h=f[0],v=f[1],E=function(){h.trim()&&(i({name:h,itemType:"todos",parentId:o.length&&o[o.length-1].id||null}),s(!1),v(""))};return r.a.createElement("div",{className:"todo-list"},n.length>0?n.map((function(e){return r.a.createElement(V,{updateItem:c,deleteItem:l,key:e.id,todo:e})})):r.a.createElement("p",{className:"empty-message"},"No todos"),r.a.createElement(Y,null,p?r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{size:"small",value:h,autoFocus:!0,placeholder:"Task..",onChange:function(e){var t=e.target.value;return v(t)},onPressEnter:E}),r.a.createElement(w.a,{size:"small",onClick:function(){return s(!1)}},"Cancel"),r.a.createElement(w.a,{size:"small",onClick:E},"Create")):r.a.createElement(w.a,{size:"small",onClick:function(){return s((function(e){return!e}))}},"New Todo",r.a.createElement(y.a,{type:"plus"}))))})),G=function(e){return e.id?e.id:"/"},Q={setPath:function(e){return{type:"SET_PATH",payload:e}}},Z=Object(d.b)((function(e,t){var n=e.rootStructure;return{path:e.path,pathContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=[],a=[];return t?t.children.forEach((function(t){var r=e[t];"todos"===r.type?a.push(Object(s.a)({},r,{id:t})):n.push(Object(s.a)({},r,{id:t}))})):Object.keys(e).forEach((function(t){var r=e[t];r.parent||("todos"===r.type?a.push(Object(s.a)({},r,{id:t})):n.push(Object(s.a)({},r,{id:t})))})),{files:n,todos:a}}(n,n[G(t.match.params)])}}),Q)((function(e){var t=e.path,n=e.pathContent,o=e.match,i=e.setPath,c=e.history;Object(a.useEffect)((function(){var e=G(o.params);i(e)}),[o]);var l=function(e){return function(){return c.push(e?"/explorer/".concat(e):"/explorer")}};return r.a.createElement("div",null,r.a.createElement(k,{navigate:l,path:t}),r.a.createElement(J,{navigate:l,files:n&&n.files,path:t}),r.a.createElement(u.a,{style:{margin:"12px 0"}}),r.a.createElement(q,{path:t,todos:n&&n.todos}))})),ee=function(){return r.a.createElement("header",null,"Explorer")},te=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"app"},r.a.createElement(ee,null),r.a.createElement("section",null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/explorer/:id",component:Z}),r.a.createElement(l.b,{exact:!0,path:"/explorer/",component:Z}),r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/explorer"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(201),n(202);var ne=n(67),ae={path:[],pathContent:{files:[],todos:[]},rootStructure:{test:{name:"test",type:"folder",parent:null,children:["child1","child2"]},test2:{name:"test2",type:"folder",parent:null,children:[]},child1:{name:"child1",type:"folder",parent:"test",children:[]},child2:{name:"task",type:"todos",parent:"test",status:"none"}}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PATH":var n,a,r=e.rootStructure,o=t.payload,i=r[o];return"/"===t.payload?n=[]:i&&(n=h(r,Object(s.a)({},i,{id:o}))),Object(s.a)({},e,{path:n,pathContent:a});case"ADD_ITEM":var c=v(t.payload,Object(s.a)({},e.rootStructure));return Object(s.a)({},e,{rootStructure:c});case"UPDATE_ITEM":var l=t.payload,u=l.fileId,d=l.key,p=l.value,m=Object(s.a)({},e.rootStructure);return m[u][d]=p,Object(s.a)({},e,{rootStructure:m});case"DELETE_ITEM":var f=t.payload,g=E(f,Object(s.a)({},e.rootStructure));return Object(s.a)({},e,{rootStructure:g});default:return e}},oe=Object(ne.b)(re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(d.a,{store:oe},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[130,1,2]]]);
//# sourceMappingURL=main.2b9bfc34.chunk.js.map