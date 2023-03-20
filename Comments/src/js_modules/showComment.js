'use strict';


import { commentsBody } from "./variables";
import { dateConverter } from "./data";
import { timeConverter } from "./time";


export function showComments(comment) {

	commentsBody.innerHTML += `
			<div class="comment">
				<div class="comment__block">
					<div class="comment__name">${comment.name}</div>
					<div class="comment__datatime">
						<div class="comment__data">
							${dateConverter()}
						</div>
						<div class="comment__time">${timeConverter()}</div>
					</div>
				</div>
				<div class="comment__block">
					<div class="comment__text">${comment.text}</div>
				</div>
				<div class="comment__block comment__icons">
					<div id="comment__like" class="comment__like" title="Like"></div>
					<div id="comment__delete" class="comment__delete" title="Delete"></div>
				</div>
			</div>
		`
}
