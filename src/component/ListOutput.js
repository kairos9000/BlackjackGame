import { getCurrentTime } from "../util/Time";

export class ListOutput {
    constructor() {
        this.elementListOutput = document.getElementById("list-output");
    }

    add(value) {
        const listItem = document.createElement("li");
        const currentTime = getCurrentTime();

        listItem.innerText = `${value} hinzugefügt um ${currentTime}`;

        this.elementListOutput.appendChild(listItem);
    }
}
