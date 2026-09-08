Drop the three Higgsfield clips here, named exactly:

  restaurant.mp4
  dental-lab.mp4
  landscaping.mp4

Optional poster stills (shown before the clip loads), same names:

  restaurant.jpg
  dental-lab.jpg
  landscaping.jpg

Generate a poster from a clip with:
  ffmpeg -i restaurant.mp4 -vf "select=eq(n\,0)" -q:v 3 restaurant.jpg

Until the .mp4 files exist the cards fall back to a tinted gradient,
so the site builds and renders fine without them.
