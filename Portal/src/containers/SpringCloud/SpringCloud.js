import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from 'router/history';

import { getCatalogTree } from "reducers/blogs";
import SpringCloud from 'components/TimeLine/TimeLine';
import { SPRING_CLOUD, _reconstructorTree } from 'components/Utils/Utils';

export class SpringCloudContainer extends Component {
    static propTypes = {
        // prop: PropTypes
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getCatalogTree(SPRING_CLOUD);
    }
    handleClick(sha, title, e) {
        // console.log(url, this.props);
        const data = {
            git_url:sha,
            issue_title: title
        };
        const path = {  
            pathname:'/reveal',  
            state:data
          }  
        history.push(path);
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.blogStore;
        return (
            <div>
                {
                isLoading? 'loading......': (
                    errorMsg? errorMsg :
                        <SpringCloud handleClick={ this.handleClick.bind(this) } repositoryTree={ _reconstructorTree(message) } />
                )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogStore: state.blogStore
    }
}

const mapDispatchToProps = {
    getCatalogTree
}

export default connect(mapStateToProps, mapDispatchToProps)(SpringCloudContainer)
