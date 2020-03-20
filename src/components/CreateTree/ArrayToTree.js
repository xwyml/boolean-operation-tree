// 标准过程
function convertArrayToTree(array){
  let rule_string = convertArrayToString(array);
  let binaryTree = convertStringToBinaryTree(rule_string);
  let tree = convertBinaryTreeToMultiTree(binaryTree);
  return tree;
}

// 输出详细结果
function convertArrayToTreeDetail(array){
  let rule_string = convertArrayToString(array);
  let binaryTree = convertStringToBinaryTree(rule_string);
  let tree = convertBinaryTreeToMultiTree(binaryTree);
  return {
    rule_string,
    binaryTree,
    tree,
  };
}

// 从array中提取出字符串
function convertArrayToString(array){
  let string = "";
  array.forEach(i => {
    string += i.uuid === undefined? i.value: i.uuid;
  });
  return string;
}

// 将字符串生成二叉树
function convertStringToBinaryTree(string){
  // 如果是叶子则返回值
  if(is_leaf(string)){
    return {
      uuid: string,
    };
  }
  // 移除左右多余的括号
  string = remove_outer_brackets(string);
  let pointer = string.length-1;
  let node = {
    uuid: "",
    left_child: {},
    right_child: {},
  }
  // 尝试通过 "and" 分割
  while(pointer >= 0){
    let i = string.lastIndexOf("and", pointer);
    if(i === -1){
      break;
    }
    else{
      const left_part = string.slice(0, i);
      const right_part = string.slice(i+3);
      if(is_leagl_brackets(left_part) && is_leagl_brackets(right_part)){
        node.uuid = "and";
        node.left_child = convertStringToBinaryTree(left_part);
        node.right_child = convertStringToBinaryTree(right_part);
        return node;
      }
      else{
        pointer = i - 3;
      }
    }
  }
  // 尝试通过 "or" 分割
  pointer = 0;
  while(pointer >= 0){
    let i = string.lastIndexOf("or", pointer);
    if(i === -1){
      break;
    }
    else{
      const left_part = string.slice(0, i);
      const right_part = string.slice(i+2);
      if(is_leagl_brackets(left_part) && is_leagl_brackets(right_part)){
        node.uuid = "or";
        node.left_child = convertStringToBinaryTree(left_part);
        node.right_child = convertStringToBinaryTree(right_part);
        return node;
      }
      else{
        pointer = i - 2;
      }
    }
  }
}

// 将二叉树降高变成多叉树
function convertBinaryTreeToMultiTree(node){
  // 运用布尔运算结合律
  if(node === undefined || node.left_child === undefined){
    return node
  }
  else{
    node.left_child = convertBinaryTreeToMultiTree(node.left_child);
    node.right_child = convertBinaryTreeToMultiTree(node.right_child);
    if((node.uuid === (node.left_child && node.left_child.uuid)) && (node.uuid === (node.right_child && node.right_child.uuid))){
      node.children=[],
      node.children.push(...node.left_child.children);
      node.children.push(...node.right_child.children);
      node.left_child = node.right_child = undefined;
      return node
    }
    else if(node.uuid === (node.left_child && node.left_child.uuid)){
      node.left_child.children.push(node.right_child);
      return node.left_child
    }
    else if(node.uuid === (node.right_child && node.right_child.uuid)){
      node.right_child.children.push(node.left_child);
      return node.right_child
    }
    return {
      uuid: node.uuid,
      children: [
        node.left_child,
        node.right_child,
      ],
    }
  }
}

function is_leaf(string){
  return string.indexOf("and") === -1 && string.indexOf("or") === -1;
}

function remove_outer_brackets(string){
  const inner = string.slice(1, string.length-1);
  if(string[0] === '[' && string[string.length-1] === ']' && is_leagl_brackets(inner)){
    return remove_outer_brackets(inner);
  }
  return string;
}

function is_leagl_brackets(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    let item = string[i];
    if (item === '[') {
      array.push('[');
    } 
    else if (item === ']') {
      if (array.length === 0) {
        return false;
      } else {
        array.pop();
      }
    }
  };
  return array.length === 0;
}

export {convertArrayToTree, convertArrayToTreeDetail};