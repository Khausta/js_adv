export class User {
    constructor(className) {
        this.className = className;
        this.do = () => this.className.run();
    }
}

