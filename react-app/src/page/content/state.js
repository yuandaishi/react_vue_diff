// 逻辑处理
//react的数据定义和非hooks钩子函数（使用mobx做状态管理之后，hooks基本用不上）处理一般写在另外一个js文件中，vue单文件，数据在data中，数据处放在methods中，当然也可以使用mixin混入模式

export const columnsArr = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
export const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

export const radamTextArr = "床前明月光疑似地上霜举头望明月低头思故乡".split('');

// 返回随机二字名称
export function randomName(arr) {
  return (
    arr[(Math.random() * arr.length) | 0] +
    arr[(Math.random() * arr.length) | 0]
  );
}
