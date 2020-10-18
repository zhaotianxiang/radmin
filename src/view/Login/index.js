import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.scss';

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="login">
                <div className="top">
                    顶部
                    <div className="container">
                        <div className="logo-wrap">
                            <div className="logo">logo</div>
                        </div>
                    </div>
                </div>

                <div className="main-body">
                    <div className="login-box-wrapper">
                    中部
                        <div className="login-box container">
                            登陆盒子
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    底部
                    <div className="copy-right">&copy;版权所有 zhaotianxiang 2020-10-18</div>
                </div>

            </div>
        )
    }
}
