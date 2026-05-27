import Link from 'next/link';

export default function CoursePage1() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            热门课程
          </div>

          <h1 className="text-5xl font-bold">
            AI辅助短视频创作课
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            学习如何使用 AI 工具完成短视频脚本、
            字幕、封面与内容优化，
            提高个人创作者内容生产效率。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="text-sm text-gray-500">课程价格</div>
              <div className="mt-2 text-3xl font-bold">¥39.9</div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="text-sm text-gray-500">课程形式</div>
              <div className="mt-2 text-xl font-semibold">
                在线学习
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="text-sm text-gray-500">学习权限</div>
              <div className="mt-2 text-xl font-semibold">
                支付后开通
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 p-8">
            <h2 className="mb-6 text-2xl font-bold">
              课程内容
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>• AI辅助短视频脚本创作</li>
              <li>• AI字幕与文案优化</li>
              <li>• AI封面设计思路</li>
              <li>• 提高内容生产效率</li>
              <li>• 常用AI工具整理</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/checkout/1"
              className="rounded-xl bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800"
            >
              下单确认
            </Link>

            <Link
              href="/about#refund-policy"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-700"
            >
              查看退款说明
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}