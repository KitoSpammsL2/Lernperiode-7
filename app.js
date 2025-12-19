/* =========================
   WhiteRice – app.js
   ========================= */

/* Tracks (deine Liste) */
const TRACKS = [
  // Carti
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

  // ASAP Rocky
  { title: "ASAP Rocky – F**kin Problems", url: "https://soundcloud.com/asvpxrocky/f-kin-problems" },
  { title: "ASAP Rocky – HIGHJACK (feat. Jessica Pratt)", url: "https://soundcloud.com/asvpxrocky/a-ap-rocky-feat-jessica-pratt" },
  { title: "ASAP Rocky – Babushka Boi", url: "https://soundcloud.com/6cv/aap-rocky-babushka-boi" },

  // NIGO
  { title: "NIGO – ARYA (feat. ASAP Rocky)", url: "https://soundcloud.com/nigo-music/arya" },
];

/* Lyrics/Notes (hier ändern!) */
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
  `.trim(),
};

/* Helpers */
const $ = (q) => document.querySelector(q);
const fmt = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
};
function splitTitle(full){
  // "Artist – Title"
  const parts = full.split("–").map(s => s.trim());
  if (parts.length >= 2) return { artist: parts[0], title: parts.slice(1).join(" – ") };
  return { artist: "Unknown", title: full };
}

/* DOM */
const grid = $("#grid");
const chipsEl = $("#chips");
const searchEl = $("#search");

const overlay = $("#overlay");
const closeOverlay = $("#closeOverlay");

const bigcover = $("#bigcover");
const titleEl = $("#title");
const artistEl = $("#artist");

const seek = $("#seek");
const elapsedEl = $("#elapsed");
const totalEl = $("#total");

const shuffleBtn = $("#shuffle");
const prevBtn = $("#prev");
const nextBtn = $("#next");
const playToggle = $("#playToggle");
const repeatBtn = $("#repeat");

const lyricsToggle = $("#lyricsToggle");
const lyricsPanel = $("#lyricsPanel");
const lyricsScroll = $("#lyricsScroll");

const mini = $("#mini");
const miniPlay = $("#miniPlay");
const miniOpen = $("#miniOpen");
const miniCover = $("#miniCover");
const miniTitle = $("#miniTitle");
const miniArtist = $("#miniArtist");

const themeBtn = $("#themeBtn");

/* SoundCloud Widget */
const widget = SC.Widget($("#sc"));

/* State */
let current = 0;
let durationMs = 0;
let isSeeking = false;

let shuffle = false;
let order = [];
let orderPos = 0;

let repeatMode = 0; // 0=off, 1=repeat-all, 2=repeat-one

/* Filter state */
let activeArtist = "Alle";
let q = "";

/* ============= Theme ============= */
function applyTheme(){
  const saved = localStorage.getItem("wr_theme") || "dark";
  document.documentElement.dataset.theme = saved;
  themeBtn.textContent = saved === "light" ? "☀️" : "🌙";
}
function toggleTheme(){
  const cur = document.documentElement.dataset.theme || "dark";
  const next = cur === "light" ? "dark" : "light";
  localStorage.setItem("wr_theme", next);
  applyTheme();
}

/* ============= Covers via oEmbed ============= */
const coverCacheKey = "wr_cover_cache_v1";
const coverCache = JSON.parse(localStorage.getItem(coverCacheKey) || "{}");
function saveCoverCache(){
  localStorage.setItem(coverCacheKey, JSON.stringify(coverCache));
}
async function fetchArtwork(scUrl){
  if (coverCache[scUrl]) return coverCache[scUrl];
  try{
    const o = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(scUrl)}`);
    if(!o.ok) throw new Error("oEmbed failed");
    const data = await o.json();
    // thumbnail_url exists, artwork can be in html but thumbnail is enough
    const thumb = data.thumbnail_url || "";
    coverCache[scUrl] = thumb;
    saveCoverCache();
    return thumb;
  }catch(e){
    // fallback
    coverCache[scUrl] = "";
    saveCoverCache();
    return "";
  }
}

/* ============= Order / Shuffle ============= */
function fisherYates(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
}
function makeOrder(){
  order = [...Array(TRACKS.length).keys()];
  if(shuffle) fisherYates(order);
  orderPos = order.indexOf(current);
  if(orderPos < 0) orderPos = 0;
}

/* ============= Lyrics ============= */
function updateLyricsBox(){
  const key = TRACKS[current].title;
  lyricsScroll.textContent = LYRICS[key] || "Keine Lyrics hinterlegt.";
}

/* ============= Mini Meta ============= */
function setMiniMeta(){
  const { artist, title } = splitTitle(TRACKS[current].title);
  miniTitle.textContent = title;
  miniArtist.textContent = artist;
}

/* ============= UI update ============= */
function setPlayIcon(isPlaying){
  playToggle.textContent = isPlaying ? "⏸" : "▶";
  miniPlay.textContent = isPlaying ? "⏸" : "▶";
}
function updateTimes(posMs){
  elapsedEl.textContent = fmt(posMs);
  totalEl.textContent = fmt(durationMs);
  if(!isSeeking) seek.value = posMs;
}
function updateRepeatIcon(){
  // simple visual: off=dim, all=normal, one=highlight
  if(repeatMode === 0){
    repeatBtn.style.opacity = ".55";
    repeatBtn.textContent = "🔁";
  }else if(repeatMode === 1){
    repeatBtn.style.opacity = "1";
    repeatBtn.textContent = "🔁";
  }else{
    repeatBtn.style.opacity = "1";
    repeatBtn.textContent = "🔂";
  }
}

/* ============= Load Track ============= */
async function setArtworkForCurrent(){
  const track = TRACKS[current];
  // Best: from widget current sound (artwork_url), fallback oembed
  widget.getCurrentSound(async (s)=>{
    let art = (s && (s.artwork_url || (s.user && s.user.avatar_url))) || "";
    if(!art) art = await fetchArtwork(track.url);
    if(art){
      const big = art.replace("large","t500x500");
      bigcover.src = big;
      miniCover.src = art.replace("large","t120x120");
    }else{
      bigcover.removeAttribute("src");
      miniCover.removeAttribute("src");
    }
  });
}

function load(idx, autoPlay=false){
  if(idx < 0 || idx >= TRACKS.length) return;

  current = idx;
  const track = TRACKS[current];

  // Update UI
  const { artist, title } = splitTitle(track.title);
  titleEl.textContent = title;
  artistEl.textContent = artist;
  setMiniMeta();
  updateLyricsBox();

  // Load sound
  widget.load(track.url, { auto_play: autoPlay, show_user:false, visual:false });

  // Re-sync order position
  orderPos = order.indexOf(current);
  if(orderPos < 0) orderPos = 0;

  // Update art once ready
  widget.bind(SC.Widget.Events.READY, ()=>{
    widget.getDuration((d)=>{
      durationMs = d || 0;
      seek.max = durationMs || 1000;
      updateTimes(0);
      setArtworkForCurrent();
    });
  });

  // Save last session
  localStorage.setItem("wr_last_track", String(current));
}

/* ============= Next/Prev ============= */
function next(){
  if(order.length === 0) makeOrder();
  if(repeatMode === 2){
    // repeat one
    load(current, true);
    return;
  }
  orderPos = (orderPos + 1) % order.length;
  load(order[orderPos], true);
}
function prev(){
  if(order.length === 0) makeOrder();
  orderPos = (orderPos + order.length - 1) % order.length;
  load(order[orderPos], true);
}

/* ============= Overlay open/close (no playback stop) ============= */
function openOverlay(){
  overlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeOverlayFn(){
  overlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}


/* ============= Grid / Chips / Search ============= */
function uniqueArtists(){
  const set = new Set(["Alle"]);
  TRACKS.forEach(t=>{
    const { artist } = splitTitle(t.title);
    set.add(artist);
  });
  return [...set];
}

function renderChips(){
  chipsEl.innerHTML = "";
  uniqueArtists().forEach(name=>{
    const b = document.createElement("button");
    b.className = "chip" + (name === activeArtist ? " active" : "");
    b.textContent = name;
    b.onclick = ()=>{
      activeArtist = name;
      renderChips();
      renderGrid();
    };
    chipsEl.appendChild(b);
  });
}

function matchesFilter(track){
  const { artist, title } = splitTitle(track.title);
  if(activeArtist !== "Alle" && artist !== activeArtist) return false;
  if(q.trim()){
    const s = q.toLowerCase();
    if(!artist.toLowerCase().includes(s) && !title.toLowerCase().includes(s)) return false;
  }
  return true;
}

async function renderGrid(){
  grid.innerHTML = "";
  const list = TRACKS.map((t,i)=>({t,i})).filter(({t})=>matchesFilter(t));

  for(const { t, i } of list){
    const { artist, title } = splitTitle(t.title);

    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;

    const img = document.createElement("img");
    img.alt = `${title} – ${artist}`;
    img.src = "";
    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<p class="t">${title}</p><p class="a">${artist}</p>`;
    card.appendChild(info);

    card.onclick = ()=>{ load(i, true); openOverlay(); };
    card.onkeydown = (e)=>{ if(e.key === "Enter") { load(i, true); openOverlay(); } };

    grid.appendChild(card);

    // cover async
    const art = await fetchArtwork(t.url);
    if(art) img.src = art.replace("large","t300x300");
  }
}

function flashActive(el){
  if(!el) return;
  el.classList.add("btn-active");
  setTimeout(()=> el.classList.remove("btn-active"), 160);
}


/* ============= Events ============= */
themeBtn.onclick = () => {
  flashActive(themeBtn);
  toggleTheme();
};

searchEl.addEventListener("input", (e)=>{
  q = e.target.value || "";
  renderGrid();
});

closeOverlay.onclick = () => {
  flashActive(closeOverlay);
  closeOverlayFn();
};

overlay.addEventListener("click",(e)=>{
  if(e.target === overlay) closeOverlayFn();
});

miniOpen.onclick = () => {
  flashActive(miniOpen);
  openOverlay();
};

mini.addEventListener("click",(e)=>{
  if(e.target === miniPlay || e.target === miniOpen) return;
  openOverlay();
});

miniPlay.onclick = ()=>{
  flashActive(miniPlay);
  widget.isPaused((paused)=>{
    if(paused) widget.play();
    else widget.pause();
  });
};

playToggle.onclick = ()=>{
  flashActive(playToggle);
  widget.isPaused((paused)=>{
    if(paused) widget.play();
    else widget.pause();
  });
};

prevBtn.onclick = ()=>{
  flashActive(prevBtn);
  prev();
};

nextBtn.onclick = ()=>{
  flashActive(nextBtn);
  next();
};

shuffleBtn.onclick = ()=>{
  flashActive(shuffleBtn);
  shuffle = !shuffle;
  shuffleBtn.style.opacity = shuffle ? "1" : ".6";
  makeOrder();
};

repeatBtn.onclick = ()=>{
  flashActive(repeatBtn);
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatIcon();
};

lyricsToggle.onclick = ()=>{
  flashActive(lyricsToggle);
  lyricsPanel.classList.toggle("hidden");
  const active = !lyricsPanel.classList.contains("hidden");
  lyricsToggle.classList.toggle("active", active);
};


seek.addEventListener("input",(e)=>{
  isSeeking = true;
  const v = +e.target.value || 0;
  updateTimes(v);
  widget.seekTo(v);
});
seek.addEventListener("change",()=>{ isSeeking = false; });

/* Widget events */
widget.bind(SC.Widget.Events.PLAY, ()=> setPlayIcon(true));
widget.bind(SC.Widget.Events.PAUSE, ()=> setPlayIcon(false));

widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e)=>{
  if(!durationMs && e.duration){
    durationMs = e.duration;
    seek.max = durationMs;
  }
  if(!isSeeking){
    updateTimes(e.currentPosition);
  }
});

widget.bind(SC.Widget.Events.FINISH, ()=>{
  // repeat all / off -> next, repeat one handled in next()
  next();
});

/* ============= Start ============= */
document.addEventListener("DOMContentLoaded", async ()=>{
  applyTheme();
  renderChips();
  await renderGrid();

  // default shuffle icon state
  shuffleBtn.style.opacity = ".6";
  updateRepeatIcon();

  makeOrder();

  const saved = parseInt(localStorage.getItem("wr_last_track") || "0", 10);
  if(!Number.isNaN(saved) && saved >= 0 && saved < TRACKS.length) current = saved;

  load(current, false);

  // start with lyrics panel closed
  lyricsPanel.classList.add("hidden");
});

function flashActive(el){
  el.classList.add("active");
  setTimeout(()=>el.classList.remove("active"),150);
}

