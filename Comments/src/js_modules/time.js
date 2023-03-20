'use strict';


import { hours } from "./variables";
import { minutes } from "./variables";

const checkTime = (data) => (data < 10) ? data = "0" + data : data;

export const timeConverter = () => checkTime(hours) + ":" + checkTime(minutes);