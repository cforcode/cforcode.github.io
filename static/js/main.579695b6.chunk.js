(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/login.216ae979.svg"},217:function(e,t,a){e.exports=a(422)},223:function(e,t,a){},283:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),l=a.n(o),c=a(4),i=a.n(c),s=(a(222),a(223),a(16)),m=a(17),u=a(49),h=a(18),d=a(19),p=a(14),g=a(63),E=a(423),f=a(149),b=a(437),v=a(424),y=a(438),O=a(439),k=E.a.Header,j=f.a.SubMenu,I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=l.a.createElement(f.a,null,l.a.createElement(f.a.Item,{key:"1"},l.a.createElement(p.b,{to:"/admin"},"Admin Dashboard")),l.a.createElement(f.a.Item,{key:"2"},l.a.createElement(p.b,{to:"/profile"},"Profile")),l.a.createElement(f.a.Item,{key:"3"},l.a.createElement("span",{onClick:this.props.onLogout},"Logout")));return l.a.createElement(k,null,l.a.createElement(f.a,{mode:"horizontal",defaultSelectedKeys:["0"]},l.a.createElement(f.a.Item,{key:"0"},l.a.createElement(p.b,{to:"/"},"Home")),!this.props.authenticated&&l.a.createElement(f.a.Item,{className:"right",key:"3"},l.a.createElement(p.b,{to:"/login"},"Login")),!this.props.authenticated&&l.a.createElement(f.a.Item,{className:"right xs-hide",key:"4"},l.a.createElement(p.b,{to:"/signup"},"Signup")),this.props.authenticated&&l.a.createElement(j,{className:"right",title:l.a.createElement(b.a,{overlay:e,placement:"bottomCenter"},l.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},this.props.loggedInUser.imageUrl&&l.a.createElement(v.a,{src:this.props.loggedInUser.imageUrl}),!this.props.loggedInUser.imageUrl&&l.a.createElement(v.a,{icon:l.a.createElement(y.a,null)}),l.a.createElement("span",{className:"ml1"},l.a.createElement(O.a,null))))})))}}]),a}(o.Component);a(283);"cforcode.github.io"===(window&&window.location&&window.location.hostname)?(n="https://nerchuko.herokuapp.com",r="https://cforcode.github.io"):(n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_HOST||"http://localhost:8080",r="http://localhost:3000");var w="".concat(n),C="".concat(r),S="".concat(C,"/oauth2/redirect"),N="".concat(w,"/oauth2/authorize/google?redirect_uri=")+S,P="".concat(w,"/oauth2/authorize/facebook?redirect_uri=")+S,U="".concat(w,"/oauth2/authorize/github?redirect_uri=")+S,L=a(440),T=a(441),x=a(442),F=a(37),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"social-login"},l.a.createElement(F.a,{shape:"round",style:{background:"#dc4e41",color:"#fff"},icon:l.a.createElement(L.a,null),onClick:function(){return window.location.href=N},block:!0},"Google"),l.a.createElement(F.a,{shape:"round",style:{background:"#3b5998",color:"#fff"},icon:l.a.createElement(T.a,null),onClick:function(){return window.location.href=P},block:!0},"Facebook"),l.a.createElement(F.a,{shape:"round",style:{background:"#00405d",color:"#fff"},icon:l.a.createElement(x.a,null),onClick:function(){return window.location.href=U},block:!0},"GitHub"))}}]),a}(o.Component),z=function(e){var t=new Headers({"Content-Type":"application/json"});localStorage.getItem("accessToken")&&t.append("Authorization","Bearer "+localStorage.getItem("accessToken"));var a={headers:t};return e=Object.assign({},a,e),fetch(e.url,e).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}))};var _=a(115),M=a.n(_),D=a(443),B=a(429),H=a(432),q=a(85),R=a(41),K=a(430),W=a(434),J=a(433),G=a(425),V=B.a.Title,Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.onFinish=n.onFinish.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state&&this.props.location.state.error&&setTimeout((function(){H.a.error(e.props.location.state.error),e.props.history.replace({pathname:e.props.location.pathname,state:{}})}),100)}},{key:"onFinish",value:function(e){var t=this;(function(e){return z({url:w+"/auth/login",method:"POST",body:JSON.stringify(e)})})(Object.assign({},e)).then((function(e){localStorage.setItem("accessToken",e.accessToken),H.a.success("You're successfully logged in!"),t.props.loadCurrentlyLoggedInUser()})).catch((function(e){H.a.error(e&&e.message||"Oops! Something went wrong. Please try again!")}))}},{key:"onFinishFailed",value:function(e){console.log("Failed:",e)}},{key:"render",value:function(){return this.props.authenticated?l.a.createElement(g.a,{to:{pathname:"/",state:{from:this.props.location}}}):l.a.createElement(q.a,{justify:"center"},l.a.createElement(R.a,{xs:0,sm:0,md:12},l.a.createElement("img",{src:M.a,width:"100%",alt:"login"})),l.a.createElement(R.a,{xs:20,sm:20,md:8},l.a.createElement("div",{className:"login-content"},l.a.createElement(V,{level:2},"Login"),l.a.createElement(K.a,{layout:"vertical",name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},l.a.createElement(K.a.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please input your email!"}]},l.a.createElement(W.a,{prefix:l.a.createElement(y.a,{className:"site-form-item-icon"}),placeholder:"email"})),l.a.createElement(K.a.Item,{label:"password",name:"password",rules:[{required:!0,message:"Please input your Password!"}]},l.a.createElement(W.a.Password,{prefix:l.a.createElement(D.a,{className:"site-form-item-icon"}),placeholder:"Password"})),l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},l.a.createElement(J.a,null,"Remember me")),l.a.createElement("span",{className:"right"},l.a.createElement(p.b,{className:"login-form-forgot",to:"/forgot"},"Forgot password"))),l.a.createElement(K.a.Item,null,l.a.createElement(F.a,{type:"primary",block:!0,htmlType:"submit",className:"login-form-button"},"Log in")),l.a.createElement(G.a,null,"or"),l.a.createElement(A,null)),l.a.createElement("div",{className:"signup-link"},"Don't have an account? ",l.a.createElement(p.b,{to:"/signup"},"Sign up")))))}}]),a}(o.Component),$=a(199),Q=B.a.Title,X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return this.props.authenticated?l.a.createElement(g.a,{to:{pathname:"/",state:{from:this.props.location}}}):l.a.createElement(q.a,{justify:"center"},l.a.createElement(R.a,{xs:0,sm:14},l.a.createElement("img",{src:M.a,width:"100%",alt:"login"})),l.a.createElement(R.a,{xs:20,sm:6},l.a.createElement("div",{className:"login-content"},l.a.createElement(Q,{level:2},"Signup"),l.a.createElement(Z,this.props),l.a.createElement("div",{className:"signup-link"},"Already have an account? ",l.a.createElement(p.b,{to:"/login"},"Login")))))}}]),a}(o.Component),Z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object($.a)({},a,n))}},{key:"onFinish",value:function(e){var t,a=this,n=Object.assign({},e);(t=n,z({url:w+"/auth/signup",method:"POST",body:JSON.stringify(t)})).then((function(e){H.a.success("You're successfully registered. Please login to continue"),a.props.history.push("/login")})).catch((function(e){H.a.error(e&&e.message||"Oops Something went wrong. Please try again")}))}},{key:"onFinishFailed",value:function(e){console.log("Failed:",e)}},{key:"render",value:function(){return l.a.createElement(K.a,{name:"normal_login",layout:"vertical",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},l.a.createElement(K.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Name"}]},l.a.createElement(W.a,{prefix:l.a.createElement(y.a,{className:"site-form-item-icon"}),placeholder:"name"})),l.a.createElement(K.a.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please input your Email Address"}]},l.a.createElement(W.a,{prefix:l.a.createElement(y.a,{className:"site-form-item-icon"}),placeholder:"email"})),l.a.createElement(K.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your Password"}]},l.a.createElement(W.a.Password,{prefix:l.a.createElement(D.a,{className:"site-form-item-icon"}),placeholder:"Password"})),l.a.createElement(K.a.Item,{label:"Confirm Password",name:"confirmPassword",rules:[{required:!0,message:"Please input your confirm Password"}]},l.a.createElement(W.a.Password,{prefix:l.a.createElement(D.a,{className:"site-form-item-icon"}),placeholder:"Confirm Password"})),l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},l.a.createElement(J.a,null,"Remember me")),l.a.createElement("span",{className:"right"},l.a.createElement(p.b,{className:"login-form-forgot",to:"/forgot"},"Forgot password"))),l.a.createElement(K.a.Item,null,l.a.createElement(F.a,{type:"primary",block:!0,htmlType:"submit",className:"login-form-button"},"Sign up")),l.a.createElement(G.a,null,"or"),l.a.createElement(A,null))}}]),a}(o.Component),ee=X,te=a(427),ae=te.a.Meta,ne=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),console.log(e),n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(te.a,{hoverable:!0,style:{width:240},cover:l.a.createElement("img",{src:this.props.currentUser.imageUrl,alt:this.props.currentUser.name})},l.a.createElement(ae,{title:this.props.currentUser.name,description:this.props.currentUser.email}))}}]),a}(o.Component),re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"getUrlParameter",value:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(this.props.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"render",value:function(){var e=this.getUrlParameter("token"),t=this.getUrlParameter("error");return e?(localStorage.setItem("accessToken",e),l.a.createElement(g.a,{to:{pathname:"/profile",state:{from:this.props.location}}})):l.a.createElement(g.a,{to:{pathname:"/login",state:{from:this.props.location,error:t}}})}}]),a}(o.Component),oe=a(82),le=a.n(oe),ce=a(426),ie=a(431),se=E.a.Content,me=te.a.Meta,ue=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={cards:[1,2,3,4,5,6],loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};le.a.get("".concat(w,"/topics"),t).then((function(t){var a=t.data;e.setState({cards:a,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.cards,a=e.loading;return l.a.createElement(se,null,l.a.createElement(q.a,{gutter:[24,24]},t.map((function(e,t){return l.a.createElement(R.a,{key:t,className:"gutter-row xs-hide",sm:8,md:6,lg:4},l.a.createElement(p.b,{to:"/topics/".concat(e.name)},l.a.createElement(te.a,{hoverable:!0,style:{textAlign:"center"},cover:l.a.createElement("img",{alt:e.name,src:e.imageUrl,style:{height:"100px",width:"auto",margin:"24px auto 0"}})},l.a.createElement(me,{title:e.name,style:{textAlign:"center"}}))))}))),l.a.createElement(ce.a,{className:"sm-hide md-hide lg-hide",itemLayout:"horizontal",dataSource:t,renderItem:function(e){return l.a.createElement(ce.a.Item,null,l.a.createElement(ie.a,{loading:a,active:!0,avatar:!0,shape:"square",paragraph:{rows:1}},l.a.createElement(p.b,{to:"/topics/".concat(e.name),style:{width:"100%"}},l.a.createElement(ce.a.Item.Meta,{className:"ml2",avatar:l.a.createElement(v.a,{shape:"square",src:e.imageUrl}),title:e.name,description:e.name}))))}}))}}]),a}(l.a.Component),he=a(435),de=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(he.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:l.a.createElement(p.b,{to:"/",className:"ant-btn ant-btn-primary"},"Home")})}}]),a}(l.a.Component),pe=(a(412),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Category: ",this.props.match.params.name))}}]),a}(l.a.Component)),ge=E.a.Content,Ee=te.a.Meta,fe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={cards:[{name:"Languages",image:"https://image.flaticon.com/icons/svg/484/484531.svg",path:"languages"},{name:"Topics",image:"https://image.flaticon.com/icons/svg/2422/2422223.svg",path:"topics"}]},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(ge,null,l.a.createElement(q.a,{gutter:[24,24]},this.state.cards.map((function(e,t){return l.a.createElement(R.a,{key:t,className:"gutter-row",xs:12,sm:8,md:4},l.a.createElement(te.a,{hoverable:!0,style:{textAlign:"center"},cover:l.a.createElement(p.b,{to:"/admin/".concat(e.path)},l.a.createElement("img",{alt:e.name,src:e.image,style:{height:"100px",width:"auto",margin:"24px auto 0"}}))},l.a.createElement(Ee,{title:l.a.createElement(p.b,{to:"/admin/".concat(e.path)},e.name),style:{textAlign:"center"}})))}))))}}]),a}(o.Component),be=a(436),ve=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={languages:[],fontColorList:["#613400","#254000","#092b00","#002766"],backgroundColorList:["#fffbe6","#f4ffb8","#d9f7be","#bae7ff"]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};le.a.get("http://localhost:8080/languages",t).then((function(t){var a=t.data;e.setState({languages:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{justify:"center"},l.a.createElement(R.a,{span:20},l.a.createElement(be.a,null,l.a.createElement(be.a.Item,null,"Home"),l.a.createElement(be.a.Item,null,l.a.createElement(p.b,{to:"/admin"},"Admin")),l.a.createElement(be.a.Item,null,"Languages"))),l.a.createElement(R.a,{span:20},l.a.createElement(te.a,{size:"small",title:"Languages",extra:l.a.createElement("a",{href:"add"},"Add")},l.a.createElement(ce.a,{size:"small",itemLayout:"horizontal",dataSource:this.state.languages,renderItem:function(t,a){return l.a.createElement(ce.a.Item,null,l.a.createElement(ce.a.Item.Meta,{avatar:l.a.createElement(v.a,{style:{color:e.state.fontColorList[a],backgroundColor:e.state.backgroundColorList[a]}},t.code),title:l.a.createElement("a",{href:"https://ant.design"},t.name),description:t.nativeName}))}})))))}}]),a}(l.a.Component),ye=a(428),Oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){console.log(t),e.setState({visible:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1})},e.state={topics:[],visible:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};le.a.get("http://localhost:8080/topics",t).then((function(t){var a=t.data;e.setState({topics:a})}))}},{key:"render",value:function(){var e=this.state.topics;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{justify:"center"},l.a.createElement(R.a,{span:20},l.a.createElement(be.a,null,l.a.createElement(be.a.Item,null,"Home"),l.a.createElement(be.a.Item,null,l.a.createElement(p.b,{to:"/admin"},"Admin")),l.a.createElement(be.a.Item,null,"Topics"))),l.a.createElement(R.a,{span:20},l.a.createElement(te.a,{size:"small",title:"Topics List",extra:l.a.createElement(F.a,{type:"primary",size:"small",onClick:this.showModal},"Add")},l.a.createElement(ce.a,{size:"small",itemLayout:"horizontal",dataSource:e,renderItem:function(e,t){return l.a.createElement(ce.a.Item,null,l.a.createElement(ce.a.Item.Meta,{avatar:l.a.createElement(v.a,{shape:"square",src:e.imageUrl}),title:e.name}))}}),"    "))),l.a.createElement(ye.a,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement("div",null,l.a.createElement(K.a,{layout:"vertical"},l.a.createElement(K.a.Item,{label:"Field A"},l.a.createElement(W.a,{placeholder:"input placeholder"})),l.a.createElement(K.a.Item,{label:"Field B"},l.a.createElement(W.a,{placeholder:"input placeholder"})),l.a.createElement(K.a.Item,null,l.a.createElement(F.a,{type:"primary"},"Submit"))))))}}]),a}(o.Component);a(421);function ke(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"cent"},l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null))))}var je=a(216),Ie=function(e){var t=e.component,a=e.authenticated,n=Object(je.a)(e,["component","authenticated"]);return l.a.createElement(g.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,Object.assign({},n,e)):l.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},we=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={authenticated:!1,currentUser:null,loading:!1},n.loadCurrentlyLoggedInUser=n.loadCurrentlyLoggedInUser.bind(Object(u.a)(n)),n.handleLogout=n.handleLogout.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"loadCurrentlyLoggedInUser",value:function(){var e=this;this.setState({loading:!0}),(localStorage.getItem("accessToken")?z({url:w+"/user/me",method:"GET"}):Promise.reject("No access token set.")).then((function(t){e.setState({currentUser:t,authenticated:!0,loading:!1})})).catch((function(t){e.setState({loading:!1})}))}},{key:"handleLogout",value:function(){localStorage.removeItem("accessToken"),this.setState({authenticated:!1,currentUser:null}),H.a.success("You have been successfully logged out")}},{key:"componentDidMount",value:function(){this.loadCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement(ke,null):l.a.createElement(p.a,{basename:""},l.a.createElement(E.a,{className:"layout"},l.a.createElement(I,{authenticated:this.state.authenticated,loggedInUser:this.state.currentUser,onLogout:this.handleLogout}),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{exact:!0,path:"/",component:ue}),l.a.createElement(Ie,{path:"/profile",authenticated:this.state.authenticated,currentUser:this.state.currentUser,component:ne}),l.a.createElement(g.b,{path:"/login",render:function(t){return l.a.createElement(Y,Object.assign({authenticated:e.state.authenticated},t,{loadCurrentlyLoggedInUser:e.loadCurrentlyLoggedInUser}))}}),l.a.createElement(g.b,{path:"/signup",render:function(t){return l.a.createElement(ee,Object.assign({authenticated:e.state.authenticated},t))}}),l.a.createElement(g.b,{path:"/oauth2/redirect",component:re}),l.a.createElement(g.b,{path:"/home",component:ue}),l.a.createElement(g.b,{path:"/admin/languages",component:ve}),l.a.createElement(g.b,{path:"/admin/topics",component:Oe}),l.a.createElement(g.b,{path:"/admin",component:fe}),l.a.createElement(g.b,{path:"/topics/:name",component:pe}),l.a.createElement(g.b,{path:"*",component:de})))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[217,1,2]]]);
//# sourceMappingURL=main.579695b6.chunk.js.map