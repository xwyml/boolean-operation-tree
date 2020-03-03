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
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": 'variable',
        'uuid': '_1'
    }, {
        "type": 'comparison',
        "op": 'GreaterThen',
        'uuid': '_2'
    }, {
        'content': '3',
        type: "input",
        'uuid': '_3'
    }, {
        type: 'junction',
        value: 'and',
    }, {
        "variableName": "self_0011",
        "variableLabel": "征信账户状态",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "variable",
        'uuid': '_4'
    }, {
        "op": "GreaterThenEquals",
        "type": 'comparison',
        'uuid': '_5'
    }, {
        "name": "Sin",
        "label": "求正弦",
        "parameter": {
            "objectParameter": {
                "variableName": "self_0007",
                "variableLabel": "企业-股权质押比例",
                "variableCategory": "小微企业指标",
                "datatype": "String",
                "valueType": "variable",
                "id": "[VAR]小微企业指标.企业-股权质押比例"
            },
            "name": "对象",
            "property": "self_0005",
            "propertyLabel": "关联企业-占股比例"
        },
        'uuid': '_6',
        type: 'commonFunction'
    }, {
        type: 'operator',
        value: 'add',
        'uuid': '_7'
    }, {
        type: 'paren',
        value: '(',
        'uuid': '_8'
    }, {
        "variableName": "self_0005",
        "variableLabel": "关联企业-占股比例",
        "variableCategory": "小微企业指标",
        "datatype": "String",
        "type": "variable",
        "id": "[VAR]小微企业指标.关联企业-占股比例+([VAR]小微企业主指标.年龄*[SIMPLE]2)",
        'uuid': '_9'
    }, {
        type: 'operator',
        value: 'Add',
        'uuid': '_10'
    }, {
        type: 'paren',
        value: '(',
        'uuid': '_11'
    }, {
        "variableName": "self_0001",
        "variableLabel": "年龄",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "variable",
        "id": "[VAR]小微企业主指标.年龄*[SIMPLE]2",
        'uuid': '_12'
    }, {
        type: 'operator',
        value: 'Mul',
        'uuid': '_13'
    }, {
        "content": "2",
        "type": "input",
        "id": "[SIMPLE]2",
        'uuid': '_14'
    }, {
        type: 'paren',
        value: ')',
        'uuid': '_15'
    }, {
        type: 'paren',
        value: ')',
        'uuid': '_16'
    }, {
        type: 'operator',
        value: 'Mul',
        'uuid': '_17'
    }, {
        "variableName": "self_0001",
        "variableLabel": "年龄",
        "variableCategory": "小微企业主指标",
        "datatype": "String",
        "type": "variable",
        "id": "[VAR]小微企业主指标.年龄*[SIMPLE]2",
        'uuid': '_18'
    }, {
        type: 'junction',
        value: 'or'
    }, {
        type: 'paren',
        value: '['
    }, {
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": 'variable',
        'uuid': '_19'
    }, {
        "type": 'comparison',
        "op": 'GreaterThen',
        'uuid': '_20'
    }, {
        'content': '3',
        type: "input",
        'uuid': '_21'
    }, {
        type: 'junction',
        value: 'and'
    }, {
        "variableName": "amount_copyright",
        "variableLabel": "著作权数量",
        "variableCategory": "企业评级",
        "datatype": "String",
        "type": 'variable',
        'uuid': '_22'
    }, {
        "type": 'comparison',
        "op": 'GreaterThen',
        'uuid': '_23'
    }, {
        'content': '3',
        type: "input",
        'uuid': '_24'
    }, {
        type: 'paren',
        value: ']'
    }]
}
