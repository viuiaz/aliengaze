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

// 對話陣列 (完整保留原始內容)
let s=[], a=[], d=[], f=[], g=[], h=[],
    j=[], k=[], l=[], q=[], w=[], e=[],
    bb=[], ss=[], ii=[], oo=[], cc=[],
    jj=[], kk=[], vv=[], hh=[], nn=[], mm=[];

// 索引控制 (採 1 為起始索引)
let i=1, u=1, y=1, ee=1, r=1, t=1, qq=1, aa=1, b=1, c=1;
let dd=1, ff=1, gg=1, sss=1, iii=1, ooo=1, ccc=1, jjj=1;
let kkk=1, vvv=1, hhh=1, nnn=1, mmm=1;

//─────────────────────────────────────
// 轉場設定（轉場表）：僅使用 z 與 x 兩個選項
//─────────────────────────────────────
const transitions = {
  0: { z: 1, x: 2 },
  1: { z: 3, x: 3 },
  2: { z: 3, x: 3 },
  3: { z: 4, x: 4 },
  4: { z: 5, x: 5 },
  5: { z: 6, x: 6 },
  6: { z: 7, x: 7 },
  7: { z: 8, x: 9 },  // 分岔點：按 z 與 x 導向不同後續
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
// 各場景對話內容所屬的陣列與對應的索引變數名稱
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

  // 初始化所有對話內容（原始內容不變，只是提示文字中的按鍵改為 z 與 x）
  s[1] = "..."; s[2] = "... What?"; s[3] = "What is happening?";
  s[4] = "Where am I? What are they?"; s[5] = "Are those... aliens?";
  s[6] = "..."; s[7] = "... Am I dreaming?";
  s[8] = "What are they doing? Are they looking at me?";
  s[9] = "Wait. Why am I behind the bars? Am I in a cage?";
  s[10] = "... What should I do?";
  s[11] = "press [z] to try to talk to the aliens / press [x] to observe silently";

  a[1] = "'Hey! What do you want?'"; a[2] = "...";
  a[3] = "They just keep staring at me without saying anything.";
  a[4] = "press [z] to sit in the corner and observe";

  d[1] = "I'll just wait and see what's going to happen.";
  d[2] = "press [z] to sit in the corner and observe";

  f[1] = "!"; f[2] = "Oh! No one's here now."; f[3] = "What should I do?";
  f[4] = "press [z] to crash the bars / press [x] to squeeze through the bars";

  g[1] = "After hours of waiting, I fell asleep.";
  g[2] = "press [z] to wake up";

  h[1] = "Ahhh... It hurts.. Maybe I should stop.";
  h[2] = "*footstep sounds*";
  h[3] = "...";
  h[4] = "... They are back! I don't know what they will do to me...";
  h[5] = "press [z] to cower in the corner";

  j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
  j[2] = "...What are they even saying? Please speak English!";
  j[3] = "press [z] to listen carefully";
    
  k[1] = "...When I got closer, they stopped talking.";
  k[2] = "...";
  k[3] = "And how many aliens are there?";
  k[4] = "What did I do to deserve this?";
  k[5] = "What should I do?";
  k[6] = "press [z] to scream / press [x] to pace around";

  l[1] = "'Ahhhhhhh!'";
  l[2] = "'Stop staring! Let me out!'";
  l[3] = "'What did I do... I'm just an ordinary person...'";
  l[4] = "'Please let me out...'";
  l[5] = "One of them frowned a little, but still... nothing happens.";
  l[6] = "I'm starting to feel a little tired after the yelling...";
  l[7] = "press [z] to rest in the corner";

  q[1] = "I started to walk around...";
  q[2] = "I felt that this helped to alleviate some of my anxiety.";
  q[3] = "...";
  q[4] = "One of them frowned a little, but still... nothing happens.";
  q[5] = "I'm starting to feel a little tired.";
  q[6] = "press [z] to rest in the corner";

  w[1] = "Now it's just me... and them.";
  w[2] = "Again.";
  w[3] = "Should I do something to draw their attention?";
  w[4] = "I've had enough of waiting.";
  w[5] = "What should I do?";
  w[6] = "press [z] to hit the wall with my head / press [x] to crazy pluck my hair";

  e[1] = "... Hurting myself actually feels good.. haha...";
  e[2] = "... Wait! It's coming towards me!";
  e[3] = "What is it going to do?";
  e[4] = "... Is that a... syringe?";
  e[5] = "'Wait! I'll stop! Please don't hurt me!'";
  e[6] = "I keep yelling but it just keeps getting closer...";
  e[7] = "...!";
  e[8] = "It grabs my arm and injects something inside...";
  e[9] = "... Getting... sleepy... again.";
  e[10] = "...";
  e[11] = "press [z] to wake up";

  bb[1] = "I don't know how long I slept...";
  bb[2] = "But it seems like no one's around.";
  bb[3] = "I still have no idea why I am here.";
  bb[4] = "Did I do something bad?";
  bb[5] = "What happened to my family?";
  bb[6] = "Are they also caged somewhere in here...?";
  bb[7] = "I don't understand.";
  bb[8] = "...";
  bb[9] = "'Hello...?'";
  bb[10] = "...";
  bb[11] = "No one's here. Maybe this is my chance to escape?";
  bb[12] = "I move closer to the bars and look around.";
  bb[13] = "...";
  bb[14] = "Wait! There is something on the floor...";
  bb[15] = "It was blocked by the bars before.";
  bb[16] = "Now that I moved closer I can see it.";
  bb[17] = "Is that the key...? Why is it there?";
  bb[18] = "Did the alien that frowned drop the key...?";

  bb[19] = "That spot is exactly where it stood...";
  bb[20] = "It's funny I am sympathized with by an alien.";
  bb[21] = "What should I do?";
  bb[22] = "press [z] to use the key / press [x] to stay as a sitting duck";

  ss[1] = "This will be my only chance.";
  ss[2] = "I squatted down and grabbed the key.";
  ss[3] = "... It took some time to unlock the lock from the inside.";
  ss[4] = "... ";
  ss[5] = "The door lock is finally opened...";
  ss[6] = "I don't even know what to feel after these uncountable days...";
  ss[7] = "...";
  ss[8] = "I ran out immediately without a second thought.";
  ss[9] = "press [z] to get out";

  ii[1] = "I don't believe I'll have the chance to get out...";
  ii[2] = "Maybe staying here is the best option.";
  ii[3] = "I still have food...";
  ii[4] = "Although I cannot see my family...";
  ii[5] = "It's still better to stay.";
  ii[6] = "Right?";
  ii[7] = "...";
  ii[8] = "I trust my decision...";
  ii[9] = "I trust my decision...?";
  ii[10] = "Really?";
  ii[11] = "Of course not! I have to get out!";
  ii[12] = "press [z] to escape";

  oo[1] = "...";
  oo[2] = "...What in the world?";
  oo[3] = "What happened?";
  oo[4] = "It doesn't look like the place I've been before...";
  oo[5] = "press [z] to look around";

  cc[1] = "...";
  cc[2] = "What is wrong with the world right now?";
  cc[3] = "Why does everything just look like ruins?";
  cc[4] = "How can I survive in this all by myself?";
  cc[5] = "... Did I make the wrong decision?";
  cc[6] = "...";
  cc[7] = "Can anyone help...";
  cc[8] = "......";
  cc[9] = "press [z] to try and survive";

  jj[1] = "I'll try...";
  jj[2] = "I finally got out! I have to at least try.";
  jj[3] = "Why is it really nothing?";
  jj[4] = "No humans... no animals... no signs of anything.";
  jj[5] = "...";
  jj[6] = "...";
  jj[7] = "I tried to walk around and find something for days.";
  jj[8] = "After days of hunger, I cannot take it anymore.";
  jj[9] = "I leaned against a random wall...";
  jj[10] = "I'll simply wait for my life to end here.";
  jj[11] = "I closed my eyes.";
  jj[12] = "...";
  jj[13] = "*footstep sounds*";
  jj[14] = "What...?";
  jj[15] = "press [z] to open my eyes";

  kk[1] = "...Haha.";
  kk[2] = "It's them again.";
  kk[3] = "'Gni&pacsep@otS!.uoy*eucse2r^ot#ereh1era3ew'";
  kk[4] = "...Is something wrong with me?";
  kk[5] = "It's funny how I felt relieved by their presence.";
  kk[6] = "Maybe this is the only way to survive now...";
  kk[7] = "Is it better to be imprisoned than to starve to death?";
  kk[8] = "press [z] to close my eyes and let them abduct me again";

  vv[1] = "...";
  vv[2] = "Of course... Here they are.";
  vv[3] = "I still have no idea what they want from me.";
  vv[4] = "How can just staring at me make any difference to them?";
  vv[5] = "At first, I thought they were going to do tests on me.";
  vv[6] = "But it turns out they just love to stare at me.";
  vv[7] = "...";
  vv[8] = "press [z] to sit in the corner";

  hh[1] = "I guess I'll just be in this cage for the rest of my life...";
  hh[2] = "It's still better than the outside world, right?";
  hh[3] = "I wonder what happened to the rest of the world.";
  hh[4] = "And how did I even get here.";
  hh[5] = "Let me think of the last memory I remembered...";
  hh[6] = "It's a place full of sands...";
  hh[7] = "And I always sleep in a very dark space.";
  hh[8] = "...";
  hh[9] = "Wait... trying to remember all the details hurts my head.";
  hh[10] = "Ugh...";
  hh[11] = "press [z] to crouch down";

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
  nn[16] = "press [z] to face the reality";

  mm[1] = "....";
  mm[2] = "So, I am just a meerkat...?";
  mm[3] = "That's why the last memory I have is in a dessert...";
  mm[4] = "... Haha.";
  mm[5] = "How funny is this.";
  mm[6] = "Even though it was a dream...";
  mm[7] = "I am still being trapped and caged in real life.";
  mm[8] = "And how did I even dream of being a human?";
  mm[9] = "How dare I?";
  mm[10] = "They are the ones that put me here, and caged me forever...";
  mm[11] = "The thought of becoming one of them is disgusting.";
  mm[12] = "Will I plan on escaping just like in the dream?";
  mm[13] = "Well.";
  mm[14] = "I am just a meerkat.";
  mm[15] = "What can I do?";
  mm[16] = ".";
  mm[17] = ".";
  mm[18] = ".";
  mm[19] = ".";
  mm[20] = ".";
  mm[21] = ".";
  mm[22] = ".";
  mm[23] = ".";
  mm[24] = "Oh, why are you still here?";
  mm[25] = "You can't do anything for me.";
  mm[26] = "So, please...";
  mm[27] = "Just leave me alone.";

  // 初始化文字框
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
// 輔助函式
//─────────────────────────────────────

// 取得目前場景的對話內容
function getCurrentDialogue() {
  let mapping = dialogueMapping[gameScene];
  if (mapping && mapping.arr) {
    let idx = window[mapping.idxVar];
    return mapping.arr[idx] || "";
  }
  return "";
}

// 前進目前場景的對話（僅前進當前對話指標）
function advanceDialogue() {
  let mapping = dialogueMapping[gameScene];
  if (mapping && mapping.arr) {
    let idxVar = mapping.idxVar;
    // 如果尚未到該陣列最後一筆，則前進
    if (window[idxVar] < mapping.arr.length - 1) {
      window[idxVar]++;
    }
  }
}

// 重置指定場景的對話指標為 1
function resetDialogueIndexForScene(scene) {
  let mapping = dialogueMapping[scene];
  if (mapping) {
    window[mapping.idxVar] = 1;
  }
}

// 判斷目前場景是否為分岔（決策）場景：若 z 與 x 指向不同下一場景，則為決策場景
function isDecisionScene(scene) {
  if (transitions[scene]) {
    return transitions[scene].z !== transitions[scene].x;
  }
  return false;
}

//─────────────────────────────────────
// 繪製對話區（可帶背景圖）
function drawDialogue(bgImg) {
  if (bgImg) {
    image(bgImg, 0, 0);
  }
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- press z or x to continue -", 248, 40);
  let textContent = getCurrentDialogue();
  text(textContent, 28, 350);
}

// 繪製初始場景（gameScene 0）
function drawBaseScene() {
  // 以 alien lab 背景呈現初始對話
  drawDialogue(alienlabImg);
}

//─────────────────────────────────────
// 特殊場景：調整透明度並呈現背景後再顯示對話
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
// 4. 輸入處理
//─────────────────────────────────────
function mousePressed() {
  if (sceneNumber === 1) {
    // 非決策場景下，滑鼠點擊僅用於推進目前對話
    if (!isDecisionScene(gameScene)) {
      advanceDialogue();
    }
  }
}

function keyPressed() {
  // 封面：按空白鍵進入遊戲
  if (sceneNumber === 0 && key === ' ') {
    sceneNumber = 1;
    gameScene = 0; // 初始場景
    return;
  }
  // 正式遊戲中僅對 z 與 x 做處理
  if (sceneNumber === 1 && (key === 'z' || key === 'x')) {
    let currentText = getCurrentDialogue();
    // 若目前場景為決策場景，或對話已讀完（回傳空字串），則切換場景
    if (isDecisionScene(gameScene) || currentText === "") {
      let nextScene = transitions[gameScene] ? transitions[gameScene][key] : gameScene;
      gameScene = nextScene;
      resetDialogueIndexForScene(gameScene);
    }
  }
}

//─────────────────────────────────────
// 5. 文字框類別
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
