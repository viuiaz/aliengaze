//------------------------------
// 0. 全域變數
//------------------------------
var sceneNumber = 0;    // 0 = 封面, 1 = 正式遊戲
var gameScene = 0;      // 正式遊戲中的場景編號
var alphaLab = 255;       // 普通實驗室的透明度
var alphaTranquil = 0;    // tranquilizer 圖片的透明度
var isFading = false;     // 是否正在進行淡入
var alphaBlack = 0;       // 負責黑幕的透明度
var isFadingBlack = false; // 是否已經開始淡入黑幕

// 透明度控制（特殊場景用）
var transparency2 = 255, transparency3 = 0;
var transparency4 = 255, transparency5 = 0, transparency6 = 255, transparency7 = 0;

// 圖片資源
var startImg, alienlabImg, barsImg, withoutalienlabImg;
var aliencrowd1Img, aliencrowdImg, alientranquilizerImg, alientranquilizer2Img;
var ruinImg, ruin2Img, alienImg, meerkatreflectionImg, meerkatImg;

// 字體
var SuperLegendBoy;

// 對話陣列（完全保留原始內容）
var s = [], a = [], d = [], f = [], g = [], h = [],
    j = [], k = [], l = [], q = [], w = [], e = [],
    bb = [], ss = [], ii = [], oo = [], cc = [],
    jj = [], kk = [], vv = [], hh = [], nn = [], mm = [];

// 各場景對話索引（從 1 開始），請用 var 以便 window[...] 正確取值
var i = 1, u = 1, y = 1, t = 1, r = 1, ee = 1, qq = 1, aa = 1, b = 1, c = 1;
var dd = 1, ff = 1, gg = 1, sss = 1, iii = 1, ooo = 1, ccc = 1, jjj = 1;
var kkk = 1, vvv = 1, hhh = 1, nnn = 1, mmm = 1;

//------------------------------
// 決策場景分支對照表（所有含 "press" 的對話均視為決策，僅在最後一行才接受鍵盤輸入）
//------------------------------
var decisionMap = {
  0: { z: 1, x: 2 },      // s[11] in scene 0
//  2: { z: 3, x: 3 },      // d[2] in scene 2
  4: { z: 5, x: 5 },      // f[4] in scene 4
  5: { z: 6, x: 6 },      // h[5] in scene 5
//  6: { z: 7, x: 7 },      // j[3] in scene 6
  7: { z: 8, x: 9 },      // k[6] in scene 7
//  8: { z: 10, x: 9 },      // l[3] in scene 8
//  9: { z: 10, x: 10 },    // q[6] in scene 9
  10: { z: 11, x: 11 },   // w[5] in scene 10
  11: { z: 12, x: 12 },   // e[11] in scene 11
  12: { z: 13, x: 14 },   // bb[22] in scene 12
//  13: { z: 15, x: 15 },   // ss[9] in scene 13 ("press [z] to get out")
//  14: { z: 15, x: 15 },   // ii[12] in scene 14
//  15: { z: 16, x: 16 },   // oo[5] in scene 15
//  16: { z: 17, x: 17 },   // cc[9] in scene 16 ("press [z] to try and survive")
//  17: { z: 18, x: 18 },   // jj[15] in scene 17
//  18: { z: 19, x: 19 },   // kk[8] in scene 18
//  19: { z: 20, x: 20 },   // vv[8] in scene 19
//  21: { z: 22, x: 22 }    // nn[16] in scene 21
};

//------------------------------
// 轉場設定（非決策場景中，對話讀完後自動切換；左右結果相同）
//------------------------------
var transitions = {
  1: { z: 3, x: 3 },
  2: { z: 3, x: 3 },
  3: { z: 4, x: 4 },
  5: { z: 6, x: 6 },
  6: { z: 7, x: 7 },
  8: { z: 10, x: 10 },
  9: { z: 10, x: 10 },
  10: { z: 11, x: 11 },
  11: { z: 12, x: 12 },
  13: { z: 15, x: 15 },
  14: { z: 15, x: 15 },
  15: { z: 16, x: 16 },
  16: { z: 17, x: 17 },
  17: { z: 18, x: 18 },
  18: { z: 19, x: 19 },
  19: { z: 20, x: 20 },
  20: { z: 21, x: 21 },
  21: { z: 22, x: 22 },
  22: { z: 23, x: 23 }  // scene 23 為結尾
};

//------------------------------
// 1. preload()
//------------------------------
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

//------------------------------
// 2. setup()
//------------------------------
function setup() {
  createCanvas(700, 394);
  textFont(SuperLegendBoy);
  textWrap(WORD);
  textLeading(16);
  background(0);

  // 初始化對話內容（完全保留原始文本，僅將提示鍵改為 z 與 x）
  s[1] = "...";
  s[2] = "... What?";
  s[3] = "What is happening?";
  s[4] = "Where am I? What are they?";
  s[5] = "Are those... aliens?";
  s[6] = "No, that can't be... right?";
  s[7] = "... Am I dreaming?";
  s[8] = "What are they doing? Are they looking at me?";
  s[9] = "Wait. Why am I behind the bars? Am I in a cage?";
  s[10] = "No, no... This isn't right. I need to think.";
  s[11] = "press [z] to try to talk to the aliens / press [x] to observe silently";

  a[1] = "'Hey! What do you want?'";
  a[2] = "They watch me—unblinking, unmoving.";
  a[3] = "Like I'm some kind of experiment.";
  a[4] = "I sat in the corner, trying to figure out what they might do next.";

  d[1] = "I'll just wait and see what's going to happen.";
//  d[2] = "press [z] to sit in the corner and observe";

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
  h[5] = "I shrank into the corner, my heart pounding.";

  j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
  j[2] = "...What are they even saying?";
  j[3] = "I leaned in, trying to make sense of their strange words.";

  k[1] = "When I got closer, they stopped talking.";
  k[2] = "...";
  k[3] = "And how many aliens are there?";
  k[4] = "What did I do to deserve this?";
  k[5] = "What should I do?";
  k[6] = "press [z] to scream / press [x] to pace around";

  l[1] = "'Ahhhhhhh!'";
  l[2] = "'Stop staring! Let me out!'";
  l[3] = "I curled up in the corner.";

  q[1] = "I started to walk around...";
  q[2] = "I felt that this helped to alleviate some of my anxiety.";
  q[3] = "One of them frowned, just slightly...";
  q[4] = "A hint of... something? Concern? Amusement?";
  q[5] = "I'm starting to feel a little tired.";
  q[6] = "I sighed and sank into the corner.";

  w[1] = "Now it's just me... and them.";
  w[2] = "Again.";
  w[3] = "What should I do?";
  w[4] = "I've had enough of waiting.";
  w[5] = "press [z] to slam my head against the wall / press [x] to claw at my scalp, rip away the panic"

  e[1] = "Pain... is the only thing that still feels real.";
  e[2] = "... Wait! It's coming towards me!";
  e[3] = "What is it going to do?";
  e[4] = "... Is that a syringe?";
  e[5] = "I plead, 'Stop! Please don't hurt me!'";
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
  bb[11] = "No one's here. Maybe this is my chance to escape.";
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
  bb[22] = "press [z] to take the key and risk everything / press [x] to stay—maybe this is safer...";

  ss[1] = "This will be my only chance.";
  ss[2] = "I squatted down and grabbed the key.";
  ss[3] = "... It took some time to unlock the lock from the inside.";
  ss[4] = "... ";
  ss[5] = "The door lock is finally opened...";
  ss[6] = "I don't even know what to feel after these uncountable days...";
  ss[7] = "...";
  ss[8] = "I ran out immediately without a second thought.";

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

  oo[1] = "...";
  oo[2] = "...What in the world?";
  oo[3] = "What happened?";
  oo[4] = "It doesn't look like the place I've been before...";

  cc[1] = "...";
  cc[2] = "What is wrong with the world?";
  cc[3] = "Why does everything just look like ruins?";
  cc[4] = "How can I survive in this all by myself?";
  cc[5] = "... Did I make the wrong decision?";
  cc[6] = "...";
  cc[7] = "Can anyone help...";
  cc[8] = "......";

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

  kk[1] = "...Haha.";
  kk[2] = "It's them again.";
  kk[3] = "'Gni&pacsep@otS!.uoy*eucse2r^ot#ereh1era3ew'";
  kk[4] = "...Is something wrong with me?";
  kk[5] = "It's funny how I felt relieved by their presence.";
  kk[6] = "Maybe this is the only way to survive now...";
  kk[7] = "Is it better to be imprisoned than to starve?";
  kk[8] = "I closed my eyes, surrendering to my fate.";

  vv[1] = "...";
  vv[2] = "Of course... Here they are.";
  vv[3] = "I still have no idea what they want from me.";
  vv[4] = "How can just staring at me make any difference to them?";
  vv[5] = "At first, I thought they are going to do tests on me.";
  vv[6] = "But it turns out they just love to stare at me.";
  vv[7] = "There was no escape.";
  vv[8] = "I sank into the corner, trapped in their gaze.";

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
  hh[11] = "I crouched down, holding my head.";

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
  nn[16] = "I took a deep breath.";

  mm[1] = "....";
  mm[2] = "So, I am just a meerkat...";
  mm[3] = "That's why my last memory is in a dessert...";
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
 mm[19] = "Oh, why are you still here?";
 mm[20] = "You can't do anything for me.";
 mm[21] = "So, please...";
 mm[22] = "Just leave. Like everyone else did.";


  myTextbox = new Textbox();
}

//------------------------------
// 場景切換時重置索引函式
//------------------------------
function resetSceneIndexes(newScene) {
  var resetMap = {
    1: ['u'], 2: ['y'], 3: ['ee'], 4: ['r'],
    5: ['t'], 6: ['qq'], 7: ['aa'], 8: ['b'],
    9: ['c'], 10: ['dd'], 11: ['ff'], 12: ['gg'],
    13: ['sss'], 14: ['iii'], 15: ['ooo'], 16: ['ccc'],
    17: ['jjj'], 18: ['kkk'], 19: ['vvv'], 20: ['hhh'],
    21: ['nnn'], 22: ['mmm']
  };
  if (resetMap[newScene]) {
    resetMap[newScene].forEach(function(varName) {
      window[varName] = 1;
    });
  }
}

//------------------------------
// 文字框類別
//------------------------------
class Textbox {
  showTextbox(textContent = "") {
    stroke(255);
    fill(0);

    let boxWidth = 680;  // ★ 讓對話框稍微更長
    let boxHeight = 80;
    let boxX = (width - boxWidth) / 2;  // 讓對話框水平置中
    let boxY = 300;

    rect(boxX, boxY, boxWidth, boxHeight);
    
    noStroke();
    fill(255);
    textSize(14);
    textWrap(WORD);
    textLeading(16);
    textAlign(LEFT, TOP);

    let textPaddingX = 85;  // ★ 進一步調整 Padding，讓左邊間距更自然
    let textPaddingY = 18;  // ★ 讓文字稍微往下，避免太貼近頂部

    text(textContent, boxX + textPaddingX, boxY + textPaddingY, boxWidth - textPaddingX * 2);
  }
}

//------------------------------
// 輸入處理
//------------------------------
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
    // 僅當目前行包含 "press" 且已為該陣列最後一筆時，才接受鍵盤輸入
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
    // 若目前行含有 "press" 且為最後一筆，則不接受鼠標點擊
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

//------------------------------
// 對話映射：指定每個 gameScene 使用哪個對話陣列及其專用索引變數名稱
//------------------------------
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

//------------------------------
// 通用場景繪製函式（非特殊場景）
//------------------------------
function drawScene(textContent, bgImg) {
  if (bgImg) image(bgImg, 0, 0);
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 40);
  text(textContent, 28, 320, 650);
}

//------------------------------
// 帶欄杆背景的繪製函式
//------------------------------
function drawSceneWithBars(textContent, bgImg) {
  if (bgImg) {
    image(bgImg, 0, 0);
    image(barsImg, 0, 0);
  }
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 40);
  text(textContent, 28, 320, 650);
}

function drawSSScene() {
  var idx = sss;  // 取得 ss 陣列的索引
  var txt = ss[idx]; // 目前要顯示的對話內容

  // 1. 顯示背景 (withoutalienlabImg)
  image(withoutalienlabImg, 0, 0);

  // 2. 如果對話還沒到 `ss[4]`，顯示柵欄
  if (idx <= 3) {
    image(barsImg, 0, 0);
  }

  // 3. 顯示文字框與文字
  myTextbox.showTextbox();
  fill(255);
  textSize(14);

  // 按鍵提示（如果有必要）
  var prompt = txt.toLowerCase().indexOf("press") !== -1
               ? "- press z to continue -"
               : "- click to continue -";
  text(prompt, 248, 40);
  text(txt, 28, 320, 650);
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
  var prompt = "";
  if (currentText.toLowerCase().indexOf("press") !== -1) {
    prompt = "- press z or x to choose -";
  } else {
    prompt = "- click to continue -";
  }
  text(prompt, 248, 40);
  text(currentText, 28, 320, 650);
}

//------------------------------
// 特殊場景繪製函式（帶透明度效果）
//------------------------------
function drawTranquilizerScene() {
  // 1) 判斷目前對話行數
  var idx = ff;
  var txt = e[idx] || "";

  // 2) 如果到了 e[2]，開始淡入 tranquilizer 圖
  if (idx === 2) {
    isFading = true;
  }

  // 3) 如果到了 e[9]，開始黑幕淡入
  if (idx >= 9) {
    isFadingBlack = true;
  }

  // 4) 繪製背景：idx < 8 顯示淡入 tranquilizer；>= 8 顯示 tranquilizer2
  if (idx < 8) {
    // 普通實驗室
    push();
    tint(255, alphaLab);
    image(alienlabImg, 0, 0);
    pop();

    // tranquilizer
    push();
    tint(255, alphaTranquil);
    image(alientranquilizerImg, 0, 0);
    pop();

    // 淡入邏輯
    if (isFading && alphaTranquil < 255) {
      alphaLab      -= 3;
      alphaTranquil += 3;
      if (alphaTranquil >= 255) {
        alphaTranquil = 255;
        alphaLab      = 0;
        isFading      = false;
      }
      if (alphaLab < 0) {
        alphaLab = 0;
      }
    }
  } else {
    // e[8] 以後，直接 tranquilizer2
    image(alientranquilizer2Img, 0, 0);
  }

  // 5) 先顯示欄杆
  image(barsImg, 0, 0);

  // ─────────────────────────────────────────────
  //  ★ 關鍵：把黑幕的程式搬到這裡 ★
  // ─────────────────────────────────────────────
  //    → 這樣就能把欄杆一起蓋掉，後面再畫文字框與文字
  if (isFadingBlack) {
    alphaBlack += 3;  // 加 3 表示每幀漸漸變深
    if (alphaBlack > 255) {
      alphaBlack = 255; // 最深即全黑
    }
    push();
    noStroke();
    fill(0, alphaBlack);
    rect(0, 0, width, height); // 在整個畫面蓋上黑色
    pop();
  }

  // 6) 顯示文字框 + 文字
  myTextbox.showTextbox();
  fill(255);
  textSize(14);

  var prompt = (txt.toLowerCase().indexOf("press") !== -1)
               ? "- press z to continue -"
               : "- click to continue -";
  text(prompt, 248, 40);
  text(txt, 28, 320, 650);
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

//------------------------------
// 初始場景繪製（gameScene 0 使用）
//------------------------------
function drawBaseScene() {
  // 初始場景（s 陣列）也顯示在牢籠中
  drawDialogueWithBars(alienlabImg);
}

//------------------------------
// 主循環
//------------------------------
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
      case 2: drawSceneWithBars(d[y], alienlabImg); break;
      case 3: drawScene(g[ee], null); break;
      case 4: drawSceneWithBars(f[r], withoutalienlabImg); break;
      case 5: drawSceneWithBars(h[t], withoutalienlabImg); break;
      case 6: drawSceneWithBars(j[qq], aliencrowd1Img); break;
      case 7: drawSceneWithBars(k[aa], aliencrowdImg); break;
      case 8: drawSceneWithBars(l[b], aliencrowdImg); break;
      case 9: drawSceneWithBars(q[c], aliencrowdImg); break;
      case 10: drawSceneWithBars(w[dd], alienlabImg); break;
      case 11: drawTranquilizerScene(); break;
      case 12: drawBBScene(); break;
//      case 13: drawScene(ss[sss], withoutalienlabImg); break;
      case 13: drawSSScene(); break;
      case 14: drawSceneWithBars(ii[iii], withoutalienlabImg); break;
      case 15: drawScene(oo[ooo], ruin2Img); break;
      case 16: drawScene(cc[ccc], ruinImg); break;
      case 17: drawJJScene(); break;
      case 18: drawKKScene(); break;
      case 19: drawSceneWithBars(vv[vvv], aliencrowdImg); break;
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
