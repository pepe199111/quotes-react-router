(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[4],{36:function(e,t,n){"use strict";var c=n(34),s=n(0);t.a=function(e){var t=Object(s.useState)(""),n=Object(c.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)(!1),i=Object(c.a)(r,2),m=i[0],j=i[1],l=e(a);return{value:a,isValid:l,hasError:!l&&m,valueChangeHandler:function(e){o(e.target.value)},inputBlurHandler:function(){j(!0)},reset:function(){o(""),j(!1)}}}},46:function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},47:function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",invalid:"NewCommentForm_invalid__3l-B1",actions:"NewCommentForm_actions__2fwWP"}},48:function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},49:function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},50:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},52:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(8),a=n(34),o=n(0),r=n(46),i=n.n(r),m=n(35),j=n(36),l=n(33),u=n(15),d=n(47),b=n.n(d),O=n(1),x=function(e){var t=Object(m.a)(l.a),n=t.sendRequest,c=t.status,s=t.error,a=Object(j.a)((function(e){return e.length>=5})),r=a.value,i=a.isValid,d=a.hasError,x=a.valueChangeHandler,h=a.inputBlurHandler,f=a.reset,p=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==c||s||p()}),[c,s,p]);var v=function(t){t.preventDefault(),i&&(n({commentData:{text:r},quoteId:e.quoteId}),f())},_=d?b.a.invalid:b.a.control;return Object(O.jsxs)("form",{className:b.a.form,onSubmit:v,children:["pending"===c&&Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(u.a,{})}),Object(O.jsxs)("div",{className:_,onSubmit:v,children:[Object(O.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(O.jsx)("textarea",{value:r,onChange:x,onBlur:h,id:"comment",rows:"5"}),d&&Object(O.jsx)("p",{className:"error-message",children:"Please type min 5 charts."})]}),Object(O.jsx)("div",{className:b.a.actions,children:Object(O.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=n(48),f=n.n(h),p=function(e){return Object(O.jsx)("li",{className:f.a.item,children:Object(O.jsx)("p",{children:e.text})})},v=n(49),_=n.n(v),N=function(e){return Object(O.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(O.jsx)(p,{text:e.text},e.id)}))})},C=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.j)(),j=Object(m.a)(l.c),d=j.sendRequest,b=j.status,h=j.data,f=r.quoteId;Object(o.useEffect)((function(){d(f)}),[d,f]);var p,v=Object(o.useCallback)((function(){d(f)}),[d,f]);return"pending"===b&&(p=Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(u.a,{})})),"completed"===b&&h&&h.length>0&&(p=Object(O.jsx)(N,{comments:h})),"completed"!==b||h&&0!==h.length||(p=Object(O.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(O.jsxs)("section",{className:i.a.comments,children:[Object(O.jsx)("h2",{children:"User Comments"}),!n&&Object(O.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),n&&Object(O.jsx)(x,{quoteId:f,onAddedComment:v}),p]})},g=n(50),q=n.n(g),w=function(e){return Object(O.jsxs)("figure",{className:q.a.quote,children:[Object(O.jsx)("p",{children:e.text}),Object(O.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(c.k)(),t=Object(c.j)().quoteId,n=Object(m.a)(l.e,!0),a=n.sendRequest,r=n.status,i=n.data,j=n.error;return Object(o.useEffect)((function(){a(t)}),[a,t]),"pending"===r?Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(u.a,{})}):j?Object(O.jsx)("p",{className:"centered",children:j}):i.text?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{text:i.text,author:i.author}),Object(O.jsx)(c.c,{path:e.path,exact:!0,children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(O.jsx)(c.c,{path:"".concat(e.path,"/comments"),children:Object(O.jsx)(C,{})})]}):Object(O.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.43346f63.chunk.js.map