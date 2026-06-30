rainsong — personal site

DEPLOY (free, ~30 sec):
1. Go to  app.netlify.com/drop  in your browser.
2. Drag THIS whole "rainsong" folder onto the drop zone.
3. You get a live URL. Done.

UPDATE LATER: edit files, then re-drag the folder in Netlify's Deploys tab.

ADD IMAGES: put files in /img
  album1.jpg..album4.jpg  -> music covers
  art1.png..art7.png      -> art grid (in art.html, swap the placeholder div for <img>)
  avatar.png              -> optional

ADD STICKERS/DOODLES: drop images in /img/stickers/ then add a line in stickers.js
  { src:"img/stickers/yourfile.png", top:"40%", left:"8%", size:90, rot:-8 }

Don't rename the .html files — the nav links use those names.
