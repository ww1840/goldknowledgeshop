import Link from 'next/link';

const courses = {
  '1': {
    title: 'AI辅助短视频创作课',
    price: '¥39.9',
  },

  '2': {
    title: '个人创作者内容变现实战',
    price: '¥99',
  },

  '3': {
    title: '漫画与分镜创作基础',
    price: '¥59.9',
  },

  '4': {
    title: 'AI辅助文案写作训练',
    price: '¥29.9',
  },

  '5': {
    title: '视频封面设计入门',
    price: '¥19.9',
  },

  '6': {
    title: '个人IP成长指南',
    price: '¥199',
  },
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course =
    courses[id as keyof typeof courses] ?? courses['1'];

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
          <div className="mb-4 inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            订单确认
          </div>

          <h1 className="text-5xl font-bold">
            下单确认
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            请确认订单信息与购买内容。
          </p>

          <div className="mt-10 rounded-3xl bg-gray-50 p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">
                  课程名称
                </div>

                <div className="mt-2 text-2xl font-bold">
                  {course.title}
                </div>
              </div>

              <div className="text-4xl font-bold">
                {course.price}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 p-8">
            <h2 className="mb-5 text-2xl font-bold">
              用户确认
            </h2>

            <label className="flex items-start gap-4">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5"
              />

              <span className="text-sm leading-7 text-gray-600">
                我已阅读并同意
                <Link
                  href="/about#user-agreement"
                  className="mx-1 text-blue-600"
                >
                  《用户协议》
                </Link>

                <Link
                  href="/about#privacy-policy"
                  className="mx-1 text-blue-600"
                >
                  《隐私政策》
                </Link>

                <Link
                  href="/about#purchase-notice"
                  className="mx-1 text-blue-600"
                >
                  《购买须知》
                </Link>

                与

                <Link
                  href="/about#refund-policy"
                  className="mx-1 text-blue-600"
                >
                  《退款说明》
                </Link>
              </span>
            </label>
          </div>

          <button className="mt-10 w-full rounded-2xl bg-[#1677ff] px-6 py-5 text-lg font-semibold text-white">
            提交订单
          </button>

          <div className="mt-6 text-center text-sm leading-7 text-gray-500">
            用户提交订单后，将进入支付流程。
          </div>
        </div>
      </section>
    </main>
  );
}