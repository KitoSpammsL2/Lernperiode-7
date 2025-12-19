/* WhiteRice – Standalone Player (Player-Seite)
   - Gleiche Tracks wie in deiner App
   - Soft-Fade, Repeat, Shuffle, Volume, Resume, Lyrics
*/

/* === Tracks: saubere Titel + URLs === */
const TRACKS = [
  // Playboi Carti
  { title: "Playboi Carti – Long Time", url: "https://soundcloud.com/xoxo-beats-10229998/long-time-playboicarti-best" },
  { title: "Playboi Carti – Location", url: "https://soundcloud.com/user-584825425/playboi-carti-location-official-audio-3" },
  { title: "Playboi Carti – Fell In Luv", url: "https://soundcloud.com/adrian-gonzalez-659551024/fell-in-luv-playboicarti-1" },
  { title: "Playboi Carti – Molly", url: "https://soundcloud.com/user-330873910/molly-14" },
  { title: "Playboi Carti – Magnolia", url: "https://soundcloud.com/playboicarti/magnolia-1" },
  { title: "Playboi Carti – Whole Lotta Red V3", url: "https://soundcloud.com/1mania/whole-lotta-red-v3" },
  { title: "Playboi Carti – RIP (Looped Alt Intro)", url: "https://soundcloud.com/cbtheo/playboicarti-rip-looped-alternative-intro" },

  // EsDeeKid
  { title: "EsDeeKid – Tartan", url: "https://soundcloud.com/esdeekid/tartan" },
  { title: "EsDeeKid – LV Sandals", url: "https://soundcloud.com/esdeekid/lv-sandals" },
  { title: "EsDeeKid – Mist", url: "https://soundcloud.com/esdeekid/mist" },
  { title: "EsDeeKid – Cali Man", url: "https://soundcloud.com/esdeekid/cali-man" },
  { title: "EsDeeKid – Black Beatles (Remix)", url: "https://soundcloud.com/esdeekid/esdee-black-beatles-remix" },
  { title: "EsDeeKid – Prague", url: "https://soundcloud.com/esdeekid/prague" },

  // Lil Uzi Vert
  { title: "Lil Uzi Vert – Money Longer", url: "https://soundcloud.com/liluzivert/money-longer-radio-rip" },
  { title: "Lil Uzi Vert – 20 Min", url: "https://soundcloud.com/liluzivert/20-min-1" },

  // Destroy Lonely
  { title: "Destroy Lonely – Jet Lggd", url: "https://soundcloud.com/destroylonely/jetlggd" },
  { title: "Destroy Lonely – Bane", url: "https://soundcloud.com/destroylonely/bane-prod-4me" },
  { title: "Destroy Lonely – Suicide Mission", url: "https://soundcloud.com/anteater-studios/destroylonely-suicide-mission?in_system_playlist=personalized-tracks%3A%3Auser-367465925%3A1783573233" },

  // FakeMink
  { title: "FakeMink – Easter Pink", url: "https://soundcloud.com/fakemink/easter-pink-prod-suzy-sheer?in=954euros/sets/fakemink" },
  { title: "Buckshot & FakeMink – Fever", url: "https://soundcloud.com/buckshottt/buckshot-fakemink-fever" },

  // A$AP Rocky / NIGO
  { title: "ASAP Rocky – F**kin Problems", url: "https://soundcloud.com/asvpxrocky/f-kin-problems" },
  { title: "ASAP Rocky – Feat. Jessica Pratt", url: "https://soundcloud.com/asvpxrocky/a-ap-rocky-feat-jessica-pratt" },
  { title: "ASAP Rocky – Babushka Boi", url: "https://soundcloud.com/6cv/aap-rocky-babushka-boi" },
  { title: "NIGO – ARYA (feat. ASAP Rocky)", url: "https://soundcloud.com/nigo-music/arya" }
];

/* === Lyrics / Notes – hier trägst du deinen Text ein === */
/* Bitte keine kompletten originalen Songtexte, lieber eigene Notizen. */
const LYRICS = {
  "Playboi Carti – Molly": `
    Look at these diamonds they shinin
Look at these bitches they lyin
Baby these diamonds not Johnny
I just called up Avianne
I dont got no stylist
All my planes are privates
Perkys on the privates
We dont fuck with molly
We had to lay back on them pills
I just fucked the pint up
Im finna settle in your field
Get slimed lil bitch I know you not real
Ima spend my money on guns and pills
In Atlanta with a bitch and the bitch so bad
Im on the that lean lil bitch
Kick the bitch out I dont need the bitch
Look at these diamonds they shinin
Look at these bitches they lyin
Baby these diamonds not Johnny
I just called up Avianne
I dont got no stylist
All my planes are privates
Perkys on the privates
We dont fuck with molly
We had to lay back on them pills
I just fucked the pint up
Im finna settle in your field
Get slimed lil bitch I know you not real
Ima spend my money on guns and pills
In Atlanta with a bitch and the bitch so bad
Im on the that lean lil bitch
Kick the bitch out I dont need the bitch
Look at these diamonds they shinin
Look at these bitches they lyin
Baby these diamonds not Johnny
I just called up Avianne
I dont got no stylist
All my planes are privates
Perkys on the privates
We dont fuck with molly
We had to lay back on them pills
I just fucked the pint up
Im finna settle in your field
Get slimed lil bitch I know you not real
Ima spend my money on guns and pills
In Atlanta with a bitch and the bitch so bad
Im on the that lean lil bitch
Kick the bitch out I dont need the bitch
Im from the Flat lil nigga
We started trappin nigga
We started rappin nigga
These all black diamonds nigga
Hang out with robbers nigga
What you know about robbin niggas
What you know about TECs
What you know about mobbin nigga
Look at these diamonds they shinin
Look at these bitches they lyin
Baby these diamonds not Johnny
I just called up Avianne
I dont got no stylist
All my planes are privates
Perkys on the privates
We dont fuck with molly
We had to lay back on them pills
I just fucked the pint up
Im finna settle in your field
Get slimed lil bitch I know you not real
Ima spend my money on guns and pills
In Atlanta with a bitch and the bitch so bad
Im on the that lean lil bitch
Kick the bitch out I dont need the bitch
Look at these diamonds they shinin
Look at these bitches they lyin
Baby these diamonds not Johnny
I just called up Avianne
I dont got no stylist
All my planes are privates
Perkys on the privates
We dont fuck with molly
We had to lay back on them pills
I just fucked the pint up
Im finna settle in your field
Get slimed lil bitch I know you not real
Im spendin my money on guns and pills
In Atlanta with a bitch and the bitch so bad
Im on the that lean lil bitch
Kick the bitch out I dont need the bitch
  `,
  
  
};

const $ = q => document.querySelector(q);
const bigcover  = $("#bigcover");
const titleEl   = $("#title");
const artistEl  = $("#artist");
const seekEl    = $("#seek");
const elapsedEl = $("#elapsed");
const totalEl   = $("#total");
const btnShuffle= $("#shuffle");
const btnPrev   = $("#prev");
const btnNext   = $("#next");
const btnToggle = $("#playToggle");
const repeatBtn = $("#repeat");
const volumeEl  = $("#volume");
const muteBtn   = $("#mute");
const lyricsBox = $("#lyricsBox");

/* SoundCloud Widget */
const iframe = $("#sc");
const widget = SC.Widget(iframe);

/* === State === */
let current   = 0;
let duration  = 0;
let seeking   = false;
let shuffle   = false;
let order     = [];
let orderPos  = 0;
let eventsBound = false;
let lastSavePos = 0;

/* Volume + Repeat (shared mit Hauptseite) */
let volume = parseInt(localStorage.getItem("wr-volume") ?? "80", 10);
if (isNaN(volume) || volume < 0 || volume > 100) volume = 80;
let lastNonZeroVolume = volume || 80;
let repeatMode = localStorage.getItem("wr-repeat") || "off";

/* === Helpers === */
const splitTitle = full => {
  const p = full.split("–");
  return { artist: (p[0] || "").trim(), title: (p[1] || full).trim() };
};
const fmt = ms => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
const inRange = i => i >= 0 && i < TRACKS.length;

async function fetchArtwork(url) {
  try {
    const r = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`);
    const d = await r.json();
    return d.thumbnail_url || "";
  } catch {
    return "";
  }
}

/* Soft-Fade */
function setMuteIcon(muted){
  if (!muteBtn) return;
  muteBtn.textContent = muted ? "🔇" : "🔈";
}
function fadeVolume(target, duration, callback){
  const steps = 15;
  const startVol = volume;
  const delta = target - startVol;
  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;
    const t = currentStep / steps;
    const v = Math.round(startVol + delta * t);
    volume = Math.max(0, Math.min(100, v));
    widget.setVolume(volume);
    if (volumeEl) volumeEl.value = volume;
    setMuteIcon(volume === 0);

    if (currentStep >= steps){
      clearInterval(interval);
      if (callback) callback();
    }
  }, duration / steps);
}

/* Repeat-UI */
function updateRepeatIcon(){
  if(!repeatBtn) return;
  repeatBtn.dataset.mode = repeatMode;

  if (repeatMode === "off") {
    repeatBtn.textContent = "🔁";
    repeatBtn.title = "Repeat aus";
  } else if (repeatMode === "one") {
    repeatBtn.textContent = "🔂";
    repeatBtn.title = "Song wiederholen";
  } else { // all
    repeatBtn.textContent = "🔁";
    repeatBtn.title = "Playlist wiederholen";
  }
}

/* Order + Shuffle */
function makeOrder(){
  order = [...Array(TRACKS.length).keys()];
  if (shuffle){
    for (let i = order.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  orderPos = Math.max(0, order.indexOf(current));
}

/* UI */
function setPlayIcon(paused){
  btnToggle.textContent = paused ? "▶" : "⏸";
}
function updateLyricsBox(){
  if (!lyricsBox) return;
  const key = TRACKS[current].title;
  lyricsBox.textContent = LYRICS[key] || "Keine Lyrics hinterlegt.";
}
function setMeta(){
  const track = TRACKS[current];
  const { artist, title } = splitTitle(track.title);
  titleEl.textContent = title;
  artistEl.textContent = artist;
  updateLyricsBox();

  widget.getCurrentSound(async s => {
    let art = (s && (s.artwork_url || (s.user && s.user.avatar_url))) || "";
    if (!art) art = await fetchArtwork(track.url);
    if (art){
      const big = art.replace("large", "t500x500");
      bigcover.src = big;
    }
  });
}

/* Load Track */
function load(idx, autoPlay = false, startPos = null, shouldPlayOverride = null){
  if (!inRange(idx)) return;
  current = idx;
  const { url } = TRACKS[current];

  localStorage.setItem("wr-track", String(current));

  widget.unbind(SC.Widget.Events.READY);
  widget.load(url, { auto_play: autoPlay, show_user: false, visual: false });
  widget.bind(SC.Widget.Events.READY, () => {
    widget.getDuration(d => {
      duration = d || 0;
      seekEl.max = duration || 1000;
      totalEl.textContent = fmt(duration);
      updateTime(0);
    });
    widget.setVolume(volume);
    setMeta();

    if (startPos !== null && !isNaN(startPos)){
      const p = Math.max(0, startPos);
      widget.seekTo(p);
      updateTime(p);
    }
    if (shouldPlayOverride === true){
      widget.play();
    } else if (shouldPlayOverride === false){
      widget.pause();
    }
  });

  orderPos = Math.max(0, order.indexOf(current));
}

function updateTime(pos){
  elapsedEl.textContent = fmt(pos);
  if (!seeking) seekEl.value = pos;
}

/* Controls */
btnPrev.onclick   = () => prev(true, true);
btnNext.onclick   = () => next(true, true);
btnToggle.onclick = () => widget.isPaused(p => p ? widget.play() : widget.pause());
btnShuffle.onclick= () => {
  shuffle = !shuffle;
  btnShuffle.setAttribute("aria-pressed", String(shuffle));
  makeOrder();
};

repeatBtn.onclick = () => {
  if (repeatMode === "off") {
    repeatMode = "one";
  } else if (repeatMode === "one") {
    repeatMode = "all";
  } else {
    repeatMode = "off";
  }
  updateRepeatIcon();
  localStorage.setItem("wr-repeat", repeatMode);
};

/* Volume */
if (volumeEl){
  volumeEl.value = volume;
  setMuteIcon(volume === 0);
}
if (volumeEl && muteBtn){
  volumeEl.addEventListener("input", e => {
    volume = +e.target.value || 0;
    if (volume > 0) lastNonZeroVolume = volume;
    widget.setVolume(volume);
    setMuteIcon(volume === 0);
    localStorage.setItem("wr-volume", String(volume));
  });

  muteBtn.onclick = () => {
    if (volume === 0){
      volume = lastNonZeroVolume || 80;
    } else {
      lastNonZeroVolume = volume || 80;
      volume = 0;
    }
    volumeEl.value = volume;
    widget.setVolume(volume);
    setMuteIcon(volume === 0);
    localStorage.setItem("wr-volume", String(volume));
  };
}

/* Seek */
seekEl.addEventListener("pointerdown", () => seeking = true);
seekEl.addEventListener("pointerup",   () => seeking = false);
seekEl.addEventListener("input", e => {
  const v = +e.target.value || 0;
  widget.seekTo(v);
  updateTime(v);
});
seekEl.addEventListener("change", () => seeking = false);

/* Keyboard (optional) */
window.addEventListener("keydown", e => {
  if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
  if (e.code === "Space"){ e.preventDefault(); btnToggle.click(); }
  if (e.key === "ArrowRight") seekBy(5000);
  if (e.key === "ArrowLeft")  seekBy(-5000);
});
function seekBy(delta){
  widget.getPosition(pos => {
    const to = Math.max(0, pos + delta);
    widget.seekTo(to);
    updateTime(to);
  });
}

/* Widget Events */
(function bindOnce(){
  if (eventsBound) return; eventsBound = true;
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, e => {
    if (!duration && e.duration){
      duration = e.duration;
      seekEl.max = duration;
      totalEl.textContent = fmt(duration);
    }
    if (!seeking) updateTime(e.currentPosition);

    if (Math.abs(e.currentPosition - lastSavePos) > 2000){
      lastSavePos = e.currentPosition;
      localStorage.setItem("wr-pos", String(Math.floor(e.currentPosition)));
      localStorage.setItem("wr-track", String(current));
    }
  });
  widget.bind(SC.Widget.Events.PLAY, () => {
    setPlayIcon(false);
    localStorage.setItem("wr-playing", "1");
  });
  widget.bind(SC.Widget.Events.PAUSE, () => {
    setPlayIcon(true);
    localStorage.setItem("wr-playing", "0");
  });
  widget.bind(SC.Widget.Events.FINISH, () => handleFinish());
})();

/* Navigation mit Soft-Fade */
function next(autoPlay = true, withFade = true, allowWrap = true){
  if (order.length === 0) makeOrder();

  const doSwitch = () => {
    let newPos = orderPos + 1;
    if (newPos >= order.length){
      if (!allowWrap) return;
      newPos = 0;
    }
    orderPos = newPos;
    load(order[orderPos], autoPlay);
    fadeVolume(lastNonZeroVolume || 80, 250);
  };

  if (withFade){
    fadeVolume(0, 250, doSwitch);
  } else {
    doSwitch();
  }
}
function prev(autoPlay = true, withFade = true){
  if (order.length === 0) makeOrder();

  const doSwitch = () => {
    orderPos = (orderPos + order.length - 1) % order.length;
    load(order[orderPos], autoPlay);
    fadeVolume(lastNonZeroVolume || 80, 250);
  };

  if (withFade){
    fadeVolume(0, 250, doSwitch);
  } else {
    doSwitch();
  }
}

/* Finish-Logik */
function handleFinish(){
  if (repeatMode === "one"){
    load(current, true);
    fadeVolume(lastNonZeroVolume || 80, 250);
    return;
  }
  if (repeatMode === "all"){
    next(true, false, true);
    return;
  }
  next(true, false, false);
}

/* Resume (gleiche Keys wie Hauptseite) */
function restoreLastSession(){
  const idxStr = localStorage.getItem("wr-track");
  const posStr = localStorage.getItem("wr-pos");
  const playing = localStorage.getItem("wr-playing") === "1";

  const idx = idxStr !== null ? parseInt(idxStr, 10) : NaN;
  const pos = posStr !== null ? parseInt(posStr, 10) : NaN;

  if (Number.isInteger(idx) && idx >= 0 && idx < TRACKS.length){
    load(idx, false, isNaN(pos) ? null : pos, playing);
  } else {
    load(0, false, null, false);
  }
}

/* Start */
document.addEventListener("DOMContentLoaded", () => {
  makeOrder();
  updateRepeatIcon();
  if (volumeEl){
    volumeEl.value = volume;
    setMuteIcon(volume === 0);
  }
  restoreLastSession();
});
