export default function ProfileDetailsBotanicalAtelierRefined() {
  return (
    <>

{/*  Navigation  */}
<nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/20 px-6 md:px-12 py-5 flex justify-between items-center">
<div className="text-2xl font-headline italic text-primary">Botanical Atelier</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs tracking-widest uppercase font-semibold text-on-surface-variant hover:text-primary transition-colors" href="#">Discover</a>
<a className="text-xs tracking-widest uppercase font-semibold text-primary border-b-2 border-primary/30 pb-1" href="#">Matches</a>
<a className="text-xs tracking-widest uppercase font-semibold text-on-surface-variant hover:text-primary transition-colors" href="#">Messages</a>
<a className="text-xs tracking-widest uppercase font-semibold text-on-surface-variant hover:text-primary transition-colors" href="#">Ceremonies</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">favorite</span>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
<img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVKAklccRhvd9r-pR6DdE0zugFpuOiJ4VDcv_YkoICBOSgp2cIi5cTjqIOruqgVWEJTXKQQ-r7IeKLdcdYpTxJZHURovfykTOi8zfKeNx2N9GqS6atV4vIg33vYOC-bJsXDJvSTIv2WsekhvOQxsGB5-Rj6sh6AemeZQBJSLDbCe_y-YmmZhsu_BOtHbXxtjkRgOU4c_pEXi-FekVzd3wYkmQHak9mEJLoXXc4erHk9LBZlahM1yYFo3DN_iDhjgq-epVGoMOli3c"/>
</div>
</div>
</nav>
<main className="pt-32 pb-24">
{/*  Hero Section  */}
<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col lg:flex-row gap-16 items-start">
{/*  Image Side  */}
<div className="w-full lg:w-[45%] sticky top-32">
<div className="relative">
<div className="floral-mask-1 overflow-hidden aspect-[4/5] shadow-xl ring-1 ring-primary/5">
<img className="w-full h-full object-cover" data-alt="elegant woman in a vintage silk dress standing in a sun-drenched botanical garden with soft dappled light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvi4CA1A8Tp-MhPCrGv_0GFCBZfwxJjJ_gDvLclAq5DjZtgqBuVZps5_KcgFnuoRe0ykwdEgXTiKoAmgLAwJBPDDgwCII_Gv4KCtZH9AOzlzojV7H9EX4laMPVBgIAvSADhhEyTFYzSsyCoteGnkyrdtUdZu3lEXvUCCuQhbo7ofoi1IGDyGVMJ4evJaXTPJQEzBWdLlhBv4K5-jnwGsLG_Pj-jB7pRNVo8duG1VT6YRZRKxFYxw0yOTqAJushaaSncGJsRkCKkmk"/>
</div>
{/*  Quick Actions  */}
<div className="absolute -bottom-6 right-6 flex gap-4">
<button className="bg-surface shadow-lg text-primary p-4 rounded-full border border-outline-variant/20 hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">favorite</span>
</button>
<button className="bg-primary shadow-lg text-on-primary p-4 rounded-full hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">mail</span>
</button>
</div>
</div>
</div>
{/*  Profile Info Side  */}
<div className="w-full lg:w-[55%] space-y-12">
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">Verified Soul</span>
<div className="h-px flex-1 bg-outline-variant/30"></div>
</div>
<h1 className="font-headline text-5xl md:text-6xl text-primary font-normal">Elowen Thorne</h1>
<p className="font-headline italic text-xl text-on-surface-variant opacity-80">Landscape Architect &amp; Organic Tea Curator</p>
</div>
{/*  Bio Cards Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
<div className="space-y-1">
<p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Age</p>
<p className="font-headline text-lg text-primary">28 Years</p>
</div>
<div className="space-y-1 border-l border-primary/10 pl-4">
<p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Height</p>
<p className="font-headline text-lg text-primary">5' 7"</p>
</div>
<div className="space-y-1 border-l border-primary/10 pl-4">
<p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">City</p>
<p className="font-headline text-lg text-primary">Oxford</p>
</div>
<div className="space-y-1 border-l border-primary/10 pl-4">
<p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Status</p>
<p className="font-headline text-lg text-primary whitespace-nowrap">Never Married</p>
</div>
</div>
{/*  Detailed Narrative  */}
<div className="space-y-8">
<div className="flex items-center gap-3">
<h2 className="font-headline text-3xl text-primary">The Art of Living</h2>
<span className="material-symbols-outlined text-secondary opacity-30">filter_vintage</span>
</div>
<div className="prose prose-primary font-body text-lg leading-relaxed text-on-surface-variant max-w-none">
<p>I find my rhythm in the quiet interplay between wild nature and curated design. My days are spent crafting sustainable garden ecosystems, and my evenings are reserved for the alchemy of blending rare loose-leaf teas from around the world.</p>
<p>I am seeking a partner who values meaningful conversation, respects the slow movement of a Sunday morning, and possesses a curious mind that never stops growing. Someone who understands that life's most beautiful details are often the ones others walk right past.</p>
</div>
</div>
{/*  Bento Tags  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-variant/40 p-8 rounded-2xl border border-outline-variant/30 space-y-5">
<h4 className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Core Values</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Sustainability</span>
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Integrity</span>
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Artistic Soul</span>
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Kindness</span>
</div>
</div>
<div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-5">
<h4 className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Passions</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Pottery</span>
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Poetry</span>
<span className="px-4 py-2 bg-white text-primary text-xs font-semibold rounded-lg shadow-sm">Foraging</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Visual Narrative Section  */}
<section className="py-24 bg-surface-variant/20 border-y border-outline-variant/20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div className="space-y-2">
<h2 className="font-headline text-4xl text-primary">Captured Moments</h2>
<p className="text-on-surface-variant opacity-70">A visual journey through the seasons</p>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all">
                    Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="floral-mask-2 aspect-square overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="close-up portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBauOd6BJ346Y6DIsSMaHRjQ8_0Dz3_oHiWP6sSPoSzDoAboao5tyhtxWs88Eh556cvWpdSsBpGl5ARDrW3oBOHCZupwJlpGJcijJOgh-f6nKDLJAEGuLylwBcDW90Tae3S_dc_KL7gLL_YCW5WPWlzNkza0L2DRb9Lnsz5K55yXc_41g1obm8Qme_C5l-eK4cfotaKA5rc72yHakTZlrlWAf0R0I1EsKp29mncAf3e1hejptbwQbu-L4Lc_Drh44Rwpgft0RWi8FU"/>
</div>
<div className="md:col-span-2 md:row-span-2 floral-mask-1 overflow-hidden group relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="serene image of woman pouring tea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjZ18cmoaqwIMQtoc-XNmoNcDPVwUlPnPniCuwiPZOik18NjChWSB1B06ENDADe8vdvZ9gyeRMxydeEgpECJr8LKe_hMXyhA2PP3YlW9gZP9f8_1_iwNl7DX6-aiCRauAd3Ela2uXI_A_FhtD_Ko1vx1kELKppztKB4wk6bRo9nOmeESfbm4BH6-t6wpZaj6o9OnRefpSORpALNR9jlqk8nZVRKeCE40-urpsWmKm88tVYYHaYP3bcEXftTpYkABcj3LlDbVivuOo"/>
</div>
<div className="floral-mask-2 aspect-square overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="botanical illustrations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q7gukbouhp4G6DjbgF6HiTTAouN0A8daJ99CJdTpwrGVDI0n-WlXPPJAUmTzj_1hpFVReVvV3bWqQ1HE2vAsV5RJSzS0STuHsyLFiaY6ya4_OtTGZA2dgg0_Ds6X5Nb3Or-SIa4X6skQNozzbF8ZyT5nFec3Ii3Ew00DISZn9GR0lvcLvgUDhQ_DyxpBlgH5PBv2j15NDOzXSN93UVAqYC_wlS8rezh5brrz4fGKh9vd-F0IPYYNkqWBGMSI3K0X1g-0x5orHnQ"/>
</div>
<div className="floral-mask-1 aspect-square overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="garden table setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCayqd35pxlkFuwD0QL1jQR8M7SRpbnp6eDgwsWlTwVIjUUI4K9zDd6X-lJLyzFVZtqDLxyuKm-oGxNz8om1swIymXV9I3mjFk8CpSQ_OAi_4M9A1rJz4tA5HIyCooqVKx6w4mqcZWjvFWkGdt1uFUsqNuvTiCgDtm7G0S799rZxr1TDGyMTVbu_rXenXJZFFs2v38dHFX5JlzM6xzQ7WByuEBczqmo0U3Rd8nGTVEo-F3amDJlon3eKCfjHI9myYV3qP8hwjP7H8"/>
</div>
<div className="aspect-square bg-primary/10 flex items-center justify-center rounded-full border border-primary/20">
<span className="material-symbols-outlined text-4xl text-primary opacity-40">spa</span>
</div>
</div>
</div>
</section>
{/*  Details and CTA  */}
<section className="max-w-7xl mx-auto px-6 mt-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
<div className="lg:col-span-2 space-y-16">
<div className="space-y-8">
<h3 className="font-headline text-3xl text-primary border-b border-outline-variant/30 pb-4">Personal Portrait</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Cuisine Preferences</p>
<p className="font-medium text-on-surface">Plant-based, Mediterranean, Artisan Ferments</p>
</div>
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Faith &amp; Heritage</p>
<p className="font-medium text-on-surface">Spiritual / Celtic Roots</p>
</div>
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Education</p>
<p className="font-medium text-on-surface">Masters in Landscape Design, Edinburgh</p>
</div>
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Mother Tongue</p>
<p className="font-medium text-on-surface">English, Gaelic (Conversational)</p>
</div>
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Lifestyle</p>
<p className="font-medium text-on-surface">Non-Smoker, Social (Organic Wine)</p>
</div>
<div className="space-y-1.5">
<p className="text-[9px] uppercase tracking-widest font-bold text-primary opacity-60">Grew up in</p>
<p className="font-medium text-on-surface">Highlands, Scotland</p>
</div>
</div>
</div>
<div className="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden">
<span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] text-primary/5 select-none pointer-events-none">architecture</span>
<h4 className="font-headline text-2xl text-primary mb-4">Professional Narrative</h4>
<p className="text-on-surface-variant leading-relaxed text-lg">Currently leading the restoration project of the 'Old Willow Estate' gardens. My work combines historical preservation with modern ecological science. I believe in creating spaces that heal both the earth and the people who walk through them.</p>
</div>
</div>
{/*  Connect Sidebar  */}
<div className="lg:col-span-1">
<div className="bg-background border border-primary/10 p-8 rounded-3xl shadow-2xl shadow-primary/5 sticky top-32 space-y-8">
<div className="text-center space-y-2">
<h4 className="font-headline text-2xl text-primary">Drawn to Elowen?</h4>
<p className="text-xs text-on-surface-variant leading-relaxed px-4">Begin your narrative together by expressing mutual interest.</p>
</div>
<div className="space-y-4">
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-xl">favorite</span>
                            Express Interest
                        </button>
<button className="w-full py-4 bg-primary/5 text-primary border border-primary/10 rounded-xl font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-xl text-secondary">mail</span>
                            Personalized Message
                        </button>
</div>
<div className="pt-8 border-t border-outline-variant/30 space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-lg">call</span>
</div>
<div>
<p className="text-[8px] uppercase tracking-[0.2em] font-bold text-on-surface-variant opacity-60">Mobile</p>
<p className="text-sm font-semibold text-primary">Verify to view</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-lg">alternate_email</span>
</div>
<div>
<p className="text-[8px] uppercase tracking-[0.2em] font-bold text-on-surface-variant opacity-60">Email</p>
<p className="text-sm font-semibold text-primary">Verify to view</p>
</div>
</div>
</div>
<div className="bg-primary/5 p-4 rounded-xl flex items-start gap-3 border border-primary/10">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">verified_user</span>
<p className="text-[10px] text-on-surface-variant font-medium leading-normal">Contact privacy is maintained until a mutual match is verified by both parties.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-surface-variant/30 border-t border-outline-variant/30 mt-24">
<div className="max-w-7xl mx-auto px-12 py-20">
<div className="flex flex-col md:flex-row justify-between items-center gap-12">
<div className="space-y-4 text-center md:text-left">
<div className="text-2xl font-headline italic text-primary">Botanical Atelier</div>
<p className="text-sm text-on-surface-variant max-w-xs opacity-70">Curating meaningful connections through the art of nature and shared values.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase font-bold text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Our Story</a>
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
<a className="hover:text-primary transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase font-bold text-on-surface-variant opacity-50">
<p>© 2024 Botanical Atelier Matrimony</p>
<p>Handcrafted for intentional souls</p>
</div>
</div>
</footer>

    </>
  );
}
