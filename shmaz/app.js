let app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const racoon = new PIXI.Text('WELCOME TO SHMAZ');
racoon.x = 50;
racoon.y = 50;
app.stage.addChild(racoon);

const coinsDisplay = new PIXI.Text("");
coinsDisplay.x = 50;
coinsDisplay.y = 100;
app.stage.addChild(coinsDisplay);

let coins = 100;

const makeButton = (x, onClick) => {
  const button = PIXI.Sprite.from('husky1.jpg');
  button.x = x;
  button.y = 150;
  button.width = 150;
  button.height = 100;
  button.interactive = true;
  button.on("click", onClick);
  return button;
};

const button1 = makeButton(50,  () => { coins = coins + 5; });
const button2 = makeButton(250, () => { coins = coins + 10; });
const button3 = makeButton(450, () => { coins = coins + 100; });

app.stage.addChild(button1);
app.stage.addChild(button2);
app.stage.addChild(button3);

app.ticker.add((delta) => {
  coinsDisplay.text = "Coins: " + coins;
});
