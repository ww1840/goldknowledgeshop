import Link from 'next/link';

export default function ArticlePage3() {
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
            漫画创作
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            漫画创作者如何建立角色记忆点
          </h1>

          <div className="mt-4 text-sm text-gray-500">
            发布于 2026-05-27 · 创作者专栏
          </div>

          <div className="mt-10 space-y-6 leading-8 text-gray-700">
            <p>
              优秀的角色设计，
              往往能够让读者在短时间内留下深刻印象。
              对漫画创作者而言，
              “角色记忆点”是非常重要的内容元素。
            </p>

            <p>
              角色记忆点不仅仅是外观设计，
              还包括人物行为、
              台词风格、
              情绪表达与核心性格。
            </p>

            <p>
              很多经典角色都会拥有标志性元素，
              例如特殊发型、
              固定动作、
              独特语气、
              或长期坚持的行为逻辑。
            </p>

            <p>
              在长期连载作品中，
              稳定的人物核心特征能够帮助角色形成更强的辨识度。
            </p>

            <p>
              对创作者来说，
              建立角色记忆点的关键，
              在于持续强化人物核心特征，
              而不是不断增加复杂设定。
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}