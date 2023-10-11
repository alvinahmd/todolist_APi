(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(t,e,n){"use strict";var o=n(2),r=n(82).findIndex,d=n(135),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),d(c)},298:function(t,e,n){"use strict";n.r(e);var o=n(12),r=(n(295),n(205),n(64),{name:"IndexPage",data:function(){return{todolist:[],inputTodo:null,selectedTodo:null}},mounted:function(){this.getTodoList()},methods:{getTodoList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://jsonplaceholder.typicode.com/todos");case 2:t.todolist=e.sent;case 3:case"end":return e.stop()}}),e)})))()},addTodoList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("https://jsonplaceholder.typicode.com/todos",{userId:99,title:t.inputTodo}).then((function(){return t.todolist.unshift({userId:99,id:t.todolist.length+1,title:t.inputTodo,completed:!1})}));case 2:case"end":return e.stop()}}),e)})))()},editTodo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("https://jsonplaceholder.typicode.com/todos/".concat(t.selectedTodo.id),{title:t.selectedTodo.title}).then((function(){var e=t.todolist.findIndex((function(e){return e.id===t.selectedTodo.id}));t.todolist[e].title=t.selectedTodo.title}));case 2:case"end":return e.stop()}}),e)})))()},deleteTodoList:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){var n=e.todolist.findIndex((function(e){return e.id===t}));e.todolist.splice(n,1)}));case 2:case"end":return n.stop()}}),n)})))()}}}),d=n(62),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-slate-800"},[e("div",{staticClass:"max-w-sm mx-auto my-0 bg-slate-900 min-h-screen"},[t._m(0),t._v(" "),e("div",{staticClass:"py-4"},[e("div",{staticClass:"my-4"},[e("div",{staticClass:"flex px-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTodo,expression:"inputTodo"}],staticClass:"focus:border-b-purple-600 duration text-white text-base bg-transparent border-b appearance-none focus:outline-none w-full",attrs:{type:"text",placeholder:"Add A New Task"},domProps:{value:t.inputTodo},on:{input:function(e){e.target.composing||(t.inputTodo=e.target.value)}}}),t._v(" "),e("div",{staticClass:"pl-2"},[e("button",{staticClass:"rounded-lg bg-green-600 w-14 py-2 text-white",on:{click:t.addTodoList}},[t._v("\n              ADD\n            ")])])]),t._v(" "),t.selectedTodo?e("div",{staticClass:"flex px-4 pt-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedTodo.title,expression:"selectedTodo.title"}],staticClass:"focus:border-b-purple-600 duration text-white text-base bg-transparent border-b appearance-none focus:outline-none w-full",attrs:{type:"text",placeholder:"Add A New Task"},domProps:{value:t.selectedTodo.title},on:{input:function(e){e.target.composing||t.$set(t.selectedTodo,"title",e.target.value)}}}),t._v(" "),e("div",{staticClass:"pl-2"},[e("button",{staticClass:"rounded-lg bg-green-600 w-14 py-2 text-white",on:{click:t.editTodo}},[t._v("\n              Edit\n            ")])])]):t._e()]),t._v(" "),t._l(t.todolist,(function(n,o){return e("div",{key:o,staticClass:"py-2 px-4 relative"},[e("div",{staticClass:"bg-slate-800 py-4 px-4 w-full rounded-md"},[e("div",{staticClass:"space-x-2 w-full flex justify-between text-white my-2"},[e("div",{staticClass:"w-full break-all text-sm"},[t._v("\n              "+t._s(n.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"flex flex-shrink-0 gap-2"},[e("div",[e("button",{staticClass:"text-center items-center bg-blue-600 w-[40px] text-sm rounded",on:{click:function(e){t.selectedTodo=n}}},[t._v("\n                  Edit\n                ")])]),t._v(" "),e("div",[e("button",{staticClass:"text-center items-center bg-red-600 w-[40px] text-sm rounded",on:{click:function(e){return t.deleteTodoList(n.id)}}},[t._v("\n                  Delete\n                ")])])])])])])}))],2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 text-center"},[e("h1",{staticClass:"text-white font-bold text-gray-700 text-2xl"},[t._v("\n        API Nuxt Js To do list\n      ")]),t._v(" "),e("p",{staticClass:"text-xs text-white font-medium mt-2"},[t._v("\n        Create a list of tasks :\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);