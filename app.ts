import { Meditation } from "./exercise-1";

async function exercise1() {
    const morning_meditation = new Meditation(5);
    await morning_meditation.start();
    console.log("Start Meditation");
}

exercise1();