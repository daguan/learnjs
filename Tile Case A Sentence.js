/*
* @param 英文标题句格式化
* @param Author@daguan.fudimen.com 
 */

function titleCase(str) {
  // 请把你的代码写在这里
  
  var array = str.toLowerCase().split(' '); //所有的小写以后再数组化
  str = "";
  array = array.map( //遍历
    function (val)
     {
      if(str === "")
      {
          str = val.substring(0, 1).toUpperCase()+ val.substring(1); //头字母大写
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