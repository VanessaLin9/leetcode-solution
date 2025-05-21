import os
import re
from collections import defaultdict

README_PATH = "readme.md"
SUMMARY_START = "<!-- summary:start -->"
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

def update_readme_with_summary(readme_path, summary_md):
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(f"{SUMMARY_START}.*?{SUMMARY_END}", re.DOTALL)
    replacement = f"{SUMMARY_START}\n{summary_md}\n{SUMMARY_END}"
    new_content = pattern.sub(replacement, content)

    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(new_content)


if __name__ == "__main__":
    extensions = [".cs", ".js", ".sql"]

    # ===== Custom focus tags =====
    share_tags = ["Easy","Medium", "Array", "String", "Math", "Dynamic Programming", "Linked List", "Hash Table"] # 這些 tag 是在所有語言中都會出現的
    observed_tags_by_lang = {
        ".cs": share_tags,
        ".js": share_tags,
        ".sql": ["SELECT", "JOIN", "AGGREGATION", "SUBQUERY", "UNION", "SORTING"],
    }


    # 標籤統計（分語言）
    counts = count_files_by_extension(".", extensions)
    tag_counts = count_tags_by_language(".", extensions)

    # 準備 summary markdown 文字（要寫進 README）
    lines = []
    lines.append("### 📊 Tag Summary\n")

    # 上表：非 SQL 語言
    lines.append("#### 🟦 C#/JS 題型分布\n")
    headers = ["Language", "Total"] + observed_tags_by_lang[".cs"]
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("|" + "|".join(["---"] * len(headers)) + "|")

    for ext in [".cs", ".js"]:
        lang = "C#" if ext == ".cs" else "JavaScript"
        total = counts[ext]
        row = [f"{lang}", str(total)]
        for tag in observed_tags_by_lang[ext]:
            tag_count = tag_counts[ext].get(tag, 0)
            ratio = (tag_count / total) * 100 if total > 0 else 0
            row.append(f"{ratio:.0f}%")
        lines.append("| " + " | ".join(row) + " |")

    lines.append("")  # 空一行

    # 下表：SQL
    lines.append("#### 🟨 SQL 題型分布\n")
    headers = ["Language", "Total"] + observed_tags_by_lang[".sql"]
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("|" + "|".join(["---"] * len(headers)) + "|")

    ext = ".sql"
    lang = "SQL"
    total = counts[ext]
    row = [f"{lang}", str(total)]
    for tag in observed_tags_by_lang[ext]:
        tag_count = tag_counts[ext].get(tag, 0)
        ratio = (tag_count / total) * 100 if total > 0 else 0
        row.append(f"{ratio:.0f}%")
    lines.append("| " + " | ".join(row) + " |")

    # 寫入 README
    summary_text = "\n".join(lines)
    update_readme_with_summary(README_PATH, summary_text)


    print("✅ README summary updated.")


