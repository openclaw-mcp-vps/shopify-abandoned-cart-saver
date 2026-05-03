export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Shopify Exit-Intent
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Recover Abandoned Carts<br />
          <span className="text-[#58a6ff]">Before Customers Leave</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CartSaver detects exit-intent at checkout and fires personalized popups — discounts, free shipping, urgency timers — to win back sales automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Recovering Revenue — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to install. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["15%+", "Avg. cart recovery rate"],
            ["2 min", "Setup time"],
            ["100%", "Shopify compatible"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop losing sales</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Exit-intent detection on checkout pages",
              "Personalized discount & free shipping popups",
              "Urgency countdown timers",
              "Conversion dashboard & analytics",
              "Shopify webhook integration",
              "Unlimited monthly popup impressions",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does CartSaver detect exit intent?",
              a: "CartSaver injects a lightweight JavaScript snippet into your Shopify checkout. It monitors mouse movement, scroll velocity, and tab-switch events to predict abandonment with high accuracy before the customer leaves."
            },
            {
              q: "Will it slow down my store?",
              a: "No. The script is loaded asynchronously and is under 4 KB gzipped. It has zero impact on your Core Web Vitals or Shopify store speed score."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. There are no contracts or lock-ins. Cancel your subscription at any time from your billing portal and you won't be charged again."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} CartSaver. All rights reserved.
      </footer>
    </main>
  );
}
