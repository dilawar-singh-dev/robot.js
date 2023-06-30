var robot = require("robotjs");
let startTime = 1;
let endTime = 90000; //25 Hrs
const server = {};

randomNunber = async (min, max) => {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randNumber;
};

randSleep = async (seconds) => {
  return setTimeout(() => {}, seconds);
};

trackerConfig = async (configNumber) => {
  console.log("configNumber", configNumber);

  if (configNumber === 1) {
    let randNunberGen1111 = await randomNunber(5000, 30000);
    let randNunberGen2222 = await randomNunber(8000, 45000);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(5000, 20000);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(10000, 40000);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 2) {
    let randNunberGen1111 = await randomNunber(4353, 34535);
    let randNunberGen2222 = await randomNunber(7854, 44234);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(5000, 12435);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(13564, 34521);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 3) {
    let randNunberGen1111 = await randomNunber(12943, 36731);
    let randNunberGen2222 = await randomNunber(7433, 43573);

    setTimeout(async () => {
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(4524, 23564);
      await sleep(randNunberGen2);
      robot.keyTap("up");
      robot.keyTap("up");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(14244, 39523);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 4) {
    let randNunberGen1111 = await randomNunber(10000, 54213);
    let randNunberGen2222 = await randomNunber(7653, 37568);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(12567, 23567);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(15643, 34532);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 5) {
    let randNunberGen1111 = await randomNunber(7645, 36544);
    let randNunberGen2222 = await randomNunber(6543, 43873);

    setTimeout(async () => {
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(4567, 32246);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(13432, 37890);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 6) {
    let randNunberGen1111 = await randomNunber(5000, 30000);
    let randNunberGen2222 = await randomNunber(8000, 45000);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(5000, 20000);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(10000, 40000);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 7) {
    let randNunberGen1111 = await randomNunber(3232, 13423);
    let randNunberGen2222 = await randomNunber(7566, 43675);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(4368, 37543);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(14323, 39543);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  } else if (configNumber === 8) {
    let randNunberGen1111 = await randomNunber(6567, 35654);
    let randNunberGen2222 = await randomNunber(8567, 42678);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(2345, 15675);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(1456, 35654);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
    }, randNunberGen2222);
  } else {
    let randNunberGen1111 = await randomNunber(6565, 32543);
    let randNunberGen2222 = await randomNunber(6754, 48543);

    setTimeout(async () => {
      robot.mouseClick();
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");

      let randNunberGenm01 = await randomNunber(100, 1000);
      let randNunberGenm02 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm01, randNunberGenm02);
    }, randNunberGen1111);

    setTimeout(async () => {
      let randNunberGen2 = await randomNunber(4678, 33424);
      await sleep(randNunberGen2);
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("down");
      robot.keyTap("tab", ["control", "shift"]);
      robot.keyTap("enter");

      let randNunberGenm1 = await randomNunber(100, 1000);
      let randNunberGenm2 = await randomNunber(100, 800);
      robot.moveMouse(randNunberGenm1, randNunberGenm2);

      let randNunberGen3 = await randomNunber(1357, 42356);
      await sleep(randNunberGen3);

      robot.moveMouse(330, 230);
      robot.mouseClick();
    }, randNunberGen2222);
  }
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

server.index = async () => {
  for (var i = startTime; i < endTime; i++) {
    console.time("t");

    let randNunberGen001 = await randomNunber(30000, 40000);

    let randNunberGen = await randomNunber(5000, randNunberGen001);
    await sleep(randNunberGen);
    robot.setMouseDelay(2);

    let configNumber = await randomNunber(1, 10);

    trackerConfig(configNumber);

    console.timeEnd("t");
  }
};

server.index();
