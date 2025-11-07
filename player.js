/* WhiteRice – player.js (Now-Playing mit Play/Pause-Toggle + Shuffle-Icon) */

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

const $ = q => document.querySelector(q);
const qs = s => new URLSearchParams(location.search).get(s);
const fmt = ms => { const s = Math.max(0, Math.floor(ms/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`; };
const splitTitle = full => { const p=full.split("–"); return {artist:(p[0]||"").trim(), title:(p[1]||full).trim()}; };

const iframe = $("#sc");
const widget = SC.Widget(iframe);

const bigcover = $("#bigcover");
const titleEl  = $("#title");
const artistEl = $("#artist");
const seekEl   = $("#seek");
const elapsedEl= $("#elapsed");
const totalEl  = $("#total");

const btnPrev  = $("#prev");
const btnNext  = $("#next");
const btnToggle= $("#playToggle");
const btnShuffle=$("#shuffle");

const miniBar   = $("#minibar");
const miniInfo  = $("#miniInfo");
const miniToggle= $("#miniToggle");
const miniOpen  = $("#miniOpen");


let current = Number(qs("i") || 0);
let duration = 0;
let seeking  = false;
let shuffle  = false;
let order    = [];
let orderPos = 0;

// --- Artwork via oEmbed (Fallback) ---
async function fetchArtwork(url){
  try{
    const res = await fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`);
    const data = await res.json();
    return data.thumbnail_url || "";
  }catch{ return ""; }
}

function setMiniTitle(){
  const {artist, title} = splitTitle(TRACKS[current].title);
  miniInfo.textContent = `${title} — ${artist}`;
}
function setMiniIcon(paused){
  miniToggle.textContent = paused ? "▶" : "⏸";
}


// --- Order / Shuffle ---
function makeOrder(){
  order = [...Array(TRACKS.length).keys()];
  if (shuffle) for(let i=order.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
  orderPos = Math.max(0, order.indexOf(current));
}

// --- UI helpers ---
function setPlayIcon(paused){ btnToggle.textContent = paused ? "▶" : "⏸"; }
function setMetaFromWidget(){
  widget.getCurrentSound(async (s) => {
    const {artist,title} = splitTitle(TRACKS[current].title);
    titleEl.textContent = title;
    artistEl.textContent = artist;
    let art = (s && (s.artwork_url || (s.user && s.user.avatar_url))) || "";
    if(!art) art = await fetchArtwork(TRACKS[current].url);
    if(art) bigcover.src = art.replace("large","t500x500");
  });
}

// --- Load ---
function load(idx, auto=false){
  current = idx;
  const { url } = TRACKS[current];
  widget.load(url, { auto_play:auto, show_user:false, visual:false });

  widget.bind(SC.Widget.Events.READY, () => {
    widget.getDuration((d)=>{ duration=d||0; seekEl.max=duration||1000; totalEl.textContent=fmt(duration); updateTime(0); });
    setMetaFromWidget();
  });

  orderPos = Math.max(0, order.indexOf(current));
}

function updateTime(pos){
  elapsedEl.textContent = fmt(pos);
  if(!seeking) seekEl.value = pos;
}

// --- Controls ---
btnPrev.onclick  = ()=> prev();
btnNext.onclick  = ()=> next();
btnToggle.onclick= ()=> widget.isPaused(p => p ? widget.play() : widget.pause());
btnShuffle.onclick= ()=>{ shuffle=!shuffle; btnShuffle.setAttribute("aria-pressed", String(shuffle)); makeOrder(); };

// Keyboard
window.addEventListener("keydown", (e)=>{
  if(e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
  if(e.code==="Space"){ e.preventDefault(); btnToggle.click(); }
  if(e.key==="ArrowRight") seekBy(5000);
  if(e.key==="ArrowLeft")  seekBy(-5000);
});
function seekBy(delta){
  widget.getPosition(pos=>{ const to=Math.max(0,pos+delta); widget.seekTo(to); updateTime(to); });
}

// Seek robust (Touch+Maus)
seekEl.addEventListener("pointerdown", ()=> seeking=true);
seekEl.addEventListener("pointerup",   ()=> seeking=false);
seekEl.addEventListener("input", (e)=>{ const v=+e.target.value||0; widget.seekTo(v); updateTime(v); });
seekEl.addEventListener("change", ()=> seeking=false);

// --- Widget Events -> UI sync ---
widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e)=>{
  if(!duration && e.duration){ duration=e.duration; seekEl.max=duration; totalEl.textContent=fmt(duration); }
  if(!seeking) updateTime(e.currentPosition);
});
widget.bind(SC.Widget.Events.PLAY,  ()=> setPlayIcon(false));
widget.bind(SC.Widget.Events.PAUSE, ()=> setPlayIcon(true));
widget.bind(SC.Widget.Events.FINISH,()=> next());

// --- Navigation ---
function next(){ if(order.length===0) makeOrder(); orderPos=(orderPos+1)%order.length; load(order[orderPos], true); }
function prev(){ if(order.length===0) makeOrder(); orderPos=(orderPos+order.length-1)%order.length; load(order[orderPos], true); }

// --- Init ---
document.addEventListener("DOMContentLoaded", ()=>{
  makeOrder();
  setPlayIcon(true);
  load(Math.max(0,current), true);
});
