export default function AllProfilesBotanicalAtelier() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f1]/80 dark:bg-[#1b1c17]/80 backdrop-blur-md">
<div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
<div className="text-2xl font-serif italic text-[#163422] dark:text-[#ffe088]">Botanical Atelier</div>
<div className="hidden md:flex gap-8 items-center font-noto-serif text-sm tracking-widest uppercase">
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Discover</a>
<a className="text-[#163422] dark:text-[#ffe088] border-b border-[#ffe088] pb-1" href="#">Matches</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Messages</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Ceremonies</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 duration-200">notifications</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 duration-200">favorite</span>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/15">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a smiling woman with warm lighting and a soft focus garden background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54_kYc64mgci8hlnXywpw15ianmHyu5LMaIg1-ATgEwZg_pmhGduL6jWe4aMmMjNbUw2owU9umXd_VEggRr3rr1H8afS8zYwdmLdFQZElCBMp6jDqjWccZVHWSEwQ7oOGpERg_a9KSYesIxqXxT4F3NIl-Fik3n2dHL14T_E02ngW45gsukPh-9qcZNsu7wsguMX2SrYHgzwJeomj_mi5mi6atBVoN0ikGaGALv2uFYuvucfGGqbdwEgMX5wyeAZEWsjuAWlAuDo"/>
</div>
</div>
</div>
</nav>
{/*  Content Canvas  */}
<main className="pt-32 pb-24 botanical-pattern relative">
{/*  Subtle Pattern Overlay  */}
<div className="absolute inset-0 bg-surface/95 pointer-events-none"></div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
{/*  Sidebar Filters  */}
<aside className="md:col-span-3 space-y-10">
<div className="bg-surface-container-low p-8 rounded-xl border-outline-variant/10 border">
<h2 className="font-headline text-xl text-primary mb-8 border-b border-secondary-fixed pb-4 italic">Refine Search</h2>
<div className="space-y-8">
{/*  Search  */}
<div className="space-y-3">
<label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Name Search</label>
<div className="relative group">
<input className="w-full bg-transparent border-b border-outline/30 focus:border-secondary py-2 pr-10 transition-colors duration-300 outline-none font-body text-sm" placeholder="Search profiles..." type="text"/>
<span className="material-symbols-outlined absolute right-0 top-2 text-outline/50 group-focus-within:text-secondary">search</span>
</div>
</div>
{/*  Age Range  */}
<div className="space-y-3">
<label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Age Range</label>
<div className="flex items-center gap-4">
<input className="w-full bg-transparent border-b border-outline/30 focus:border-secondary py-2 text-sm outline-none" type="number" value="24"/>
<span className="text-outline-variant">—</span>
<input className="w-full bg-transparent border-b border-outline/30 focus:border-secondary py-2 text-sm outline-none" type="number" value="32"/>
</div>
</div>
{/*  Religion  */}
<div className="space-y-3">
<label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Religion</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-medium">Any</button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-secondary-fixed/50 transition-colors">Spiritual</button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-secondary-fixed/50 transition-colors">Traditional</button>
</div>
</div>
{/*  Location  */}
<div className="space-y-3">
<label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Location</label>
<select className="w-full bg-transparent border-b border-outline/30 focus:border-secondary py-2 text-sm outline-none appearance-none">
<option>United Kingdom</option>
<option>France</option>
<option>Italy</option>
<option>United States</option>
</select>
</div>
</div>
<button className="w-full mt-12 py-4 bg-primary text-on-primary rounded-xl font-label tracking-widest uppercase text-xs hover:bg-primary-container transition-all shadow-sm">Apply Filters</button>
</div>
{/*  Decorative Element  */}
<div className="hidden md:block opacity-40 px-4">
<img alt="Botanical Illustration" className="w-full grayscale" data-alt="fine-line botanical drawing of a delicate wild flower with elegant thin stems and soft petals in a dark green ink style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo2Af6JWSmC1FNp9dHynsBBALz4itsz8E4283KCqP0v1lNLBdC-McN82O476sfuKZjbWp_T_u5v-gqyW_cnCKBwBJqXgSuxM4oTs40RYLJfPgsTycArmAYThBJgh4lrw4l5zmIjhaDmGtY2F5SYa7B7drFRjuHg2GLYoaWP64r_Vv5wlGfPl-WGbe8jyRwJl0_WHlKgul9lD5PE36W4Mr9KgzjQS8mNF_asGSjEnpmCrF5kAYNZYGyBw93Bhj9DwvJlE0wt0yU9t4"/>
</div>
</aside>
{/*  Main Content: Profile Grid  */}
<section className="md:col-span-9">
<header className="mb-12 flex justify-between items-end">
<div>
<p className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-2 font-bold">Your Curated Gallery</p>
<h1 className="font-headline text-4xl text-primary font-bold">Discovery Matches</h1>
</div>
<div className="text-on-surface-variant text-sm font-label italic">Showing 124 refined souls</div>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Profile Card 1  */}
<div className="group cursor-pointer">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Ashley emyy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="elegant portrait of a young woman standing in a lush greenhouse with sunlight filtering through tropical leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvIdiWo1KojEofrqq8i9pmMveiJ5lJ4GboDdcjcRd3WJkrPaCaL7r7j5cro5KRjiuHjtoCkYEtN2yCfCcmQyrqIhF-VXBapdnT_2L0iyPLKd74Eb9jyPaPHzZHdswDHTxs4hvNy6QaTYo9l505P4U5MsV-D87aQxs00vz55lqhbWjS0jHXAI_jF7gjoiBdQGBq6g79Obyt1G4oeNpm8G45vXazwX96nVtzwTlyUaEQI1e8Sg8y3Z8HvptUDZrFG9yBSJXSI7Vr48o"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span>
</button>
</div>
</div>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Ashley emyy</h3>
<span className="text-secondary font-label text-xs font-bold">New</span>
</div>
<p className="text-on-surface-variant text-sm mt-1">26 • London, UK</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Artist</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Spiritual</span>
</div>
</div>
</div>
</div>
{/*  Profile Card 2  */}
<div className="group cursor-pointer">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Elizabeth Taylor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="classic editorial portrait of a woman in silk dress against a warm beige textured wall with soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8oAWpuUjs24bC84DlHLB8Y08mo3CfeKMImrYJxCsWYLtOEEFot0YvtnbdDIzRQaTrbuip6JO5Ev0cH3yHrSzcDS4-5SNOZFoLoxdEBK0TYNn0qdKBhBytTVFzFhVehUolZmVc9jHzKOkOzoYe73YLFfDB7PX2rNOzbJr4A-nszPS5CoLyu9MZ2v9MH5MolwrgCLNoSlFeiiWCr1kqgsVttJQJUaFy-8WNSmlMzo1PhgFPYb4efomcUSbv4YcyV-waXCtYpGsr_k"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span>
</button>
</div>
</div>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Elizabeth Taylor</h3>
<span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<p className="text-on-surface-variant text-sm mt-1">29 • Paris, FR</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Curator</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Traveler</span>
</div>
</div>
</div>
</div>
{/*  Profile Card 3  */}
<div className="group cursor-pointer lg:mt-12">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Isabella Reed" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="thoughtful portrait of a woman with braided hair sitting in an outdoor cafe at sunset with warm orange glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88Tmc77rgeQ3Wrl5zh-BK4RoUoPVErN-wfvgtk5XMcN3FgVBlkHQShifWdSYVoom5CO7AyWWsCnCOwthQHpp5mANhAaAJMukoafQ3gipoQr0S_s88b38MnFqQPGeS35CxLxzICx1azofd-TqnWZDXnd4-8IzMNYq3xFid10QyXCIMpT_dH3qdyKADQ_IrkqYIdHXddnem3i6eCGWTri05LR_0fiWS3emiPORP8Ar8s59VH2bLbZmz-vjvsrwFvUcKrQBU3PUsWCI"/>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Isabella Reed</h3>
</div>
<p className="text-on-surface-variant text-sm mt-1">27 • Rome, IT</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Architect</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Foodie</span>
</div>
</div>
</div>
</div>
{/*  Profile Card 4  */}
<div className="group cursor-pointer">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Sophia Chen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="minimalist portrait of a woman with sleek hair wearing a linen shirt in a sun-drenched studio apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEG3oP3ek4128bIGEHj1tF9CB85vQXa85F4KY9jWvrNodAUhaRLEH9fSE0dtrMgbXWyZxArKDiQPi993Gx_ZBtYvBFVUqio2kZEZlEzH9xH7DdgHnn2uwrhk_AsMHTn3KtQNitZI5g0O8NY-sZGxtqzFWGdX0WAB9UPfm7RW__D_i9PGFZKb93nICHhIc51HiAEuWljFWDGYmKHMEDEz37WWsxBW1sIwLl4BEkX5J2SQNc7fs4IP1m-4RW1Ee4x0p5v9z6XWchfnE"/>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Sophia Chen</h3>
</div>
<p className="text-on-surface-variant text-sm mt-1">25 • Vancouver, CA</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Designer</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Yogini</span>
</div>
</div>
</div>
</div>
{/*  Profile Card 5  */}
<div className="group cursor-pointer">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Margot Vane" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="moody close up portrait of a woman in a library with soft focused books in background and dramatic light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt5uBaW67Ub_sFmk2F7W0UN_w_ijDHh-BSzrsJ8Y_Vu7Lep-41qimPT8yWdMfLDt0bCRLkAnccce65cQv3K7trZVx9a3_T5My3cjlyb9_cmGMJt8aM-KI1CDBoHY1wAi9C2cmT-rdffdj1K4pdiPWdgrLGyanzDD4cC7Y4rIuPMnKzVBVZIh8ZjmMymtUkK9lGmMUKZMlH0xYpozXl1V3jzDLWis5bMqpwPuSRC0Q1yNX1NobUTzKLoiCwY3HdklXOwqX8CKpftNE"/>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Margot Vane</h3>
</div>
<p className="text-on-surface-variant text-sm mt-1">31 • New York, US</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Writer</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Classic</span>
</div>
</div>
</div>
</div>
{/*  Profile Card 6  */}
<div className="group cursor-pointer lg:mt-12">
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden p-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(22,52,34,0.06)]">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative">
<img alt="Clara Moon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="ethereal portrait of a woman standing in a field of flowers during the golden hour with soft hazy light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6omLRh8ig9fgAK7WL2smPid7M0DZsh0rdKqdNxPS99hqt2O4YoUfyzAFCYMFcc9vKihWXAODomroRfNNnIaqVX2IeQlPXpJIZI-IX0XH46ixmvo5CAOvouc4l9hvClbGeyoJtv-uge9C2iSd5ZoX3Zwr28Yr3rf7v0HmaIxuFYTGE2gZrAbmv00lcVqAisW1tKUIl9Cf3QFSPgeLsuicBiZZTS9FlEeZjdiVJDo4iPS7GXKQQsSvTVqMTlGP0mg4cLP4MQIE6AA"/>
</div>
<div className="mt-5 px-2 pb-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-xl text-primary">Clara Moon</h3>
</div>
<p className="text-on-surface-variant text-sm mt-1">28 • Berlin, DE</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Musician</span>
<span className="text-[10px] tracking-wider uppercase bg-surface-container px-2 py-1 rounded text-on-surface-variant">Nature</span>
</div>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="mt-20 flex justify-center items-center gap-4">
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">1</button>
<button className="w-12 h-12 rounded-full hover:bg-surface-container-high transition-colors">2</button>
<button className="w-12 h-12 rounded-full hover:bg-surface-container-high transition-colors">3</button>
</div>
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-[#f0eee6] dark:bg-[#1b1c17] w-full border-t border-[#c2c8c0]/15">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-screen-2xl mx-auto">
<div>
<div className="text-xl font-serif text-[#163422] dark:text-[#ffe088] mb-4">Botanical Atelier</div>
<p className="font-manrope text-sm tracking-normal text-[#424843] dark:text-[#c2c8c0] max-w-xs">Curating meaningful connections through the art of botanical matches and timeless ceremonies.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 font-manrope text-sm tracking-normal">
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] transition-all opacity-80 hover:opacity-100" href="#">Our Story</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] underline-offset-4 decoration-[#ffe088] transition-all opacity-80 hover:opacity-100" href="#">Contact Us</a>
</div>
<div className="text-xs text-[#424843] dark:text-[#c2c8c0] opacity-60">
                © 2024 Botanical Atelier Matrimony. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
