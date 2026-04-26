import React, { useState } from 'react';
import { BookOpen, Feather, Mail, Clock, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('all');

    // ポートフォリオの作品データ（モック）
    const works = [
        {
            id: 1,
            title: "サイバーパンクRPG『ネオン・パラドックス』",
            category: "game",
            genre: "RPG / SF",
            role: "メインシナリオ / キャラクター設定",
            volume: "約15万文字",
            description: "インディーゲーム開発サークル様の新作RPG。退廃的な近未来を舞台にした群像劇のシナリオを担当しました。マルチエンディングの実装にあたり、複雑なフラグ管理を考慮した執筆を行っています。",
            link: "#"
        },
        {
            id: 2,
            title: "YouTube漫画アニメ『復讐の令嬢』",
            category: "youtube",
            genre: "恋愛ミステリー / スカッと系",
            role: "プロット作成 / スクリプト執筆",
            volume: "1話約3,000文字 × 5話",
            description: "登録者50万人越えのYouTubeチャンネル向けシナリオ。視聴維持率を高めるため、最初の30秒でのフックと、テンポの良い会話劇を意識して執筆しました。",
            link: "#"
        },
        {
            id: 3,
            title: "シチュエーションボイスドラマ『雨音の喫茶店』",
            category: "voice",
            genre: "現代 / 癒やし",
            role: "シナリオ執筆 / バイノーラル指示",
            volume: "約1万文字（約30分尺）",
            description: "同人音声作品のシナリオ。SE（環境音）の指定や、バイノーラルマイクの左右の距離感を台本に緻密に記載し、没入感のある音響体験をサポートしました。",
            link: "#"
        }
    ];

    const filteredWorks = activeTab === 'all' ? works : works.filter(w => w.category === activeTab);

    return (
        <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-serif selection:bg-amber-200">
            {/* Navigation */}
            <nav className="fixed w-full bg-[#faf9f6]/90 backdrop-blur-sm z-50 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-widest text-slate-900">Name Portfolio</span>
                    <div className="hidden md:flex space-x-8 text-sm tracking-wide">
                        <a href="#about" className="hover:text-amber-700 transition-colors">About</a>
                        <a href="#works" className="hover:text-amber-700 transition-colors">Works</a>
                        <a href="#service" className="hover:text-amber-700 transition-colors">Service</a>
                        <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2 text-amber-700 mb-4">
                            <Feather size={20} />
                            <span className="text-sm font-sans tracking-widest uppercase">Scenario Writer</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide text-slate-900">
                            物語に命を吹き込む、<br className="hidden md:block" />言葉の紡ぎ手。
                        </h1>
                        <p className="text-lg leading-relaxed text-slate-600 mt-6 max-w-lg font-sans">
                            ゲームシナリオからYouTube動画、ボイスドラマまで。
                            キャラクターの感情に寄り添い、読み手の心を動かすストーリーをご提供します。
                        </p>
                        <div className="pt-6">
                            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors font-sans">
                                執筆のご相談はこちら <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="aspect-square max-w-md mx-auto bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
                            {/* 装飾用の抽象的なグラフィック配置 */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-slate-100 opacity-80"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300">
                                <BookOpen size={120} strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* About & Work Style Section (副業ライターにとって重要なセクション) */}
            <section id="about" className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-px bg-amber-700"></span>
                                About Me
                            </h2>
                            <div className="space-y-4 font-sans text-slate-600 leading-relaxed">
                                <p>
                                    はじめまして。フリーランスのシナリオライターとして活動している[あなたのお名前]と申します。
                                </p>
                                <p>
                                    本業ではIT企業でディレクターを務めており、プロジェクトの進行管理やクライアント折衝の経験があります。そのため、「納期厳守」「スムーズで意図を汲み取ったコミュニケーション」には自信があります。
                                </p>
                                <p>
                                    得意なジャンルは「ダークファンタジー」「現代ヒューマンドラマ」ですが、ご要望に合わせて柔軟なトーン＆マナーで執筆可能です。
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#faf9f6] p-8 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                <Clock size={24} className="text-amber-700" />
                                稼働状況・ご連絡について
                            </h3>
                            <ul className="space-y-4 font-sans text-sm text-slate-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-slate-800 block mb-1">現在のリソース</span>
                                        新規のご依頼は[〇月]より着手可能です。単発・継続問わずご相談ください。
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-slate-800 block mb-1">作業時間</span>
                                        平日：20:00〜24:00<br />
                                        土日祝：終日（週15〜20時間程度）
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-slate-800 block mb-1">ご連絡へのレスポンス</span>
                                        基本的には24時間以内にご返信いたします。平日日中でも、メッセージの確認と簡単な返信は可能です。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works Section */}
            <section id="works" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Works</h2>
                        <p className="text-slate-500 font-sans">これまでの執筆実績（※公開許可をいただいたものの一部です）</p>
                    </div>

                    {/* フィルタータブ */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 font-sans">
                        {[
                            { id: 'all', label: 'すべて' },
                            { id: 'game', label: 'ゲームシナリオ' },
                            { id: 'youtube', label: 'YouTube動画' },
                            { id: 'voice', label: 'ボイスドラマ' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* 実績カードグリッド */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWorks.map(work => (
                            <div key={work.id} className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="text-xs font-sans font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full inline-block mb-3">
                                        {work.genre}
                                    </span>
                                    <h3 className="text-xl font-bold leading-snug group-hover:text-amber-700 transition-colors">
                                        {work.title}
                                    </h3>
                                </div>

                                <div className="space-y-2 mb-6 flex-grow text-sm font-sans">
                                    <div className="flex border-b border-slate-100 pb-2">
                                        <span className="text-slate-400 w-20">担当</span>
                                        <span className="text-slate-700 font-medium">{work.role}</span>
                                    </div>
                                    <div className="flex border-b border-slate-100 pb-2">
                                        <span className="text-slate-400 w-20">文字数</span>
                                        <span className="text-slate-700">{work.volume}</span>
                                    </div>
                                    <div className="pt-2 text-slate-600 leading-relaxed">
                                        {work.description}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4">
                                    <a href={work.link} className="text-sm text-amber-700 font-sans font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                        詳細を見る <ChevronRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-slate-50 p-6 rounded-lg font-sans text-sm text-slate-600">
                        <p>※守秘義務の都合上、こちらに掲載していない実績（企業様向け非公開案件など）も多数ございます。<br />詳細なポートフォリオ（PDF）はお問い合わせいただければ個別にお送りいたします。</p>
                    </div>
                </div>
            </section>

            {/* Service / Price Section */}
            <section id="service" className="py-20 bg-slate-900 text-white px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Service & Price</h2>
                        <p className="text-slate-400 font-sans">ご依頼の目安</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 font-sans">
                        {/* Price Card 1 */}
                        <div className="bg-slate-800 p-8 rounded border border-slate-700">
                            <FileText className="text-amber-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">プロット作成</h3>
                            <p className="text-2xl font-bold text-amber-500 mb-4">10,000円〜</p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                ご提供いただいたアイデアや設定をもとに、起承転結を整理した詳細なプロットを作成します。
                            </p>
                        </div>

                        {/* Price Card 2 */}
                        <div className="bg-slate-800 p-8 rounded border border-slate-700 relative overflow-hidden">
                            <div className="absolute top-4 right-4 text-xs font-bold bg-amber-600 px-2 py-1 rounded text-white">一番人気</div>
                            <Feather className="text-amber-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">シナリオ執筆</h3>
                            <p className="text-2xl font-bold text-amber-500 mb-4">1文字 2.0円〜</p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                ゲームシナリオ、ボイスドラマ、動画用スクリプト等の執筆を行います。ト書きや演出指定も料金に含まれます。
                            </p>
                        </div>

                        {/* Price Card 3 */}
                        <div className="bg-slate-800 p-8 rounded border border-slate-700">
                            <BookOpen className="text-amber-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">世界観・キャラ設定</h3>
                            <p className="text-2xl font-bold text-amber-500 mb-4">要相談</p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                ゼロからの企画立ち上げのお手伝い。キャラクターのバックボーンや相関図、用語集などの作成を承ります。
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-400 mt-8 font-sans">
                        ※料金はあくまで目安です。ご予算に合わせたご提案も可能ですので、お気軽にご相談ください。
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 bg-white">
                <div className="max-w-2xl mx-auto text-center">
                    <Mail size={40} className="mx-auto text-slate-300 mb-6" />
                    <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
                    <p className="font-sans text-slate-600 mb-10 leading-relaxed">
                        ご依頼、お見積もりのご相談など、お気軽にお問い合わせください。<br />
                        まずはヒアリングのみ、といったご相談も歓迎いたします。
                    </p>
                    <a
                        href="mailto:your-email@example.com"
                        className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-sans font-bold py-4 px-12 rounded transition-colors shadow-lg hover:shadow-xl"
                    >
                        メールで問い合わせる
                    </a>
                    <div className="mt-8 flex justify-center gap-6 text-slate-400">
                        {/* SNSリンク等のプレースホルダー */}
                        <a href="#" className="hover:text-slate-900 transition-colors">X (Twitter)</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Note</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">CrowdWorks</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-200 py-8 text-center font-sans text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;