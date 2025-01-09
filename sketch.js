//-------------------------------------
// 0. 全域變數
//-------------------------------------
let sceneNumber = 0;   // 0=封面, 1=正式遊戲(你的分支)
let firstScene = 0;   
let gameScene = 0;    

// 透明度
let transparency = 255, 
    transparency2 = 255,
    transparency3 = 0,
    transparency4 = 255,
    transparency5 = 0,
    transparency6 = 255,
    transparency7 = 0;

// 用到的圖片
let startImg, alienlabImg, barsImg, withoutalienlabImg;
let aliencrowd1Img, aliencrowdImg, alientranquilizerImg, alientranquilizer2Img;
let ruinImg, ruin2Img, alienImg, meerkatreflectionImg, meerkatImg;

// 字體
let SuperLegendBoy; 

// 文字陣列
let s=[], a=[], d=[], f=[], g=[], h=[],
    j=[], k=[], l=[], q=[], w=[], e=[],
    bb=[], ss=[], ii=[], oo=[], cc=[],
    jj=[], kk=[], vv=[], hh=[], nn=[], mm=[];

// 多個指標
let i=1, u=1, y=1, t=1, r=1, ee=1, qq=1, aa=1, b=1, c=1;
let dd=1, ff=1, gg=1, sss=1, iii=1, ooo=1, ccc=1, jjj=1;
let kkk=1, vvv=1, hhh=1, nnn=1, mmm=1;

//-------------------------------------
// 1. preload(): 載入圖片、字體
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
// 2. setup(): 初始化、放入你全部對話
//-------------------------------------
function setup() {
  createCanvas(700, 394);
  background(0);
  textFont(SuperLegendBoy);

  myTextbox = new Textbox();

  // [把你的對話全部貼回來 - s[], a[], d[], ... mm[]]
  // ----------------------------------------------------------------
  s[1] = "...";
  s[2] = "... What?";
  s[3] = "What is happening?";
  s[4] = "Where am I? What are them?";
  s[5] = "Are those... aliens?";
  s[6] = "...";
  s[7] = "... Am I dreaming?";
  s[8] = "What are they doing? Are they looking at me?";
  s[9] = "Wait. Why am I behind the bars? Am I in a cage?";
  s[10] = "... What should I do?";
  s[11] = "press [T] to try to talk to the aliens / press[O] to observe silently";

  a[1] = "'Hey! What do you want?'";
  a[2] = "...";
  a[3] = "They just keep staring at me without saying anything.";
  a[4] = "press [S] to sit in the corner and observe";

  d[1] = "I'll just wait and see what's going to happen.";
  d[2] = "press [S] to sit in the corner and observe";

  f[1] = "What shoud I do?";
  f[2] = "press [R] to crash the bars / press [P] to squeeze through the bars";
  f[3] = "!";
  f[4] = "Oh! No one's here now.";

  g[1] = "press [1] to wake up";
  g[2] = "After hours of waiting, I fell asleep.";

  h[1] = "... They are back! I don't know what they will do to me...";
  h[2] = "press [H] to cower in the corner";
  h[3] = "Ahhh... It hurts.. Maybe I should stop.";
  h[4] = "...";
  h[5] = "*footstep sounds*";

  j[1] = "'De!hctaw#gnieb2ekillee*ftiseo<dwoh...'";
  j[2] = "...What are they even saying? Please speak English!";
  j[3] = "press [z] to listen carefully";

  k[1] = "And how many aliens are there?";
  k[2] = "...";
  k[3] = "What did I do to deserve this?";
  k[4] = "What should I do?";
  k[5] = "press [2] to scream / press [3] to pace around";
  k[6] = "...When I get more closer, they stopped talking.";

  l[1] = "'Ahhhhhhh!'";
  l[2] = "'Stop staring! Let me out!'";
  l[3] = "'What did I do... I'm just an ordinary person...'";
  l[4] = "'Please let me out...'";
  l[5] = "One of them frowned a little, but still... nothing happens.";
  l[6] = "I'm starting to feel a little tired after the yelling...";
  l[7] = "press [4] to rest in the corner";

  q[1] = "I started to walk around...";
  q[2] = "I felt that this helped to alleviate some of my anxiety.";
  q[3] = "...";
  q[4] = "One of them frowned a little, but still... nothing happens.";
  q[5] = "I'm starting to feel a little tired.";
  q[6] = "press [4] to rest in the corner";

  w[1] = "Now it's just me... and them.";
  w[2] = "Again.";
  w[3] = "Should I do something to draw their attention?";
  w[4] = "I've had enough of waiting.";
  w[5] = "What should I do?";
  w[6] = "press [5] to hit the wall with my head / [6] to crazy plucking my hair";
  w[7] = "After hours of nothing, they left.";

  e[1] = "It grabs my arm and injects something inside...";
  e[2] = "... Getting... sleepy... again.";
  e[3] = "...";
  e[4] = "press [7] to wake up";
  e[5] = "... Hurting myself actually feels good.. haha...";
  e[6] = "... Wait! It's coming towards me!";
  e[7] = "What is it going to do?";
  e[8] = "... Is that a... syringe?";
  e[9] = "'Wait! I'll stop! Please don't hurt me!'";
  e[10] = "I keep yelling but it just keep getting closer and closer...";
  e[11] = "...!";

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
  bb[18] = "Did the alien that frowned dropped the key...?";

  bb[19] = "That spot is exactly where it standed...";
  bb[20] = "It's funny I am sympathized with by an alien.";
  bb[21] = "What should I do?";
  bb[22] = "press [8] to use the key / [9] to stay as a sitting duck";

  ss[1] = "This will be my only chance.";
  ss[2] = "I squatted down and grabbed the key.";
  ss[3] = "... It took some time to unlock the lock from the inside.";
  ss[4] = "... ";
  ss[5] = "The door lock is finally opened...";
  ss[6] = "I don't even know what to feel after these uncountable days...";
  ss[7] = "...";
  ss[8] = "I ran out immediately without a second thought.";
  ss[9] = "press [k] to get out";

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
  ii[12] = "press [8] to escape";

  oo[1] = "...";
  oo[2] = "...What in the world?";
  oo[3] = "What happened?";
  oo[4] = "It doesn't look like the place I've been before...";
  oo[5] = "press [x] to look around";

  cc[1] = "...";
  cc[2] = "What is wrong with the world right now?";
  cc[3] = "Why does everything just look like ruins?";
  cc[4] = "How can I survive in this all by myself?";
  cc[5] = "... Did I make the wrong decision?";
  cc[6] = "...";
  cc[7] = "Can anyone help...";
  cc[8] = "......";
  cc[9] = "press [v] to try and survive";

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
  jj[15] = "press [e] to open my eyes";

  kk[1] = "...Haha.";
  kk[2] = "It's them again.";
  kk[3] = "'Gni&pacsep@otS!.uoy*eucse2r^ot#ereh1era3ew'";
  kk[4] = "...Is something wrong with me?";
  kk[5] = "It's funny how I felt relieved by their presence.";
  kk[6] = "Maybe this is the only way to survive now...";
  kk[7] = "Is it better to be imprisoned than to starve to death?";
  kk[8] = "press [i] to close my eyes and let them abduct me again";

  vv[1] = "...";
  vv[2] = "Of course... Here they are.";
  vv[3] = "I still have no idea what they want from me.";
  vv[4] = "How can just staring at me make any difference to them?";
  vv[5] = "At first, I thought they are going to do tests on me.";
  vv[6] = "But it turns out they just love to stare at me.";
  vv[7] = "...";
  vv[8] = "press [y] to sit in the corner";

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
  hh[11] = "press [c] to crouch down";

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
  nn[16] = "press [d] to face the reality";

  mm[1] = "....";
  mm[2] = "So, I am just a meerkat...?";
  mm[3] = "That's why the last memory I have is in a dessert...";
  mm[4] = "... Haha.";
  mm[5] = "How funny is this.";
  mm[6] = "Even though it was a dream...";
  mm[7] = "I am still being trapped and caged in real life.";
  mm[8] = "And how did I even dream of being a human?";
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
}

//-------------------------------------
// 3. draw(): 場景繪製
//-------------------------------------
function draw() {
  background(0);

  switch(sceneNumber) {

    // (A) sceneNumber=0: 封面
    case 0:
      image(startImg, 0, 0);
      fill(255);
      textSize(30);
      text("Emohw2enr@uoyem*oclew", 95, 330);
      textSize(13);
      text("- press space to continue -", 230, 365);
      break;

    // (B) sceneNumber=1: 正式遊戲
    case 1:
      switch(firstScene) {

        case 0:
          // 預設空 => 不顯示
          break;

        case 1:
          // 顯示 s[i]
          image(alienlabImg, 0, 0);
          image(barsImg, 0, 0, 700, 394);
          myTextbox.showTextbox();

          fill(255);
          textSize(14);
          text("- click to continue -", 248, 40);
          text(s[i], 28, 350);

          // 內層: gameScene
          switch(gameScene) {
            case 0:
              // 不做事 (玩家還沒按 t, o, s, 1, ...)
              break;

            case 1: // T => a[u]
              image(alienlabImg, 0, 0);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(a[u], 28, 350);
              break;

            case 2: // O => d[y]
              image(alienlabImg, 0, 0);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(d[y], 28, 350);
              break;

            case 3: // S => g[ee]
              background(0);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(g[ee], 28, 350);
              break;

            case 4: // 1 => f[r]
              image(withoutalienlabImg, 0, 0);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(f[r], 28, 350);
              break;

            case 5: // r || p => h[t]
              image(withoutalienlabImg, 0, 0);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(h[t], 28, 350);
              break;

            case 6: // h => j[qq]
              image(aliencrowd1Img, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(j[qq], 28, 350);
              break;

            case 7: // z => k[aa]
              image(aliencrowdImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(k[aa], 28, 350);
              break;

            case 8: // 2 => l[b]
              image(aliencrowdImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(l[b], 28, 350);
              break;

            case 9: // 3 => q[c]
              image(aliencrowdImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(q[c], 28, 350);
              break;

            case 10: // 4 => w[dd]
              image(alienlabImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(w[dd], 28, 350);
              break;

            case 11: // 5 or 6 => e[ff]
              background(0);
              push();
              if (transparency2 > 0) {
                transparency2 -= 0.9;
              }
              tint(255, transparency2);
              image(alientranquilizerImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(e[ff], 28, 350);
              break;

            case 12: // 7 => bb[gg]
              background(0);
              push();
              if (transparency3 < 255) {
                transparency3 += 1.9;
              }
              tint(255, transparency3);
              image(withoutalienlabImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(bb[gg], 28, 350);
              break;

            case 13: // 8 => ss[sss]
              background(0);
              image(withoutalienlabImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(ss[sss], 28, 350);
              break;

            case 14: // 9 => ii[iii]
              background(0);
              image(withoutalienlabImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(ii[iii], 28, 350);
              break;

            case 15: // k => oo[ooo]
              background(0);
              image(ruin2Img, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(oo[ooo], 28, 350);
              break;

            case 16: // x => cc[ccc]
              background(0);
              image(ruinImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(cc[ccc], 28, 350);
              break;

            case 17: // v => jj[jjj]
              background(0);
              push();
              if (transparency4 > 0) {
                transparency4 -= 0.45;
              }
              tint(255, transparency4);
              image(ruinImg, 0, 0, 700, 394);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(jj[jjj], 28, 350);
              break;

            case 18: // e => kk[kkk]
              background(255);
              push();
              if (transparency5 < 255) {
                transparency5 += 0.55;
              }
              tint(transparency5, 255);
              image(alienImg, 0, 0, 700, 394);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(kk[kkk], 28, 350);
              break;

            case 19: // i => vv[vvv]
              background(0);
              image(aliencrowdImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(vv[vvv], 28, 350);
              break;

            case 20: // y => hh[hhh]
              background(0);
              push();
              if (transparency6 > 0) {
                transparency6 -= 0.45;
              }
              tint(255, transparency6);
              image(alienlabImg, 0, 0, 700, 394);
              image(barsImg, 0, 0, 700, 394);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(hh[hhh], 28, 350);
              break;

            case 21: // c => nn[nnn]
              background(0);
              push();
              if (transparency7 < 255) {
                transparency7 += 0.4;
              }
              tint(255, transparency7);
              image(meerkatreflectionImg, 0, 0, 700, 430);
              pop();

              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(nn[nnn], 28, 350);
              break;

            case 22: // d => mm[mmm]
              background(0);
              image(meerkatImg, 0, 0, 700, 430);
              myTextbox.showTextbox();
              fill(255);
              textSize(14);
              text("- click to continue -", 248, 40);
              text(mm[mmm], 28, 350);
              break;
          }
          break; // firstScene=1

      } // end switch(firstScene)
      break; // end sceneNumber=1
  }
}

//-------------------------------------
// 4. mousePressed():
//   - 只在 sceneNumber=1 做對話累加
//   - 如果 gameScene == [1,2,...] 表示在選項/等待 => 不累加
//-------------------------------------
function mousePressed() {
  if (sceneNumber===1) {
    // 例：假設 gameScene=1,2 => 我們卡住，不要 i++...
    // 你可以自行擴充 (gameScene=3,7,9... 之類)
    if (gameScene===1 || gameScene===2) {
      // 不累加 => 避免一點就跳過對話
    } else {
      // 其餘 => i++, u++, y++, t++, ...
      i++; if (i == 12) i = 1;
      u++; if (u == 5) u = 1;
      y++; if (y == 3) y = 1;
      t++; if (t == 6) t = 1;
      r++; if (r == 5) r = 1;
      ee++; if (ee == 3) ee = 1;
      qq++; if (qq == 4) qq = 1;
      aa++; if (aa == 7) aa = 1;
      b++; if (b == 8) b = 1;
      c++; if (c == 7) c = 1;
      dd++; if (dd == 8) dd = 1;
      ff++; if (ff == 12) ff = 1;
      gg++; if (gg == 23) gg = 1;
      sss++; if (sss == 10) sss = 1;
      iii++; if (iii == 13) iii = 1;
      ooo++; if (ooo == 6) ooo = 1;
      ccc++; if (ccc == 10) ccc = 1;
      jjj++; if (jjj == 16) jjj = 1;
      kkk++; if (kkk == 9) kkk = 1;
      vvv++; if (vvv == 9) vvv = 1;
      hhh++; if (hhh == 12) hhh = 1;
      nnn++; if (nnn == 17) nnn = 1;
      mmm++; if (mmm == 28) mmm = 1;
    }
  }
}

//-------------------------------------
// 5. keyPressed():
//   - 在封面(sceneNumber=0)按空白 => 進入遊戲
//   - 在遊戲(sceneNumber=1) => t,o,s,1,2,3,r,p等 => gameScene
//-------------------------------------
function keyPressed() {
  // 封面 => 按空白 => 進入
  if (sceneNumber===0 && key===' ') {
    sceneNumber=1;
    firstScene=1;
    return;
  }

  // 正式遊戲 => 按鍵改變 gameScene
  if (sceneNumber===1) {
    if (key==='t') gameScene=1;
    if (key==='o') gameScene=2;
    if (key==='s') gameScene=3;
    if (key==='1') gameScene=4;
    if (key==='r' || key==='p') gameScene=5;
    if (key==='h') gameScene=6;
    if (key==='z') gameScene=7;
    if (key==='2') gameScene=8;
    if (key==='3') gameScene=9;
    if (key==='4') gameScene=10;
    if (key==='5' || key==='6') gameScene=11;
    if (key==='7') gameScene=12;
    if (key==='8') gameScene=13;
    if (key==='9') gameScene=14;
    if (key==='k') gameScene=15;
    if (key==='x') gameScene=16;
    if (key==='v') gameScene=17;
    if (key==='e') gameScene=18;
    if (key==='i') gameScene=19;
    if (key==='y') gameScene=20;
    if (key==='c') gameScene=21;
    if (key==='d') gameScene=22;
  }
}

//-------------------------------------
// 6. Textbox class
//-------------------------------------
class Textbox {
  constructor() {}
  showTextbox() {
    strokeWeight(2);
    stroke(255);
    fill(0);
    rect(15, 330, 680, 50);
    noStroke();
    fill(255);
    textSize(14);
  }
}
