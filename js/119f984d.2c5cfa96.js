"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[711],{8019:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(4848),n=a(8453);const i={title:"@dataclass",sidebar_position:1},r="@dataclass",o={id:"data-ops/dataclass",title:"@dataclass",description:"The Dataclass module is designed to facilitate data synchronization between local objects and remote datastores. It provides mechanisms for pushing local changes upstream and pulling remote changes downstream, ensuring data consistency across different environments.",source:"@site/docs/03_data-ops/dataclass.mdx",sourceDirName:"03_data-ops",slug:"/data-ops/dataclass",permalink:"/docs/data-ops/dataclass",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"@dataclass",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Models & ORM",permalink:"/docs/category/data-models--orm"},next:{title:"Syncing Data",permalink:"/docs/data-ops/data-sync"}},d={},c=[{value:"Defining a Dataclass with Upstream",id:"defining-a-dataclass-with-upstream",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"dataclass",children:"@dataclass"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Dataclass"})," module is designed to facilitate data synchronization between local objects and remote datastores. It provides mechanisms for pushing local changes upstream and pulling remote changes downstream, ensuring data consistency across different environments."]}),"\n",(0,t.jsx)(s.h2,{id:"defining-a-dataclass-with-upstream",children:"Defining a Dataclass with Upstream"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { dataclass, push, pull, semver } from 'ts-basis'\n\n@dataclass({ classVersion: semver('1.0.0') })\nclass User {\n    static index: typeof UserUpstream.index\n\n    id: string = '';\n    name: string = '';\n\n    constructor(init?: Partial<User>) {\n        Object.assign(this, init);\n    }\n}\n\n// Define an index\nconst UserUpstream = {\n    index: Upstream.index(User, (addIndex) => ({\n        byId: addIndex({ unique: true }, { id: true }),\n    }))\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>o});var t=a(6540);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);