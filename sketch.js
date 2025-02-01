//-------------------------------------
// 0. 全域變數
//-------------------------------------
let sceneNumber = 0;   // 0 = 封面, 1 = 正式遊戲
let gameScene = 0;    

// 透明度控制
let transparency = 255, transparency2 = 255, transparency3 = 0;
let transparency4 = 255, transparency5 = 0, transparency6 = 255, transparency7 = 0;

// 圖片資源
let startImg, alienlabImg, barsImg, withoutalienlabImg;
let aliencrowd1Img, aliencrowdImg, alientranquilizerImg, alientranquilizer2Img;
let ruinImg, ruin2Img, alienImg, meerkatreflectionImg, meerkatImg;

// 字體
let SuperLegendBoy; 

//-------------------------------------
// 對話內容（各場景，採 1 為起始索引）
// 注意：已移除任何「press ...」提示文字，對話最後一筆若為選擇提示，僅描述決策內容
//-------------------------------------
// scene 0 (決策場景)
let s = [];
s[1] = "..."; 
s[2] = "... What?"; 
s[3] = "What is happening?";
s[4] = "Where am I? What are they?";
s[5] = "Are those... aliens?";
s[6] = "..."; 
s[7] = "... Am I dreaming?";
s[8] = "What are they doing? Are they looking at me?";
s[9] = "Wait. Why am I behind the bars? Am I in a cage?";
s[10] = "... What should I do?";
s[11] = "Do you try to talk to the aliens or observe silently?";

// scene 1 (非決策)
let a = [];
a[1] = "'Hey! What do you want?'"; 
a[2] = "...";
a[3] = "They just keep staring at me without saying anything.";
a[4] = "I decide to sit in the corner and observe.";

// scene 2 (非決策)
let d = [];
d[1] = "I'll just wait and see what's going to happen.";
d[2] = "I choose to sit in the corner and observe.";

// scene 3 (非決策)
let g = [];
g[1] = "After hours of waiting, I fell asleep.";
g[2] = "I wake up.";

// scene 4 (非決策)
let f = [];
f[1] = "!";
f[2] = "Oh! No one's here now.";
f[3] = "What should I do?";
f[4] = "I must decide whether to crash the bars or squeeze through.";

// scene 5 (非決策)
let h = [];
h[1] = "Ahhh... It hurts... Maybe I should stop.";
h[2] = "*footstep sounds*";
h[3] = "...";
h[4] = "They are back! I don't know what they will do to me...";
h[5] = "I cower in the corner.";

// scene 6 (非決策)
let j = [];
j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
j[2] = "...What are they even saying? I wish they spoke English.";
j[3] = "I listen carefully.";

// scene 7 (決策場景)
let k = [];
k[1] = "When I got closer, they stopped talking.";
k[2] = "...";
k[3] = "And how many aliens are there?";
k[4] = "What did I do to deserve this?";
k[5] = "What should I do?";
k[6] = "Do I scream or pace around?";

// scene 8 (非決策)
let l = [];
l[1] = "'Ahhhhhhh!'";
l[2] = "'Stop staring! Let me out!'";
l[3] = "I plead, 'What did I do? I'm just ordinary.'";
l[4] = "I beg, 'Please let me out...'";
l[5] = "One of them frowned, but nothing happened.";
l[6] = "I feel tired after all the yelling.";
l[7] = "I settle down in the corner.";

// scene 9 (非決策)
let q = [];
q[1] = "I start walking around...";
q[2] = "I feel a slight easing of my anxiety.";
q[3] = "...";
q[4] = "One of them frowned, yet nothing happened.";
q[5] = "I begin to feel tired.";
q[6] = "I decide to rest in the corner.";

// scene 10 (非決策)
let w = [];
w[1] = "Now it's just me... and them.";
w[2] = "Again.";
w[3] = "Should I do something to attract their attention?";
w[4] = "I've had enough of waiting.";
w[5] = "What should I do?";
w[6] = "I choose between hitting the wall with my head or wildly plucking my hair.";

// scene 11 (非決策)
let e = [];
e[1] = "Somehow, hurting myself feels oddly relieving...";
e[2] = "Wait! Something is coming toward me!";
e[3] = "What will it do?";
e[4] = "Is that a syringe?";
e[5] = "I plead, 'Stop! Please don't hurt me!'";
e[6] = "I keep yelling, yet it gets closer...";
e[7] = "...!";
e[8] = "It grabs my arm and injects something...";
e[9] = "I feel drowsy again.";
e[10] = "...";
e[11] = "I wake up.";

// scene 12 (非決策)
let bb = [];
bb[1] = "I don't know how long I slept...";
bb[2] = "But no one seems to be around.";
bb[3] = "I still have no idea why I'm here.";
bb[4] = "Did I do something wrong?";
bb[5] = "What happened to my family?";
bb[6] = "Are they also imprisoned somewhere?";
bb[7] = "I can't understand.";
bb[8] = "...";
bb[9] = "I call out, 'Hello?'";
bb[10] = "...";
bb[11] = "No one's there. Perhaps this is my chance to escape.";
bb[12] = "I move closer to the bars and look around.";
bb[13] = "...";
bb[14] = "I notice something on the floor...";
bb[15] = "It was hidden by the bars before.";
bb[16] = "Now I can see it clearly.";
bb[17] = "Is that a key? Why is it here?";
bb[18] = "Did an alien drop the key?";
bb[19] = "That spot is exactly where it was.";
bb[20] = "It almost seems as if an alien sympathizes with me.";
bb[21] = "What should I do?";
bb[22] = "Do I use the key or stay put?";

// scene 13 (非決策)
let ss = [];
ss[1] = "This is my only chance.";
ss[2] = "I squat down and grab the key.";
ss[3] = "It takes a while to unlock the door from inside.";
ss[4] = "...";
ss[5] = "The door finally unlocks.";
ss[6] = "After endless days, I feel numb.";
ss[7] = "...";
ss[8] = "I run out without hesitation.";
ss[9] = "I escape.";

// scene 14 (非決策)
let ii = [];
ii[1] = "I don't believe I'll ever get out...";
ii[2] = "Maybe it's safer to stay.";
ii[3] = "At least I have food...";
ii[4] = "Even though I can't see my family...";
ii[5] = "It seems better to stay here.";
ii[6] = "Right?";
ii[7] = "...";
ii[8] = "I question my decision.";
ii[9] = "Do I truly trust my choice?";
ii[10] = "No—I must get out!";
ii[11] = "I decide to escape.";
ii[12] = "I make my move.";

// scene 15 (非決策)
let oo = [];
oo[1] = "...";
oo[2] = "What in the world?";
oo[3] = "What happened?";
oo[4] = "This place doesn't look familiar...";
oo[5] = "I look around.";

// scene 16 (非決策)
let cc = [];
cc[1] = "...";
cc[2] = "What's wrong with the world?";
cc[3] = "Everything looks like ruins.";
cc[4] = "How can I survive alone?";
cc[5] = "Did I make the wrong choice?";
cc[6] = "...";
cc[7] = "Can anyone help?";
cc[8] = "......";
cc[9] = "I try to survive.";

// scene 17 (非決策)
let jj = [];
jj[1] = "I'll try...";
jj[2] = "I finally escape! I must at least try.";
jj[3] = "But why is there nothing?";
jj[4] = "No humans, no animals, no signs of life.";
jj[5] = "...";
jj[6] = "...";
jj[7] = "I wander for days in search of something.";
jj[8] = "After days of hunger, I can't take it anymore.";
jj[9] = "I lean against a wall...";
jj[10] = "I wait for the end.";
jj[11] = "I close my eyes.";
jj[12] = "...";
jj[13] = "I hear footsteps.";
jj[14] = "What...?";
jj[15] = "I open my eyes.";

// scene 18 (非決策)
let kk = [];
kk[1] = "...Haha.";
kk[2] = "They're here again.";
kk[3] = "I hear garbled words.";
kk[4] = "I wonder if something's wrong with me.";
kk[5] = "Strangely, I feel relieved by their presence.";
kk[6] = "Maybe this is the only way to survive.";
kk[7] = "Is it better to be imprisoned than to starve?";
kk[8] = "I resign myself.";

// scene 19 (非決策)
let vv = [];
vv[1] = "...";
vv[2] = "Here they are.";
vv[3] = "I still don't know what they want.";
vv[4] = "Their stare unsettles me.";
vv[5] = "At first, I thought they’d test me.";
vv[6] = "But they simply stare.";
vv[7] = "...";
vv[8] = "I sit in the corner.";

// scene 20 (非決策)
let hh = [];
hh[1] = "I suppose I'll remain in this cage forever...";
hh[2] = "At least it's safer than the outside world.";
hh[3] = "I wonder what happened to everything.";
hh[4] = "How did I end up here?";
hh[5] = "I try to recall my last memory...";
hh[6] = "A land of endless sands...";
hh[7] = "A dark place where I always slept.";
hh[8] = "...";
hh[9] = "The memory hurts.";
hh[10] = "I force myself to remember.";
hh[11] = "I crouch down.";

// scene 21 (非決策)
let nn = [];
nn[1] = ".";
nn[2] = "..";
nn[3] = "...";
nn[4] = "....";
nn[5] = ".....";
nn[6] = "......";
nn[7] = ".......";
nn[8] = "... Oh?";
nn[9] = "... What...?";
nn[10] = "Eh?";
nn[11] = "...?";
nn[12] = "?";
nn[13] = "???";
nn[14] = "Is that me?";
nn[15] = "......";
nn[16] = "I face the reality.";

// scene 22 (非決策)
let mm = [];
mm[1] = "....";
mm[2] = "So, I'm just a meerkat...?";
mm[3] = "That explains why my last memory is in a desert...";
mm[4] = "... Haha.";
mm[5] = "How absurd.";
mm[6] = "Even if it was just a dream...";
mm[7] = "I'm still trapped in a cage in real life.";
mm[8] = "And how did I even dream of being human?";
mm[9] = "Anger wells up inside me.";
mm[10] = "They put me here, caged forever...";
mm[11] = "The thought of becoming one of them repulses me.";
mm[12] = "Will I try to escape as in my dream?";
mm[13] = "I remain a meerkat.";
mm[14] = "What can I do?";
mm[15] = "I resign myself.";
mm[16] = "I resign myself.";
mm[17] = "I resign myself.";
mm[18] = "I resign myself.";
mm[19] = "I resign myself.";
mm[20] = "I resign myself.";
mm[21] = "I resign myself.";
mm[22] = "I resign myself.";
mm[23] = "I resign myself.";
mm[24] = "Why are you still here?";
mm[25] = "You can't help me.";
mm[26] = "So, please...";
mm[27] = "Leave me alone.";

//-------------------------------------
// 索引控制（各場景用各自的控制變數，均以 1 為起始值） 
//-------------------------------------
let i = 1, u = 1, y = 1, ee = 1, r = 1, t = 1, qq = 1, aa = 1, b = 1, c = 1;
let dd = 1, ff = 1, gg = 1, sss = 1, iii = 1, ooo = 1, ccc = 1, jjj = 1;
let kkk = 1, vvv = 1, hhh = 1, nnn = 1, mmm = 1;

//─────────────────────────────────────
// 轉場設定（決策場景：結果不同；非決策場景：兩鍵結果相同）
//─────────────────────────────────────
const transitions = {
  0: { z: 1, x: 2 },
  1: { z: 3, x: 3 },
  2: { z: 3, x: 3 },
  3: { z: 4, x: 4 },
  4: { z: 5, x: 5 },
  5: { z: 6, x: 6 },
  6: { z: 7, x: 7 },
  7: { z: 8, x: 9 },  // 決策場景（scene 0 與 scene 7為決策）
  8: { z: 10, x: 10 },
  9: { z: 10, x: 10 },
  10: { z: 11, x: 11 },
  11: { z: 12, x: 12 },
  12: { z: 13, x: 13 },
  13: { z: 14, x: 14 },
  14: { z: 15, x: 15 },
  15: { z: 16, x: 16 },
  16: { z: 17, x: 17 },
  17: { z: 18, x: 18 },
  18: { z: 19, x: 19 },
  19: { z: 20, x: 20 },
  20: { z: 21, x: 21 },
  21: { z: 22, x: 22 }
  // scene 22 為結尾
};

//─────────────────────────────────────
// 對話映射：指定每個 gameScene 使用哪個對話陣列及其索引變數名稱
//─────────────────────────────────────
const dialogueMapping = {
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

//-------------------------------------
// 決策按鈕參數（兩個按鈕的區域），我們固定放在文字框區域內
//-------------------------------------
const decisionLeftButton = { x: 20, y: 335, w: 300, h: 40 };
const decisionRightButton = { x: 360, y: 335, w: 300, h: 40 };

//-------------------------------------
// 1. preload()
//-------------------------------------
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

//-------------------------------------
// 2. setup()
//-------------------------------------
function setup() {
  createCanvas(700, 394);
  background(0);
  textFont(SuperLegendBoy);
  myTextbox = new Textbox();
}

//-------------------------------------
// 3. draw()
//-------------------------------------
function draw() {
  background(0);
  if (sceneNumber === 0) {
    // 封面
    image(startImg, 0, 0);
    fill(255);
    textSize(30);
    text("Emohw2enr@uoyem*oclew", 95, 330);
    textSize(13);
    text("- press space to continue -", 230, 365);
  } else if (sceneNumber === 1) {
    // 根據 gameScene 選擇對話繪製（特殊場景不做修改）
    switch(gameScene) {
      case 0: drawBaseScene(); break;
      case 1: drawDialogue(alienlabImg); break;
      case 2: drawDialogue(alienlabImg); break;
      case 3: drawDialogue(null); break;
      case 4: drawDialogue(withoutalienlabImg); break;
      case 5: drawDialogue(withoutalienlabImg); break;
      case 6: drawDialogue(aliencrowd1Img); break;
      case 7: drawDialogue(aliencrowdImg); break;
      case 8: drawDialogue(aliencrowdImg); break;
      case 9: drawDialogue(aliencrowdImg); break;
      case 10: drawDialogue(alienlabImg); break;
      case 11: drawTranquilizerScene(); break;
      case 12: drawBBScene(); break;
      case 13: drawDialogue(withoutalienlabImg); break;
      case 14: drawDialogue(withoutalienlabImg); break;
      case 15: drawDialogue(ruin2Img); break;
      case 16: drawDialogue(ruinImg); break;
      case 17: drawJJScene(); break;
      case 18: drawKKScene(); break;
      case 19: drawDialogue(aliencrowdImg); break;
      case 20: drawHHScene(); break;
      case 21: drawNNScene(); break;
      case 22: drawDialogue(meerkatImg); break;
      default:
         fill(255);
         textSize(20);
         text("The End", width/2 - 40, height/2);
         break;
    }
  }
}

//─────────────────────────────────────
// 輔助函式：取得目前場景的對話內容
//─────────────────────────────────────
function getCurrentDialogue() {
  let mapping = dialogueMapping[gameScene];
  let idx = window[mapping.idxVar];
  return mapping.arr[idx] || "";
}

//─────────────────────────────────────
// 前進對話：僅在還未達到最後一筆時推進（採 1-index，最後一筆保留作決策提示時使用）
//─────────────────────────────────────
function advanceDialogue() {
  let mapping = dialogueMapping[gameScene];
  let idxVar = mapping.idxVar;
  if (window[idxVar] < mapping.arr.length - 1) {
    window[idxVar]++;
  }
}

//─────────────────────────────────────
// 重置指定場景的對話索引為 1
//─────────────────────────────────────
function resetDialogueIndexForScene(scene) {
  let mapping = dialogueMapping[scene];
  if (mapping) {
    window[mapping.idxVar] = 1;
  }
}

//─────────────────────────────────────
// 判斷目前場景是否為決策場景（依轉場設定，若左右結果不同則為決策場景）
//─────────────────────────────────────
function isDecisionScene(scene) {
  if (transitions[scene]) {
    return transitions[scene].z !== transitions[scene].x;
  }
  return false;
}

//─────────────────────────────────────
// 繪製對話區
//─────────────────────────────────────
function drawDialogue(bgImg) {
  if (bgImg) {
    image(bgImg, 0, 0);
  }
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  
  // 預設提示文字：always "- click to continue -"
  let prompt = "- click to continue -";
  
  // 若為決策場景且已進到最後一筆，則改提示並顯示決策按鈕
  let mapping = dialogueMapping[gameScene];
  let idx = window[mapping.idxVar];
  if (isDecisionScene(gameScene) && idx === mapping.arr.length - 1) {
    prompt = "- click a choice -";
    drawDecisionButtons();
  }
  
  text(prompt, 248, 40);
  
  let textContent = getCurrentDialogue();
  text(textContent, 28, 350);
}

// 初始場景（gameScene 0）使用
function drawBaseScene() {
  drawDialogue(alienlabImg);
}

//─────────────────────────────────────
// 決策按鈕繪製：依照目前 gameScene 畫出左右兩個按鈕
//─────────────────────────────────────
function drawDecisionButtons() {
  // 依據目前場景決定按鈕標題（此例只用在 scene 0 與 scene 7）
  let leftText = "", rightText = "";
  if (gameScene === 0) {
    leftText = "Talk to aliens";
    rightText = "Observe silently";
  } else if (gameScene === 7) {
    leftText = "Scream";
    rightText = "Pace around";
  } else {
    leftText = "Option 1";
    rightText = "Option 2";
  }
  
  // 畫出左側按鈕
  fill(50, 150, 50);
  rect(decisionLeftButton.x, decisionLeftButton.y, decisionLeftButton.w, decisionLeftButton.h, 5);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(leftText, decisionLeftButton.x + decisionLeftButton.w/2, decisionLeftButton.y + decisionLeftButton.h/2);
  
  // 畫出右側按鈕
  fill(50, 50, 150);
  rect(decisionRightButton.x, decisionRightButton.y, decisionRightButton.w, decisionRightButton.h, 5);
  fill(255);
  text(rightText, decisionRightButton.x + decisionRightButton.w/2, decisionRightButton.y + decisionRightButton.h/2);
  
  textAlign(LEFT, BASELINE); // 恢復預設
}

//─────────────────────────────────────
// 特殊場景繪製（帶透明度效果）
//─────────────────────────────────────
function drawTranquilizerScene() {
  push();
  if (transparency2 > 0) transparency2 -= 0.9;
  tint(255, transparency2);
  image(alientranquilizerImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawDialogue(null);
}

function drawBBScene() {
  push();
  if (transparency3 < 255) transparency3 += 1.9;
  tint(255, transparency3);
  image(withoutalienlabImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawDialogue(null);
}

function drawJJScene() {
  push();
  if (transparency4 > 0) transparency4 -= 0.45;
  tint(255, transparency4);
  image(ruinImg, 0, 0);
  pop();
  drawDialogue(null);
}

function drawKKScene() {
  push();
  if (transparency5 < 255) transparency5 += 0.55;
  tint(transparency5, 255);
  image(alienImg, 0, 0);
  pop();
  drawDialogue(null);
}

function drawHHScene() {
  push();
  if (transparency6 > 0) transparency6 -= 0.45;
  tint(255, transparency6);
  image(alienlabImg, 0, 0);
  image(barsImg, 0, 0);
  pop();
  drawDialogue(null);
}

function drawNNScene() {
  push();
  if (transparency7 < 255) transparency7 += 0.4;
  tint(255, transparency7);
  image(meerkatreflectionImg, 0, 0);
  pop();
  drawDialogue(null);
}

//─────────────────────────────────────
// 輸入處理：僅以滑鼠點擊推進
//─────────────────────────────────────
function mousePressed() {
  // 封面點空白區域同樣以滑鼠點擊開始遊戲（也可用空白鍵啟動）
  if (sceneNumber === 0) {
    sceneNumber = 1;
    gameScene = 0;
    return;
  }
  
  if (sceneNumber === 1) {
    let mapping = dialogueMapping[gameScene];
    let idx = window[mapping.idxVar];
    
    // 若為決策場景且已推進到最後一筆，則檢查是否點擊到按鈕區
    if (isDecisionScene(gameScene) && idx === mapping.arr.length - 1) {
      // 檢查是否點擊在左按鈕
      if (mouseX >= decisionLeftButton.x && mouseX <= decisionLeftButton.x + decisionLeftButton.w &&
          mouseY >= decisionLeftButton.y && mouseY <= decisionLeftButton.y + decisionLeftButton.h) {
        let nextScene = transitions[gameScene].z;
        gameScene = nextScene;
        resetDialogueIndexForScene(gameScene);
        return;
      }
      // 檢查是否點擊在右按鈕
      if (mouseX >= decisionRightButton.x && mouseX <= decisionRightButton.x + decisionRightButton.w &&
          mouseY >= decisionRightButton.y && mouseY <= decisionRightButton.y + decisionRightButton.h) {
        let nextScene = transitions[gameScene].x;
        gameScene = nextScene;
        resetDialogueIndexForScene(gameScene);
        return;
      }
      // 若在決策場景最後一筆但點擊在按鈕外，則不做任何事
      return;
    }
    
    // 非決策場景或還未到最後一筆：若還有對話，則推進；否則自動轉場
    if (idx < mapping.arr.length - 1) {
      advanceDialogue();
    } else {
      // 非決策場景對話推完後，自動根據轉場設定（左右結果相同）進入下一場景
      let nextScene = transitions[gameScene] ? transitions[gameScene].z : gameScene;
      gameScene = nextScene;
      resetDialogueIndexForScene(gameScene);
    }
  }
}

//─────────────────────────────────────
// 文字框類別
//─────────────────────────────────────
class Textbox {
  showTextbox() {
    stroke(255);
    fill(0);
    rect(15, 330, 680, 50);
    noStroke();
    fill(255);
    textSize(14);
  }
}
