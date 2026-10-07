"""Subset bundled Noto Sans CJK JP fonts to current sample content.
Requires fonttools[woff] and the system Noto CJK font package.
If new glyphs are added, regenerate these assets or replace with full Noto Sans JP.
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parents[1]
text=''.join(p.read_text() for p in (root/'src').glob('*.tsx'))+(root/'src'/'data.ts').read_text()+''.join(chr(i) for i in range(32,127))+'株式会社EN就活大学生情報教科書年月日分無料'
for source,target in [('NotoSansCJK-Regular.ttc','careety-noto-regular.woff2'),('NotoSansCJK-Bold.ttc','careety-noto-bold.woff2')]:
 font=TTFont('/usr/share/fonts/opentype/noto/'+source,fontNumber=0)
 options=subset.Options();options.flavor='woff2'
 sub=subset.Subsetter(options=options);sub.populate(text=text);sub.subset(font);font.flavor='woff2';font.save(root/'public'/'fonts'/target)
 print(target,(root/'public'/'fonts'/target).stat().st_size)
