export class Button {
    public button: HTMLElement;

    constructor() {
        this.button = document.querySelector('button');
        this.clickEvent();
    }

    public clickEvent() {
        this.button.addEventListener('click', () => {
            console.log("👋")
        });

    }
}