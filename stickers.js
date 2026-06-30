/* ===========================================================
   rainsong sticker library
   -----------------------------------------------------------
   ADD YOUR OWN: drop any image into  img/stickers/
   then add a line to the STICKERS list below:

   { src:"img/stickers/yourfile.png", top:"40%", left:"8%", size:90, rot:-8 }

   top/left  : where it sits (%, or px). right/bottom also work.
   size      : width in px (height auto)
   rot       : tilt in degrees (optional)
   Reload the page and it scatters in behind the text.
   =========================================================== */

const STICKERS = [
  { src:"img/stickers/star.svg",     top:"8%",   right:"8%",  size:44, rot:-6 },
  { src:"img/stickers/squiggle.svg", top:"26%",  right:"4%",  size:86, rot:8 },
  { src:"img/stickers/spiral.svg",   top:"62%",  left:"3%",   size:50, rot:-12 },
  { src:"img/stickers/stamp.svg",    bottom:"16%", right:"6%", size:64, rot:6 },
  { src:"img/stickers/blob.svg",     top:"48%",  right:"3%",  size:52, rot:14 },
  { src:"img/stickers/arrow.svg",    top:"40%",  left:"4%",   size:70, rot:-4 },
  { src:"img/stickers/sparkle.svg",  top:"16%",  left:"3%",   size:38, rot:0 },
  { src:"img/stickers/cross.svg",    bottom:"26%", left:"8%",  size:30, rot:10 },

  // ↓↓↓ ADD YOUR OWN BELOW ↓↓↓
  // { src:"img/stickers/kiwi.png",  top:"70%", left:"30%", size:80, rot:-5 },
];

(function(){
  const layer = document.createElement('div');
  layer.style.cssText = 'position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden';
  document.body.appendChild(layer);
  STICKERS.forEach(s=>{
    const img = document.createElement('img');
    img.src = s.src; img.alt = '';
    img.onerror = ()=>img.remove();
    let pos = 'position:absolute;';
    if(s.top!=null)    pos+='top:'+s.top+';';
    if(s.bottom!=null) pos+='bottom:'+s.bottom+';';
    if(s.left!=null)   pos+='left:'+s.left+';';
    if(s.right!=null)  pos+='right:'+s.right+';';
    img.style.cssText = pos +
      'width:'+(s.size||60)+'px;height:auto;opacity:.85;'+
      'transform:rotate('+(s.rot||0)+'deg);';
    layer.appendChild(img);
  });
})();
