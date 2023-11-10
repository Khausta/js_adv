import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
import './card-list.css';

export class CardList extends DivComponent{
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState; //parentState - это состояние родительского элемента
    }

    render() {
        if(this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add('card-list');
        this.el.innerHTML = `
            <h1>
                Найдено книг - ${this.parentState.numFound}
            </h1>
        `;
        for (const card of this.parentState.list) {
            this.el.append(new Card(this.appState, card).render());
        }
        return this.el;
    }
}