export class Meditation {
    timer: number;
    constructor(timer: number) {
        this.timer = timer;
    }

    start() {
        let counter = this.timer;
        for (let i = counter; i > 0; i--) {
            setTimeout(() => {
                console.log(counter - i + 1);
                if (i == this.timer) console.log("Jay Guru Dev")
            }, i * 1000);
        }
    }
}



