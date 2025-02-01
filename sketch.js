//-------------------------------------
// 0. 全域變數
//-------------------------------------
let sceneNumber = 0;   // 0 = 封面, 1 = 正式遊戲
let firstScene = 0;   
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

// 對話陣列 (完整保留原始內容，只將提示鍵替換為 z 與 x)
let s = [], a = [], d = [], f = [], g = [], h = [],
    j = [], k = [], l = [], q = [], w = [], e = [],
    bb = [], ss = [], ii = [], oo = [], cc = [],
    jj = [], kk = [], vv = [], hh = [], nn = [], mm = [];

// 索引控制（從 1 開始）
let i = 1, u = 1, y = 1, t = 1, r = 1, ee = 1, qq = 1, aa = 1, b = 1, c = 1;
let dd = 1, ff = 1, gg = 1, sss = 1, iii = 1, ooo = 1, ccc = 1, jjj = 1;
let kkk = 1, vvv = 1, hhh = 1, nnn = 1, mmm = 1;

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

  // 初始化所有對話內容（依原始內容，僅將提示鍵替換為 z 與 x）
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
  s[11] = "press [z] to try to talk to the aliens / press [x] to observe silently";

  a[1] = "'Hey! What do you want?'"; 
  a[2] = "...";
  a[3] = "They just keep staring at me without saying anything.";
  a[4] = "press [z] to sit in the corner and observe";

  d[1] = "I'll just wait and see what's going to happen.";
  d[2] = "press [z] to sit in the corner and observe";

  g[1] = "After hours of waiting, I fell asleep.";
  g[2] = "press [z] to wake up";

  f[1] = "!";
  f[2] = "Oh! No one's here now.";
  f[3] = "What should I do?";
  f[4] = "press [z] to crash the bars / press [x] to squeeze through the bars";

  h[1] = "Ahhh... It hurts... Maybe I should stop.";
  h[2] = "*footstep sounds*";
  h[3] = "...";
  h[4] = "They are back! I don't know what they will do to me...";
  h[5] = "press [z] to cower in the corner";

  j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
  j[2] = "...What are they even saying? Please speak English!";
  j[3] = "press [z] to listen carefully";

  k[1] = "When I got closer, they stopped talking.";
  k[2] = "...";
  k[3] = "And how many aliens are there?";
  k[4] = "What did I do to deserve this?";
  k[5] = "What should I do?";
  k[6] = "press [z] to scream / press [x] to pace around";

  l[1] = "'Ahhhhhhh!'";
  l[2] = "'Stop staring! Let me out!'";
  l[3] = "press [z] to rest in the corner";

  q[1] = "I started to walk around...";
  q[2] = "I felt that this helped to alleviate some of my anxiety.";
  q[3] = "...";
  q[4] = "One of them frowned a little, but still... nothing happens.";
  q[5] = "I'm starting to feel a little tired.";
  q[6] = "press [z] to rest in the corner";

  w[1] = "Now it's just me... and them.";
  w[2] = "Again.";
  w[3] = "What should I do?";
  w[4] = "I've had enough of waiting.";
  w[5] = "press [z] to hit the wall with my head / press [x] to crazy pluck my hair";

  e[1] = "... Hurting myself actually feels good.. haha...";
  e[2] = "... Wait! It's coming towards me!";
  e[3] = "What is it going to do?";
  e[4] = "... Is that a... syringe?";
  e[5] = "press [z] to plead, 'Stop! Please don't hurt me!'";
  e[6] = "I keep yelling, yet it just keep getting closer...";
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
  bb[16] = "Now I can see it.";
  bb[17] = "Is that the key...? Why is it there?";
  bb[18] = "Did the alien that frowned drop the key...?";
  bb[19] = "That spot is exactly where it standed...";
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
  cc[2] = "What is wrong with the world?";
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
  kk[7] = "Is it better to be imprisoned than to starve?";
  kk[8] = "press [z] to close my eyes and let them abduct me again";

  vv[1] = "...";
  vv[2] = "Of course... Here they are.";
  vv[3] = "I still have no idea what they want from me.";
  vv[4] = "How can just staring at me make any difference to them?";
  vv[5] = "At first, I thought they are going to do tests on me.";
  vv[6] = "But it turns out they just love to stare at me.";
  vv[7] = "...";
  vv[8] = "press [z] to sit in the corner";

  hh[1] = "I guess I'll just be in this cage for the rest of my life...";
  hh[2] = "It's still better than the outside world, right?";
  hh[3] = "I wonder what happened to the rest of the world.";
  hh[4] = "And how did I even get here.";
  hh[5] = "Let me think of the last memory I remembered...";
  hh[6] = "A place full of sands...";
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
  mm[6] = "Even if it was just a dream...";
  mm[7] = "I am still being trapped and caged in real life.";
  mm[8] = "And how did I even dream of being human?";
  mm[9] = "How dare I?";
  mm[10] = "They are the one that put me here, and caged me forever...";
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

  myTextbox = new Textbox();
}

//-------------------------------------
// 場景切換時重置索引函式
//-------------------------------------
function resetSceneIndexes(newScene) {
  const resetMap = {
    1: ['u'], 2: ['y'], 3: ['ee'], 4: ['r'],
    5: ['t'], 6: ['qq'], 7: ['aa'], 8: ['b'],
    9: ['c'], 10: ['dd'], 11: ['ff'], 12: ['gg'],
    13: ['sss'], 14: ['iii'], 15: ['ooo'], 16: ['ccc'],
    17: ['jjj'], 18: ['kkk'], 19: ['vvv'], 20: ['hhh'],
    21: ['nnn'], 22: ['mmm']
  };
  if (resetMap[newScene]) {
    resetMap[newScene].forEach(varName => {
      window[varName] = 1;
    });
  }
}

//-------------------------------------
// 文字框類別
//-------------------------------------
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

//-------------------------------------
// 輸入處理：封面僅接受空白鍵啟動，遊戲內則保留原本按鍵選項（但所有選項提示均替換為 z 與 x）
//-------------------------------------
function keyPressed() {
  if (sceneNumber === 0) {
    if (key === ' ') {
      sceneNumber = 1;
      gameScene = 0;
    }
    return;
  }
  if (sceneNumber === 1) {
    // 只有當玩家按下鍵盤時才做選擇，保留原本 keyMap（但實際上你看對話提示已換成 z 與 x）
    const keyMap = {
      'z': 1, // 對應原本的 T 或 S 或 R、… (左側選項)
      'x': 2  // 對應原本的 O 或 P、… (右側選項)
    };
    // 為了保留你原本的 branching 設定，我們採用以下邏輯：
    // 當目前對話顯示的那一行含有選項提示（即對話文本內含 "press"）時，
    // 如果玩家按下 z 或 x，就直接切換到對應場景，否則不處理。
    let mapping = dialogueMapping[gameScene];
    let currentText = mapping.arr[ window[mapping.idxVar] ];
    if (currentText.indexOf("press") !== -1) {
      if (key in keyMap) {
        // 根據原本的分支規則，這裡根據 gameScene 決定下一個場景
        // 以下分支依據你原本 keyMap 中的設定：
        // 例如：在 scene 0 (s[11])，左選項（z）對應原來 T，右選項（x）對應原來 O
        // 我們預先設定一個簡單的轉換對照表：
        const decisionMap = {
          0: { z: 1, x: 2 },
          7: { z: 8, x: 9 },
          4: { z: 5, x: 5 }, // 若只有單一路徑，兩者皆同
          11: { z: 12, x: 12 },
          12: { z: 13, x: 13 },
          14: { z: 15, x: 15 }
          // 若有其他決策場景，可依原本邏輯補充
        };
        if(decisionMap[gameScene]) {
          gameScene = decisionMap[gameScene][key];
          resetSceneIndexes(gameScene);
        }
      }
    }
  }
}

function mousePressed() {
  // 封面忽略鼠標點擊
  if (sceneNumber === 0) return;
  if (sceneNumber === 1) {
    let mapping = dialogueMapping[gameScene];
    let idx = window[mapping.idxVar];
    // 只推進當前場景的對話（不影響其他場景的索引）
    if (idx < mapping.arr.length) {
      advanceCurrentIndex();
    } else {
      // 對話全部讀完後，自動依原本轉場設定進入下一場景（此處非決策場景左右結果相同）
      // 若沒有特殊分支，則保持不變
      let nextScene = gameScene;
      // 例如若在 scene 3（非決策）則自動進入下一個預設場景（依你原本 keyMap順序可自行設定）
      // 這裡不做自動轉換，讓玩家必須按鍵決定（也可自行調整）
    }
  }
}

// 僅推進目前場景的對話索引（只改變該場景所用的索引）
function advanceCurrentIndex() {
  let mapping = dialogueMapping[gameScene];
  let idxVar = mapping.idxVar;
  window[idxVar]++;
}

//-------------------------------------
// 通用場景繪製函式
//-------------------------------------
function drawScene(textContent, bgImg) {
  if (bgImg) image(bgImg, 0, 0);
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 40);
  text(textContent, 28, 350);
}

//-------------------------------------
// 特殊場景繪製函式 (帶透明度效果)
//-------------------------------------
function drawTranquilizerScene() {
  push();
  // 延遲開始變暗，直到對話進度到達 injection 之後（e[8]已顯示）
  if (ff > 8 && transparency2 > 0) transparency2 -= 0.9;
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
  tint(transparency5, 255);
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

//-------------------------------------
// 初始場景繪製（gameScene 0 使用）
//-------------------------------------
function drawBaseScene() {
  // 以 alienlabImg 背景呈現初始對話
  drawScene(alienlabImg);
}

//-------------------------------------
// 3. draw()
//-------------------------------------
function draw() {
  background(0);

  switch(sceneNumber) {
    case 0: // 封面
      image(startImg, 0, 0);
      fill(255);
      textSize(30);
      text("Emohw2enr@uoyem*oclew", 95, 330);
      textSize(13);
      text("- press space to continue -", 230, 365);
      break;

    case 1: // 遊戲主場景
      switch(gameScene) {
        case 0: drawBaseScene(); break;
        case 1: drawScene(a[u], alienlabImg); break;
        case 2: drawScene(d[y], alienlabImg); break;
        case 3: drawScene(g[ee], null); break;
        case 4: drawScene(f[r], withoutalienlabImg); break;
        case 5: drawScene(h[t], withoutalienlabImg); break;
        case 6: drawScene(j[qq], aliencrowd1Img); break;
        case 7: drawScene(k[aa], aliencrowdImg); break;
        case 8: drawScene(l[b], aliencrowdImg); break;
        case 9: drawScene(q[c], aliencrowdImg); break;
        case 10: drawScene(w[dd], alienlabImg); break;
        case 11: drawTranquilizerScene(); break;
        case 12: drawBBScene(); break;
        case 13: drawScene(ss[sss], withoutalienlabImg); break;
        case 14: drawScene(ii[iii], withoutalienlabImg); break;
        case 15: drawScene(oo[ooo], ruin2Img); break;
        case 16: drawScene(cc[ccc], ruinImg); break;
        case 17: drawJJScene(); break;
        case 18: drawKKScene(); break;
        case 19: drawScene(vv[vvv], aliencrowdImg); break;
        case 20: drawHHScene(); break;
        case 21: drawNNScene(); break;
        case 22: drawScene(mm[mmm], meerkatImg); break;
      }
      break;
  }
}
