!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;o.push(["tjUo",1]),n()}({"25tJ":function(e,t,n){(t=n("JPst")(!1)).push([e.i,"._1y8cczK3SwW7jiJZhSIY9v{width:500px}._29RKkWUzFXLqotFswJ1Bsh{text-align:right}\n",""]),t.locals={form:"_1y8cczK3SwW7jiJZhSIY9v",cancelButton:"_29RKkWUzFXLqotFswJ1Bsh"},e.exports=t},COhA:function(e,t,n){var r=n("LboF"),a=n("vm7v");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},HhsR:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"html,body{width:100%;height:100%;background:#eeeeee;margin:0px;padding:0px;overflow-x:hidden;font-family:'Roboto', sans-serif;font-style:normal;font-weight:normal}.page{position:relative;top:50%;margin:auto;transform:translateY(-50%);background:#ffffff;box-shadow:0px 4px 30px rgba(43,43,43,0.13);border-radius:8px;padding:24px;max-height:95%;overflow:scroll}\n",""]),e.exports=t},LGpZ:function(e,t,n){var r=n("LboF"),a=n("25tJ");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},p2bk:function(e,t,n){var r=n("LboF"),a=n("HhsR");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},tjUo:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("i8i4"),i=n.n(o),l=n("55Ip"),c=n("Ty5D"),u=n("QojX"),s=n("3Z9Z"),f=n("JI6e"),p=n("cWnB"),m=n("vDqi"),d=n.n(m),h=n("Qyje"),y=n.n(h),b=d.a.create({baseURL:"http://localhost:8443",paramsSerializer:function(e){return y.a.stringify(e,{arrayFormat:"repeat"})}}),v=function(e){return e.data},g=function(e){return b.post("/register",e).then(v)},E=function(){return b.get("/users").then(v)},w=function(e,t){return b.put("/user/".concat(e),t).then(v)},S=n("LGpZ"),_=n.n(S);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var a=N(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),I(P(t=o.call(this,e)),"handleSubmit",(function(e){var n=e.currentTarget,r=e.target.elements,a=[];r.termsAndConditions.checked||a.push("termsAndConditions"),r.password.value!==r.passwordConfirmation.value&&a.push("passwordConfirmation"),t.setState({errors:a,validated:!0}),n.checkValidity()&&0===a.length&&g({firstName:r.firstName.value,lastName:r.lastName.value,email:r.email.value}).then((function(){t.props.history.push("/")})),e.preventDefault()})),I(P(t),"cancel",(function(){t.props.history.push("/")})),t.state={errors:[]},t}return t=i,(n=[{key:"render",value:function(){var e=this,t=this.state,n=t.errors,r=t.validated;return a.a.createElement(u.a,{className:"page ".concat(_.a.form),noValidate:!0,validated:r,onSubmit:this.handleSubmit},a.a.createElement(u.a.Group,{controlId:"firstName"},a.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"First name..."}),a.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please indicate your first name")),a.a.createElement(u.a.Group,{controlId:"lastName"},a.a.createElement(u.a.Control,{type:"text",placeholder:"Last name..."})),a.a.createElement(u.a.Group,{controlId:"email"},a.a.createElement(u.a.Control,{required:!0,type:"email",placeholder:"Email..."}),a.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Invalid email")),a.a.createElement(u.a.Group,{controlId:"password"},a.a.createElement(u.a.Control,{required:!0,type:"password",placeholder:"Password..."}),a.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please indicate your password")),a.a.createElement(u.a.Group,{controlId:"passwordConfirmation"},a.a.createElement(u.a.Control,{required:!0,type:"password",placeholder:"Please confirm your password...",isInvalid:n.includes("passwordConfirmation")}),a.a.createElement(u.a.Control.Feedback,{type:"invalid"},"password does not match")),a.a.createElement(u.a.Group,{controlId:"status"},a.a.createElement(u.a.Control,{as:"select"},a.a.createElement("option",null,"Teacher"),a.a.createElement("option",null,"Teacher assistant"),a.a.createElement("option",null,"Student"))),a.a.createElement(u.a.Group,{controlId:"picture"},a.a.createElement(u.a.File,{name:"picture",label:"Picture",feedback:"Please provide a profile picture"})),a.a.createElement(u.a.Group,{controlId:"newsletter"},a.a.createElement(u.a.Check,{type:"checkbox",label:"Subscribe to newsletter"})),a.a.createElement(u.a.Group,{controlId:"termsAndConditions"},a.a.createElement(u.a.Check,{type:"checkbox",label:"I have read terms and conditions",isInvalid:n.includes("termsAndConditions"),feedback:"You must read the terms and conditions"})),a.a.createElement(s.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,{variant:"primary",type:"submit"},"Submit")),a.a.createElement(f.a,{className:_.a.cancelButton},a.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.cancel()}},"Cancel"))))}}])&&O(t.prototype,n),r&&O(t,r),i}(a.a.Component),R=n("T/rR"),L=n("7vrA"),T=n("jDKy"),U=n("COhA"),A=n.n(U);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var a=M(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return z(this,n)}}function z(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,e);var t,n,r,o=W(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={users:[],loading:!0},t}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){return e.setState({users:t.users,loading:!1})}))}},{key:"registerNewUser",value:function(){this.props.history.push("/register")}},{key:"onChange",value:function(e,t){var n=this.props.match.params.id,r=t.target.value;this.setState((function(t){var a=q(t.users);return a.find((function(e){return e.id===n}))[e]=r,{users:a}}))}},{key:"modifyUser",value:function(e){this.props.history.push("/users/".concat(e))}},{key:"saveUser",value:function(){var e=this,t=this.props.match.params.id,n=this.state.users.find((function(e){return e.id===t}));w(t,n).then((function(){return e.props.history.push("/")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,r=t.users,o=this.props.match.params.id;return n?a.a.createElement(R.a,{animation:"border",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")):a.a.createElement(L.a,{className:"page"},a.a.createElement(s.a,{className:A.a.title},a.a.createElement(f.a,null,"First Name"),a.a.createElement(f.a,null,"Last Name"),a.a.createElement(f.a,null)),r.map((function(t){return a.a.createElement(s.a,{key:t.id,className:A.a.user},o===t.id?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,null,a.a.createElement(T.a,{placeholder:"First name...",value:t.firstName,onChange:function(t){return e.onChange("firstName",t)}})),a.a.createElement(f.a,null,a.a.createElement(T.a,{placeholder:"Last name...",value:t.lastName,onChange:function(t){return e.onChange("lastName",t)}})),a.a.createElement(f.a,{className:A.a.userButton},a.a.createElement(p.a,{onClick:function(){return e.saveUser()}},"Save modification"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,null,t.firstName),a.a.createElement(f.a,null,t.lastName),a.a.createElement(f.a,{className:A.a.userButton},a.a.createElement(p.a,{onClick:function(){return e.modifyUser(t.id)}},"Modify"))))})),a.a.createElement(p.a,{className:A.a.newUser,onClick:function(){return e.registerNewUser()}},"Register a new user"))}}])&&G(t.prototype,n),r&&G(t,r),i}(a.a.Component);n("p2bk"),n("q4sD");i.a.render(a.a.createElement(l.a,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/register",component:F}),a.a.createElement(c.a,{path:["/users/:id","/"],component:Z}))),document.getElementById("root"))},vm7v:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"._1qf2otCdhto4FeBJL5mFh4{margin-bottom:24px;font-size:18px;font-weight:bold}._3WPI4O6ygZVbEdGUThqmQB{margin-top:8px}._56eWde4yhz39jtDu-hV65{margin-top:24px}._2prWYS4P3NzT9n6L5r2vZp{text-align:right}\n",""]),t.locals={title:"_1qf2otCdhto4FeBJL5mFh4",user:"_3WPI4O6ygZVbEdGUThqmQB",newUser:"_56eWde4yhz39jtDu-hV65",userButton:"_2prWYS4P3NzT9n6L5r2vZp"},e.exports=t}});