/* WhiteRice – Pro Build: Search, Theme, Equalizer, Volume, Repeat, Resume */

/* === Trackliste === */
let TRACKS = [
  // Playboi Carti
  { title: "Playboi Carti – Long Time", url: "https://soundcloud.com/xoxo-beats-10229998/long-time-playboicarti-best" },
  { title: "Playboi Carti – Location", url: "https://soundcloud.com/user-584825425/playboi-carti-location-official-audio-3" },
  { title: "Playboi Carti – Fell In Luv", url: "https://soundcloud.com/adrian-gonzalez-659551024/fell-in-luv-playboicarti-1" },
  { title: "Playboi Carti – Molly", url: "https://soundcloud.com/user-330873910/molly-14" },
  { title: "Playboi Carti – Magnolia", url: "https://soundcloud.com/playboicarti/magnolia-1" },
  { title: "Playboi Carti – Whole Lotta Red V3", url: "https://soundcloud.com/1mania/whole-lotta-red-v3" },
  { title: "Playboi Carti – RIP (Looped Alt Intro)", url: "https://soundcloud.com/cbtheo/playboi-carti-rip-looped-alternative-intro" },

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
  { title: "A$AP Rocky – F**kin Problems", url: "https://soundcloud.com/asvpxrocky/f-kin-problems" },
  { title: "A$AP Rocky – Feat. Jessica Pratt", url: "https://soundcloud.com/asvpxrocky/a-ap-rocky-feat-jessica-pratt" },
  { title: "A$AP Rocky – Babushka Boi", url: "https://soundcloud.com/6cv/aap-rocky-babushka-boi" },
  { title: "NIGO – ARYA (feat. A$AP Rocky)", url: "https://soundcloud.com/nigo-music/arya" }
];

/* === Shortcuts === */
const $ = q => document.querySelector(q);
const grid = $("#grid");
const overlay = $("#overlay");
const closeOverlayBtn = $("#closeOverlay");
const chipsEl = $("#chips");
const searchEl = $("#search");

/* Mini-Player */
const miniBar    = $("#minibar");
const miniCover  = $("#miniCover");
const miniInfo   = $("#miniInfo");
const miniToggle = $("#miniToggle");
const miniOpen   = $("#miniOpen");

/* Player-Refs */
const bigcover = $("#bigcover");
const titleEl  = $("#title");
const artistEl = $("#artist");
const seekEl   = $("#seek");
const elapsedEl= $("#elapsed");
const totalEl  = $("#total");
const btnShuffle=$("#shuffle");
const btnPrev  = $("#prev");
const btnNext  = $("#next");
const btnToggle= $("#playToggle");
const repeatBtn= $("#repeat");
const volumeEl = $("#volume");
const muteBtn  = $("#mute");

/* Theme */
const themeToggle = $("#themeToggle");

/* SoundCloud Widget */
const iframe = $("#sc");
const widget = SC.Widget(iframe);

/* === State === */
let current = 0;
let duration = 0;
let seeking  = false;
let shuffle  = false;
let order    = [];
let orderPos = 0;
let eventsBound = false;
let activeArtist = "Alle";
let lastSavePos = 0;

/* Volume & Repeat (mit LocalStorage) */
let volume = parseInt(localStorage.getItem("wr-volume") ?? "80", 10);
if (isNaN(volume) || volume < 0 || volume > 100) volume = 80;
let lastNonZeroVolume = volume || 80;
let repeatMode = localStorage.getItem("wr-repeat") || "off";

/* === Helpers === */
const splitTitle = full => { const p=full.split("–"); return {artist:(p[0]||"").trim(), title:(p[1]||full).trim()}; };
const fmt = ms => { const s=Math.max(0,Math.floor(ms/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`; };
const inRange = i => i>=0 && i<TRACKS.length;

async function fetchArtwork(url){
  try{
    const r = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`);
    const d = await r.json();
    return d.thumbnail_url || "";
  }catch{ return ""; }
}

/* === Artists & Chips === */
function getArtists(){
  const set = new Set(["Alle"]);
  TRACKS.forEach(t => set.add(splitTitle(t.title).artist || "Unbekannt"));
  return Array.from(set);
}
function renderChips(){
  chipsEl.innerHTML = "";
  getArtists().forEach(name=>{
    const b = document.createElement("button");
    b.className = "chip" + (name===activeArtist ? " active" : "");
    b.textContent = name;
    b.onclick = () => { activeArtist = name; renderGrid(); highlightActiveChip(); };
    chipsEl.appendChild(b);
  });
}
function highlightActiveChip(){
  chipsEl.querySelectorAll(".chip").forEach(ch => {
    ch.classList.toggle("active", ch.textContent === activeArtist);
  });
}

/* === Grid render (mit Filter & Suche) === */
async function renderGrid(){
  const query = (searchEl.value || "").toLowerCase();
  grid.innerHTML = "";
  for(let i=0;i<TRACKS.length;i++){
    const t=TRACKS[i], {artist,title}=splitTitle(t.title);
    const hay = (artist + " " + title).toLowerCase();
    const artistPass = (activeArtist==="Alle" || artist === activeArtist);
    const searchPass = (query==="" || hay.includes(query));
    if(!artistPass || !searchPass) continue;

    const card=document.createElement("div"); card.className="card";
    const img=document.createElement("img"); img.src=(await fetchArtwork(t.url)) || "https://picsum.photos/300";
    const meta=document.createElement("div"); meta.className="meta";
    const tEl=document.createElement("p"); tEl.className="title"; tEl.textContent=title;
    const aEl=document.createElement("p"); aEl.className="artist"; aEl.textContent=artist;
    meta.append(tEl,aEl); card.append(img,meta);
    card.onclick=()=> openPlayer(i, true); // start playing
    grid.append(card);
  }
}

/* === Overlay öffnen/schließen === */
function openPlayer(idx=null, auto=false, keepPlaying=false){
  overlay.classList.remove("hidden");
  document.body.style.overflow="hidden";

  if (idx !== null && (idx !== current || !keepPlaying)) {
    load(idx, auto);
  } else {
    setMetaFromWidget();
  }
}
function closePlayer(){
  overlay.classList.add("hidden");
  document.body.style.overflow="";
}
closeOverlayBtn.onclick = closePlayer;

/* === Mini-Bar Interaktionen === */
miniBar.addEventListener("click", (e)=>{
  if (e.target.closest(".mini-btn")) return;
  openPlayer(current, false, true);
});
miniOpen.onclick   = ()=> openPlayer(current, false, true);
miniToggle.onclick = ()=> widget.isPaused(p=> p ? widget.play() : widget.pause());

/* === Order / Shuffle === */
function makeOrder(){
  order=[...Array(TRACKS.length).keys()];
  if(shuffle){
    for(let i=order.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [order[i],order[j]]=[order[j],order[i]];
    }
  }
  orderPos=Math.max(0, order.indexOf(current));
}

/* === UI === */
function setPlayIcon(paused){
  btnToggle.textContent = paused ? "▶" : "⏸";
  miniToggle.textContent = paused ? "▶" : "⏸";
  miniBar.classList.toggle("playing", !paused);
}
function setMiniTitle(){
  const {artist,title}=splitTitle(TRACKS[current].title);
  miniInfo.textContent = `${title} — ${artist}`;
}
function setMetaFromWidget(){
  widget.getCurrentSound(async (s)=>{
    const {artist,title}=splitTitle(TRACKS[current].title);
    titleEl.textContent=title; artistEl.textContent=artist; setMiniTitle();
    let art=(s && (s.artwork_url || (s.user && s.user.avatar_url))) || "";
    if(!art) art=await fetchArtwork(TRACKS[current].url);
    if(art){
      const big = art.replace("large","t500x500");
      bigcover.src = big;
      miniCover.src = art.replace("large","t120x120");
    }
  });
}

/* Volume + Mute UI */
function setMuteIcon(muted){
  if(!muteBtn) return;
  muteBtn.textContent = muted ? "🔇" : "🔈";
}

/* Repeat UI */
function updateRepeatIcon(){
  if(!repeatBtn) return;
  repeatBtn.dataset.mode = repeatMode;

  if (repeatMode === "off") {
    repeatBtn.textContent = "🔁";
    repeatBtn.title = "Repeat aus";
  } else if (repeatMode === "one") {
    repeatBtn.textContent = "🔂";
    repeatBtn.title = "Song wiederholen";
  } else { // "all"
    repeatBtn.textContent = "🔁";
    repeatBtn.title = "Playlist wiederholen";
  }
}


/* === Load / Controls / Seek === */
function load(idx, auto=false, startPos=null, shouldPlayOverride=null){
  if(!inRange(idx)) return;
  current=idx;
  const {url}=TRACKS[current];

  localStorage.setItem("wr-track", String(current));

  widget.unbind(SC.Widget.Events.READY);
  widget.load(url,{auto_play:auto,show_user:false,visual:false});
  widget.bind(SC.Widget.Events.READY, ()=>{
    widget.getDuration(d=>{
      duration=d||0; seekEl.max=duration||1000; totalEl.textContent=fmt(duration); updateTime(0);
    });
    widget.setVolume(volume);
    setMetaFromWidget();

    if(startPos!==null && !isNaN(startPos)){
      const p = Math.max(0, startPos);
      widget.seekTo(p); updateTime(p);
    }
    if(shouldPlayOverride === true){
      widget.play();
    }else if(shouldPlayOverride === false){
      widget.pause();
    }
  });

  orderPos=Math.max(0,order.indexOf(current));
}
function updateTime(pos){ elapsedEl.textContent=fmt(pos); if(!seeking) seekEl.value=pos; }

/* Buttons */
btnPrev.onclick   = ()=> prev(true);
btnNext.onclick   = ()=> next(true);
btnToggle.onclick = ()=> widget.isPaused(p=> p ? widget.play() : widget.pause());
btnShuffle.onclick= ()=>{ shuffle=!shuffle; btnShuffle.setAttribute("aria-pressed",String(shuffle)); makeOrder(); };

repeatBtn.onclick = ()=>{
  // Reihenfolge: aus -> one -> all -> aus
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


/* Volume Events */
if(volumeEl){
  volumeEl.value = volume;
  setMuteIcon(volume===0);
}
if(volumeEl && muteBtn){
  volumeEl.addEventListener("input", e=>{
    volume = +e.target.value || 0;
    if(volume>0) lastNonZeroVolume = volume;
    widget.setVolume(volume);
    setMuteIcon(volume===0);
    localStorage.setItem("wr-volume", String(volume));
  });

  muteBtn.onclick = ()=>{
    if(volume===0){
      volume = lastNonZeroVolume || 80;
    }else{
      lastNonZeroVolume = volume || 80;
      volume = 0;
    }
    volumeEl.value = volume;
    widget.setVolume(volume);
    setMuteIcon(volume===0);
    localStorage.setItem("wr-volume", String(volume));
  };
}

/* Seek robust (Touch+Maus) */
seekEl.addEventListener("pointerdown", ()=> seeking=true);
seekEl.addEventListener("pointerup",   ()=> seeking=false);
seekEl.addEventListener("input", e=>{ const v=+e.target.value||0; widget.seekTo(v); updateTime(v); });
seekEl.addEventListener("change", ()=> seeking=false);

/* Keyboard nur wenn Overlay offen */
window.addEventListener("keydown",(e)=>{
  if(overlay.classList.contains("hidden")) return;
  if(e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
  if(e.code==="Space"){ e.preventDefault(); btnToggle.click(); }
  if(e.key==="ArrowRight") seekBy(5000);
  if(e.key==="ArrowLeft")  seekBy(-5000);
});
function seekBy(delta){ widget.getPosition(pos=>{ const to=Math.max(0,pos+delta); widget.seekTo(to); updateTime(to); }); }

/* === Widget Events (nur einmal binden) === */
(function bindOnce(){
  if(eventsBound) return; eventsBound = true;
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, e=>{
    if(!duration && e.duration){ duration=e.duration; seekEl.max=duration; totalEl.textContent=fmt(duration); }
    if(!seeking) updateTime(e.currentPosition);

    // Progress & Track speichern (für „Fortsetzen“)
    if(Math.abs(e.currentPosition - lastSavePos) > 2000){
      lastSavePos = e.currentPosition;
      localStorage.setItem("wr-pos", String(Math.floor(e.currentPosition)));
      localStorage.setItem("wr-track", String(current));
    }
  });
  widget.bind(SC.Widget.Events.PLAY,  ()=>{
    setPlayIcon(false);
    localStorage.setItem("wr-playing","1");
  });
  widget.bind(SC.Widget.Events.PAUSE, ()=>{
    setPlayIcon(true);
    localStorage.setItem("wr-playing","0");
  });
  widget.bind(SC.Widget.Events.FINISH,()=> handleFinish());
})();

/* === Navigation === */
function next(autoPlay=true, allowWrap=true){
  if(order.length===0) makeOrder();
  let newPos = orderPos + 1;
  if(newPos >= order.length){
    if(!allowWrap) return;
    newPos = 0;
  }
  orderPos = newPos;
  load(order[orderPos], autoPlay);
}
function prev(autoPlay=true){
  if(order.length===0) makeOrder();
  orderPos = (orderPos + order.length - 1) % order.length;
  load(order[orderPos], autoPlay);
}

/* FINISH Verhalten abhängig vom Repeat-Modus */
function handleFinish(){
  if(repeatMode === "one"){
    load(current, true);
    return;
  }
  if(repeatMode === "all"){
    next(true, true); // mit Wrap
    return;
  }
  // repeat off → nur weiter, wenn nicht am Ende
  next(true, false);
}

/* === Suche & Chips Listener === */
searchEl.addEventListener("input", ()=> renderGrid());

/* === Theme Toggle & Persistenz === */
function applyTheme(){
  const pref = localStorage.getItem("wr-theme") || "dark";
  document.body.classList.toggle("light", pref==="light");
  themeToggle.textContent = pref==="light" ? "🌞" : "🌙";
}
themeToggle.onclick = ()=>{
  const next = document.body.classList.contains("light") ? "dark" : "light";
  localStorage.setItem("wr-theme", next);
  applyTheme();
};

/* === Fortsetzen: letzten Track + Position wiederherstellen === */
function restoreLastSession(){
  const idxStr = localStorage.getItem("wr-track");
  const posStr = localStorage.getItem("wr-pos");
  const playing = localStorage.getItem("wr-playing") === "1";

  const idx = idxStr !== null ? parseInt(idxStr,10) : NaN;
  const pos = posStr !== null ? parseInt(posStr,10) : NaN;

  if(Number.isInteger(idx) && idx>=0 && idx<TRACKS.length){
    load(idx, false, isNaN(pos)?null:pos, playing);
  }else{
    // kein gespeicherter Zustand → erstes Lied, pausiert
    load(0,false,null,false);
  }
}

/* === Start === */
document.addEventListener("DOMContentLoaded", async ()=>{
  applyTheme();
  renderChips();
  await renderGrid();
  makeOrder();
  setPlayIcon(true);
  setMiniTitle();
  updateRepeatIcon();
  restoreLastSession();
});
