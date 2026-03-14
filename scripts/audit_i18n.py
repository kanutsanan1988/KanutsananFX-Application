import os
import re
from pathlib import Path

ROOT = Path('/home/ubuntu/KanutsananFX/app')
TARGETS = [p for p in ROOT.rglob('*') if p.suffix in {'.tsx', '.ts'} and 'i18n' not in p.parts]

string_re = re.compile(r"(['\"])(.*?)(?<!\\)\1")

for path in sorted(TARGETS):
    rel = path.relative_to(ROOT)
    lines = path.read_text(encoding='utf-8').splitlines()
    findings = []
    for i, line in enumerate(lines, start=1):
        if 'http' in line or 'Ionicons' in line or 'style' in line:
            continue
        if 't(' in line:
            continue
        if any(token in line for token in ['import ', 'export ', 'const styles', 'StyleSheet.create', 'useState(', 'name="', "name='"]):
            continue
        if re.search(r'[\u0E00-\u9FFF]|[A-Za-z]{4,}', line):
            findings.append(f'{i}: {line.strip()}')
    if findings:
        print(f'## {rel}')
        for item in findings[:80]:
            print(item)
        print()
