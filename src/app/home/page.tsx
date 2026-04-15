export default function HomeBotanicalAtelier() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f1]/80 dark:bg-[#1b1c17]/80 backdrop-blur-md">
<div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
<div className="text-2xl font-serif italic text-[#163422] dark:text-[#ffe088]">Botanical Atelier</div>
<div className="hidden md:flex items-center gap-10 font-noto-serif text-sm tracking-widest uppercase">
<a className="text-[#163422] dark:text-[#ffe088] border-b border-[#ffe088] pb-1 transition-colors duration-300" href="#">Discover</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Matches</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Messages</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Ceremonies</a>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-primary scale-95 duration-200 ease-in-out">notifications</button>
<button className="material-symbols-outlined text-primary scale-95 duration-200 ease-in-out">favorite</button>
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container border border-outline-variant/20">
<img className="w-full h-full object-cover" data-alt="Close up portrait of an elegant woman with a soft smile in soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5AR9rpE1dwLooG1F0kOFZMYJC7uIliqEQOeFE5D0cds9XW8xf4JzVGFdIDMKJYm1mzJHdICju3yhnfoGolNG5otWXPICJxCKVFq02hFsVdndPD6_VFQPzKE1RRvfPm8obZjnuMWsM0PcCDd2hh2Qc7IE3ESe5jU_S44qvHws7lCGY2rNLIuxV1KZ2jB1c7tmGhYTF8_8CORu1WokgBZLQUKql7Hprzps2tIVIwLycxI9y2cqpQy2BmlnA3x5LvYvZ_8ifTmjRaKs"/>
</div>
</div>
</div>
</nav>
<main className="relative">
{/*  Subtle Pattern Overlay  */}
<div className="fixed inset-0 botanical-bg opacity-[0.03] pointer-events-none z-0"></div>
{/*  Hero Section  */}
<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-surface">
<div className="max-w-screen-2xl mx-auto px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<span className="label-md uppercase tracking-[0.2em] text-secondary font-semibold">ESTABLISHED IN TRADITION</span>
<h1 className="font-headline text-primary text-6xl md:text-7xl leading-[1.1] -tracking-[0.02em]">
                        Cultivating <br/>
<span className="italic font-normal">Soulful</span> Unions.
                    </h1>
<p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                        A boutique matchmaking experience where heritage meets refined modern sensibilities. Discover a partner who shares your roots and your vision for the future.
                    </p>
{/*  Search Bar Bento  */}
<div className="bg-surface-container-lowest p-2 rounded-xl bloom-shadow flex flex-col md:flex-row gap-2 max-w-2xl">
<div className="flex-1 px-4 py-3 flex flex-col justify-center border-r border-outline-variant/10">
<label className="text-[10px] uppercase tracking-wider text-outline mb-1">Looking for</label>
<select className="bg-transparent border-none p-0 text-sm focus:ring-0 font-medium text-primary cursor-pointer">
<option>A Groom</option>
<option>A Bride</option>
</select>
</div>
<div className="flex-1 px-4 py-3 flex flex-col justify-center border-r border-outline-variant/10">
<label className="text-[10px] uppercase tracking-wider text-outline mb-1">Age Range</label>
<select className="bg-transparent border-none p-0 text-sm focus:ring-0 font-medium text-primary cursor-pointer">
<option>24 - 28</option>
<option>28 - 32</option>
<option>32 - 40</option>
</select>
</div>
<button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">search</span>
                            Explore Matches
                        </button>
</div>
</div>
<div className="relative">
<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border-[12px] border-surface-container-low shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Artistic bridal portrait featuring a woman in a heavy embroidered traditional saree amidst lush green botanical gardens with golden sun flares" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOGQoj6L7jd8mVyVTwlfMd4YoqthdC1MpYXd1ZCkvgonhBoxD-z8yPTS-7ZdpQfKcnL8McjgZFfsnpMk4dKZFrO-MINQweJbF-PRk2wrV_EkZqZ5itkkAjZP7LX5IC3nJPmb_6s4pgVZsDvgkGwoun97ZGgO3x89HIB08RrHfEoiDChYsmlcDWTxWwUT9txYe3BJE9Kh1teAXw-Q22Hyv-ey7Tq-MpuiuE6K81MfDKXeaOdeDy6-A5pfsKt4D-B4uhjG9gtaolgzU"/>
</div>
{/*  Decorative Floating Elements  */}
<div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl bloom-shadow border border-outline-variant/10 flex items-center gap-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" data-alt="Professional headshot of a smiling young man in a linen shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9QFh-Gz8f3CGNqwD3a4B9KX-XodLkdJ8lonei4UQOcEBRidLRxYxlB9ZTljlvWDpMuOhT4xIFRiLYUTE2KRm-8qlpmAtBjWbB-Zeb2udfgH_9xESNI4Ks0__4FUnP-uzbv3vONWbp10mAtaXiWSYPk2hbC2ODn_9JyY2AgG__KAfAZk3YCXftlRkuryHYVxahfJ_0Hm3kN0ydleOjWuzAhKonQrhL1cJbe54NIFUFdt6Hf-NS6sU3DgAl1ARUmRH5zOa7IBKTYXs"/>
<img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" data-alt="Portrait of a young woman with elegant jewelry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB4wq0kRwzN7C6aaypi54k5OUguVBcNQ6mpJlsbeSYpyOSo9IGIw2DWCrTcgezRKsQRTh7oJxbKhQ9emD-1GuSbPPyZHaCNDnyl5AXojlEd65M0Ehq3EI-XJyxteteZp-z-owzNZE9PeiG0hOZWh1ZSJ2I7i3H3uQNXu0riEsGJXPDXJpMVhR3FqzA8msp2GYJNAUfHUP4Us0Lp96Bxp_Jgv2DCkHEUSMnoSHvMXqoW0-0ooHDelVVCyNRJD4CcWX-OiKzHOpBIOU"/>
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-primary border-2 border-surface-container-lowest">50K+</div>
</div>
<span className="text-xs font-medium text-on-surface-variant">Trusted by Modern Couples</span>
</div>
</div>
</div>
</section>
{/*  Our Services Section  */}
<section className="py-32 bg-surface-container-low relative overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-primary text-5xl mb-6">Refined Matchmaking <br/><span className="italic font-normal">for a Conscious Life</span></h2>
<p className="text-on-surface-variant leading-relaxed text-lg">We offer more than just profiles. We provide a curated journey toward lifelong companionship through personalized touches.</p>
</div>
<div className="pb-2">
<a className="text-primary font-semibold border-b-2 border-secondary-fixed pb-1 hover:border-primary transition-all" href="#">View All Services</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface p-10 rounded-[2rem] space-y-6 hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
<div className="w-16 h-16 bg-primary-fixed/30 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
</div>
<h3 className="font-headline text-2xl text-primary">Handpicked Profiles</h3>
<p className="text-on-surface-variant">Every member undergoes a rigorous verification process to ensure authenticity and premium quality matches.</p>
</div>
<div className="bg-surface p-10 rounded-[2rem] space-y-6 hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
<div className="w-16 h-16 bg-secondary-fixed/30 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
</div>
<h3 className="font-headline text-2xl text-primary">Relationship Coaches</h3>
<p className="text-on-surface-variant">Access to expert guidance to help you navigate the complexities of finding a life partner with confidence.</p>
</div>
<div className="bg-surface p-10 rounded-[2rem] space-y-6 hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
<div className="w-16 h-16 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-3xl">auto_awesome</span>
</div>
<h3 className="font-headline text-2xl text-primary">Bespoke Ceremonies</h3>
<p className="text-on-surface-variant">We don't just find you a match; we help you curate the aesthetic of your union with premier decorators.</p>
</div>
</div>
</div>
</section>
{/*  Why Choose Us - Bento Grid  */}
<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-12 rounded-[3rem] flex flex-col justify-between">
<div className="space-y-6">
<h2 className="font-headline text-5xl leading-tight">Why the <br/><span className="italic font-normal">Atelier?</span></h2>
<p className="opacity-80">Our philosophy is simple: quality over quantity. We treat your search for love like the creation of fine art.</p>
</div>
<button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-bold w-fit mt-12 hover:scale-105 transition-transform">Start Your Journey</button>
</div>
<div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container p-10 rounded-[2.5rem] relative overflow-hidden group">
<div className="relative z-10 space-y-4">
<h4 className="font-headline text-2xl text-primary">Privacy First</h4>
<p className="text-on-surface-variant text-sm">Complete control over who sees your profile, with blurred image options and private modes.</p>
</div>
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-5 group-hover:opacity-10 transition-opacity">lock_person</span>
</div>
<div className="bg-surface-container p-10 rounded-[2.5rem] relative overflow-hidden group">
<div className="relative z-10 space-y-4">
<h4 className="font-headline text-2xl text-primary">Cultural Nuance</h4>
<p className="text-on-surface-variant text-sm">Detailed filters for community, language, and family values that matter most to you.</p>
</div>
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-5 group-hover:opacity-10 transition-opacity">temple_hindu</span>
</div>
<div className="bg-surface-container p-10 rounded-[2.5rem] md:col-span-2 relative overflow-hidden flex items-center gap-12 group">
<div className="relative z-10 max-w-sm space-y-4">
<h4 className="font-headline text-2xl text-primary">AI-Infused Matchmaking</h4>
<p className="text-on-surface-variant text-sm">Our proprietary algorithm analyzes deep personality traits beyond superficial interests to find true compatibility.</p>
</div>
<div className="hidden md:block w-48 h-32 rounded-2xl overflow-hidden shadow-lg transform group-hover:rotate-3 transition-transform">
<img className="w-full h-full object-cover" data-alt="Overhead view of several hands working together over a wooden table with sketches and flowers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkUYja8EExlYYmTefGRhplJiYDUwk3h1Y5lnw16NCPOaFxVHdOCZRpPJDd9D54eyQbO1p2OSnmA0h1UDV2N_F6Xik7V2IjuMVJOOaat0YS27ZH9qqWMNSjSVccAKNR3Cd-3bKqZ6WaBzU3TcBvMK-G-_fn77tmj9nCc0taYp3rmq3G8o9rEGjAODC9DWZTWdsdFhg_5lGsI4xpKo6cGTBNO46DkKOAWibGl00UCKgdwjhTSYUU3Xu85rHgLkm4cWU_RAIdlbpA0Sk"/>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Trusted Couples - Testimonials  */}
<section className="py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="text-center mb-20 space-y-4">
<h2 className="font-headline text-5xl text-primary">Our Legacy of Unions</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">Real stories from real couples who found their forever at the Atelier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{/*  Testimonial 1  */}
<div className="bg-surface-container-lowest p-8 rounded-[2rem] bloom-shadow space-y-8 relative">
<div className="w-16 h-16 absolute -top-8 left-8 rounded-full border-4 border-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a happy South Asian couple laughing together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChTfTHggBT1hPfysWrrHYfN-VheCwotda3-oEpTliwLLPhSrSiSGC6q7onPPtXXuB7CI_jHSnjwr_L90Tlx6sSJbcCK-CDAaYeuwWCvlhILrigRJirYxrlbWSTiWFuKkG5hQAdD86-b522xzCQMHnl97MSSZrLy-EsCNcNJt07bgvlfWDgckvKt6Vd6CYKkICImaoJDZbBfI1f_HqM0eZdd-p2Dttd9kuKZTP26P5-VhG0on8-hGwMOQT8cJtRIw8TwAhC9y6LRNY"/>
</div>
<p className="font-headline text-xl text-primary leading-relaxed pt-4">"We felt seen. Not just as profiles, but as people with histories and dreams."</p>
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-outline-variant/30"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-secondary">Aarav &amp; Meera</span>
</div>
</div>
{/*  Testimonial 2  */}
<div className="bg-surface-container-lowest p-8 rounded-[2rem] bloom-shadow space-y-8 relative">
<div className="w-16 h-16 absolute -top-8 left-8 rounded-full border-4 border-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Couple standing in front of a modern architectural building holding hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkJlYx0fhyREoIHGSpms0ecI7iUcLjo9zxsAlHnCwBBvQRJa_3l5HvBhbcrgFtqExaeW3o6BBVvXhyx9axjON0qYIufkLGqubFOAPwXz4LbswqDQNhixiemDWx1q211gSlu6yaKUb_XBgs3q-ngdGPW0ihfzdlZb7OnWyn7p2Jb23FmyQrNT6XPBYM1TWmSu9yFT87Srvpm-sVBqApsp5UuxoMIt9LgeOVqBbIWdrYOCt9pa3ygDho2p8ZUs81uubNnaM4WJgzzqk"/>
</div>
<p className="font-headline text-xl text-primary leading-relaxed pt-4">"The verification process gave me peace of mind. It's truly a cut above the rest."</p>
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-outline-variant/30"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-secondary">Ishaan &amp; Priya</span>
</div>
</div>
{/*  Testimonial 3  */}
<div className="bg-surface-container-lowest p-8 rounded-[2rem] bloom-shadow space-y-8 relative">
<div className="w-16 h-16 absolute -top-8 left-8 rounded-full border-4 border-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Wedding photo of a couple walking away from the camera through a rain of flower petals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pKJfCeVp15AQoBKd0LCVZtPhuu4E-Kuhs2OH0pvWtImvQU-GRqELfaTl19Ii-TPcWPB8F0YIgTYVDTlnMQ0QLKpNEV-_gK-7XgqiorCB7AAV6M-pK6OYWg8SBKDwvHsx4e09HK_b9G6RmIf3mjnH67mfOB-fzsrx1DdwvP8L6ygDmX39MNG4RU1d24vZtS5ULUIom9zOSokRNTdKsLeHiUewBA1KErBbIqj-cYdTxist5kVmgkFx_VVllt1op8vTEKp0J8jR9tw"/>
</div>
<p className="font-headline text-xl text-primary leading-relaxed pt-4">"We found our partner and our wedding stylist all in one place. Incredible!"</p>
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-outline-variant/30"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-secondary">Rohan &amp; Ananya</span>
</div>
</div>
</div>
</div>
</section>
{/*  Floral Reveal Masonry Gallery  */}
<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
<div className="col-span-2 row-span-2 rounded-[3rem] overflow-hidden group relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Detailed close up of intricate golden wedding jewelry on a red silk background with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCID-3I9SZSc4iO2iGpPK6_kM9cpG9FLvNCrBlHNcOQGA-p4nB5rrkVT4Ps3cAMmylwQLZhWkE4_phanEx9IshTh98MPGeu6G2Y9_GyzvvC_t6OoC46bdSu54cmtaxI7rqITw-h8aeOYUD0hOXi2eL5F85TSYbrUCsyR8Xjid32n7606Lmsfg4oAEeeIykBvluekmfMyjtcM76q2Jo7ZvM6xh1NjVg3StWRiMaA3Uevl_f0m3Ol3IP-Le3ymGb2Yker_XpXOOps2OU"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<p className="text-on-primary font-headline text-2xl">The Details</p>
</div>
</div>
<div className="rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Elegant outdoor garden wedding setting with white floral arrangements and soft green leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzOBK0SUyeJR3LOFgUedS1qxlpUE1V-bdAuuWw10iA8j8ZH4WF5QKEknVO-mXKd5Ev4nBdZpjRaJ1PXRIgyd67VnoV1oc28ZZ4ma092t0Zb0sFNIRu6Ow0UigufwhF1ZA_SFlhOSRT3Hm5wviLYsYGGsr41NhdV1xuA5vFBZ9NqdtUSv07fLuVINoI4_zGLhYTf3UoXXrzR-bNxFd0tF-6TVhjtKzef67FhSpouFCepqUElm7yAIALirBWYXjibaJigmrh0SNWB1E"/>
</div>
<div className="bg-tertiary-fixed flex items-center justify-center rounded-xl p-8 text-center group">
<span className="material-symbols-outlined text-tertiary text-6xl group-hover:rotate-12 transition-transform" data-weight="fill">spa</span>
</div>
<div className="col-span-2 rounded-[2rem] overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A couple walking together in a sunlit meadow during golden hour with a dreamy haze" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK82WUZGdxJTKJG9pcTeH-bbYN1qBewMl7x8G0k1TDusrzJLtbzUtrUspE7723ARNqDbQpDFaSxqq-JyLd_s3NtTiDFphy6unal0PlqibuUzjSxhUELFFqOJH5RgGxJjTChE8Pv4C5RoGzr1KyKvzHw7zfWRNX9mcy0nhjnY_4NL96wxvEpnXF683dlGrAPReuZnV0TweeNhns5xm85f_kjxMq39FQjSIWgliLehSybqZWSGQvaN0dslhyoTCcSmsL_bEaV2G1OyY"/>
</div>
<div className="rounded-tl-[5rem] overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Candid moment of a bride getting her henna patterns done on her hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWB1s-Bx2KQyVj4ilW_4C5t23QpyScWVdDBDQ_9A1jZZq1YnLg2H9d0zafwiVWeWx0lch96HSFJoWL0UTwpOL1i-6PoPk21hzoc_iEMEcTPTCAwsYSvMxu52XKoBRy1zp_DTh817MXG381hFkjgyJW2ACpl2rR_Uw0VybYEFaeu0S3wYUQ91C8a_DXupk5SPIG0bcyG8xOJCAD_mTB-vK3T1U8JKPPiypCPbSxWSZRuLpNboeXHxFkJ3gDgyHCUfAooHBGJGthKXY"/>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full border-t border-[#c2c8c0]/15 bg-[#f0eee6] dark:bg-[#1b1c17] text-[#163422] dark:text-[#fbf9f1]">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full font-manrope text-sm tracking-normal max-w-screen-2xl mx-auto">
<div className="space-y-4">
<div className="text-xl font-serif text-[#163422] dark:text-[#ffe088]">Botanical Atelier</div>
<p className="text-[#424843] dark:text-[#c2c8c0] max-w-xs">Curating elegant unions and celebrating soulful connections through heritage matchmaking.</p>
</div>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] opacity-80 hover:opacity-100 transition-opacity" href="#">Our Story</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a>
</div>
<div className="text-center md:text-right">
<p className="text-[#424843] dark:text-[#c2c8c0]">© 2024 Botanical Atelier Matrimony. All rights reserved.</p>
<div className="flex justify-center md:justify-end gap-6 mt-4">
<span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">brand_awareness</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">share</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">mail</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
