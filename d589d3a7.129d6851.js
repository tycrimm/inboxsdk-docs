(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return O}));var o=n(2),a=n(0),i=n.n(a),s=n(73),l=n(77),r=n(70),c=n(62),p=n.n(c);const b=37,d=39;var m=function(e){const{block:t,children:n,defaultValue:o,values:s,groupId:c}=e,{tabGroupChoices:m,setTabGroupChoices:u}=Object(l.a)(),[h,j]=Object(a.useState)(o),[g,y]=Object(a.useState)(!1);if(null!=c){const e=m[c];null!=e&&e!==h&&s.some(t=>t.value===e)&&j(e)}const O=e=>{j(e),null!=c&&u(c,e)},f=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},v=()=>{y(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",v)},[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",p.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),w(e)},onFocus:()=>O(e),onClick:()=>{O(e),y(!1)},onPointerDown:()=>y(!1)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))};var u=function(e){return i.a.createElement("div",null,e.children)};const h={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},j={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"What is the InboxSDK?",source:"@site/docs/getting-started.md",permalink:"/inboxsdk-docs/getting-started",editUrl:"https://github.com/InboxSDK/inboxsdk-docs/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"API Reference",permalink:"/inboxsdk-docs/api-reference"}},g=[{value:"What is the InboxSDK?",id:"what-is-the-inboxsdk",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Hello World! Sample Extension",id:"hello-world-sample-extension",children:[]},{value:"Running your Hello World! Extension",id:"running-your-hello-world-extension",children:[]}]},{value:"Structuring Your App",id:"structuring-your-app",children:[{value:"Required Setup",id:"required-setup",children:[]},{value:"Loading using Local App (Basic)",id:"loading-using-local-app-basic",children:[]},{value:"Loading using Remote App",id:"loading-using-remote-app",children:[]},{value:"Loading Dependencies",id:"loading-dependencies",children:[]}]},{value:"Concepts",id:"concepts",children:[{value:"How It Works",id:"how-it-works",children:[]},{value:"Views &amp; Events",id:"views--events",children:[]},{value:"Compatibility",id:"compatibility",children:[]}]}],y={rightToc:g};function O({components:e,...t}){return Object(s.b)("wrapper",Object(o.a)({},y,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"what-is-the-inboxsdk"},"What is the InboxSDK?"),Object(s.b)("p",null,"The InboxSDK is a library for building browser extensions for Gmail and soon Inbox too. It provides APIs for browser extensions to interact with and extend the Gmail and Inbox UI. The SDK is built so that multiple extensions can use it on a page at once without conflicting with each other."),Object(s.b)("p",null,"The library is intended to facilitate the creation of extensions like our ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.streak.com"}),"Streak extension"),". The library is sophisticated enough for the Streak extension itself to be built on, but the library does not provide facilities for other extensions to interact with user data specific to the Streak extension (pipelines, boxes, etc.). To integrate with Streak itself, see the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.streak.com/api"}),"Streak API docs"),"."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"AppId Registration")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Don't forget to register for an AppId to run your app in production, it's quick and free: ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.inboxsdk.com/register"}),"AppId Registration")))),Object(s.b)("h2",{id:"quick-start"},"Quick Start"),Object(s.b)("p",null,"Get your AppId here: ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.inboxsdk.com/register"}),Object(s.b)("inlineCode",{parentName:"a"},"\ud83c\udf0e AppId Registration")),Object(s.b)("br",{parentName:"p"}),"\n","Download the SDK here: ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.inboxsdk.com/build/inboxsdk.js"}),Object(s.b)("inlineCode",{parentName:"a"},"\u2b07\ufe0f  inboxsdk.js"))),Object(s.b)("h3",{id:"hello-world-sample-extension"},"Hello World! Sample Extension"),Object(s.b)("p",null,"Here's how simple it is to build a basic app, you need two files: ",Object(s.b)("inlineCode",{parentName:"p"},"myapp.js")," which is your application code that interacts with the SDK, and the ",Object(s.b)("inlineCode",{parentName:"p"},"manifest.json")," which describes a basic Chrome extension."),Object(s.b)(m,{defaultValue:"myapp.js",values:[{label:"myapp.js",value:"myapp.js"},{label:"manifest.json",value:"manifest.json"}],mdxType:"Tabs"},Object(s.b)(u,{value:"myapp.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){\n  // the SDK has been loaded, now do something with it!\n  sdk.Compose.registerComposeViewHandler(function(composeView){\n    // a compose view has come into existence, do something with it!\n    composeView.addButton({\n      title: \"My Nifty Button!\",\n      iconUrl: 'https://example.com/foo.png',\n      onClick: function(event) {\n        event.composeView.insertTextIntoBodyAtCursor('Hello World!');\n      },\n    });\n  });\n});\n"))),Object(s.b)(u,{value:"manifest.json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "manifest_version": 2,\n  "name": "Hello World Extension",\n  "version": "1.0",\n  "permissions": [\n    "https://mail.google.com/",\n    "https://inbox.google.com/"\n  ],\n  "content_scripts" : [\n    {\n      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],\n      "js": ["inboxsdk.js", "myapp.js"]\n    }\n  ]\n}\n')))),Object(s.b)("h3",{id:"running-your-hello-world-extension"},"Running your Hello World! Extension"),Object(s.b)("p",null,"To test your new app, open Chrome to ",Object(s.b)("inlineCode",{parentName:"p"},"chrome://extensions"),' and check the "Developer Mode" checkbox. Then click on "Load Unpacked Extension" and point it to your extension directory. Next, open Gmail and stand in awe. For more details on testing Chrome extensions, see ',Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.chrome.com/extensions/getstarted#unpacked"}),"Chrome Getting Started Docs"),"."),Object(s.b)("h2",{id:"structuring-your-app"},"Structuring Your App"),Object(s.b)("h3",{id:"required-setup"},"Required Setup"),Object(s.b)("p",null,"Browser extensions built using the InboxSDK are structured like normal browser extensions. You must additionally:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"inboxsdk.js")," should be placed inside your extension directory"),Object(s.b)("li",{parentName:"ol"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"manifest.json")," (Chrome) or ",Object(s.b)("inlineCode",{parentName:"li"},"info.plist"),' (Safari) needs to list the above file as a content script which runs on "',Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://mail.google.com%22"}),'https://mail.google.com"'),' and "',Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://inbox.google.com%22"}),'https://inbox.google.com"')),Object(s.b)("li",{parentName:"ol"},"You must ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.inboxsdk.com/register"}),"register for an AppId")," to use your app in production. This is a 100% free step and takes about 5 seconds to complete. Your AppId will be tied to your Google account."),Object(s.b)("li",{parentName:"ol"},'One of the "Loading Your App" methods must be done as described below')),Object(s.b)("p",null,"For more basics of Chrome extensions, see: ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.chrome.com/extensions"}),"Chrome Extension Reference"),Object(s.b)("br",{parentName:"p"}),"\n","For more basics of Safari extensions, see: ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/Introduction/Introduction.html"}),"Safari Extension Reference")),Object(s.b)("h3",{id:"loading-using-local-app-basic"},"Loading using Local App (Basic)"),Object(s.b)("p",null,"The simplest and easiest way to use the SDK is to have a myapp.js file placed inside your extension. This file will then load the SDK using ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:""}),Object(s.b)("inlineCode",{parentName:"a"},"InboxSDK.load()"))," FFIIIIIXXXXMEEEE"),Object(s.b)(m,{defaultValue:"myapp.js",values:[{label:"myapp.js",value:"myapp.js"},{label:"manifest.json",value:"manifest.json"}],mdxType:"Tabs"},Object(s.b)(u,{value:"myapp.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){\n  // your app code using 'sdk' goes in here\n});\n"))),Object(s.b)(u,{value:"manifest.json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "manifest_version": 2,\n  "name": "Hello World Extension",\n  "version": "1.0",\n  "permissions": [\n    "https://mail.google.com/",\n    "https://inbox.google.com/"\n  ],\n  "content_scripts" : [\n    {\n      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],\n      "js": ["inboxsdk.js", "myapp.js"]\n    }\n  ]\n}\n')))),Object(s.b)("h3",{id:"loading-using-remote-app"},"Loading using Remote App"),Object(s.b)("p",null,"The previous method, while simple, implies that you must release a new extension (typically to the Chrome Web Store) if you want to make changes to the app. For high usage or frequently updated apps, you may not want to wait for the chrome extension system to update all your users extensions to the latest version."),Object(s.b)("p",null,"To handle this scenario, you can host your actual application code on your own server (or somewhere convenient) and remotely load it when needed. This allows you to make updates to it and your users will simply need to refresh Gmail to get the changes."),Object(s.b)("p",null,"The InboxSDK has convenient functions for remotely loading your application code, you'll need the following files."),Object(s.b)(m,{defaultValue:"loader.js",values:[{label:"loader.js (in extension)",value:"loader.js"},{label:"myapp.js (on your server)",value:"myapp.js"},{label:"manifest.json",value:"manifest.json"}],mdxType:"Tabs"},Object(s.b)(u,{value:"loader.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// This file will get downloaded and run by your extension making it easy to update\n// Don't forget to add this domain to your manifest.json!\n\nInboxSDK.loadScript('https://www.myserver.com/myapp.js')\n"))),Object(s.b)(u,{value:"myapp.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// notice how this file is exactly the same as what content.js would have been in Method 1 above?\n\nInboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){\n  // your app code using 'sdk' goes in here\n});\n"))),Object(s.b)(u,{value:"manifest.json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "manifest_version": 2,\n  "name": "Hello World Extension",\n  "version": "1.0",\n  "permissions": [\n    "https://mail.google.com/",\n    "https://inbox.google.com/",\n    "https://www.myserver.com/"\n  ],\n  "content_scripts" : [\n    {\n      "matches": ["https://mail.google.com/*", "https://inbox.google.com/*"],\n      "js": ["inboxsdk.js", "loader.js"]\n    }\n  ]\n}\n')))),Object(s.b)("h3",{id:"loading-dependencies"},"Loading Dependencies"),Object(s.b)("p",null,"You may want to load other JS libraries like mapping or charting libraries for your application to use. You can compile these libraries directly into your ",Object(s.b)("inlineCode",{parentName:"p"},"myapp.js")," (for libraries like jquery, this may make sense), but sometimes you may want to remotely load these instead."),Object(s.b)("p",null,"We recommend that you load these dependencies in your ",Object(s.b)("inlineCode",{parentName:"p"},"myapp.js")," file so that they can be updated in the same way your application can."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"InboxSDK.loadScript()")," function provides a convenient way to remote load these scripts. This function returns a promise which can be used to chain dependencies or load them in parallel. Conveniently, ",Object(s.b)("inlineCode",{parentName:"p"},"InboxSDK.load()")," also returns a promise so you can fine tune your ordering of dependencies and the SDK. The following example shows how you would parallel load a dependency."),Object(s.b)(m,{defaultValue:"myapp.js",values:[{label:"loader.js",value:"loader.js"},{label:"myapp.js",value:"myapp.js"},{label:"manifest.json",value:"manifest.json"}],mdxType:"Tabs"},Object(s.b)(u,{value:"loader.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// This file will get downloaded and run by your extension making it easy to update\n// Don't forget to add this domain to your manifest.json!\n\nInboxSDK.loadScript('https://www.myserver.com/myapp.js')\n"))),Object(s.b)(u,{value:"myapp.js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Promise.all([\n  InboxSDK.load(2, 'YOUR_APP_ID_HERE'),\n  InboxSDK.loadScript('https://www.somedependency.com/somedependency.js')\n])\n.then(function(results){\n  var sdk = results[0];\n  // the rest of your app code here\n});\n"))),Object(s.b)(u,{value:"manifest.json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "manifest_version": 2,\n  "name": "Hello World Extension",\n  "version": "1.0",\n  "permissions": [\n    "https://mail.google.com/",\n    "https://www.myserver.com"\n  ],\n  "content_scripts" : [\n    {\n      "matches": ["https://mail.google.com/*"],\n      "js": ["inboxsdk.js", "loader.js"]\n    }\n  ]\n}\n')))),Object(s.b)("h2",{id:"concepts"},"Concepts"),Object(s.b)("h3",{id:"how-it-works"},"How It Works"),Object(s.b)("p",null,"To use the InboxSDK, you must include the ",Object(s.b)("inlineCode",{parentName:"p"},"inboxsdk.js")," file in your extension. This file is just a small shim and is only responsible for remotely loading the full implementation of the SDK. This is done so that the actual implementation of the SDK can be updated to keep compatibility with Gmail without requiring you to update your extension for every change. The implementation is often updated to maintain compatibility with Gmail, fix bugs, and add new SDK features. All that is required for your end users to reap this benefit is for them to refresh Gmail in their browser."),Object(s.b)("p",null,"Since the SDK is remotely loaded, you can't start interacting with it until its been loaded."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"inboxsdk.js")," shim defines a few functions which you can directly use immediately without waiting for the remote implementation to load. These are documented in the ",Object(s.b)("inlineCode",{parentName:"p"},"InboxSDK.*")," namespace."),Object(s.b)("h3",{id:"views--events"},"Views & Events"),Object(s.b)("p",null,"Several methods in the InboxSDK return ",Object(s.b)("inlineCode",{parentName:"p"},"View")," types. These ",Object(s.b)("inlineCode",{parentName:"p"},"View")," classes have a variety of functionality depending on the UI element they represent. However, one critical commonality is that they are all ",Object(s.b)("inlineCode",{parentName:"p"},"EventEmitter"),"s. This means that you can subscribe to a variety of events that each ",Object(s.b)("inlineCode",{parentName:"p"},"View")," emits."),Object(s.b)("p",null,"The events they emit are all documented in their respective documentation sections (i.e. see ",Object(s.b)("inlineCode",{parentName:"p"},"ComposeView")," has a section for events). One commonality is that they all emit a ",Object(s.b)("inlineCode",{parentName:"p"},"destroy")," event and have their ",Object(s.b)("inlineCode",{parentName:"p"},"destroyed")," property set to true when they are no longer available in the page. It's often useful to subscribe to this event and then cleanup any resources/memory/references you may no longer need. Performance inside Gmail/Inbox is important to maintain, so it's critical you release any relevant resources when this event is emitted."),Object(s.b)("p",null,"To subscribe to events, refer to the documentation for ",Object(s.b)("inlineCode",{parentName:"p"},"EventEmitter"),"s. Here's a simple example showing how to subscribe to events:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){\n  sdk.Compose.registerComposeViewHandler(function(composeView){\n    composeView.on('recipientsChanged', function(event) {\n      console.log('Recipients have changed to: ' + event);\n    });\n\n    composeView.on('destroy', function(event) {\n      console.log('compose view going away, time to clean up');\n    });\n  });\n});\n")),Object(s.b)("h3",{id:"compatibility"},"Compatibility"),Object(s.b)("p",null,"The SDK is currently at version 2 and when loading the SDK that is the number you should specify. The SDK may add backwards compatible API's to the current version, but incompatible changes will come with a version update. Your code is guranteed to work so long as you specify the correct version number AND that version number is at most two releases old."))}O.isMDXComponent=!0}}]);