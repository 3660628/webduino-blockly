'use strict';

goog.provide('Blockly.JavaScript.webduino.tutorials');
goog.require('Blockly.JavaScript');

/*
ooooo        oooooooooooo oooooooooo.   
`888'        `888'     `8 `888'   `Y8b  
 888          888          888      888 
 888          888oooo8     888      888 
 888          888    "     888      888 
 888       o  888       o  888     d88' 
o888ooooood8 o888ooooood8 o888bood8P'   
*/

Blockly.JavaScript['light'] = function(block) {
  var dropdown_status = block.getFieldValue('status');
  var code = 'document.getElementById("light").setAttribute("class","'+dropdown_status+'");\n';
  return code;
};

Blockly.JavaScript['light_click'] = function(block) {
  var statements_click = Blockly.JavaScript.statementToCode(block, 'click');
  var code =  'document.getElementById("light").addEventListener("click",function(){\n'+
  						statements_click+'\n});\n';
  return code;
};

Blockly.JavaScript['light_check'] = function(block) {
  var dropdown_status = block.getFieldValue('status');
  var code = 'document.getElementById("light").getAttribute("class")=="'+dropdown_status+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['two_led_light'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_status = block.getFieldValue('status');
  var code = 'document.getElementById("'+dropdown_name+'").setAttribute("class","'+dropdown_status+'");\n';
  return code;
};

Blockly.JavaScript['two_led_light_click'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = 'document.getElementById("'+dropdown_name+'").addEventListener("click",function(){\n'+
              statements_name+'\n});\n';
  return code;
};

Blockly.JavaScript['two_led_light_check'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_check = block.getFieldValue('check');
  var code = 'document.getElementById("'+dropdown_name +'").getAttribute("class")=="'+dropdown_check+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['two_led_start_blinking'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_status1 = Blockly.JavaScript.statementToCode(block, 'status1');
  var statements_status2 = Blockly.JavaScript.statementToCode(block, 'status2');
  var blinkVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'blinkVar', Blockly.Variables.NAME_TYPE);
  var blinkTimer = Blockly.JavaScript.variableDB_.getDistinctName(
      'blinkTimer', Blockly.Variables.NAME_TYPE);
  var blinkFunction = Blockly.JavaScript.variableDB_.getDistinctName(
      'blinkFunction', Blockly.Variables.NAME_TYPE);
  var code =  'var '+blinkVar+'=1;\n'+
              'var '+blinkTimer+';\n'+
              'var '+blinkFunction+'=function(){\n'+
              '  '+blinkVar+'='+blinkVar+'+1;\n'+
              '  if('+blinkVar+'%2==0){\n'+statements_status1+
              '  \n}else{\n'+statements_status2+
              '  }\n'+
              '  '+blinkTimer+' = setTimeout('+blinkFunction+','+value_time+');\n'+
              '}\n'+
              blinkFunction+'();\n';
  return code;
};
Blockly.JavaScript['two_led_start_blinking'] = function(block) {
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_status1 = Blockly.JavaScript.statementToCode(block, 'status1');
  var statements_status2 = Blockly.JavaScript.statementToCode(block, 'status2');
  var blinkVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'blinkVar', Blockly.Variables.NAME_TYPE);
  var blinkFunction = Blockly.JavaScript.variableDB_.getDistinctName(
      'blinkFunction', Blockly.Variables.NAME_TYPE);
  var code =  'var '+blinkVar+'=1;\n'+
              'var '+blinkFunction+'=function(){\n'+
              '  '+blinkVar+'='+blinkVar+'+1;\n'+
              '  if('+blinkVar+'%2==0){\n'+statements_status1+
              '  \n}else{\n'+statements_status2+
              '  }\n'+
              '  '+value_timer+' = setTimeout('+blinkFunction+','+value_time+');\n'+
              '}\n'+
              blinkFunction+'();\n';
  return code;
};


Blockly.JavaScript['stop_clock'] = function(block) {
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'clearTimeout('+value_timer+');\n';
  return code;
};

/*
ooooooooo.     .oooooo.    oooooooooo.  
`888   `Y88.  d8P'  `Y8b   `888'   `Y8b 
 888   .d88' 888            888     888 
 888ooo88P'  888            888oooo888' 
 888`88b.    888     ooooo  888    `88b 
 888  `88b.  `88.    .88'   888    .88P 
o888o  o888o  `Y8bood8P'   o888bood8P'  
*/

Blockly.JavaScript['rgb_led_area_color'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("show").style.background = '+value_color+';\n';
  return code;
};

Blockly.JavaScript['rgb_led_btn_click'] = function(block) {
  var dropdown_btn = block.getFieldValue('btn');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'document.getElementById("'+dropdown_btn+'").addEventListener("click",function(){\n'+
             statements_do+'\n});\n';
  return code;
};
Blockly.JavaScript['rgb_led_range'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var varChangeColor = Blockly.JavaScript.variableDB_.getDistinctName(
      'changeColor', Blockly.Variables.NAME_TYPE);
  var code = 'var '+varChangeColor+' = function(){\n'+
              '  var color,r="00",g="00",b="00";\n'+
              '  var cc = function(e){\n'+
              '    var id=e.target.id;\n'+
              '    if(id=="redRange"){r=e.target.value*1; if(r<17){r="0"+r.toString(16);}else{r=r.toString(16);}}\n'+
              '    if(id=="greenRange"){g=e.target.value*1; if(g<17){g="0"+g.toString(16);}else{g=g.toString(16);}}\n'+
              '    if(id=="blueRange"){b=e.target.value*1; if(b<17){b="0"+b.toString(16);}else{b=b.toString(16);}}\n'+
              '    color="#"+r+g+b;\n'+
              '  '+statements_do+
              '  };\n'+
              '  document.getElementById("redRange").addEventListener("change",cc);\n'+
              '  document.getElementById("greenRange").addEventListener("change",cc);\n'+
              '  document.getElementById("blueRange").addEventListener("change",cc);\n'+
              '};\n'+
              varChangeColor+'();\n';
  return code;
};

Blockly.JavaScript['rgb_led_current_color'] = function(block) {
  var code = 'color';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['rgb_led_start_dancing'] = function(block) {
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_status = Blockly.JavaScript.statementToCode(block, 'status');
  var varDancing = Blockly.JavaScript.variableDB_.getDistinctName(
      'dancing', Blockly.Variables.NAME_TYPE);
  var content;
  if(!statements_status){
    content = '';
  }else{
    content = 'repeat();\n'+
              'function repeat(){\n'+
              '    delay(1)'+statements_status+'.then(function(){\n'+
              '      repeat();\n    });\n  }\n';
  }
  var code = 'var '+varDancing+' = function(){\n'+
              '  var time = '+value_time+';\n'+
              '  function delay(time){\n'+
              '    return new Promise(function(resolve) {\n'+
              '      '+value_timer+' = setTimeout(resolve, time);\n'+
              '    });\n'+
              '  }\n'+
              '  \n'+
              '  '+content+
              '};\n'+
              varDancing+'();\n';
  return code;
};

Blockly.JavaScript['rgb_led_dancing_status'] = function(block) {
  var statements_status = Blockly.JavaScript.statementToCode(block, 'status');
  var code = '.then(function(){\n  '+statements_status+'    return delay(time);\n  })';
  return code;
};

/*
ooooo     ooo ooooo        ooooooooooooo ooooooooo.         .o.       
`888'     `8' `888'        8'   888   `8 `888   `Y88.      .888.      
 888       8   888              888       888   .d88'     .8"888.     
 888       8   888              888       888ooo88P'     .8' `888.    
 888       8   888              888       888`88b.      .88ooo8888.   
 `88.    .8'   888       o      888       888  `88b.   .8'     `888.  
   `YbodP'    o888ooooood8     o888o     o888o  o888o o88o     o8888o 
*/

Blockly.JavaScript['ultrasonic_set_number'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("show").innerHTML = '+value_number+';\n';
  return code;
};



