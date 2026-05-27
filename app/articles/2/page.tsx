import Link from 'next/link';

export default function ArticlePage2() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← 返回首页
        </Link>

        <article className="mt-8 rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
          <div className="mb-4 text-sm font-medium text-blue-600">
            AI工具
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            个人创作者常用AI工具整理
          </h1>

          <div className="mt-4 text-sm text-gray-500">
            发布于 2026-05-27 · 创作者专栏
          </div>

          <div className="mt-10 space-y-6 leading-8 text-gray-700">
            <p>
              AI工具正在快速改变个人创作者的内容生产方式。
              从文案生成、
              视频剪辑、
              图片设计到字幕处理，
              AI已经逐渐成为内容创作流程中的重要辅助工具。
            </p>

            <p>
              对于视频创作者而言，
              AI字幕工具能够显著提高剪辑效率，
              自动生成字幕并减少重复劳动。
            </p>

            <p>
              在写作方向，
              AI文案工具可以帮助创作者快速整理文章结构、
              生成标题灵感、
              优化语言表达。
            </p>

            <p>
              图片与封面方向，
              AI绘图与设计工具则能够帮助创作者更快完成视觉内容制作。
            </p>

            <p>
              不过，
              AI更适合作为辅助工具，
              创作者仍然需要负责内容质量、
              创意表达与最终审核。
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}