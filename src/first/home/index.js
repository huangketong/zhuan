import React from 'react';
import {
    isMobile
} from '../../utils';
import Title from '../../component/title';
import styles from './index.less';

const datas = [
    {
        name: '月头条',
        size: '5MB',
        visit: '788',
        imgSrc: "test.png"
    },
    {
        name: '我的APP',
        size: '8MB',
        visit: '688',
        imgSrc: 'test.png'
    },
    {
        name: '淘宝',
        size: '10MB',
        visit: '1088',
        imgSrc: 'test.png'
    },
    {
        name: '月头条',
        size: '5MB',
        visit: '788',
        imgSrc: "test.png"
    },
    {
        name: '我的APP',
        size: '8MB',
        visit: '688',
        imgSrc: 'test.png'
    },
    {
        name: '淘宝',
        size: '10MB',
        visit: '1088',
        imgSrc: 'test.png'
    },
    {
        name: '月头条',
        size: '5MB',
        visit: '788',
        imgSrc: "test.png"
    },
    {
        name: '我的APP',
        size: '8MB',
        visit: '688',
        imgSrc: 'test.png'
    },
    {
        name: '淘宝',
        size: '10MB',
        visit: '1088',
        imgSrc: 'test.png'
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log(isMobile());
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.slideContent}>
                    <div className={styles.slideTitle}>
                        <Title title='精品推荐' />
                    </div>
                    <div className={styles.appSlideScroll}>
                        <div className={styles.appSlide}>
                            {datas.map((ele, index) => {
                                return (
                                    <div className={styles.appBox} key={index}>
                                        <a
                                            className={styles.leftImg}
                                            href="#" onClick={e => { e.preventDefault() }}>
                                            <img src={require(`../../assets/first/${ele.imgSrc}`)} />
                                        </a>
                                        <span className={styles.appName}>{ele.name}</span>
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
                    </div>
                </div>
                <div className={styles.appContent}>
                    <div className={styles.slideTitle}>
                        <Title title='最近更新' />
                    </div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;