const Option2 = () => {
    // jsx标签属性使用驼峰命名，如className，onClick，backgroundColor
    // {}里的内容，当做js语句
    //.vue使用template，更接近html，将老的项目逐步迁移到vue更加容易
  return (
    <>
      <p className="pdom">这里是option2页面</p>
      <div style={{backgroundColor:'#cccccc'}}>
          {/* vue会使用v-for指令循环渲染 */}
          {/* <p v-for="(item,key) in ['yds','lfl','ydc']" :key="key">{{item}}</p> */}
          {
              ['yds','lfl','ydc'].map((item,key)=><p key={key}>{item}</p>)
          }
        <ul className="ul-dom">
          <li>测试1</li>
          <li>测试2</li>
        </ul>
      </div>
    </>
  );
};

export default Option2;
