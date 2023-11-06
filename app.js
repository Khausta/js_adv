'use strict';

import { User } from "./scripts/user.js";
import { Task } from "./scripts/task.js";
const task = new Task('New message for you');
const user = new User(task);
user.do();