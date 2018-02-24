import React from 'react';
import styles from './index.less';
import {
    isMobile
} from '../../utils';
import {
    datas,
    datas2
} from '../../utils/data';

class Ios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flags: null,
            target: '1',
        }
    }
    componentWillMount() {
        const flags = isMobile();
        this.setState({ flags });
    }
    handleTab = (key) => {
        this.setState({
            target: key
        })
    }

    render() {
        const {
            flags,
            target
        } = this.state;

        return (
            <div className={styles.content}>
                <div className={styles.topBar}>
                    <a href="#" className={styles.tab}
                        onClick={e => { e.preventDefault(), this.handleTab('1') }}
                        style={target === '1' ? { color: '#fff', background: '#108ee9' } : {}}
                    >最新</a>
                    <a href="#" className={styles.tab}
                        onClick={e => { e.preventDefault(), this.handleTab('2') }}
                        style={target === '2' ? { color: '#fff', background: '#108ee9' } : {}}
                    >推荐</a>
                </div>
                <div className={styles.barContent}>
                    {target === '1' ?
                        <div>
                            {datas.map((ele, index) => {
                                return (
                                    <div className={styles.box} key={index}>
                                        <a
                                            className={styles.leftImg}
                                            href="#" onClick={e => { e.preventDefault() }}>
                                            <img src={require(`../../assets/first/${ele.imgSrc}`)} />
                                        </a>
                                        <div className={styles.appInfo}>
                                            <span className={styles.appName}>{ele.name}</span>
                                            <span className={styles.bv}>{ele.size} &nbsp;&nbsp; {ele.visit}次下载</span>
                                        </div>
                                        <a href="#"
                                            onClick={e => { e.preventDefault() }}
                                            className={styles.download}
                                        >
                                            下载
                                        </a>
                                    </div>
                                )
                            })}
                        </div> :
                        <div>
                            {datas2.map((ele, index) => {
                                return (
                                    <div className={styles.box} key={index}>
                                        <a
                                            className={styles.leftImg}
                                            href="#" onClick={e => { e.preventDefault() }}>
                                            <img src={require(`../../assets/first/${ele.imgSrc}`)} />
                                        </a>
                                        <div className={styles.appInfo}>
                                            <span className={styles.appName}>{ele.name}</span>
                                            <span className={styles.bv}>{ele.size} &nbsp;&nbsp; {ele.visit}次下载</span>
                                        </div>
                                        <a href="#"
                                            onClick={e => { e.preventDefault() }}
                                            className={styles.download}
                                        >
                                            下载
                                </a>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Ios;