<template>
    <div>
        <span> 
          Arrary: {{currentArray}}
        </span>
        <button class="next-array" @click="switchArray">
          next
        </button>
        <div class="show"> 
          {{rule}}
        </div>
        <div class="arrow">
          ==>
        </div>
        <div class = "show">
          {{codeString}}
        </div>
        <div class="arrow">
          ==>
        </div>
        <div class = "show">
          {{tree}}
        </div>
    </div>
</template>

<script>
import {arrayList} from "./RuleCode"
export default {
  name: 'CreateTree',
  data () {
    return {
      rule: '',
      codeString: '',
      tree: {},
      currentArray: '',
      arrays: [],
    }
  },

  mounted(){
    this.currentArray = 0;
    this.arrays = Object.keys(arrayList);
    this.rule = arrayList[this.arrays[this.currentArray]];
    this.codeString = this.convertArrayToString(this.rule);
    this.binaryTree = this.convertStringToBinaryTree(this.codeString);
    this.tree = this.convertBinaryTreeToMultiTree(this.binaryTree);
  },

  methods: {

    // 从array中提取出字符串
    convertArrayToString(a){  
      let s = "";
      a.forEach(i => {
        s = i.uuid === undefined? s+i.value : s+i.uuid;
      });
      return s;
    },

    // 将字符串生成树
    convertStringToBinaryTree(s){
      // 如果是叶子则返回值
      if(this.is_leaf(s)){
        return {
          uuid: s,
        };
      }
      // 移除左右多余的括号
      s = this.remove_outer_brackets(s);
      let pointer = 0;
      let node = {
        uuid: "",
        left_child: {},
        right_child: {},
      }
      // 尝试通过 "and" 分割
      while(pointer < s.length){
        let i = s.indexOf("and", pointer);
        if(i === -1){
          break;
        }
        else{
          const left_part = s.slice(0, i);
          const right_part = s.slice(i+3);
          if(this.is_leagl_brackets(left_part)&&this.is_leagl_brackets(right_part)){
            node.uuid = "and";
            node.left_child = this.convertStringToBinaryTree(left_part);
            node.right_child = this.convertStringToBinaryTree(right_part);
            return node;
          }
          else{
            pointer = i + 3;
          }
        }
      }

      // 尝试通过 "or" 分割
      pointer = 0;
      while(pointer < s.length){
        let i = s.indexOf("or", pointer);
        if(i === -1){
          break;
        }
        else{
          const left_part = s.slice(0, i);
          const right_part = s.slice(i+2);
          if(this.is_leagl_brackets(left_part)&&this.is_leagl_brackets(right_part)){
            node.uuid = "or";
            node.left_child = this.convertStringToBinaryTree(left_part);
            node.right_child = this.convertStringToBinaryTree(right_part);
            return node;
          }
          else{
            pointer = i + 2;
          }
        }
      }
    },

    convertBinaryTreeToMultiTree(node){
      // 运用布尔运算结合律
      if(node.left_child === undefined){
        return node
      }
      else{
        node.left_child = this.convertBinaryTreeToMultiTree(node.left_child);
        node.right_child = this.convertBinaryTreeToMultiTree(node.right_child);
        if((node.uuid === node.left_child.uuid) && (node.uuid === node.right_child.uuid)){
          node.children=[],
          node.children.push(...node.left_child.children);
          node.children.push(...node.right_child.children);
          node.left_child = node.right_child = undefined;
          return node;
        }
        else if(node.uuid === node.left_child.uuid){
          node.left_child.children.push(node.right_child);
          return node.left_child
        }
        else if(node.uuid === node.right_child.uuid){
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
    },

    // 切换输入案例
    switchArray(){
      this.currentArray = (this.currentArray + 1 >= this.arrays.length) ? 0: this.currentArray + 1;
      this.rule = arrayList[this.arrays[this.currentArray]];
      this.codeString = this.convertArrayToString(arrayList[this.arrays[this.currentArray]]);
      this.binaryTree = this.convertStringToBinaryTree(this.codeString);
      this.tree = this.convertBinaryTreeToMultiTree(this.binaryTree);
      console.log(this.tree);
    },

    // 字符串判断是否是叶子节点
    is_leaf(string){
      return (string.indexOf("and") === -1) && (string.indexOf("or") === -1);
    },

    // 是否去除左右最外层的括号
    remove_outer_brackets(string){
      const inner = string.slice(1, string.length-1);
      if(string[0] === '[' && string[string.length-1] === ']' 
      && this.is_leagl_brackets(inner)){
        return inner;
      }
      return string;
    },

    is_leagl_brackets(string) {
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
    },
  }
}
</script>

<style scoped>
  .next-array{
    margin-left: 10px;
    width: 70px;
    height: 30px;
  }
  .show, .arrow{
    margin-top: 50px;
  }
</style>