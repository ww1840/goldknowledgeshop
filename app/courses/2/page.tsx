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
            个人创作者内容变现实战
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            学习如何将个人创作内容有效变现，及时获得正向反馈。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="text-sm text-gray-500">课程价格</div>
              <div className="mt-2 text-3xl font-bold">¥99</div>
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
             <li>• 内容变现模式分析</li>
<li>• 创作者账号定位</li>
<li>• 商业合作基础</li>
<li>• 内容长期运营</li>
<li>• 用户增长方法</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/checkout/2"
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