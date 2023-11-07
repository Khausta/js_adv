'use strict';

import { User } from "./user.js";
import { Task } from "./task.js";
const task = new Task('New message for you');
const user = new User(task);
user.do();