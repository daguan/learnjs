/*
* @param 整数的阶乘实现的两种方式 
* @param Author@daguan.fudimen.com 
 */

//方法1 循环遍历
function factorialize1(num) {
  // 请把你的代码写在这里
  if(num === 0)
    {
      return 1;
    }
  var index = num -1;
  var mal = num;
  while(index > 0)
    {
      mal = index * mal;
       index --;
    }

   
   return mal;
}


//方法2 递归
function factorialize(num)
{
  if(num === 0) 
   {
     return 1;
   }
   var cal = num;
   cal = exfactorialize(num, cal);
   return cal;
}

//递归 实现
function exfactorialize(num, cal)
{
   cal = cal * (num - 1); 
    if(num > 2)
    {
       return exfactorialize(num-1, cal);
    }
    return cal;
}

factorialize(5);