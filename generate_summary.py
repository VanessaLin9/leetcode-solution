import os
import re
from collections import defaultdict

README_PATH = "README.md"
SUMMARY_START = "<<!-- summary:start -->"
SUMMARY_END = "<!-- summary:end -->"

def count_files_by_extension(folder, extensions):
    counts = {ext: 0 for ext in extensions}

    for root, _, files in os.walk(folder):
        for file in files:
            for ext in extensions:
                if file.endswith(ext):
                    counts[ext] += 1
    return counts

def count_tags_by_language(folder, extensions):
    tag_counts = {ext: defaultdict(int) for ext in extensions}

    for root, _, files in os.walk(folder):
        for file in files:
            for ext in extensions:
                if file.endswith(ext):
                    file_path = os.path.join(root, file)
                    with open(file_path, "r", encoding="utf-8") as f:
                        for line in f:
                            if "Tag:" in line:
                                tag_str = line.split(":", 1)[1]
                                tags = [t.strip() for t in tag_str.split(",")]
                                for tag in tags:
                                    if tag:
                                        tag_counts[ext][tag] += 1
                                break  # 只讀第一個 Tags 行即可
    return tag_counts


if __name__ == "__main__":
    extensions = [".cs", ".js"]

    # ===== Custom focus tags =====
    observed_tags = ["Easy", "Array", "String", "Math", "Dynamic Programming", "Linked List", "Hash Table"]


    # 標籤統計（分語言）
    counts = count_files_by_extension(".", extensions)
    tag_counts = count_tags_by_language(".", extensions)

    print("🏷️  Tag Focus Summary (with ratio %):")
    for ext in extensions:
        lang = "C#" if ext == ".cs" else "JavaScript"
        total = counts[ext]
        print(f"\n- {lang} ({ext}): total {total}")

        for tag in observed_tags:
            tag_count = tag_counts[ext].get(tag, 0)
            ratio = (tag_count / total) * 100 if total > 0 else 0
            print(f"  - {tag}: {ratio:.0f}%")

