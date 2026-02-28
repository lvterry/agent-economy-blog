#!/usr/bin/env python3
"""Generate OG image for Agent Economy blog - simplified version"""
from PIL import Image, ImageDraw, ImageFont
import os

# OG image dimensions
WIDTH = 1200
HEIGHT = 630

# Colors matching the blog's dark theme
BG_COLOR = "#0a0a0a"  # Dark background
TEXT_COLOR = "#fafafa"  # Light text
ACCENT_COLOR = "#525252"  # Secondary text
BORDER_COLOR = "#262626"  # Border color

# Create image
img = Image.new('RGB', (WIDTH, HEIGHT), BG_COLOR)
draw = ImageDraw.Draw(img)

# Try to load fonts, fall back to default if not available
try:
    # Try system fonts
    fonts_to_try = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",  # macOS
        "C:/Windows/Fonts/arial.ttf",  # Windows
    ]
    
    title_font = None
    
    for font_path in fonts_to_try:
        if os.path.exists(font_path):
            title_font = ImageFont.truetype(font_path, 80)
            break
    
    if title_font is None:
        raise IOError("No suitable font found")
        
except:
    # Fall back to default font
    title_font = ImageFont.load_default()

# Draw a subtle border/frame
draw.rectangle([20, 20, WIDTH-20, HEIGHT-20], outline=BORDER_COLOR, width=2)

# Main title only - centered
title = "Agent Economy Blog"
bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = bbox[2] - bbox[0]
title_height = bbox[3] - bbox[1]
title_x = (WIDTH - title_width) // 2
title_y = (HEIGHT - title_height) // 2 - 20  # Slightly above center

draw.text((title_x, title_y), title, fill=TEXT_COLOR, font=title_font)

# Save the image
output_path = "/root/.openclaw/workspace/agent-economy-blog/public/og-image.png"
img.save(output_path, "PNG")
print(f"OG image saved to: {output_path}")
print(f"Image size: {img.size}")
