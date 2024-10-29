"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[503],{4277:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(4848),t=r(8453);const o={title:"HTTP Decorators",sidebar_position:2},i="HTTP Decorators",c={id:"http-shim/decorator-list",title:"HTTP Decorators",description:"Exhaustive list of HTTP decorators provided by ts-basis/nodejs",source:"@site/docs/04_http-shim/decorator-list.mdx",sourceDirName:"04_http-shim",slug:"/http-shim/decorator-list",permalink:"/docs/http-shim/decorator-list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"HTTP Decorators",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HttpServerShim",permalink:"/docs/http-shim/http-shim"},next:{title:"Handling Authentication",permalink:"/docs/http-shim/handling-auth"}},d={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"HTTP Decorators",id:"http-decorators-1",level:2},{value:"GET Decorator",id:"get-decorator",level:3},{value:"POST Decorator",id:"post-decorator",level:3},{value:"PATCH Decorator",id:"patch-decorator",level:3},{value:"PUT Decorator",id:"put-decorator",level:3},{value:"DELETE Decorator",id:"delete-decorator",level:3},{value:"CRUD Decorator",id:"crud-decorator",level:3},{value:"METHODS Decorator",id:"methods-decorator",level:3},{value:"ACCESS Decorator",id:"access-decorator",level:3},{value:"Function Documentation",id:"function-documentation",level:2},{value:"<code>Request</code> Class",id:"request-class",level:3},{value:"<code>Response</code> Class",id:"response-class",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"http-decorators",children:"HTTP Decorators"})}),"\n",(0,n.jsxs)(s.p,{children:["Exhaustive list of ",(0,n.jsx)(s.code,{children:"HTTP"})," decorators provided by ",(0,n.jsx)(s.code,{children:"ts-basis/nodejs"})]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#http-decorators",children:"HTTP Decorators"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#get-decorator",children:"GET Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#post-decorator",children:"POST Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#patch-decorator",children:"PATCH Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#put-decorator",children:"PUT Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#delete-decorator",children:"DELETE Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#crud-decorator",children:"CRUD Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#methods-decorator",children:"METHODS Decorator"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#access-decorator",children:"ACCESS Decorator"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#function-documentation",children:"Function Documentation"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#methods-register-function",children:"Methods Register Function"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#httprequest-class",children:"HttpRequest Class"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#httpresponse-class",children:"HttpResponse Class"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#httpop-class",children:"HttpOp Class"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"http-decorators-1",children:"HTTP Decorators"}),"\n",(0,n.jsx)(s.h3,{id:"get-decorator",children:"GET Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.GET('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register a handler for HTTP GET requests to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"post-decorator",children:"POST Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.POST('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register a handler for HTTP POST requests to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"patch-decorator",children:"PATCH Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.PATCH('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register a handler for HTTP PATCH requests to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"put-decorator",children:"PUT Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.PUT('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register a handler for HTTP PUT requests to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"delete-decorator",children:"DELETE Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.DELETE('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register a handler for HTTP DELETE requests to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"crud-decorator",children:"CRUD Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.CRUD('/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register handlers for all CRUD operations (POST, GET, PATCH, PUT, DELETE) to a specific path.\nWorks with datastore backend with CRUD support for doing CRUD operations on data entity with known unique path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"methods-decorator",children:"METHODS Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.METHODS([HttpMethod.GET, HttpMethod.POST], '/path')"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Register handlers for multiple HTTP methods to a specific path."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"access-decorator",children:"ACCESS Decorator"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Usage"}),": ",(0,n.jsx)(s.code,{children:"@HTTP.ACCESS({ ADMIN: true })"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Purpose"}),": Define access control for an API method based on roles."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"function-documentation",children:"Function Documentation"}),"\n",(0,n.jsxs)(s.h3,{id:"request-class",children:[(0,n.jsx)(s.code,{children:"Request"})," Class"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Attributes"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"op"}),": Operation instance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"oriReq"}),": Original Express or Fastify request object"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"headers"}),": Request headers."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"params"}),": URL parameters."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"body"}),": Request body as a string."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Methods"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"getHeader(headerName: string)"}),": Retrieves a specific header value."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"response-class",children:[(0,n.jsx)(s.code,{children:"Response"})," Class"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Attributes"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"op"}),": Operation instance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"oriReq"}),": Original Express or Fastify request object"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"oriRes"}),": Original Express or Fastify response object"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"headers"}),": Response headers."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"statusCode"}),": HTTP status code for the response."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Methods"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"send(payload: string)"}),": Sends a response with the given payload."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"end(payload: string)"}),": Ends the response with the given payload."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var n=r(6540);const t={},o=n.createContext(t);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);