'use strict';

export const commentsBody = document.querySelector('.comments');
export const commentData = document.querySelector('.data');
export const form = document.querySelector('.form');
export const submitButton = document.querySelector('.form__button');
export const commentName = document.getElementById('form__name');
export const commentText = document.getElementById('form__text');

export const TODAY = "сегодня, ";
export const YESTERDAY = "вчера, ";

export let errors = [];

export let date = new Date();

export let hours = date.getHours();
export let minutes = date.getMinutes();
export let dayNow = date.getDate();
export let monthNow = date.getMonth() + 1;
export let yearNow = date.getFullYear();