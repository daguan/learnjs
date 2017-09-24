/*
* @param 简单的实现ROT13 密码置换 
* @param 未考虑大小写问题 空格为32 暂时未用到
* @param Author@daguan.fudimen.com 
 */

function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var array = str.split("");
  array = array.map(

      function callback(val)
      {
         
          var str = val.charCodeAt();
         
           if(str >= 65 && str <= 90)//A-Z大写
          {
             if(str > 77)
            {
              str -=13;
            }
            else
            {
              str +=13;
            }
            
          }
          return String.fromCharCode(str);
      }
    );
  str = array.join("");
  return str;
}

rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码