!function(){"use strict";var i=document.querySelector(".todo-items"),t="";[{description:"Wash BMW at 3pm",completed:!1,index:1},{description:"Watch news at 21pm",completed:!1,index:2},{description:"Call mom at 22pm",completed:!1,index:3}].forEach((function(i){t+='<li class="todo-li"><input type="checkbox">\n    <p class="todo-edit" id="'.concat(i.index,'">').concat(i.description,'</p>\n    <i class="fas fa-trash icon trash"></i>\n    <i class="fas fa-ellipsis-v icon drag"></i>\n  </li>')})),i.innerHTML=t}();
//# sourceMappingURL=main.js.map