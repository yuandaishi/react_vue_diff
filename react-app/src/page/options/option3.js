//为了防止css污染，vue使用scoped，简单友好

//react css文件命名xx.module.css形式或者使用webpack配置

import styles from './option2.module.css'

const Option3 = () => {
  return (
    <>
      <p className={styles.pDom}>这里是option3页面</p>
      <p className={styles['p-dom']}>这里是option3页面p-dom</p>
    </>
  );
};

export default Option3;
