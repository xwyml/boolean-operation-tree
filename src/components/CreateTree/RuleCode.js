export let arrayList= {
  
  // A and B
  array1: [
    {
    type: "expression",
    uuid: 'A',
    },
    {
      type: 'operator',
      uuid: 'and',
    },
    {
      type: 'expression',
      uuid: 'B',
    },
  ],

  // (A and B) or C
  array2: [
    {
      type: "left_bracket",
      uuid: '[',
    },
    {
      type: "expression",
      uuid: 'A',
    },
    {
      type: 'operator',
      uuid: 'and',
    },
    {
      type: 'expression',
      uuid: 'B',
    },
    {
      type: 'right_bracket',
      uuid: ']',
    },
    {
      type: 'operator',
      uuid: 'or',
    },
    {
      type: 'expression',
      uuid: 'C',
    },
  ],

  // (A or B) or C
  array3: [
    {
      type: "left_bracket",
      uuid: '[',
    },
    {
      type: "expression",
      uuid: 'A',
    },
    {
      type: 'operator',
      uuid: 'or',
    },
    {
      type: 'expression',
      uuid: 'B',
    },
    {
      type: 'right_bracket',
      uuid: ']',
    },
    {
      type: 'operator',
      uuid: 'or',
    },
    {
      type: 'expression',
      uuid: 'C',
    },
  ],
  array4: [
    {
      uuid: '[',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'A',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'B',
    },
    {
      uuid: ']',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'C',
    },
    {
      uuid: ']',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'D',
    },
  ],
  array5: [
    {
      uuid: '[',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'A',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'B',
    },
    {
      uuid: ']',
    },
    {
      uuid: 'or',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'C',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'D',
    },
    {
      uuid: ']',
    },
    {
      uuid: ']',
    },
  ],
  array6: [
    {
      uuid: '[',
    },
    {
      uuid: 'A',
    },
    {
      uuid: 'and',
    },
    {
      uuid: 'B',
    },
    {
      uuid: ']',
    },
    {
      uuid: 'and',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'C',
    },
    {
      uuid: 'and',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'D',
    },
    {
      uuid: 'and',
    },
    {
      uuid: 'E',
    },
    {
      uuid: ']',
    },
    {
      uuid: ']',
    },
  ],
  array7: [
    {
      uuid: 'A',
    },
    {
      uuid: 'and',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'B',
    },
    {
      uuid: 'or',
    },
    {
      uuid: '[',
    },
    {
      uuid: 'C',
    },
    {
      uuid: 'or',
    },
    {
      uuid: 'D',
    },
    {
      uuid: ']',
    },
    {
      uuid: ']',
    },
  ],
  array8: [
    {
      type: "expression",
      uuid: 'A',
    },
    {
      type: 'operator',
      uuid: 'and',
    },
    {
      type: 'expression',
      uuid: 'B',
    },
    {
      type: 'operator',
      uuid: 'or',
    },
    {
      type: 'expression',
      uuid: 'C',
    },
  ],
  array9:[{
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": "variable",
        "uuid": "_25"
    }, {
        "type": "comparison",
        "op": "GreaterThen",
        "uuid": "_26"
    }, {
        "content": "3",
        "type": "Input",
        "uuid": "_27"
    }, {
        "type": "junction",
        "value": "and"
    }, {
        "variableName": "self_0011",
        "variableLabel": "征信账户状态",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "variable",
        "uuid": "_28"
    }, {
        "op": "GreaterThenEquals",
        "type": "comparison",
        "uuid": "_29"
    }, {
        "name": "Sin",
        "label": "求正弦",
        "parameter": {
            "objectParameter": {
                "variableName": "self_0007",
                "variableLabel": "企业-股权质押比例",
                "variableCategory": "小微企业指标",
                "datatype": "String",
                "valueType": "Variable",
                "id": "[VAR]小微企业指标.企业-股权质押比例"
            },
            "name": "对象",
            "property": "self_0005",
            "propertyLabel": "关联企业-占股比例"
        },
        "uuid": "_30",
        "type": "CommonFunction"
    }, {
        "type": "Operator",
        "value": "add",
        "uuid": "_31"
    }, {
        "type": "Paren",
        "value": "(",
    }, {
        "variableName": "self_0005",
        "variableLabel": "关联企业-占股比例",
        "variableCategory": "小微企业指标",
        "datatype": "String",
        "type": "Variable",
        "id": "[VAR]小微企业指标.关联企业-占股比例+([VAR]小微企业主指标.年龄*[SIMPLE]2)",
        "uuid": "_33"
    }, {
        "type": "Operator",
        "value": "Add",
        "uuid": "_34"
    }, {
        "type": "Paren",
        "value": "(",
    }, {
        "variableName": "self_0001",
        "variableLabel": "年龄",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "Variable",
        "id": "[VAR]小微企业主指标.年龄*[SIMPLE]2",
        "uuid": "_36"
    }, {
        "type": "Operator",
        "value": "Mul",
        "uuid": "_37"
    }, {
        "content": "2",
        "type": "Input",
        "id": "[SIMPLE]2",
        "uuid": "_38"
    }, {
        "type": "Paren",
        "value": ")",
    }, {
        "type": "Paren",
        "value": ")",
    }, {
        "type": "Operator",
        "value": "Mul",
        "uuid": "_41"
    }, {
        "variableName": "self_0001",
        "variableLabel": "年龄",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "Variable",
        "id": "[VAR]小微企业主指标.年龄*[SIMPLE]2",
        "uuid": "_42"
    }, {
        "type": "junction",
        "value": "or"
    }, {
        "type": "Paren",
        "value": "("
    }, {
        "type": "Paren",
        "value": "("
    }, {
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": "variable",
        "uuid": "_43"
    }, {
        "type": "comparison",
        "op": "GreaterThen",
        "uuid": "_44"
    }, {
        "content": "3",
        "type": "Input",
        "uuid": "_45"
    }, {
        "type": "junction",
        "value": "and"
    }, {
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": "variable",
        "uuid": "_46"
    }, {
        "type": "comparison",
        "op": "GreaterThen",
        "uuid": "_47"
    }, {
        "content": "3",
        "type": "Input",
        "uuid": "_48"
    }, {
        "type": "Paren",
        "value": ")"
    }, {
        "type": "Paren",
        "value": ")"
    }],
}
