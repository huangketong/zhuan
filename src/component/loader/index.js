import React from 'react';
import styles from './index.less'
import classNames from 'classnames'

class Loader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { spining } = this.props;
        return (
            <div className={classNames(styles.content, { [styles.content_hidden]: !spining })}>
                <div className={styles.loaderModal}>
                </div>
                <div className={styles.warpperContent}>
                    <div className={styles.warpper}>
                        <div className={styles.inner} />
                        <div className={styles.text} >loading...</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader