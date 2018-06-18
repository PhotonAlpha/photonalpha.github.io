import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from 'components/Home/Home';

import backgroundPng from 'components/Utils/Utils';
import { getBlogIssues } from "reducers/blogs";

export class HomeContainer extends Component {
	static propTypes = {
		getBlogIssues: PropTypes.func,
		blogStore: PropTypes.object
	}
	constructor(props) {
		super(props);
		console.log('constructor', props)
	}
	componentWillMount() {
		this.props.getBlogIssues();
	}

	render() {
		const {message , isLoading, errorMsg} = this.props.blogStore;
		let issueList = [];
		let rareList = [];
		if(Array.isArray(message)) {
			issueList= message.map(item => {
				let _abels = [];
				
				if(item.labels && item.labels.length >0){
					_abels = item.labels.map(item => item.name);
				}
				const issue = {
					issue_url: item.url,
					comments_url: item.comments_url,
					created_at: item.created_at,
					labels: _abels,
					title: item.title,
					body: item.body
				}
				if(_abels.indexOf('rare') > -1){
					rareList.push({
						...issue,
						backgroundURI: backgroundPng(323, 200, 25)
					});
				}
				return issue;
			})
		}
		console.log('home render', message , isLoading, errorMsg);
		console.log(issueList, rareList)
		return (
			<div>
				{
					isLoading? 'loading......': (
						errorMsg? errorMsg :
							<Home issueList={ issueList } rareList={ rareList } />
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
  	getBlogIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)