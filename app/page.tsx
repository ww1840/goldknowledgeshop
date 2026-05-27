import Link from 'next/link';

export default function HomePage() {
  const courses = [
    {
      id: '1',
      title: 'AI辅助短视频创作课',
      desc: '学习如何使用 AI 工具完成短视频脚本、字幕、封面与内容优化。',
      price: '¥39.9',
      tag: '热门课程',
      includes: ['课程视频', '字幕模板', 'AI工具清单'],
      delivery: '支付成功后可在线学习',
      refund: '数字内容交付后按退款规则执行',
    },
    {
      id: '2',
      title: '个人创作者内容变现实战',
      desc: '帮助个人创作者建立稳定内容方向，学习常见变现路径与运营方式。',
      price: '¥99',
      tag: '精品专栏',
      includes: ['系列课程', '案例分析', '运营方法'],
      delivery: '网页在线学习',
      refund: '支持未学习前申请退款',
    },
    {
      id: '3',
      title: '漫画与分镜创作基础',
      desc: '面向漫画与视觉内容创作者的分镜、节奏与角色表达课程。',
      price: '¥59.9',
      tag: '创作者推荐',
      includes: ['分镜案例', '角色设计', '练习资料'],
      delivery: '支付后即时开通',
      refund: '数字内容类商品按规则处理',
    },
    {
      id: '4',
      title: 'AI辅助文案写作训练',
      desc: '学习使用 AI 提高公众号、视频脚本与长文内容的创作效率。',
      price: '¥29.9',
      tag: '实用教程',
      includes: ['写作模板', '提示词案例', '训练文档'],
      delivery: '在线阅读与下载资料',
      refund: '购买前请阅读退款说明',
    },
    {
      id: '5',
      title: '视频封面设计入门',
      desc: '学习如何使用 Canva、PS 与 AI 工具制作高点击率封面。',
      price: '¥19.9',
      tag: '入门课程',
      includes: ['封面案例', '设计素材', '教程视频'],
      delivery: '网页内学习',
      refund: '未使用课程支持申请退款',
    },
    {
      id: '6',
      title: '个人IP成长指南',
      desc: '适合新手创作者的内容定位、账号规划与长期成长课程。',
      price: '¥199',
      tag: '系统课程',
      includes: ['完整课程', '成长路线', '运营资料'],
      delivery: '支付后自动开通课程',
      refund: '请在购买前确认课程内容',
    },
  ];

  const articles = [
  {
    id: '1',
    title: '如何提高短视频前3秒完播率',
  },

  {
    id: '2',
    title: '个人创作者常用AI工具整理',
  },

  {
    id: '3',
    title: '漫画创作者如何建立角色记忆点',
  },

  {
    id: '4',
    title: 'AI辅助内容创作的正确方式',
  },
];

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Golden Knowledge
            </h1>
            <p className="text-sm text-gray-500">数字创作者成长平台</p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#courses" className="hover:text-black">
              课程中心
            </a>
            <a href="#articles" className="hover:text-black">
              创作文章
            </a>
            <a href="#about" className="hover:text-black">
              关于平台
            </a>
            <a href="#contact" className="hover:text-black">
              联系我们
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              面向个人创作者的数字技能平台
            </div>

            <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight">
              帮助创作者提升
              <span className="text-blue-600">内容创作与数字技能</span>
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Golden Knowledge 专注于视频、漫画、写作与数字内容方向，
              提供创作课程、工具教程与行业经验分享，
              帮助个人创作者提高内容生产效率与创作能力。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                浏览课程
              </a>

              <a
                href="#articles"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                查看创作者内容
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">创作者学习方向</h3>
                <p className="mt-1 text-sm text-gray-500">持续更新内容与课程</p>
              </div>

              <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                在线更新
              </div>
            </div>

            <div className="space-y-4">
              {[
                '短视频内容创作',
                '漫画与视觉表达',
                'AI辅助写作',
                '视频封面设计',
                '个人IP成长',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4"
                >
                  <span className="font-medium text-gray-800">{item}</span>
                  <span className="text-sm text-gray-500">专题课程</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold">精选课程</h3>
            <p className="mt-2 text-gray-500">面向数字创作者的在线学习内容</p>
          </div>

          <div className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500 md:block">
            持续新增课程
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/60"
            >
              <div className="mb-4 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                {course.tag}
              </div>

              <h4 className="mb-3 text-xl font-bold">{course.title}</h4>

              <p className="mb-5 text-sm leading-7 text-gray-600">
                {course.desc}
              </p>

              <div className="mb-6 space-y-2 rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-800">包含内容：</span>
                  {course.includes.join('、')}
                </div>

                <div>
                  <span className="font-semibold text-gray-800">交付方式：</span>
                  {course.delivery}
                </div>

                <div>
                  <span className="font-semibold text-gray-800">退款规则：</span>
                  {course.refund}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{course.price}</span>

                <Link
                  href={`/courses/${course.id}`}
                  className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  查看详情
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
<section
  id="articles"
  className="mx-auto max-w-7xl px-6 py-20"
>
  <div className="mb-10">
    <h3 className="text-3xl font-bold">
      创作者文章
    </h3>

    <p className="mt-2 text-gray-500">
      分享内容创作与数字技能经验
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    {articles.map((article) => (
      <Link
        href={`/articles/${article.id}`}
        key={article.id}
        className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="mb-4 text-sm font-medium text-blue-600">
          创作者专栏
        </div>

        <h4 className="min-h-[88px] text-xl font-bold leading-8 text-gray-900">
          {article.title}
        </h4>

        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
          分享数字内容创作、
          AI辅助工具与个人创作者成长经验。
        </p>

        <div className="mt-6 flex items-center text-sm font-semibold text-black">
          阅读文章
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold">关于平台</h3>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-6">
              <h4 className="mb-3 text-lg font-semibold">平台定位</h4>
              <p className="leading-8 text-gray-600">
                Golden Knowledge 面向个人内容创作者，
                提供视频、漫画、写作与数字创作方向的学习课程与经验分享，
                帮助创作者提高内容生产能力与数字技能。
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6">
              <h4 className="mb-3 text-lg font-semibold">学习形式</h4>
              <p className="leading-8 text-gray-600">
                所有课程均为在线数字内容，
                支持网页学习与资料阅读，
                用户可根据需求购买对应课程内容。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0b1020] py-14 text-gray-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-10 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xl font-bold text-white">
                Golden Knowledge
              </h4>

              <p className="leading-7 text-gray-400">
                面向个人创作者的数字内容学习平台。
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">平台信息</h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/about#user-agreement" className="hover:text-white">
                    用户协议
                  </Link>
                </li>
                <li>
                  <Link href="/about#privacy-policy" className="hover:text-white">
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link href="/about#purchase-notice" className="hover:text-white">
                    购买须知
                  </Link>
                </li>
                <li>
                  <Link href="/about#refund-policy" className="hover:text-white">
                    退款说明
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">联系我们</h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>公司：映金科技（北京）有限公司</li>
                <li>邮箱：service@goldknowledgeshop.com</li>
                <li>工作时间：09:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            <p>© 2026 映金科技（北京）有限公司</p>
            <p className="mt-2">ICP备案号：京ICP备2026022647号-1</p>
            <p className="mt-1">京公网安备11010502060727号</p>
          </div>
        </div>
      </footer>
    </main>
  );
}