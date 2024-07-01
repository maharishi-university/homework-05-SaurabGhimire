import { Meditation } from "./exercise-1";
import { isPrime } from './exercise-2'
import { printRecipe } from "./exercise-3";

async function exercise1() {
    const morning_meditation = new Meditation(5);
    await morning_meditation.start();
    console.log("Start Meditation");
}

async function exercise2() {
    console.log('start');
    console.log('end');
    try {
        const res = await isPrime(7);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

async function exercise3() {
    await printRecipe();
}

exercise1();
exercise2();
exercise3();