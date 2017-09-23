/*
* @param 英文标题句格式化
* @param Author@daguan.fudimen.com 
 */

function titleCase(str) {
  // 请把你的代码写在这里
  
  var array = str.toLowerCase().split(' ');
  str = "";
  array = array.map(
    function (val)
     {
      if(str === "")
      {
          str = val.substring(0, 1).toUpperCase()+ val.substring(1);
      }
      else
      {
         str += " " + val.substring(0, 1).toUpperCase()+ val.substring(1);
      }
     
      return val;
     }
  );
  return str;
}

titleCase("sHoRt AnD sToUt");