'use strict';

import {commentsBody} from './variables';


const deleteComment = (event) => {
	if(event.target.id !== 'comment__delete'){
		return;
	}
	let comment = event.target.closest('.comment');
	comment.remove();
}

commentsBody.addEventListener('click', deleteComment);