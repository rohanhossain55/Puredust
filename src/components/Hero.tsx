
import { Leaf, Shield, Truck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#f8f8ef]"
    >
      {/* Soft botanical background */}
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#dce8c8]/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#e8edcf]/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid items-center lg:min-h-[540px] lg:grid-cols-[0.88fr_1.12fr]">

          {/* Left content */}
          <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 lg:py-20 lg:pl-[max(3rem,calc((100vw-1360px)/2))] lg:pr-2">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">

              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e7ecd9] px-4 py-2 text-sm font-medium text-[#426735]">
                <Leaf className="h-5 w-5" />
                Natural Goodness in Every Spoon
              </span>

              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-[#263c21] sm:text-5xl xl:text-[3.7rem]">
                Natural Goodness
                <br />
                <span className="text-[#5b8045]">
                  in Every Spoon
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-[#587552] sm:text-lg lg:mx-0">
                Discover our range of naturally sourced powders —
                beetroot, raw banana, date, and lemon peel —
                crafted with care for your everyday needs.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#47743b] px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#365e2d] hover:shadow-lg"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-[#a8c09b] bg-white px-8 py-3.5 font-semibold text-[#365a2c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5f8f0]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Right: PureDust product image */}
          <div className="relative min-w-0 px-4 pb-12 sm:px-8 lg:h-full lg:min-h-[540px] lg:px-0 lg:pb-0">
            <div className="relative mx-auto max-w-2xl lg:absolute lg:inset-0 lg:max-w-none">

              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#eee9d8] shadow-lg sm:rounded-[2rem] lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:aspect-auto lg:rounded-none lg:shadow-none">
                <img
                  src="images/products/puredust-hero.png"
                  alt="PureDust Beetroot, Raw Banana, Date and Lemon Peel Powder pouches"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  fetchPriority="high"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#342818]/10 via-transparent to-white/5" />
              </div>

              {/* Fast delivery badge */}
              <div className="absolute right-2 top-3 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-lg sm:right-4 sm:top-5 sm:gap-3 sm:p-4 lg:right-6 lg:top-12">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f3d5] text-[#527b39] sm:h-12 sm:w-12">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#263c21] sm:text-sm">
                    Fast Delivery
                  </p>
                  <p className="text-[11px] text-[#708367] sm:text-xs">
                    All over BD
                  </p>
                </div>
              </div>

              {/* Quality badge */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-lg sm:bottom-4 sm:left-4 sm:gap-3 sm:p-4 lg:bottom-8 lg:left-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8efdf] text-[#47743b] sm:h-12 sm:w-12">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#263c21] sm:text-sm">
                    No Additives
                  </p>
                  <p className="text-[11px] text-[#708367] sm:text-xs">
                    100% Pure
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
