import os
from PIL import Image

dest_dir = os.path.join(os.path.dirname(__file__), "images")
sprite_path = os.path.join(dest_dir, "vehicles_sprite.png")

im = Image.open(sprite_path)
w, h = im.size

# Shave 4 pixels inside the gray border for pure white background
y1 = int(h * 0.448) + 3
y2 = int(h * 0.722) - 3

crops = [
    ("vehicle_mini.png", int(w * 0.038) + 3, int(w * 0.207) - 3),
    ("vehicle_sedan.png", int(w * 0.228) + 3, int(w * 0.397) - 3),
    ("vehicle_minivan.png", int(w * 0.415) + 3, int(w * 0.585) - 3),
    ("vehicle_van.png", int(w * 0.603) + 3, int(w * 0.772) - 3),
    ("vehicle_largevan.png", int(w * 0.788) + 3, int(w * 0.959) - 3),
]

for filename, x1, x2 in crops:
    cropped = im.crop((x1, y1, x2, y2))
    out_p = os.path.join(dest_dir, filename)
    cropped.save(out_p)
    print("Saved clean", out_p)
