(this["webpackJsonpcredit-card"]=this["webpackJsonpcredit-card"]||[]).push([[0],{17:function(e,c,a){},18:function(e,c,a){},24:function(e,c,a){},27:function(e,c,a){"use strict";a.r(c);var t=a(1),n=a.n(t),r=a(5),s=a.n(r),l=(a(17),a(18),a(10)),i=a(6),o=a(7),u=a(8),d=a(12),m=a(11),h=a(9),b=(a(23),a(24),a(3)),j=a.n(b);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")}function f(e){if(!e)return e;var c,a=j.a.fns.cardType(e),t=p(e);switch(a){case"amex":c="".concat(t.slice(0,4)," ").concat(t.slice(4,10)," ").concat(t.slice(10,15));break;case"dinersclub":c="".concat(t.slice(0,4)," ").concat(t.slice(4,10)," ").concat(t.slice(10,14));break;default:c="".concat(t.slice(0,4)," ").concat(t.slice(4,8)," ").concat(t.slice(8,12)," ").concat(t.slice(12,19))}return c.trim()}function v(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=p(e),t=4;if(c.number){var n=j.a.fns.cardType(c.number);t="amex"===n?4:3}return a.slice(0,t)}function x(e){var c=p(e);return c.length>=3?"".concat(c.slice(0,2),"/").concat(c.slice(2,4)):c}var O=a(0),N=function(e){Object(d.a)(a,e);var c=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=c.call.apply(c,[this].concat(n))).state={number:"",name:"",expiry:"",cvc:"",focused:"",formData:null},e.handleInputFocus=function(c){var a=c.target;e.setState({focused:a.name})},e.handleInputChange=function(c){var a=c.target;"number"===a.name?a.value=f(a.value):"expiry"===a.name?a.value=x(a.value):"cvc"===a.name&&(a.value=v(a.value)),e.setState(Object(i.a)({},a.name,a.value))},e.handleSubmit=function(c){c.preventDefault();var a=Object(l.a)(c.target.elements).filter((function(e){return e.name})).reduce((function(e,c){return e[c.name]=c.value,e}),{});e.setState({formData:a}),e.form.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,c=this.state,a=c.name,t=c.number,n=c.expiry,r=c.cvc,s=c.focused;return Object(O.jsx)("div",{className:"credit-card-box",children:Object(O.jsxs)("div",{className:"credit-card-form",children:[Object(O.jsx)("h1",{children:"Stomble App"}),Object(O.jsx)("h4",{children:"Inser Your Credit Card"}),Object(O.jsx)(h.a,{number:t,name:a,expiry:n,cvc:r,focused:s,callback:this.handleCallback}),Object(O.jsxs)("form",{ref:function(c){return e.form=c},onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{className:"card-label",children:Object(O.jsx)("label",{className:"column",children:"Card Number"})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"tel",name:"number",className:"form-control",placeholder:"Your Card Number",pattern:"[\\d| ]{16,22}",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("div",{className:"card-label",children:Object(O.jsx)("label",{className:"column",children:"Card Name"})}),Object(O.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your Name on Card",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("label",{className:"col card-label",children:"Expiration Date"}),Object(O.jsx)("label",{className:"col card-cvc",children:"CVC"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)("input",{type:"tel",name:"expiry",className:"form-control",placeholder:"MM/YY",pattern:"\\d\\d/\\d\\d",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})}),Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)("input",{type:"tel",name:"cvc",className:"form-control",placeholder:"CVC",pattern:"\\d{3,4}",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})})]}),Object(O.jsxs)("div",{className:"form-check",children:[Object(O.jsx)("input",{type:"checkbox",className:"form-check-input"}),Object(O.jsx)("label",{className:"form-check-label",children:"Make it default card"})]}),Object(O.jsx)("div",{className:"form-actions",children:Object(O.jsx)("button",{className:"btn btn-primary btn-block",children:"Submit"})})]})]})},"Payment")}}]),a}(n.a.Component);a(26);var g=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(N,{})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(c){var a=c.getCLS,t=c.getFID,n=c.getFCP,r=c.getLCP,s=c.getTTFB;a(e),t(e),n(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),C()}},[[27,1,2]]]);
//# sourceMappingURL=main.2bf0187e.chunk.js.map