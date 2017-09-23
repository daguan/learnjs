/*
* @param 检查回文
* @param Author@daguan.fudimen.com 
 */

function palindrome(str) {
  // 请把你的代码写在这里
  
  var replaceStr = /,|\.|\s|\-|_/g; //按要求对应的符号正则转化为空格
  str = str.replace(replaceStr,'');
  replaceStr = /\)/g;//按要求对应的符号正则转化为对应的匹配
  str = str.replace(replaceStr,'(');
  
  str = str.toLowerCase(); //都切换为小写

  var array = str.split("");
  var len = array.length;
  if(len % 2 === 1) //如果是单数把最中间的去除
    {
     array.splice(Math.floor(len / 2), 1);
     len = array.length;
    }

  var count = 0;
  var i =len/2 - 1, j = len /2;  //从中间向上向下遍历
  for(var a = 0; a < len/2; a ++)
  {
    if(array[i] === array[j])
    {
        {
          count++;
        }
      }
      i --;
      j ++;
  }
  
  return count === len/2;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));