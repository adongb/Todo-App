(function(t){function e(e){for(var c,s,r=e[0],a=e[1],i=e[2],d=0,b=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(u,s)&&u[s]&&b.push(u[s][0]),u[s]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,r=1;r<n.length;r++){var a=n[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},u={app:0},o=[];function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todoapp-vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var i=0;i<r.length;i++)e(r[i]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),u={id:"app"},o={id:"nav"},s=Object(c["f"])("Log In"),r=Object(c["f"])("| "),a=Object(c["f"])("Add"),i=Object(c["f"])("| "),l=Object(c["f"])("Lists"),d=Object(c["f"])("| ");function b(t,e){var n=Object(c["w"])("router-link"),b=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",u,[Object(c["g"])("div",o,[Object(c["g"])(n,{to:"/"},{default:Object(c["C"])((function(){return[s]})),_:1}),r,Object(c["g"])(n,{to:"/add"},{default:Object(c["C"])((function(){return[a]})),_:1}),i,Object(c["g"])(n,{to:"/list"},{default:Object(c["C"])((function(){return[l]})),_:1}),d]),Object(c["g"])(b)])}n("9011");const p={};p.render=b;var m=p,O=n("6c02"),j=Object(c["f"])("Todo List"),f={class:"center"},g=Object(c["g"])("tr",null,[Object(c["g"])("th",{width:"50px"},"Todo list"),Object(c["g"])("th",{width:"100px"},"Action")],-1);function h(t,e,n,u,o,s){var r=Object(c["w"])("H1"),a=Object(c["w"])("UserDisplay"),i=Object(c["w"])("userLogout"),l=Object(c["w"])("TodoDisplay");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])(r,null,{default:Object(c["C"])((function(){return[j]})),_:1}),Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])(a),Object(c["g"])(i),Object(c["g"])("table",f,[g,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(o.todos,(function(t){return Object(c["p"])(),Object(c["d"])(l,{key:t.id,todo:t},null,8,["todo"])})),128))])])}n("b0c0");var v={width:"50px"},y={width:"100px"},I=Object(c["g"])("span",null,"edit",-1),L=Object(c["g"])("span",null,"|",-1),w=Object(c["g"])("span",null,"delete",-1),D=Object(c["g"])("span",null,")",-1);function U(t,e,n,u,o,s){var r=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",v,[Object(c["g"])("span",null,Object(c["y"])(n.todo.name),1)]),Object(c["g"])("td",y,[Object(c["g"])(r,{to:{name:"Edit",params:{id:n.todo.id}}},{default:Object(c["C"])((function(){return[I]})),_:1},8,["to"]),L,Object(c["g"])(r,{to:{name:"Delete",params:{id:n.todo.id}}},{default:Object(c["C"])((function(){return[w]})),_:1},8,["to"]),D])])])}var k={props:{todo:Object}};k.render=U;var A=k,C=n("bc3a"),x=n.n(C),T="";T="/todoapi/";var _=x.a.create({baseURL:T,headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",crossDomain:!0},transformRequest:function(t,e){var n=localStorage.getItem("token"),c="";return null!=n&&""!=n&&(c="Bearer "+n),e.common["Authorization"]=c,JSON.stringify(t)},transformResponse:function(t){return t=JSON.parse(t),t.success||"expired-session"!=t.code||localStorage.deleteItem("token"),t}}),S={getLists:function(){return _.get("lists")},getList:function(t){return _.get("lists/"+t)},addList:function(t){return _.post("lists",t)},updateList:function(t,e){return _.put("lists/"+t,e)},deleteList:function(t){return _.delete("lists/"+t)},getListItems:function(t){return _.get("lists/"+t+"/items")},addListItem:function(t,e){return _.post("lists/"+t+"/items",e)},updateListItem:function(t,e,n){return _.put("lists/"+t+"/items/"+e,n)},deleteListItem:function(t,e){return _.delete("lists/"+t+"/items/"+e)},getUser:function(){return _.get("users")},addUser:function(t){return _.post("users",t)},loginUser:function(t){return _.post("users/login",t,{headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",crossDomain:!0,Authorization:"Basic "+btoa(t.username+":"+t.password)}})},logoutUser:function(){return _.post("users/logout")}};function $(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("p",null," Hello "+Object(c["y"])(o.user.firstName+" "+o.user.lastName),1)}var E={data:function(){return{user:{}}},mounted:function(){var t=this;S.getUser().then((function(e){t.user=e.data.user,console.log(e.data.user)})).catch((function(e){t.message=e.response.data.message}))}};E.render=$;var N=E;function V(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])("a",{onClick:e[1]||(e[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"(logOut)")])}var P={data:function(){return{message:""}},methods:{logout:function(){var t=this;S.logoutUser().then((function(){t.$router.push({name:"Login"})})).catch((function(e){t.message=e.response.data.message}))}}};P.render=V;var q=P,F={components:{TodoDisplay:A,UserDisplay:N,userLogout:q},data:function(){return{todos:[],message:""}},created:function(){this.getLists()},methods:{getLists:function(){var t=this;S.getLists().then((function(e){t.todos=e.data.lists})).catch((function(e){t.message=e.response.data.message}))}}};F.render=h;var H=F,R=Object(c["f"])("Todo Edit"),M=Object(c["f"])(" Name: "),J={class:"center"},X=Object(c["g"])("tr",null,[Object(c["g"])("th",null,"Complete"),Object(c["g"])("th",null,"Name"),Object(c["g"])("th",null,"Description"),Object(c["g"])("th",null,"State"),Object(c["g"])("th",null,"Action")],-1);function z(t,e,n,u,o,s){var r=Object(c["w"])("H1"),a=Object(c["w"])("UserDisplay"),i=Object(c["w"])("userLogout"),l=Object(c["w"])("ListItemDisplay"),d=Object(c["w"])("AddItem");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])(r,null,{default:Object(c["C"])((function(){return[R]})),_:1}),Object(c["g"])(a),Object(c["g"])(i),Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])("form",{onSubmit:e[4]||(e[4]=Object(c["E"])((function(){return s.updateTodo&&s.updateTodo.apply(s,arguments)}),["prevent"]))},[M,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.todo.name=t}),type:"text",id:"name"},null,512),[[c["A"],o.todo.name]]),Object(c["g"])("input",{type:"submit",name:"submit",value:"Update",onClick:e[2]||(e[2]=Object(c["E"])((function(t){return s.updateTodo()}),["prevent"]))}),Object(c["g"])("button",{name:"cancel",onClick:e[3]||(e[3]=Object(c["E"])((function(t){return s.cancel()}),["prevent"]))},"List")],32),Object(c["g"])("button",{name:"add",onClick:e[5]||(e[5]=Object(c["E"])((function(t){return s.addForm()}),["prevent"]))},"Add Item"),Object(c["g"])("button",{name:"delete",onClick:e[6]||(e[6]=function(){return s.delete&&s.delete.apply(s,arguments)})},"delete"),Object(c["g"])("table",J,[X,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(o.items,(function(t){return Object(c["p"])(),Object(c["d"])(l,{key:t.id,item:t,onDeleteItem:function(e){return s.deleteItem(t.id)},onUpdateItem:function(e){return s.updateItem(t.id,t)}},null,8,["item","onDeleteItem","onUpdateItem"])})),128)),o.addItemDisplay?(Object(c["p"])(),Object(c["d"])(d,{key:0,onAddItem:s.addItem},null,8,["onAddItem"])):Object(c["e"])("",!0)])])}n("159b"),n("a434"),n("a4d3"),n("e01a");var B=Object(c["g"])("td",null,null,-1),W={key:0},G={key:0},K={key:0};function Q(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("tr",null,[B,Object(c["g"])("td",null,[o.editItem?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("span",W,Object(c["y"])(o.listItem.name),1)),o.editItem?Object(c["D"])((Object(c["p"])(),Object(c["d"])("input",{key:1,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.listItem.name=t}),type:"text"},null,512)),[[c["A"],o.listItem.name]]):Object(c["e"])("",!0)]),Object(c["g"])("td",null,[o.editItem?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("span",G,Object(c["y"])(o.listItem.description),1)),o.editItem?Object(c["D"])((Object(c["p"])(),Object(c["d"])("input",{key:1,"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.listItem.description=t}),type:"text"},null,512)),[[c["A"],o.listItem.description]]):Object(c["e"])("",!0)]),Object(c["g"])("td",null,[o.editItem?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("span",K,Object(c["y"])(o.listItem.state),1)),o.editItem?Object(c["D"])((Object(c["p"])(),Object(c["d"])("input",{key:1,"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.listItem.state=t}),type:"text"},null,512)),[[c["A"],o.listItem.state]]):Object(c["e"])("",!0)]),Object(c["g"])("td",null,[o.editItem?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("button",{key:0,onClick:e[4]||(e[4]=function(){return s.editForm&&s.editForm.apply(s,arguments)})},"edit")),o.editItem?(Object(c["p"])(),Object(c["d"])("button",{key:1,onClick:e[5]||(e[5]=function(){return s.updateItem&&s.updateItem.apply(s,arguments)})},"save")):Object(c["e"])("",!0),Object(c["g"])("button",{onClick:e[6]||(e[6]=function(){return s.deleteItem&&s.deleteItem.apply(s,arguments)})},"delete")])])}var Y={props:{item:Object},data:function(){return{editItem:!1,listItem:{}}},created:function(){this.listItem=this.item},methods:{editForm:function(){this.editItem=!0},deleteItem:function(){this.$emit("deleteItem")},updateItem:function(){this.$emit("updateItem"),this.editItem=!1}}};Y.render=Q;var Z=Y,tt=Object(c["g"])("td",null,null,-1),et=Object(c["g"])("span",null,"Add",-1);function nt(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("tr",null,[tt,Object(c["g"])("td",null,[Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.item.name=t}),type:"text"},null,512),[[c["A"],o.item.name]])]),Object(c["g"])("td",null,[Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.item.description=t}),type:"text"},null,512),[[c["A"],o.item.description]])]),Object(c["g"])("td",null,[Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.item.state=t}),type:"text"},null,512),[[c["A"],o.item.state]])]),Object(c["g"])("td",null,[Object(c["g"])("button",{onClick:e[4]||(e[4]=function(){return s.addItem&&s.addItem.apply(s,arguments)})},[et])])])}var ct={data:function(){return{item:{}}},created:function(){this.item.state="in-progress"},methods:{addItem:function(){this.$emit("addItem",this.item)}}};ct.render=nt;var ut=ct,ot={components:{ListItemDisplay:Z,UserDisplay:N,AddItem:ut,userLogout:q},props:["id"],data:function(){return{todo:{},items:[],message:"",addItemDisplay:!1}},created:function(){this.getList(),this.getListItems(this.id)},methods:{addForm:function(){this.addItemDisplay=!0},getListItems:function(t){var e=this;S.getListItems(t).then((function(t){e.items=t.data.items,console.log(t.data.items)})).catch((function(t){e.message=t.response.data.message}))},updateTodo:function(){var t=this;console.log("help"),S.updateList(this.id,this.todo).then((function(){t.$router.push({name:"list"})})).catch((function(e){t.message=e.response.data.message}))},addItem:function(t){var e=this;console.log(t),S.addListItem(this.id,t).then((function(n){t.id=n.data.itemId,e.items.push(t),e.addItemDisplay=!1})).catch((function(t){e.message=t.response.data.message,console.log(t.response.data)}))},deleteItem:function(t){var e=this;S.deleteListItem(this.id,t).then((function(){e.items.forEach((function(n,c){n.id==t&&e.items.splice(c,1)}))})).catch((function(t){e.message=t.response.data.message}))},updateItem:function(t,e){var n=this;S.updateListItem(this.id,t,e).then((function(){n.$router.push({name:"Edit"})})).catch((function(t){n.message=t.response.data.message}))},cancel:function(){this.$router.push({name:"List"})},getList:function(){var t=this;S.getList(this.id).then((function(e){t.todo=e.data.list})).catch((function(e){t.message=e.response.data.message}))},delete:function(){this.$router.push({name:"Delete"})}}};ot.render=z;var st=ot,rt=Object(c["f"])("todo Delete");function at(t,e,n,u,o,s){var r=Object(c["w"])("H1"),a=Object(c["w"])("UserDisplay"),i=Object(c["w"])("userLogout");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])(r,null,{default:Object(c["C"])((function(){return[rt]})),_:1}),Object(c["g"])(a),Object(c["g"])(i),Object(c["g"])("button",{onClick:e[1]||(e[1]=function(t){return s.deleteTodo()})},"Delete"),Object(c["g"])("button",{onClick:e[2]||(e[2]=function(t){return s.cancel()})},"Cancel")])}var it={components:{UserDisplay:N,userLogout:q},props:["id"],data:function(){return{todo:Object,message:""}},created:function(){var t=this;S.getLists(this.id).then((function(e){t.todo=e.data.list})).catch((function(e){t.message=e.response.data.message}))},methods:{deleteTodo:function(){var t=this;S.deleteList(this.id).then((function(e){t.errors=e.data,t.$router.push({name:"List"})})).catch((function(e){t.message=e.response.data.message}))},cancel:function(){this.$router.push({name:"List"})}}};it.render=at;var lt=it,dt=Object(c["F"])("data-v-3600c642");Object(c["s"])("data-v-3600c642");var bt=Object(c["f"])("Todo Add"),pt=Object(c["f"])(" Name: "),mt=Object(c["g"])("input",{type:"submit",name:"submit",value:"Save"},null,-1);Object(c["q"])();var Ot=dt((function(t,e,n,u,o,s){var r=Object(c["w"])("H1"),a=Object(c["w"])("UserDisplay"),i=Object(c["w"])("userLogout");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])(r,null,{default:dt((function(){return[bt]})),_:1}),Object(c["g"])(a),Object(c["g"])(i),Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])("form",{onSubmit:e[3]||(e[3]=Object(c["E"])((function(){return s.addTodo&&s.addTodo.apply(s,arguments)}),["prevent"]))},[pt,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.todo.name=t}),type:"text",id:"name"},null,512),[[c["A"],o.todo.name]]),mt,Object(c["g"])("button",{name:"cancel",onClick:e[2]||(e[2]=Object(c["E"])((function(t){return s.cancel()}),["prevent"]))},"Cancel")],32)])})),jt={components:{UserDisplay:N,userLogout:q},data:function(){return{todo:{},message:""}},methods:{addTodo:function(){var t=this;S.addList(this.todo).then((function(){t.$router.push({name:"List"})})).catch((function(e){t.message=e.response.data.message}))},cancel:function(){this.$router.push({name:"List"})}}};n("63f3");jt.render=Ot,jt.__scopeId="data-v-3600c642";var ft=jt,gt=Object(c["F"])("data-v-0deb8cc8");Object(c["s"])("data-v-0deb8cc8");var ht=Object(c["g"])("h1",null,"Log In",-1),vt=Object(c["f"])(" Username: "),yt=Object(c["g"])("br",null,null,-1),It=Object(c["g"])("br",null,null,-1),Lt=Object(c["f"])(" Password: "),wt=Object(c["g"])("br",null,null,-1),Dt=Object(c["g"])("br",null,null,-1),Ut=Object(c["g"])("input",{type:"submit",name:"submit",value:"Log In"},null,-1),kt=Object(c["g"])("br",null,null,-1);Object(c["q"])();var At=gt((function(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("div",null,[ht,Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])("form",{onSubmit:e[4]||(e[4]=Object(c["E"])((function(){return s.logIn&&s.logIn.apply(s,arguments)}),["prevent"]))},[vt,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.user.username=t}),type:"text",id:"username"},null,512),[[c["A"],o.user.username]]),yt,It,Lt,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.user.password=t}),type:"text",id:"password"},null,512),[[c["A"],o.user.password]]),wt,Dt,Ut,kt,Object(c["g"])("button",{name:"cancel",onClick:e[3]||(e[3]=Object(c["E"])((function(t){return s.cancel()}),["prevent"]))},"Add new user")],32)])})),Ct={data:function(){return{user:{},message:"",token:""}},methods:{logIn:function(){var t=this;S.loginUser(this.user).then((function(e){t.token=e.data.token,localStorage.setItem("token",t.token),t.$router.push({name:"List"})})).catch((function(e){t.message=e.response.data.message}))},cancel:function(){this.$router.push({name:"User"})}}};n("c870");Ct.render=At,Ct.__scopeId="data-v-0deb8cc8";var xt=Ct,Tt=Object(c["g"])("h1",null,"Add new user",-1),_t=Object(c["f"])(" firstName: "),St=Object(c["g"])("br",null,null,-1),$t=Object(c["g"])("br",null,null,-1),Et=Object(c["f"])(" lastName: "),Nt=Object(c["g"])("br",null,null,-1),Vt=Object(c["g"])("br",null,null,-1),Pt=Object(c["f"])(" username: "),qt=Object(c["g"])("br",null,null,-1),Ft=Object(c["g"])("br",null,null,-1),Ht=Object(c["f"])(" password: "),Rt=Object(c["g"])("br",null,null,-1),Mt=Object(c["g"])("br",null,null,-1),Jt=Object(c["g"])("input",{type:"submit",name:"submit",value:"Log In"},null,-1),Xt=Object(c["g"])("input",{type:"submit",name:"submit",value:"Save"},null,-1);function zt(t,e,n,u,o,s){return Object(c["p"])(),Object(c["d"])("div",null,[Tt,Object(c["g"])("p",null,Object(c["y"])(o.message),1),Object(c["g"])("form",{onSubmit:e[5]||(e[5]=Object(c["E"])((function(){return s.logIn&&s.logIn.apply(s,arguments)}),["prevent"]))},[_t,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.user.firstName=t}),type:"text",id:"username"},null,512),[[c["A"],o.user.firstName]]),St,$t,Et,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.user.lastName=t}),type:"text",id:"lastName"},null,512),[[c["A"],o.user.lastName]]),Nt,Vt,Pt,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.user.username=t}),type:"text",id:"user"},null,512),[[c["A"],o.user.username]]),qt,Ft,Ht,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return o.user.password=t}),type:"text",id:"password"},null,512),[[c["A"],o.user.password]]),Rt,Mt,Jt,Xt],32)])}var Bt={data:function(){return{user:{},message:""}},methods:{logIn:function(){var t=this;S.addUser(this.user).then((function(){t.$router.push({name:"Login"})})).catch((function(e){t.message=e.response.data.message}))}}};Bt.render=zt;var Wt=Bt,Gt=[{path:"/",name:"Login",component:xt},{path:"/list",name:"List",component:H},{path:"/add",name:"Add",component:ft},{path:"/edit/:id",name:"Edit",component:st,props:!0},{path:"/delete/:id",name:"Delete",component:lt,props:!0},{path:"/user",name:"User",component:Wt}],Kt=Object(O["a"])({history:Object(O["b"])("/todoapp-vue/"),routes:Gt}),Qt=Kt;Object(c["c"])(m).use(Qt).mount("#app")},"63f3":function(t,e,n){"use strict";n("a44f")},9011:function(t,e,n){"use strict";n("ba89")},"92d5":function(t,e,n){},a44f:function(t,e,n){},ba89:function(t,e,n){},c870:function(t,e,n){"use strict";n("92d5")}});
//# sourceMappingURL=app.879add37.js.map