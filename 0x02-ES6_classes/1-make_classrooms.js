import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
    const class1 = new ClassRoom(19);
    const class2 = new ClassRoom(20);
    const class3 = new ClassRoom(34);

    const returnArray = [class1, class2, class3];

    return returnArray;
}
