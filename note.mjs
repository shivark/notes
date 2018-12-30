export class Note {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }

    save() {
        console.log('saving');
    }
}