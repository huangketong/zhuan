import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import styles from './index.less';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div className={styles.warp}>
                <div className={styles.headers}>
                    <span className={styles.logo}>啦啦啦</span>
                </div>
                {/* 头部部分 */}
                <div className={styles.warpTop}>
                    {/* 导航部分 */}
                    <div className={styles.navBar}>
                        <ul>
                            <li>
                                <Link to='/'>首页</Link>
                            </li>
                            <li>
                                <Link to='/ios'>苹果</Link>
                            </li>
                            <li>
                                <Link to='/android'>安卓</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 主题内容 */}
                <div className={styles.warpContent}>
                    <div>
                        {this.props.children}
                    </div>
                </div>
                {/* 底部部分 */}
                <div>

                </div>
            </div>
        )
    }
}

export default App;