(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},72:function(e,t){},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),m=a(37),s=a.n(m),o=a(84),i=a(85),r=(a(46),a(13)),l=a(14),u=a(17),d=a(16),h=a(18),_=a(38),N=a.n(_)()("http://nobelix.nobelnet.dk:8000"),b=(a(36),a(75),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).BeamerOn=function(){N.emit("beamerOn")},a.BeamerOff=function(){N.emit("beamerOff")},a.ChannelChromecast=function(){N.emit("channelChromecast")},a.ChannelHDMI=function(){N.emit("channelHDMI")},a.state={Title:"Nobel remote"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"PageBorder"},c.a.createElement("div",{className:"Margin_2"},c.a.createElement("div",{className:"Home_TitleBox"},c.a.createElement("h1",{className:"customText_w_big"},this.state.Title)),c.a.createElement("div",{className:"Home_BtnBox"},c.a.createElement("div",{className:"Home_BTN_Row"},c.a.createElement("button",{onClick:this.BeamerOn,className:"Home_BTN_Left std_BTN customText_w"},"Switch beamer ON"),c.a.createElement("button",{onClick:this.BeamerOff,className:"Home_BTN_Right std_BTN customText_w"},"Switch beamer OFF")),c.a.createElement("div",{className:"Home_BTN_Row"},c.a.createElement("button",{onClick:this.ChannelChromecast,className:"Home_BTN_Left std_BTN customText_w"},"Change to Chromecast"),c.a.createElement("button",{onClick:this.ChannelHDMI,className:"Home_BTN_Right std_BTN customText_w"},"Change to HDMI")))))}}]),t}(c.a.Component)),T=a(40),f=a(15);a(76);var B=a(77),C=function(e){function t(e){var a,n;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).BeamerOn=function(){N.emit("beamerOn")},a.BeamerOff=function(){N.emit("beamerOff")},a.ChannelChromecast=function(){N.emit("channelChromecast")},a.ChannelHDMI=function(){N.emit("channelHDMI")},a.Mute=function(){var e=B(a.state.AdminPassword+"saltyNobel");N.emit("mute",e)},a.Unmute=function(){var e=B(a.state.AdminPassword+"saltyNobel");N.emit("unmute",e)},a.OnPassChange=function(e){a.setState(Object(T.a)({},Object(f.a)(a),{AdminPassword:e.target.value}))},a.state={Title:"Nobel remote: Admin",AdminPassword:"",passFeedback:"Not connected to backend!"},N.emit("getPassFeedback"),n=function(e,t){return a.setState({passFeedback:t})},N.on("updatePassFeedback",function(e){return n(null,e)}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"PageBorder"},c.a.createElement("div",{className:"Margin_2"},c.a.createElement("div",{className:"Admin_TitleBox"},c.a.createElement("h1",{className:"customText_w_big"},this.state.Title)),c.a.createElement("div",{className:"Admin_BtnBox"},c.a.createElement("h1",{className:"Admin_InfoText customText_w"},this.state.passFeedback),c.a.createElement("input",{type:"Password",className:"Admin_PassForm customText_b",placeholder:"Enter admin password",onChange:this.OnPassChange,required:!0}),c.a.createElement("div",{className:"Admin_BTN_Row"},c.a.createElement("button",{onClick:this.BeamerOn,className:"Admin_BTN_Left dark_BTN customText_w"},"Switch beamer ON"),c.a.createElement("button",{onClick:this.BeamerOff,className:"Admin_BTN_Right dark_BTN customText_w"},"Switch beamer OFF")),c.a.createElement("div",{className:"Admin_BTN_Row"},c.a.createElement("button",{onClick:this.ChannelHDMI,className:"Admin_BTN_Left dark_BTN customText_w"},"Change to HDMI"),c.a.createElement("button",{onClick:this.ChannelChromecast,className:"Admin_BTN_Right dark_BTN customText_w"},"Change to Chromecast")),c.a.createElement("div",{className:"Admin_BTN_Row"},c.a.createElement("button",{onClick:this.Mute,className:"Admin_BTN_Left dark_BTN customText_w"},"Mute"),c.a.createElement("button",{onClick:this.Unmute,className:"Admin_BTN_Right dark_BTN customText_w"},"Unmute")))))}}]),t}(c.a.Component);s.a.render(c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(i.a,{path:"/",component:b}),c.a.createElement(i.a,{exact:!0,path:"/hestAdmin",component:C}))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.671d25e0.chunk.js.map