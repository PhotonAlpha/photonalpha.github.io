import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import 'components/Comment/CommentApp.css'

export default class CommentApp extends Component {
    render() {
        return (
            <div>
                <CommentInput />
                <CommentList />
            </div>
        );
    }
}