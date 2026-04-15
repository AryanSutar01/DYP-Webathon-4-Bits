/* eslint-disable react/no-unescaped-entities */
export default function ProfileDetailsBotanicalAtelier() {
  return (
    <>

{/*  Top Navigation  */}
<nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-[#1b1c17]/80 backdrop-blur-md flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto left-1/2 -translate-x-1/2">
<div className="text-2xl font-serif italic text-primary dark:text-secondary-fixed">Botanical Atelier</div>
<div className="hidden md:flex items-center space-gap-8 gap-10">
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Discover</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-primary dark:text-secondary-fixed border-b border-[#ffe088] pb-1" href="#">Matches</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Messages</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Ceremonies</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-primary dark:text-[#fbf9f1] cursor-pointer hover:scale-95 duration-200">notifications</span>
<span className="material-symbols-outlined text-primary dark:text-[#fbf9f1] cursor-pointer hover:scale-95 duration-200">favorite</span>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
<img alt="User profile avatar" data-alt="professional portrait of a smiling woman with warm lighting and a soft neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVKAklccRhvd9r-pR6DdE0zugFpuOiJ4VDcv_YkoICBOSgp2cIi5cTjqIOruqgVWEJTXKQQ-r7IeKLdcdYpTxJZHURovfykTOi8zfKeNx2N9GqS6atV4vIg33vYOC-bJsXDJvSTIv2WsekhvOQxsGB5-Rj6sh6AemeZQBJSLDbCe_y-YmmZhsu_BOtHbXxtjkRgOU4c_pEXi-FekVzd3wYkmQHak9mEJLoXXc4erHk9LBZlahM1yYFo3DN_iDhjgq-epVGoMOli3c"/>
</div>
</div>
</nav>
<main className="pt-32 bg-opacity-5">
{/*  Hero Profile Section  */}
<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col lg:flex-row gap-16 items-start">
{/*  Main Profile Image & Actions  */}
<div className="w-full lg:w-2/5 sticky top-32">
<div className="relative group">
<div className="absolute -top-6 -left-6 w-32 h-32 opacity-20 pointer-events-none">
<span className="material-symbols-outlined text-primary text-7xl" data-weight="fill">local_florist</span>
</div>
<div className="floral-reveal-mask-1 overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/10">
<img className="w-full h-full object-cover" data-alt="elegant woman in a vintage silk dress standing in a sun-drenched botanical garden with soft dappled light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvi4CA1A8Tp-MhPCrGv_0GFCBZfwxJjJ_gDvLclAq5DjZtgqBuVZps5_KcgFnuoRe0ykwdEgXTiKoAmgLAwJBPDDgwCII_Gv4KCtZH9AOzlzojV7H9EX4laMPVBgIAvSADhhEyTFYzSsyCoteGnkyrdtUdZu3lEXvUCCuQhbo7ofoi1IGDyGVMJ4evJaXTPJQEzBWdLlhBv4K5-jnwGsLG_Pj-jB7pRNVo8duG1VT6YRZRKxFYxw0yOTqAJushaaSncGJsRkCKkmk"/>
</div>
<div className="absolute -bottom-8 -right-8 flex gap-4">
<button className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">favorite</span>
</button>
<button className="bg-primary text-on-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">mail</span>
</button>
</div>
</div>
</div>
{/*  Profile Details  */}
<div className="w-full lg:w-3/5 space-y-12">
<div>
<div className="flex items-center gap-4 mb-4">
<span className="font-label text-xs tracking-widest uppercase text-secondary font-bold">Verified Profile</span>
<div className="h-px flex-1 bg-outline-variant/30"></div>
</div>
<h1 className="font-headline text-6xl text-primary mb-2">Elowen Thorne</h1>
<p className="font-noto-serif italic text-xl text-on-surface-variant">Landscape Architect &amp; Organic Tea Curator</p>
</div>
{/*  Quick Stats Grid  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-surface-container-low rounded-xl">
<div className="text-center">
<p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">Age</p>
<p className="text-lg font-headline text-primary">28 Years</p>
</div>
<div className="text-center border-l border-outline-variant/20">
<p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">Height</p>
<p className="text-lg font-headline text-primary">5' 7"</p>
</div>
<div className="text-center border-l border-outline-variant/20">
<p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">City</p>
<p className="text-lg font-headline text-primary">Oxford</p>
</div>
<div className="text-center border-l border-outline-variant/20">
<p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">Marital Status</p>
<p className="text-lg font-headline text-primary">Never Married</p>
</div>
</div>
{/*  About Section  */}
<div className="space-y-6">
<h3 className="font-headline text-3xl text-primary flex items-center gap-3">
              The Art of Living
              <span className="material-symbols-outlined text-secondary opacity-40">filter_vintage</span>
</h3>
<div className="prose prose-on-surface-variant font-body text-lg leading-relaxed">
<p>I find my rhythm in the quiet interplay between wild nature and curated design. My days are spent crafting sustainable garden ecosystems, and my evenings are reserved for the alchemy of blending rare loose-leaf teas from around the world.</p>
<p>I am seeking a partner who values meaningful conversation, respects the slow movement of a Sunday morning, and possesses a curious mind that never stops growing. Someone who understands that life's most beautiful details are often the ones others walk right past.</p>
</div>
</div>
{/*  Traits / Interests Bento  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container rounded-xl p-8 space-y-4">
<h4 className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Core Values</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Sustainability</span>
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Integrity</span>
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Artistic Soul</span>
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Kindness</span>
</div>
</div>
<div className="bg-surface-container-highest rounded-xl p-8 space-y-4">
<h4 className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Passions</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Pottery</span>
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Poetry</span>
<span className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-full text-sm font-medium">Foraging</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Photo Gallery: Floral Reveal  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 className="font-headline text-4xl text-primary">A Visual Narrative</h2>
<p className="text-on-surface-variant mt-2">Captured moments through the seasons</p>
</div>
<button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
            View All Photos <span className="material-symbols-outlined">trending_flat</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
<div className="floral-reveal-mask-2 aspect-square overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close-up portrait of a woman with red hair and freckles in a field of wild flowers during sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBauOd6BJ346Y6DIsSMaHRjQ8_0Dz3_oHiWP6sSPoSzDoAboao5tyhtxWs88Eh556cvWpdSsBpGl5ARDrW3oBOHCZupwJlpGJcijJOgh-f6nKDLJAEGuLylwBcDW90Tae3S_dc_KL7gLL_YCW5WPWlzNkza0L2DRb9Lnsz5K55yXc_41g1obm8Qme_C5l-eK4cfotaKA5rc72yHakTZlrlWAf0R0I1EsKp29mncAf3e1hejptbwQbu-L4Lc_Drh44Rwpgft0RWi8FU"/>
</div>
<div className="lg:col-span-2 lg:row-span-2 floral-reveal-mask-1 overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="serene image of a woman pouring tea in a rustic outdoor kitchen surrounded by climbing ivy and potted plants" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjZ18cmoaqwIMQtoc-XNmoNcDPVwUlPnPniCuwiPZOik18NjChWSB1B06ENDADe8vdvZ9gyeRMxydeEgpECJr8LKe_hMXyhA2PP3YlW9gZP9f8_1_iwNl7DX6-aiCRauAd3Ela2uXI_A_FhtD_Ko1vx1kELKppztKB4wk6bRo9nOmeESfbm4BH6-t6wpZaj6o9OnRefpSORpALNR9jlqk8nZVRKeCE40-urpsWmKm88tVYYHaYP3bcEXftTpYkABcj3LlDbVivuOo"/>
</div>
<div className="aspect-square floral-reveal-mask-2 overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="artistic shot of botanical illustrations and pressed flowers on a weathered wooden desk with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q7gukbouhp4G6DjbgF6HiTTAouN0A8daJ99CJdTpwrGVDI0n-WlXPPJAUmTzj_1hpFVReVvV3bWqQ1HE2vAsV5RJSzS0STuHsyLFiaY6ya4_OtTGZA2dgg0_Ds6X5Nb3Or-SIa4X6skQNozzbF8ZyT5nFec3Ii3Ew00DISZn9GR0lvcLvgUDhQ_DyxpBlgH5PBv2j15NDOzXSN93UVAqYC_wlS8rezh5brrz4fGKh9vd-F0IPYYNkqWBGMSI3K0X1g-0x5orHnQ"/>
</div>
<div className="aspect-square floral-reveal-mask-1 overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="overhead view of a beautifully set garden table with organic linens and seasonal wildflower arrangements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCayqd35pxlkFuwD0QL1jQR8M7SRpbnp6eDgwsWlTwVIjUUI4K9zDd6X-lJLyzFVZtqDLxyuKm-oGxNz8om1swIymXV9I3mjFk8CpSQ_OAi_4M9A1rJz4tA5HIyCooqVKx6w4mqcZWjvFWkGdt1uFUsqNuvTiCgDtm7G0S799rZxr1TDGyMTVbu_rXenXJZFFs2v38dHFX5JlzM6xzQ7WByuEBczqmo0U3Rd8nGTVEo-F3amDJlon3eKCfjHI9myYV3qP8hwjP7H8"/>
</div>
<div className="aspect-square bg-tertiary-fixed flex items-center justify-center rounded-full text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined text-5xl">spa</span>
</div>
</div>
</div>
</section>
{/*  Detailed Personal Information  */}
<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
{/*  Left Col: Personal Info  */}
<div className="lg:col-span-2 space-y-12">
<h3 className="font-headline text-3xl text-primary border-b border-outline-variant/30 pb-4">Personal Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Cuisine Preferences</span>
<p className="text-on-surface">Plant-based, Mediterranean, Artisan Ferments</p>
</div>
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Religion &amp; Heritage</span>
<p className="text-on-surface">Spiritual but not Religious / Celtic Roots</p>
</div>
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Education</span>
<p className="text-on-surface">Masters in Landscape Design, University of Edinburgh</p>
</div>
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Mother Tongue</span>
<p className="text-on-surface">English, Gaelic (Conversational)</p>
</div>
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Lifestyle</span>
<p className="text-on-surface">Non-Smoker, Social Drinker (Organic Wine)</p>
</div>
<div className="space-y-1">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Grew up in</span>
<p className="text-on-surface">Highlands, Scotland</p>
</div>
</div>
{/*  Professional Story  */}
<div className="bg-surface-container p-10 rounded-2xl space-y-6 relative overflow-hidden">
<span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-primary/5 pointer-events-none">architecture</span>
<h4 className="font-headline text-2xl text-primary">Professional Journey</h4>
<p className="text-on-surface-variant leading-relaxed">Currently leading the restoration project of the 'Old Willow Estate' gardens. My work combines historical preservation with modern ecological science. I believe in creating spaces that heal both the earth and the people who walk through them.</p>
</div>
</div>
{/*  Right Col: Contact/Connect Card  */}
<div className="lg:col-span-1">
<div className="bg-surface-container-lowest border border-outline-variant/15 p-10 rounded-2xl shadow-xl shadow-primary/5 sticky top-32 space-y-8">
<div className="text-center">
<h4 className="font-headline text-2xl text-primary">Interested in Elowen?</h4>
<p className="text-on-surface-variant mt-2 text-sm">Send a message or express interest to start a conversation.</p>
</div>
<div className="space-y-4">
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">favorite</span> Express Interest
                </button>
<button className="w-full py-4 bg-secondary-fixed text-on-secondary-fixed rounded-xl font-bold hover:brightness-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">mail</span> Send Personalized Message
                </button>
</div>
<div className="pt-6 border-t border-outline-variant/20 space-y-4">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Phone Number</p>
<p className="text-primary font-medium">Verify to view</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">alternate_email</span>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Email Address</p>
<p className="text-primary font-medium">Verify to view</p>
</div>
</div>
</div>
<div className="bg-primary-fixed/30 p-4 rounded-xl flex items-start gap-3">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-xs text-on-primary-fixed-variant leading-tight">Your contact details will only be shared once a mutual match is established.</p>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full border-t border-[#c2c8c0]/15 bg-surface-container dark:bg-[#1b1c17] mt-24">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-screen-2xl mx-auto">
<div className="text-xl font-serif text-primary dark:text-secondary-fixed">Botanical Atelier</div>
<div className="flex flex-wrap justify-center gap-8 font-manrope text-sm tracking-normal">
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed underline-offset-4 decoration-[#ffe088] transition-opacity opacity-80 hover:opacity-100" href="#">Our Story</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed underline-offset-4 decoration-[#ffe088] transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed underline-offset-4 decoration-[#ffe088] transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed underline-offset-4 decoration-[#ffe088] transition-opacity opacity-80 hover:opacity-100" href="#">Contact Us</a>
</div>
<div className="text-on-surface-variant dark:text-[#c2c8c0] text-sm">Â© 2024 Botanical Atelier Matrimony. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
