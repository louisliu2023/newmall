import{K as f,L as C,M as l,N as _,r as k,O as E,P,d as t,e as p,Q as y,R as o,j as r,S as v,T as S,U as w,f as $,l as d,w as x,V as N,W as j,t as K,X as T,Y as A,Z as D}from"./index-888794d1.js";const g=Symbol("breadcrumbKey"),M=f({separator:{type:String,default:"/"},separatorIcon:{type:C}}),O=l({name:"ElBreadcrumb"}),V=l({...O,props:M,setup(u){const a=u,n=_("breadcrumb"),s=k();return E(g,a),P(()=>{const e=s.value.querySelectorAll(`.${n.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,c)=>(t(),p("div",{ref_key:"breadcrumb",ref:s,class:o(r(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[y(e.$slots,"default")],2))}});var q=v(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const z=f({to:{type:S([String,Object]),default:""},replace:{type:Boolean,default:!1}}),L=l({name:"ElBreadcrumbItem"}),Q=l({...L,props:z,setup(u){const a=u,n=T(),s=w(g,void 0),e=_("breadcrumb"),c=n.appContext.config.globalProperties.$router,I=k(),h=()=>{!a.to||!c||(a.replace?c.replace(a.to):c.push(a.to))};return(m,R)=>{var i,b;return t(),p("span",{class:o(r(e).e("item"))},[$("span",{ref_key:"link",ref:I,class:o([r(e).e("inner"),r(e).is("link",!!m.to)]),role:"link",onClick:h},[y(m.$slots,"default")],2),(i=r(s))!=null&&i.separatorIcon?(t(),d(r(j),{key:0,class:o(r(e).e("separator"))},{default:x(()=>[(t(),d(N(r(s).separatorIcon)))]),_:1},8,["class"])):(t(),p("span",{key:1,class:o(r(e).e("separator")),role:"presentation"},K((b=r(s))==null?void 0:b.separator),3))],2)}}});var B=v(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const W=A(q,{BreadcrumbItem:B}),X=D(B);export{W as E,X as a};
