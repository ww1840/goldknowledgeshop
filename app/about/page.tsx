import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Golden Knowledge
            </Link>

            <p className="text-sm text-gray-500">
              数字创作者成长平台
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
            <Link href="/" className="hover:text-black">
              首页
            </Link>

            <Link href="/#courses" className="hover:text-black">
              课程中心
            </Link>

            <Link href="/#articles" className="hover:text-black">
              创作者文章
            </Link>

            <Link href="/#contact" className="hover:text-black">
              联系我们
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl shadow-gray-200/50">
          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            平台说明与用户协议
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            平台协议与说明
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Golden Knowledge 为数字内容学习平台，
            主要提供视频、漫画、写作与 AI 辅助创作方向的在线课程与内容服务。
            用户在使用平台服务前，请仔细阅读以下协议与相关说明。
          </p>
        </div>
      </section>

      {/* User Agreement */}
      <section
        id="user-agreement"
        className="mx-auto max-w-5xl px-6 pb-10"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-10">
          <h2 className="mb-6 text-3xl font-bold">
            用户协议
          </h2>

          <div className="space-y-6 leading-8 text-gray-600">
            <p>
              欢迎使用 Golden Knowledge 平台服务。
              用户在注册、浏览或购买平台课程时，
              即视为已阅读并同意本平台相关协议内容。
            </p>

            <p>
              平台主要提供在线数字课程、
              创作者学习资料与内容服务。
              用户应遵守中国相关法律法规，
              不得利用平台从事违法违规活动。
            </p>

            <p>
              用户购买课程后，
              获得对应课程的在线学习权限，
              不得擅自复制、传播或转售平台内容。
            </p>

            <p>
              平台有权根据业务发展情况，
              对课程内容、服务规则与运营方式进行调整。
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section
        id="privacy-policy"
        className="mx-auto max-w-5xl px-6 pb-10"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-10">
          <h2 className="mb-6 text-3xl font-bold">
            隐私政策
          </h2>

          <div className="space-y-6 leading-8 text-gray-600">
            <p>
              Golden Knowledge 尊重并保护用户个人信息安全。
            </p>

            <p>
              平台可能会在用户注册、
              登录、购买课程或联系客服时，
              收集必要的用户信息，
              包括邮箱、账号信息与订单信息等。
            </p>

            <p>
              平台不会向无关第三方出售或泄露用户个人信息，
              但法律法规另有规定的除外。
            </p>

            <p>
              用户在使用平台服务时，
              即视为同意本平台根据业务需要，
              合理使用相关信息用于课程服务、
              订单处理与用户支持。
            </p>
          </div>
        </div>
      </section>

      {/* Purchase Notice */}
      <section
        id="purchase-notice"
        className="mx-auto max-w-5xl px-6 pb-10"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-10">
          <h2 className="mb-6 text-3xl font-bold">
            购买须知
          </h2>

          <div className="space-y-6 leading-8 text-gray-600">
            <p>
              平台课程均为在线数字内容，
              用户购买后可通过网页进行学习与阅读。
            </p>

            <p>
              用户完成支付后，
              系统将自动开通对应课程学习权限。
            </p>

            <p>
              部分课程可能包含视频、
              图片、文档与在线资料等数字内容。
            </p>

            <p>
              用户在购买课程前，
              应仔细阅读课程介绍、
              服务内容与退款规则。
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section
        id="refund-policy"
        className="mx-auto max-w-5xl px-6 pb-20"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-10">
          <h2 className="mb-6 text-3xl font-bold">
            退款说明
          </h2>

          <div className="space-y-6 leading-8 text-gray-600">
            <p>
              平台提供的课程属于在线数字内容服务，
              数字内容具有可复制性与在线交付特性。
            </p>

            <p>
              用户在购买前，
              请确认课程内容、
              学习需求与服务形式。
            </p>

            <p>
              如因平台系统问题导致无法正常学习，
              用户可联系平台客服进行处理。
            </p>

            <p>
              如用户对订单存在疑问，
              可通过客服邮箱联系平台，
              平台将在工作时间内进行回复。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1020] py-14 text-gray-300">
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
              <h4 className="mb-4 font-semibold text-white">
                平台信息
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#user-agreement" className="hover:text-white">
                    用户协议
                  </a>
                </li>

                <li>
                  <a href="#privacy-policy" className="hover:text-white">
                    隐私政策
                  </a>
                </li>

                <li>
                  <a href="#purchase-notice" className="hover:text-white">
                    购买须知
                  </a>
                </li>

                <li>
                  <a href="#refund-policy" className="hover:text-white">
                    退款说明
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">
                联系我们
              </h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>公司：映金科技（北京）有限公司</li>
                <li>邮箱：service@goldknowledgeshop.com</li>
                <li>工作时间：09:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            <p>© 2026 映金科技（北京）有限公司</p>

            <p className="mt-2">
              ICP备案号：京ICP备2026022647号-1
            </p>

            <p className="mt-1">
              京公网安备11010502060727号
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}