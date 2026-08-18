import os
from PIL import Image
from pathlib import Path

def convert_images_to_webp(directory_path):
    path = Path(directory_path)
    if not path.exists():
        print(f"Directory {directory_path} does not exist. Skipping.")
        return

    extensions = [".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"]
    converted_count = 0

    for root, _, files in os.walk(path):
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix in extensions:
                webp_path = file_path.with_suffix(".webp")
                
                # Check if webp version already exists to avoid redundant conversion
                if webp_path.exists():
                    print(f"Skipping (already exists): {file_path.name}")
                    continue

                try:
                    print(f"Converting {file_path.name} to WebP...")
                    with Image.open(file_path) as img:
                        # Convert RGBA to RGB if saving as JPG-like WebP, or preserve transparency
                        if img.mode in ("RGBA", "LA") and file_path.suffix.lower() in (".jpg", ".jpeg"):
                            # Fill background with white for JPG conversions
                            background = Image.new("RGB", img.size, (255, 255, 255))
                            background.paste(img, mask=img.split()[3]) # 3 is the alpha channel
                            img = background
                        
                        img.save(webp_path, "WEBP", quality=85)
                        converted_count += 1
                except Exception as e:
                    print(f"Failed to convert {file_path.name}: {e}")

    print(f"Successfully converted {converted_count} images in {directory_path}.")

if __name__ == "__main__":
    project_dir = Path(__file__).resolve().parents[1]
    
    print(f"Scanning project directory: {project_dir}")
    convert_images_to_webp(project_dir / "public")
    convert_images_to_webp(project_dir / "src")
