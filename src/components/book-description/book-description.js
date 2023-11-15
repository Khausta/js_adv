import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../header/header";
// import { Card } from "../card/card";
import { AboutBook } from "../about-book/about-book.js"

export class BookDescriptionView extends AbstractView {

    //state не нужно, тк все состояние стоит appState в app.js
    constructor(appState) {
        super();
        this.appState = appState;        
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('О книге');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        // onChange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    render() {
        console.log(this.cardState); //undefined 
        console.log(this.appState); 
        const main = document.createElement('div');
        main.innerHTML = `
            <h1>
                ${this.appState.selectedBook[0].title}
            </h1>
        `;
        console.log(this.appState, this.cardState);
        // main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        // main.append(new Card(this.appState, { list: this.appState.selectedBook }).render());
        console.log(this.appState.selectedBook)
        main.append(new AboutBook(this.appState, this.appState.selectedBook).render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
        // this.appState.favorites.push('ddd');
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}