export type Category = { slug: string; name: string; shortName: string; description: string; icon: string; color: string; tags: string[] };
export const categories: Category[] = [
  {slug:'getting-started',name:'就活の始め方',shortName:'就活の始め方',description:'まずは、ここから。就活の全体像をつかもう。',icon:'compass',color:'blue',tags:['準備','スケジュール','学年別']},
  {slug:'self-analysis',name:'自己分析',shortName:'自己分析',description:'自分らしさと、これからの可能性を知る。',icon:'user',color:'pink',tags:['価値観','強み','自己理解']},
  {slug:'es',name:'ES・志望動機',shortName:'ES・志望動機',description:'あなたの経験を、伝わる言葉に。',icon:'file',color:'blue',tags:['ガクチカ','自己PR','志望動機']},
  {slug:'manners',name:'第一印象・身だしなみ・就活マナー',shortName:'就活マナー',description:'小さな準備が、大きな安心につながる。',icon:'shirt',color:'green',tags:['身だしなみ','第一印象','マナー']},
  {slug:'business-rules',name:'就活におけるビジネスルール',shortName:'ビジネスルール',description:'メールや連絡の基本を押さえよう。',icon:'mail',color:'blue',tags:['メール','電話','日程調整']},
  {slug:'interview',name:'面接',shortName:'面接対策',description:'準備を味方に、自分の言葉で話そう。',icon:'message',color:'orange',tags:['個人面接','集団面接','面接対策']},
  {slug:'tests',name:'筆記試験・WEB試験・適性検査・時事問題',shortName:'WEBテスト・適性検査',description:'試験の特徴を知って、計画的に備える。',icon:'pencil',color:'green',tags:['WEBテスト','適性検査','時事問題']},
  {slug:'industry',name:'仕事・業界研究',shortName:'仕事・業界研究',description:'仕事を知ることから、未来が広がる。',icon:'building',color:'blue',tags:['業界研究','仕事内容','ビジョン']},
  {slug:'company',name:'企業研究',shortName:'企業研究',description:'企業への理解を、一歩深めよう。',icon:'search',color:'blue',tags:['企業研究','企業ニュース','比較']},
  {slug:'internship',name:'インターン',shortName:'インターン',description:'社会と出会い、働くイメージを育てる。',icon:'briefcase',color:'orange',tags:['仕事体験','インターン','応募準備']},
  {slug:'media',name:'就活媒体',shortName:'就活サイト・媒体',description:'目的に合う情報源を、上手に選ぼう。',icon:'monitor',color:'blue',tags:['就活サイト','スカウト','情報収集']},
  {slug:'agents',name:'就活エージェント',shortName:'就活エージェント',description:'相談先の選び方を、フラットに知る。',icon:'users',color:'pink',tags:['相談','サポート','選び方']},
  {slug:'offer',name:'内定・選考対策',shortName:'内定・選考対策',description:'最後まで、納得できる選択を。',icon:'check',color:'green',tags:['内定','選考','キャリア選択']},
];
export type Section = { id: string; title: string; paragraphs: string[]; checklist?: string[]; point?: string; table?: string[][]; good?: string; bad?: string };
export type Article = { title:string; slug:string; category:string; tags:string[]; thumbnail:string; summary:string; publishedDate:string; updatedDate:string; minutes:number; pickup:boolean; topFeatured:boolean; grade:string[]; ctaType:'download'|'agent'|'none'; relatedArticles:string[]; contentType:'Article'|'News'; body:Section[]; popular:number };
const starts: Section[] = [
 {id:'overview',title:'就活は「全体像を知る」ところから',paragraphs:['就活を始めようと思っても、自己分析、企業研究、ES、面接と、やることの多さに戸惑うかもしれません。まず大切なのは、すべてを一度に終わらせようとせず、就活の流れと自分の現在地を知ることです。','採用の時期や選考の進め方は企業によって異なります。一般的なスケジュールは目安として使い、気になる企業の採用ページで応募条件と締め切りを確認しましょう。'],point:'周りの進み具合より、「自分は次に何をするか」を決めることが第一歩です。'},
 {id:'steps',title:'最初に取り組みたい3つのこと',paragraphs:['自分を知る、仕事を知る、予定を整理する。この3つを少しずつ並行して進めると、応募する理由や、企業を選ぶ軸が見えてきます。まずは1週間の中で取り組める小さな行動に分けてみましょう。'],checklist:['これまでに夢中になった経験を3つ書き出す','興味のある業界や仕事を2〜3つ調べる','気になる企業の応募日程をカレンダーに登録する']},
 {id:'schedule',title:'大学生活と両立するための予定の立て方',paragraphs:['部活動やゼミ、アルバイトの予定も、就活の予定と同じカレンダーに入れます。忙しい週には短い情報収集だけにし、まとまった時間がある日にESを書いたり、面接の練習をしたりすると、無理のない計画を立てやすくなります。'],table:[['時間の目安','取り組むこと'],['15分','企業の採用ページと締め切りを確認'],['30分','経験の振り返り、業界の情報収集'],['60分','ESの下書き、模擬面接']]},
 {id:'summary',title:'まとめ：今日できる一歩を決めよう',paragraphs:['完璧な準備をしてから動き始める必要はありません。今週取り組みたいことを1つ決め、実際にやってみてから次の行動を考えましょう。大学のキャリアセンターや、信頼できる相談先を活用することも選択肢です。','次は自己分析の基本を読んで、経験の振り返りから始めてみませんか。']}
];
const es: Section[] = [
 {id:'purpose',title:'ESで伝えるのは、あなたの「考え方」',paragraphs:['エントリーシート（ES）は、経験の大きさを競うためのものではありません。どんな状況で、何を考え、どう行動したのか。その過程を通して、企業はあなたの人柄や価値観を理解しようとしています。','部活動、ゼミ、アルバイト、日常の小さな工夫も、考え方が伝わる具体的な経験になります。まずは自分が関わった場面を、ありのままに振り返ってみましょう。'],point:'企業はESを通して、あなたの経験から「考え方」や「価値観」を見ています。大きな成果がなくても、自分の工夫を具体的に伝えましょう。'},
 {id:'structure',title:'伝わる文章は、4つの要素で整理する',paragraphs:['まず結論を書き、背景や課題、自分の行動、結果と学びの順に説明すると、読み手が内容を追いやすくなります。指定の文字数に合わせて、行動の部分を特に具体的に書きましょう。'],table:[['要素','書く内容'],['① 結論','力を入れたこと・伝えたい強み'],['② 背景・課題','どんな状況で、何が課題だったか'],['③ 自分の行動','何を考え、どう工夫したか'],['④ 結果・学び','変化と、次に活かせる気づき']]},
 {id:'example',title:'具体例で見る「伝わる表現」',paragraphs:['「頑張った」「成長した」だけでは、行動の内容が伝わりません。チーム全体の成果と自分の役割を分け、実際にしたことを説明します。事実にない数字や実績を付け足す必要はありません。'],bad:'アルバイトを一生懸命頑張り、コミュニケーション力を身につけました。',good:'新人が質問しやすいよう、勤務開始前に困っていることを聞き、よくある質問をメモにまとめて共有しました。'},
 {id:'review',title:'提出前に確認したいチェックリスト',paragraphs:['下書きは声に出して読んでみると、長すぎる文や分かりにくい表現に気づきやすくなります。可能なら、キャリアセンターなどで第三者に読んでもらうのもおすすめです。'],checklist:['設問が聞いていることに答えている','結論が冒頭で分かる','自分の行動が具体的に書かれている','企業名・文字数・誤字を確認した','実際の経験や事実と一致している']},
 {id:'summary',title:'まとめ：自分の経験を、自分の言葉で',paragraphs:['ESは最初から完成させる必要はありません。経験を整理し、伝えたいことを1つ選び、具体的な行動を言葉にしていきましょう。次はガクチカや自己PRの違いを確認すると、設問ごとの書き分けがしやすくなります。']}
];
const self: Section[] = [
 {id:'why',title:'自己分析は「正解」を決める作業ではない',paragraphs:['自己分析は、決まった職種や強みを急いで選ぶためのものではありません。これまでの経験を振り返り、自分がどんな場面で力を発揮し、何を大切にしているかを知るための作業です。','一度で終わらせなくても大丈夫。仕事を知ったり、人と話したりする中で、考えが変わることも自然です。'],point:'「何をしたか」だけでなく、「なぜそうしたか」を振り返ると、価値観が見えてきます。'},
 {id:'reflect',title:'3つの経験から、共通点を探そう',paragraphs:['うれしかった経験、難しかった経験、続けてきた経験を1つずつ書き出します。そのときの気持ちや、周りとの関わり方も添えてみましょう。'],checklist:['どんな場面だったかを具体的に書く','自分が考えて動いたことを整理する','うれしさや悔しさの理由を考える','複数の経験に共通する考え方を探す']},
 {id:'connect',title:'仕事選びの軸につなげる',paragraphs:['「人と協力するのが好き」なら、どんな協力のしかたが好きなのかを一段深く考えてみます。相談を聞くこと、仕組みを整えること、チームを引っ張ることでは、関わり方が違います。','見つけた価値観は、企業の仕事内容や働き方を調べるときの視点にできます。すべての条件を満たす仕事を探すより、特に大切にしたいことを整理しましょう。']},
 {id:'summary',title:'まとめ：少しずつ、自分への理解を深めよう',paragraphs:['自己分析のメモは、新しい経験や気づきがあったときに更新できます。まずは15分、最近の経験を1つ書き出すところから始めてみましょう。資料ページの自己分析シートも活用できます。']}
];
const interview: Section[] = [
 {id:'prepare',title:'面接は、企業と自分の理解を深める時間',paragraphs:['面接は用意した答えを暗記して発表する場ではなく、企業と会話しながら互いの理解を深める時間です。経験の内容だけでなく、考えた理由や、そこから学んだことも説明できるように整理しましょう。'],point:'答えを丸暗記するより、「伝えたい要点」を短くメモして練習しましょう。'},
 {id:'questions',title:'よくある質問を、自分の経験で整理する',paragraphs:['自己紹介、学生時代に力を入れたこと、志望理由、強みなどを、自分の言葉で説明する練習をします。企業によって質問は異なるため、想定外の質問では少し考える時間を取っても構いません。'],checklist:['1分程度で自己紹介を練習する','経験の背景・行動・学びを整理する','企業の仕事内容と志望理由をつなげる','相手に聞きたいことを2〜3つ準備する']},
 {id:'practice',title:'練習では、話し方と聞き方も確認',paragraphs:['録音や模擬面接を使うと、話す速さや説明の長さを振り返れます。質問を最後まで聞き、結論から話すことを意識しましょう。分からない質問は、意味を確認してから答えるほうが丁寧です。']},
 {id:'summary',title:'まとめ：準備を味方に、対話を楽しもう',paragraphs:['面接の後は、聞かれた質問と答えにくかった点を記録しましょう。次の準備につなげることが大切です。自分に合う企業かどうかを知る視点も忘れないでください。']}
];
function practical(category: string):Section[] {const c=categories.find(c=>c.slug===category)!; return [
 {id:'basics',title:`${c.shortName}の基本を押さえよう`,paragraphs:[`${c.name}は、就活を効率よく進めるための大切なテーマです。最初に目的を整理し、自分の状況に合った情報を集めましょう。`,`情報は更新されることがあります。企業やサービスの公式ページを確認し、応募条件、実施時期、対象者を自分で確かめることが大切です。`],point:'一般的な情報を参考にしながら、公式の案内と自分の状況を照らし合わせましょう。'},
 {id:'action',title:'小さな行動に分けて準備する',paragraphs:['まずは今日できることを1つ選びます。情報を集めるだけで終わらず、自分なりの気づきや疑問をメモに残すと、次に取り組むことが明確になります。'],checklist:['必要な情報を公式サイトで確認する','締め切りや準備物を記録する','疑問点を整理して相談先を確認する']},
 {id:'balance',title:'大学生活とのバランスを大切に',paragraphs:['授業や部活動、アルバイトの予定を含めて、無理のない計画を立てましょう。一度にすべてを完成させる必要はありません。迷ったときは大学のキャリアセンターなど、信頼できる相談先を活用してください。']},
 {id:'summary',title:'まとめ：確認した情報を、次の一歩へ',paragraphs:['調べた内容を整理し、具体的な行動につなげましょう。関連するテーマの記事も参考にしながら、自分に合う進め方を見つけてください。']}
];}
const seeds = [
 ['getting-started','start-guide','就活は何から始める？最初にやるべき3つのこと','準備','guide'],
 ['es','es-writing','ESの書き方を基本から。伝わる文章のつくり方','書き方','es'],
 ['self-analysis','self-analysis-guide','自分らしい仕事選びへ。自己分析の始め方','自己理解','self'],
 ['interview','interview-basics','面接が不安なあなたへ。準備しておきたいこと','面接対策','interview'],
 ['industry','industry-research','業界研究のやり方は？仕事を知るための第一歩','業界研究','industry'],
 ['internship','internship-guide','インターンに参加する前に知っておきたいこと','インターン','intern'],
 ['es','gakuchika','ガクチカの書き方。経験を「伝わる強み」に変える','ガクチカ','es'],
 ['getting-started','schedule','就活スケジュールの立て方。大学生活も、就活も。','スケジュール','guide'],
 ['es','self-pr','自己PRとガクチカの違いは？設問の意図を知ろう','自己PR','es'],
 ['company','company-research','企業研究で見ておきたい5つの視点','企業研究','industry'],
 ['tests','web-test','WEBテスト対策はいつから？計画的な準備のコツ','WEBテスト','test'],
 ['manners','first-impression','就活の身だしなみ。自分らしさと清潔感を大切に','身だしなみ','manners'],
 ['business-rules','email-guide','企業へのメール、どう書く？基本の構成と確認事項','メール','es'],
 ['media','job-media','就活サイトをどう使う？目的別の情報収集の考え方','就活サイト','guide'],
 ['agents','agent-guide','就活エージェントとは？使う前に知りたいメリットと注意点','選び方','interview'],
 ['offer','offer-choice','内定後に考えたいこと。納得できるキャリア選択へ','内定','self'],
 ['getting-started','early-career','大学1・2年生のキャリア準備。今できる小さな一歩','学年別','intern'],
 ['company','news-check','企業ニュースを就活に活かすには？情報の読み解き方','企業ニュース','industry'],
];
export const articles:Article[] = seeds.map(([category,slug,title,tag,thumbnail],i)=>({title,slug,category,tags:[tag],thumbnail,summary: i===0?'「何から始めたらいいか分からない」そんなあなたへ。就活の全体像と、今日からできる小さな一歩を紹介します。':`${title.split('。')[0]}。基本からポイントまで、自分のペースで読み進められるガイドです。`,publishedDate:`2026-09-${String(30-i).padStart(2,'0')}`,updatedDate:'2026-10-01',minutes: i===1?7:5,pickup:[0,2,3,6].includes(i),topFeatured:i===0,grade:i===16?['大学1年','大学2年']:['大学3年','大学4年'],ctaType:category==='es'||category==='self-analysis'?'download':category==='agents'?'agent':'none',relatedArticles:category==='es'?['gakuchika','self-pr','interview-basics']:['start-guide','self-analysis-guide','es-writing'],contentType:i===17?'News':'Article',body:category==='es'?es:category==='getting-started'?starts:category==='self-analysis'?self:category==='interview'?interview:practical(category),popular:100-i*3}));
export const featured = articles[0];
export const downloads = [
 {slug:'es-template',title:'ES作成テンプレート',category:'es',description:'経験の整理から文章の下書きまで。4つの要素で伝わるESをつくろう。',fileType:'Word',filename:'careety-es-template.docx',label:'ENTRY SHEET',color:'blue'},
 {slug:'self-analysis-sheet',title:'自己分析シート',category:'self-analysis',description:'自分の経験と価値観を整理する、書き込み式のワークシート。',fileType:'Excel',filename:'careety-self-analysis.xlsx',label:'SELF ANALYSIS',color:'pink'},
 {slug:'interview-questions',title:'面接準備チェックリスト',category:'interview',description:'質問の準備から当日の確認まで。面接前に一緒にチェック。',fileType:'PDF',filename:'careety-interview-checklist.pdf',label:'INTERVIEW',color:'green'},
 {slug:'schedule-sheet',title:'就活スケジュール表',category:'getting-started',description:'大学生活と就活の予定を、一つのシートで管理しよう。',fileType:'Excel',filename:'careety-schedule.xlsx',label:'SCHEDULE',color:'blue'},
];
export const roadmap = [{name:'就活を知る',category:'getting-started',text:'全体の流れをつかむ'},{name:'自己分析',category:'self-analysis',text:'自分の軸を見つける'},{name:'業界・企業研究',category:'industry',text:'仕事の可能性を知る'},{name:'ES・志望動機',category:'es',text:'経験を言葉にする'},{name:'面接',category:'interview',text:'自分の言葉で伝える'},{name:'内定・キャリア',category:'offer',text:'納得できる選択へ'}];
export const siteConfig = { lineUrl: '', contactEmail: '', productionUrl: '' };

export function queryArticles(source: Article[], filters: {category?:string;tag?:string;q?:string;sort?:string}) {
 const q=filters.q?.trim().normalize('NFKC').toLowerCase() || '';
 return source.filter(a=>(!filters.category||a.category===filters.category)&&(!filters.tag||a.tags.includes(filters.tag))&&(!q||`${a.title}${a.summary}${a.tags.join('')}${categories.find(c=>c.slug===a.category)?.name}`.normalize('NFKC').toLowerCase().includes(q))).sort((a,b)=>filters.sort==='popular'?b.popular-a.popular:filters.sort==='old'?a.publishedDate.localeCompare(b.publishedDate):b.publishedDate.localeCompare(a.publishedDate));
}
