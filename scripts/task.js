export class Task {
    constructor (text) {
        this.text = text;
        this.run = () => console.log(this.text);
    }
} 