/*
* @param ①二叉树排序查找最大值
* @param ②使用Math自带属性实现
* @param Author@daguan.fudimen.com 
 */

var Binary = function()
{
  var Node = function ( key)
  {
    this.left = null;
    this.right = null;
    this.key = key;
  };
  
  var root = null;
  var insertNode = function(node, newNode)
  {
     if(node.key > newNode.key)
       {
          if(node.left === null)
            {
              node.left = newNode;
            }
         else
           {
              insertNode(node.left, newNode);
            }
       }
    else 
      {
        if(node.right === null)
            {
              node.right = newNode;
            }
         else
           {
              insertNode(node.right, newNode);
            }
      }
  };
  
  this.insert = function (key)
  {
     var newNode = new Node(key);
     if(root === null)
        {
            root = newNode;
        }
     else
      {
        insertNode(root, newNode);
      }
  };
  
  var findMax = function (node)
  {
      if(node === null)
        {
          return 0;
        }
      
    if(node.right !== null)
      {
        return findMax(node.right);
      }
    return node.key;
  };
  
  this.max = function ()
  {
     return findMax(root);
  };
};


function largestOfFour(arr) {
  // 请把你的代码写在这里
  var newArray = [];
  
  
  for(var i = 0; i<arr.length; i++)
    {
        var binary = new Binary();
        arr[i].map(
          function (val)
          {
            console.log(val);
            binary.insert(val);
          }
        );
        newArray.push(binary.max());
    }
  return newArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//使用Math自带属性
function largestOfFour2(arr) {
  // 请把你的代码写在这里
  // 
  var newArray = [];
  for(var i=0; i<arr.length; i++)
  {
    var max = Math.max(...arr[i]);
    newArray.push(max);
  }
  return newArray;
}

largestOfFour2([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);