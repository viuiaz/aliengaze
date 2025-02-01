//-------------------------------------
// 0. 全域變數
//-------------------------------------
let sceneNumber = 0;   // 0=封面, 1=正式遊戲
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

// 對話陣列 (完整保留原始內容)
let s=[], a=[], d=[], f=[], g=[], h=[],
    j=[], k=[], l=[], q=[], w=[], e=[],
    bb=[], ss=[], ii=[], oo=[], cc=[],
    jj=[], kk=[], vv=[], hh=[], nn=[], mm=[];

// 索引控制（從 1 開始）
let i=1, u=1, y=1, t=1, r=1, ee=1, qq=1, aa=1, b=1, c=1;
let dd=1, ff=1, gg=1, sss=1, iii=1, ooo=1, ccc=1, jjj=1;
let kkk=1, vvv=1, hhh=1, nnn=1, mmm=1;

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

  // 初始化所有對話內容（完全保留原始內容）
  s[1] = "..."; s[2] = "... What?"; s[3] = "What is happening?";
  s[4] = "Where am I? What are they?"; s[5] = "Are those... aliens?";
  s[6] = "..."; s[7] = "... Am I dreaming?";
  s[8] = "What are they doing? Are they looking at me?";
  s[9] = "Wait. Why am I behind the bars? Am I in a cage?";
  s[10] = "... What should I do?";
  s[11] = "Do you try to talk to the aliens or observe silently?";

  a[1] = "'Hey! What do you want?'"; a[2] = "...";
  a[3] = "They just keep staring at me without saying anything.";
  a[4] = "I decide to sit in the corner and observe.";

  d[1] = "I'll just wait and see what's going to happen.";
  d[2] = "I choose to sit in the corner and observe.";

  g[1] = "After hours of waiting, I fell asleep.";
  g[2] = "I wake up.";

  f[1] = "!"; f[2] = "Oh! No one's here now."; f[3] = "What should I do?";
  f[4] = "I must decide whether to crash the bars or squeeze through.";

  h[1] = "Ahhh... It hurts... Maybe I should stop.";
  h[2] = "*footstep sounds*"; h[3] = "...";
  h[4] = "They are back! I don't know what they will do to me...";
  h[5] = "I cower in the corner.";

  j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
  j[2] = "...What are they even saying? I wish they spoke English.";
  j[3] = "I listen carefully.";

  k[1] = "When I got closer, they stopped talking.";
  k[2] = "..."; k[3] = "And how many aliens are there?";
  k[4] = "What did I do to deserve this?";
  k[5] = "What should I do?";
  k[6] = "Do I scream or pace around?";

  l[1] = "'Ahhhhhhh!'"; l[2] = "'Stop staring! Let me out!'";
  l[3] = "I plead, 'What did I do? I'm just ordinary.'";
  l[4] = "I beg, 'Please let me out...'";
  l[5] = "One of them frowned, but nothing happened.";
  l[6] = "I feel tired after all the yelling.";
  l[7] = "I settle down in the corner.";

  q[1] = "I start walking around...";
  q[2] = "I feel a slight easing of my anxiety.";
  q[3] = "..."; q[4] = "One of them frowned, yet nothing happened.";
  q[5] = "I begin to feel tired."; q[6] = "I decide to rest in the corner.";

  w[1] = "Now it's just me... and them."; w[2] = "Again.";
  w[3] = "Should I do something to attract their attention?";
  w[4] = "I've had enough of waiting."; w[5] = "What should I do?";
  w[6] = "I choose between hitting the wall with my head or wildly plucking my hair.";

  e[1] = "Somehow, hurting myself feels oddly relieving...";
  e[2] = "Wait! Something is coming toward me!";
  e[3] = "What will it do?"; e[4] = "Is that a syringe?";
  e[5] = "I plead, 'Stop! Please don't hurt me!'"; 
  e[6] = "I keep yelling, yet it gets closer...";
  e[7] = "...!"; e[8] = "It grabs my arm and injects something...";
  e[9] = "I feel drowsy again."; e[10] = "...";
  e[11] = "I wake up.";

  bb[1] = "I don't know how long I slept...";
  bb[2] = "But no one seems to be around.";
  bb[3] = "I still have no idea why I'm here.";
  bb[4] = "Did I do something wrong?";
  bb[5] = "What happened to my family?";
  bb[6] = "Are they also imprisoned somewhere?";
  bb[7] = "I can't understand."; bb[8] = "...";
  bb[9] = "I call out, 'Hello?'"; bb[10] = "...";
  bb[11] = "No one's there. Perhaps this is my chance to escape.";
  bb[12] = "I move closer to the bars and look around.";
  bb[13] = "..."; bb[14] = "I notice something on the floor...";
  bb[15] = "It was hidden by the bars before.";
  bb[16] = "Now I can see it clearly.";
  bb[17] = "Is that a key? Why is it here?";
  bb[18] = "Did an alien drop the key?";
  bb[19] = "That spot is exactly where it was.";
  bb[20] = "It almost seems as if an alien sympathizes with me.";
  bb[21] = "What should I do?"; bb[22] = "Do I use the key or stay put?";

  ss[1] = "This is my only chance.";
  ss[2] = "I squat down and grab the key.";
  ss[3] = "It takes a while to unlock the door from inside.";
  ss[4] = "..."; ss[5] = "The door finally unlocks.";
  ss[6] = "After endless days, I feel numb.";
  ss[7] = "..."; ss[8] = "I run out without hesitation.";
  ss[9] = "I escape.";

  ii[1] = "I don't believe I'll ever get out...";
  ii[2] = "Maybe it's safer to stay.";
  ii[3] = "At least I have food...";
  ii[4] = "Even though I can't see my family...";
  ii[5] = "It seems better to stay here."; ii[6] = "Right?";
  ii[7] = "..."; ii[8] = "I question my decision.";
  ii[9] = "Do I truly trust my choice?"; ii[10] = "No—I must get out!";
  ii[11] = "I decide to escape."; ii[12] = "I make my move.";

  oo[1] = "..."; oo[2] = "What in the world?";
  oo[3] = "What happened?"; oo[4] = "This place doesn't look familiar...";
  oo[5] = "I look around.";

  cc[1] = "..."; cc[2] = "What's wrong with the world?";
  cc[3] = "Everything looks like ruins.";
  cc[4] = "How can I survive alone?"; cc[5] = "Did I make the wrong choice?";
  cc[6] = "..."; cc[7] = "Can anyone help?"; cc[8] = "......";
  cc[9] = "I try to survive.";

  jj[1] = "I'll try..."; jj[2] = "I finally escape! I must at least try.";
  jj[3] = "But why is there nothing?"; jj[4] = "No humans, no animals, no signs of life.";
  jj[5] = "..."; jj[6] = "..."; jj[7] = "I wander for days in search of something.";
  jj[8] = "After days of hunger, I can't take it anymore.";
  jj[9] = "I lean against a wall..."; jj[10] = "I wait for the end.";
  jj[11] = "I close my eyes."; jj[12] = "...";
  jj[13] = "I hear footsteps."; jj[14] = "What...?"; jj[15] = "I open my eyes.";

  kk[1] = "...Haha."; kk[2] = "They're here again.";
  kk[3] = "I hear garbled words."; kk[4] = "I wonder if something's wrong with me.";
  kk[5] = "Strangely, I feel relieved by their presence.";
  kk[6] = "Maybe this is the only way to survive.";
  kk[7] = "Is it better to be imprisoned than to starve?";
  kk[8] = "I resign myself.";

  vv[1] = "..."; vv[2] = "Here they are.";
  vv[3] = "I still don't know what they want.";
  vv[4] = "Their stare unsettles me.";
  vv[5] = "At first, I thought they'd test me.";
  vv[6] = "But they simply stare."; vv[7] = "...";
  vv[8] = "I sit in the corner.";

  hh[1] = "I suppose I'll remain in this cage forever...";
  hh[2] = "At least it's safer than the outside world.";
  hh[3] = "I wonder what happened to everything.";
  hh[4] = "How did I end up here?"; hh[5] = "I try to recall my last memory...";
  hh[6] = "A land of endless sands..."; hh[7] = "A dark place where I always slept.";
  hh[8] = "..."; hh[9] = "The memory hurts.";
  hh[10] = "I force myself to remember."; hh[11] = "I crouch down.";

  nn[1] = "."; nn[2] = ".."; nn[3] = "...";
  nn[4] = "...."; nn[5] = "....."; nn[6] = "......";
  nn[7] = "......."; nn[8] = "... Oh?"; nn[9] = "... What...?"; 
  nn[10] = "Eh?"; nn[11] = "...?"; nn[12] = "?";
  nn[13] = "???"; nn[14] = "Is that me?"; nn[15] = "......";
  nn[16] = "I face the reality.";

  mm[1] = "...."; mm[2] = "So, I'm just a meerkat...?"; 
  mm[3] = "That explains why my last memory is in a desert...";
  mm[4] = "... Haha."; mm[5] = "How absurd.";
  mm[6] = "Even if it was just a dream..."; mm[7] = "I'm still trapped in a cage in real life.";
  mm[8] = "And how did I even dream of being human?"; mm[9] = "Anger wells up inside me.";
  mm[10] = "They put me here, caged forever..."; mm[11] = "The thought of becoming one of them repulses me.";
  mm[12] = "Will I try to escape as in my dream?"; mm[13] = "I remain a meerkat.";
  mm[14] = "What can I do?"; mm[15] = "I resign myself.";
  mm[16] = "I resign myself."; mm[17] = "I resign myself.";
  mm[18] = "I resign myself."; mm[19] = "I resign myself.";
  mm[20] = "I resign myself."; mm[21] = "I resign myself.";
  mm[22] = "I resign myself."; mm[23] = "I resign myself.";
  mm[24] = "Why are you still here?"; mm[25] = "You can't help me.";
  mm[26] = "So, please..."; mm[27] = "Leave me alone.";

  // 建立文字框物件
  myTextbox = new Textbox();
}

//-------------------------------------
// 輸入處理：修改為僅用空白鍵啟動封面，鼠標點擊僅用於推進當前對話
//-------------------------------------
function keyPressed() {
  // 封面狀態：僅接受空白鍵
  if (sceneNumber === 0) {
    if (key === ' ') {
      sceneNumber = 1;
      gameScene = 0;
      // 可選：若有需要，初始化 firstScene 之類的變數
    }
    return;
  }
  // 遊戲狀態：保留原本的按鍵選項（例如 't', 'o', 's', …）
  if (sceneNumber === 1) {
    const keyMap = {
      't':1, 'o':2, 's':3, '1':4, 'r':5, 'p':5,
      'h':6, 'z':7, '2':8, '3':9, '4':10, '5':11,
      '6':11, '7':12, '8':13, '9':14, 'k':15, 'x':16,
      'v':17, 'e':18, 'i':19, 'y':20, 'c':21, 'd':22
    };
    if (keyMap[key] !== undefined) {
      gameScene = keyMap[key];
      resetSceneIndexes(gameScene);
    }
  }
}

function mousePressed() {
  // 封面時忽略鼠標點擊
  if (sceneNumber === 0) return;
  if (sceneNumber === 1) {
    let mapping = dialogueMapping[gameScene];
    let idx = window[mapping.idxVar];
    // 若還未讀完對話，僅推進當前對話（只改變該場景所用的索引）
    if (idx < mapping.arr.length) {
      advanceCurrentIndex();
    } else {
      // 若當前對話讀完，則依轉場設定自動進入下一場景
      let nextScene = transitions[gameScene] ? transitions[gameScene].z : gameScene;
      gameScene = nextScene;
      resetSceneIndexes(gameScene);
    }
  }
}

// 僅推進目前場景的對話索引（避免一次推進所有索引）
function advanceCurrentIndex() {
  let mapping = dialogueMapping[gameScene];
  let idxVar = mapping.idxVar;
  // 若尚未到達該對話陣列的末尾，則進一步推進
  if (window[idxVar] < mapping.arr.length) {
    window[idxVar]++;
  }
}

// 原本的場景繪製函式：依據傳入的文字與背景繪製對話
function drawScene(textContent, bgImg) {
  if (bgImg) image(bgImg, 0, 0);
  myTextbox.showTextbox();
  fill(255);
  textSize(14);
  text("- click to continue -", 248, 40);
  text(textContent, 28, 350);
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

//-------------------------------------
// 特殊場景繪製函式（帶透明度效果）
//-------------------------------------
function drawTranquilizerScene() {
  push();
  if (transparency2 > 0) transparency2 -= 0.9;
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
// 重置場景索引函式：根據 newScene 重新初始化該場景的對話索引
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
