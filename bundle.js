(function () {
    'use strict';

    class User {
        constructor(className) {
            this.className = className;
            this.do = () => this.className.run();
        }
    }

    class Task {
        constructor (text) {
            this.text = text;
            this.run = () => console.log(this.text);
        }
    }

    const task = new Task('New message for you');
    const user = new User(task);
    user.do();

})();
