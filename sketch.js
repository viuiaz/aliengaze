// 全域變數
var sceneNumber = 0; // 0 = 封面, 1 = 正式遊戲
var gameScene = 0;   // 正式遊戲中的場景編號

// 透明度控制（特殊場景用）
var transparency2 = 255, transparency3 = 0;
var transparency4 = 255, transparency5 = 0, transparency6 = 255, transparency7 = 0;

// 圖片資源
var startImg, alienlabImg, barsImg, withoutalienlabImg;
var aliencrowd1Img, aliencrowdImg, alientranquilizerImg, alientranquilizer2Img;
var ruinImg, ruin2Img, alienImg, meerkatreflectionImg, meerkatImg;

// 字體
var SuperLegendBoy;

// 文字框物件
var myTextbox;

// 對話陣列（採用 0-index，內容順序與原始一致）
var s = [], a = [], d = [], f = [], g = [], h = [],
    j = [], k = [], l = [], q = [], w = [], e = [],
    bb = [], ss = [], ii = [], oo = [], cc = [],
    jj = [], kk = [], vv = [], hh = [], nn = [], mm = [];

// 請依照原始對話內容設定（以下僅示範部分內容）
s[0] = "...";
s[1] = "... What?";
s[2] = "What is happening?";
s[3] = "Where am I? What are they?";
s[4] = "Are those... aliens?";
s[5] = "...";
s[6] = "... Am I dreaming?";
s[7] = "What are they doing? Are they looking at me?";
s[8] = "Wait. Why am I behind the bars? Am I in a cage?";
s[9] = "... What should I do?";
s[10] = "press [z] to try to talk to the aliens / press [x] to observe silently";

a[0] = "'Hey! What do you want?'";
a[1] = "...";
a[2] = "They just keep staring at me without saying anything.";
a[3] = "press [z] to sit in the corner and observe";

d[0] = "I'll just wait and see what's going to happen.";
d[1] = "press [z] to sit in the corner and observe";

g[0] = "After hours of waiting, I fell asleep.";
g[1] = "press [z] to wake up";

f[0] = "!";
f[1] = "Oh! No one's here now.";
f[2] = "What should I do?";
f[3] = "press [z] to crash the bars / press [x] to squeeze through the bars";

h[0] = "Ahhh... It hurts... Maybe I should stop.";
h[1] = "*footstep sounds*";
h[2] = "...";
h[3] = "They are back! I don't know what they will do to me...";
h[4] = "press [z] to cower in the corner";

j[0] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
j[1] = "...What are they even saying? Please speak English!";
j[2] = "press [z] to listen carefully";

k[0] = "When I got closer, they stopped talking.";
k[1] = "...";
k[2] = "And how many aliens are there?";
k[3] = "What did I do to deserve this?";
k[4] = "What should I do?";
k[5] = "press [z] to scream / press [x] to pace around";

l[0] = "'Ahhhhhhh!'";
l[1] = "'Stop staring! Let me out!'";
l[2] = "press [z] to rest in the corner";

q[0] = "I started to walk around...";
q[1] = "I felt that this helped to alleviate some of my anxiety.";
q[2] = "...";
q[3] = "One of them frowned a little, but still... nothing happens.";
q[4] = "I'm starting to feel a little tired.";
q[5] = "press [z] to rest in the corner";

w[0] = "Now it's just me... and them.";
w[1] = "Again.";
w[2] = "What should I do?";
w[3] = "I've had enough of waiting.";
w[4] = "press [z] to hit the wall with my head / press [x] to crazy pluck my hair";

e[0] = "... Hurting myself actually feels good.. haha...";
e[1] = "... Wait! It's coming towards me!";
e[2] = "What is it going to do?";
e[3] = "... Is that a... syringe?";
e[4] = "I plead, 'Stop! Please don't hurt me!'";
e[5] = "I keep yelling, yet it just keep getting closer...";
e[6] = "...!";
e[7] = "It grabs my arm and injects something inside...";
e[8] = "... Getting... sleepy... again.";
e[9] = "...";
e[10] = "press [z] to wake up";

// 其餘陣列依需求設定……
//（此處省略 bb, ss, ii, oo, cc, jj, kk, vv, hh, nn, mm 的完整內容，請依原本內容設定）

// 建立文字框物件
var myTextbox;

function preload() {
  startImg = loadImage("assets/start.jpeg");
  alienlabImg = loadImage("assets/alien lab.jpg");
  barsImg = loadImage("assets/bars.png");
  withoutalienlabImg = loadImage("assets/withoutalien lab.jpg");
  aliencrowd1Img = loadImage("assets/aliencrowd1.png");
  aliencrowdImg = loadImage("assets/aliencrowd.jpg");
  alientranquilizerImg = loadImage("assets/alien tranquilizer.jpg");
  alientranquilizer2Img = loadImage("assets/alien tranquilizer2.jpg");
  ruinImg = loadImage("assets/ruin.jpg");
  ruin2Img = loadImage("assets/ruin2.jpg");
  alienImg = loadImage("assets/alien.jpeg");
  meerkatreflectionImg = loadImage("assets/meerkat reflection.jpg");
  meerkatImg = loadImage("assets/meerkat.jpg");
  SuperLegendBoy = loadFont("assets/SuperLegendBoy.ttf");
}

function setup() {
  createCanvas(700, 394);
  textFont(SuperLegendBoy);
  textWrap(WORD);
  textLeading(16);
  background(0);
  myTextbox = new Textbox();
  // 初始化其他陣列的內容請依原本設定（若有省略，請自行補齊）
}

// 決策分支（只有最後一行的對話含 "press" 時才接受鍵盤輸入）
var decisionMap = {
  0: { z: 1, x: 2 },
  2: { z: 3, x: 3 },
  4: { z: 5, x: 5 },
  5: { z: 6, x: 6 },
  6: { z: 7, x: 7 },
  7: { z: 8, x: 9 },
  8: { z: 9, x: 9 },
  9: { z: 10, x: 10 },
  10: { z: 11, x: 11 },
  11: { z: 12, x: 12 },
  12: { z: 13, x: 14 },
  13: { z: 15, x: 15 },
  14: { z: 15, x: 15 },
  15: { z: 16, x: 16 },
  16: { z: 17, x: 17 },
  17: { z: 18, x: 18 },
  18: { z: 19, x: 19 },
  19: { z: 20, x: 20 },
  21: { z: 22, x: 22 }
};

// 轉場設定：非決策場景中，讀完對話自動切換
var transitions = {
  1: { z: 3, x: 3 },
  3: { z: 4, x: 4 },
  5: { z: 6, x: 6 },
  8: { z: 10, x: 10 },
  10: { z: 11, x: 11 },
  11: { z: 12, x: 12 },
  13: { z: 14, x: 14 },
  15: { z: 16, x: 16 },
  16: { z: 17, x: 17 },
  17: { z: 18, x: 18 },
  18: { z: 19, x: 19 },
  19: { z: 20, x: 20 },
  20: { z: 21, x: 21 },
  22: { z: 23, x: 23 }  // scene 23 為結尾
};

// 文字框物件類別
class Textbox {
  showTextbox() {
    stroke(255);
    fill(0);
    // 固定文字框在畫面底部，保留 margin
    rect(15, 324, 680, 50);
    noStroke();
    fill(255);
    textSize(14);
    textWrap(WORD);
    textLeading(16);
    textAlign(LEFT, TOP);
  }
}

// 輸入處理：僅在對話最後一行（含 "press"）時接受鍵盤輸入
function keyPressed() {
  if (sceneNumber === 0) {
    if (key === ' ') {
      sceneNumber = 1;
      gameScene = 0;
    }
    return;
  }
  if (sceneNumber === 1) {
    var mapping = dialogueMapping[gameScene];
    var idx = window[mapping.idxVar];
    var currentText = mapping.arr[idx] || "";
    if (idx === mapping.arr.length - 1 && currentText.toLowerCase().indexOf("press") !== -1) {
      if (key === 'z' || key === 'x' || key === 'Z' || key === 'X') {
        if (decisionMap[gameScene]) {
          gameScene = decisionMap[gameScene][key.toLowerCase()];
        } else if (transitions[gameScene]) {
          gameScene = transitions[gameScene].z;
        }
        resetSceneIndexes(gameScene);
      }
    }
  }
}

function mousePressed() {
  if (sceneNumber === 0) return;
  if (sceneNumber === 1) {
    var mapping = dialogueMapping[gameScene];
    var idx = window[mapping.idxVar];
    var currentText = mapping.arr[idx] || "";
    if (idx === mapping.arr.length - 1 && currentText.toLowerCase().indexOf("press") !== -1) {
      return;
    }
    if (idx < mapping.arr.length - 1) {
      advanceCurrentIndex();
    } else {
      if (transitions[gameScene]) {
        gameScene = transitions[gameScene].z;
        resetSceneIndexes(gameScene);
      }
    }
  }
}

function advanceCurrentIndex() {
  var mapping = dialogueMapping[gameScene];
  var idxVar = mapping.idxVar;
  window[idxVar]++;
}

// 對話映射：指定每個 gameScene 使用哪個對話陣列及其索引變數
var dialogueMapping = {
  0: { arr: s, idxVar: 'i' },
  1: { arr: a, idxVar: 'u' },
  2: { arr: d, idxVar: 'y' },
  3: { arr: g, idxVar: 'ee' },
  4: { arr: f, idxVar: 'r' },
  5: { arr: h, idxVar: 't' },
  6: { arr: j, idxVar: 'qq' },
  7: { arr: k, idxVar: 'aa' },
  8: { arr: l, idxVar: 'b' },
  9: { arr: q, idxVar: 'c' },
  10: { arr: w, idxVar: 'dd' },
  11: { arr: e, idxVar: 'ff' },
  12: { arr: bb, idxVar: 'gg' },
  13: { arr: ss, idxVar: 'sss' },
  14: { arr: ii, idxVar: 'iii' },
  15: { arr: oo, idxVar: 'ooo' },
  16: { arr: cc, idxVar: 'ccc' },
  17: { arr: jj, idxVar: 'jjj' },
  18: { arr: kk, idxVar: 'kkk' },
  19: { arr: vv, idxVar: 'vvv' },
  20: { arr: hh, idxVar: 'hhh' },
  21: { arr: nn, idxVar: 'nnn' },
  22: { arr: mm, idxVar: 'mmm' }
};

// 繪製函式：對話文字與 "click to continue" 均繪製在文字框內
function drawScene(textContent, bgImg) {
  if (bgImg) image(bgImg, 0, 0);
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 340, 640, 40);
  text(textContent, 28, 340, 640, 40);
}

function drawSceneWithBars(textContent, bgImg) {
  if (bgImg) {
    image(bgImg, 0, 0);
    image(barsImg, 0, 0);
  }
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 340, 640, 40);
  text(textContent, 28, 340, 640, 40);
}

function drawDialogueWithBars(bgImg) {
  if (bgImg) {
    image(bgImg, 0, 0);
    image(barsImg, 0, 0);
  }
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  var mapping = dialogueMapping[gameScene];
  var idx = window[mapping.idxVar];
  var currentText = mapping.arr[idx] || "";
  var prompt = (currentText.toLowerCase().indexOf("press") !== -1) ?
      "- press z or x to choose -" : "- click to continue -";
  text(prompt, 248, 340, 640, 40);
  text(currentText, 28, 340, 640, 40);
}

function drawTranquilizerScene() {
  push();
  if (ff > 8 && transparency2 > 0) {
    transparency2 -= 0.9;
  }
  tint(255, transparency2);
  image(alientranquilizerImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawScene(e[ff], null);
}

function drawBBScene() {
  push();
  if (transparency3 < 255) transparency3 += 1.9;
  tint(255, transparency3);
  image(withoutalienlabImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawScene(bb[gg], null);
}

function drawJJScene() {
  push();
  if (transparency4 > 0) transparency4 -= 0.45;
  tint(255, transparency4);
  image(ruinImg, 0, 0);
  pop();
  drawScene(jj[jjj], null);
}

function drawKKScene() {
  push();
  if (transparency5 < 255) transparency5 += 0.55;
  tint(255, transparency5);
  image(alienImg, 0, 0);
  pop();
  drawScene(kk[kkk], null);
}

function drawHHScene() {
  push();
  if (transparency6 > 0) transparency6 -= 0.45;
  tint(255, transparency6);
  image(alienlabImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawScene(hh[hhh], null);
}

function drawNNScene() {
  push();
  if (transparency7 < 255) transparency7 += 0.4;
  tint(255, transparency7);
  image(meerkatreflectionImg, 0, 0);
  pop();
  drawScene(nn[nnn], null);
}

function drawBaseScene() {
  // 初始場景使用帶欄杆的對話呈現
  drawDialogueWithBars(alienlabImg);
}

function draw() {
  background(0);
  if (sceneNumber === 0) {
    image(startImg, 0, 0);
    fill(255);
    textSize(30);
    text("Emohw2enr@uoyem*oclew", 95, 330);
    textSize(13);
    text("- press space to continue -", 230, 365);
  } else if (sceneNumber === 1) {
    switch (gameScene) {
      case 0: drawBaseScene(); break;
      case 1: drawSceneWithBars(a[u], alienlabImg); break;
      case 2: drawDialogueWithBars(d[y], alienlabImg); break;
      case 3: drawScene(g[ee], null); break;
      case 4: drawSceneWithBars(f[r], withoutalienlabImg); break;
      case 5: drawSceneWithBars(h[t], withoutalienlabImg); break;
      case 6: drawSceneWithBars(j[qq], aliencrowd1Img); break;
      case 7: drawSceneWithBars(k[aa], aliencrowdImg); break;
      case 8: drawDialogueWithBars(l[b], aliencrowdImg); break;
      case 9: drawDialogueWithBars(q[c], aliencrowdImg); break;
      case 10: drawSceneWithBars(w[dd], alienlabImg); break;
      case 11: drawTranquilizerScene(); break;
      case 12: drawBBScene(); break;
      case 13: drawScene(ss[sss], withoutalienlabImg); break;
      case 14: drawSceneWithBars(ii[iii], withoutalienlabImg); break;
      case 15: drawScene(oo[ooo], ruin2Img); break;
      case 16: drawScene(cc[ccc], ruinImg); break;
      case 17: drawJJScene(); break;
      case 18: drawKKScene(); break;
      case 19: drawScene(vv[vvv], aliencrowdImg); break;
      case 20: drawHHScene(); break;
      case 21: drawNNScene(); break;
      case 22: drawScene(mm[mmm], meerkatImg); break;
      case 23:
        background(0);
        fill(255);
        textSize(30);
        text("End", width/2 - 30, height/2);
        break;
    }
  }
}
