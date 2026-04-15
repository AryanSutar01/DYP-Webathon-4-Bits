/* eslint-disable react/no-unescaped-entities */
export default function EditProfileBotanicalAtelierRefined() {
  return (
    <>

<nav className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30">
<div className="flex justify-between items-center px-12 py-5 max-w-screen-2xl mx-auto">
<div className="text-2xl font-headline italic text-primary">Botanical Atelier</div>
<div className="hidden md:flex items-center space-x-10">
<a className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Discover</a>
<a className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Matches</a>
<a className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Messages</a>
<a className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Ceremonies</a>
</div>
<div className="flex items-center space-x-6">
<span className="material-symbols-outlined text-primary cursor-pointer">notifications</span>
<span className="material-symbols-outlined text-primary cursor-pointer">favorite</span>
<div className="w-9 h-9 rounded-full border border-primary/20 overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyNtkKmpPqlRgX65PXTPgfJIoIBcizG1aqsX98Jvg3kJ7YgsoZhLymQSFTiCCnZg5iKrYRxPlMrkVq5fPqHIbJQNeNy4ou8Sh_tb2ZU9QMQO8wMotK1KEh_AZFJ_pB5zztEofN0KqbzeRB-HfeHJu2PLfzwdc-5xQmw8THeVx1iQhW5K8ShdJzUEQJs75iq0YcVtKDUB_JLzbE3SYz5MmrRt14L5jbao1EQZdRn8vRl5qg4kCbN_xJsvwjY0gRtfVFBWfT22ZpNEg"/>
</div>
</div>
</div>
</nav>
<main className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
<header className="mb-20 text-center md:text-left">
<span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-4 block font-bold">The Art of Connection</span>
<h1 className="font-headline text-5xl md:text-6xl text-primary font-bold tracking-tight mb-6">Edit Profile</h1>
<p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed font-light">Refine your botanical presence. Every detail shared is a seed planted for a future connection within our sanctuary.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
{/*  Sidebar Navigation  */}
<aside className="lg:col-span-3 sticky top-32 hidden lg:block">
<div className="space-y-8">
<div className="p-8 rounded-xl atelier-card relative overflow-hidden border-l-4 border-l-primary">
<h3 className="font-headline text-lg text-primary mb-4">Cultivation Progress</h3>
<div className="w-full bg-surface-variant h-1 rounded-full mb-3 overflow-hidden">
<div className="bg-primary w-3/4 h-full"></div>
</div>
<p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">75% Flourishing</p>
</div>
<nav className="flex flex-col space-y-1">
<a className="px-5 py-4 rounded-lg bg-primary-container text-on-primary-container font-semibold transition-all" href="#basic-info">Basic Info</a>
<a className="px-5 py-4 rounded-lg text-on-surface-variant hover:bg-surface-variant/40 transition-all" href="#advanced-bio">Advanced Bio</a>
<a className="px-5 py-4 rounded-lg text-on-surface-variant hover:bg-surface-variant/40 transition-all" href="#job-details">Professional Life</a>
<a className="px-5 py-4 rounded-lg text-on-surface-variant hover:bg-surface-variant/40 transition-all" href="#hobbies">Interests &amp; Hobbies</a>
<a className="px-5 py-4 rounded-lg text-on-surface-variant hover:bg-surface-variant/40 transition-all" href="#social">Digital Garden</a>
</nav>
</div>
</aside>
{/*  Main Form Canvas  */}
<div className="lg:col-span-9 space-y-20">
{/*  Basic Info Section  */}
<section className="p-12 md:p-16 rounded-2xl atelier-card" id="basic-info">
<div className="mb-14">
<h2 className="font-headline text-3xl text-primary mb-3">Basic Info</h2>
<div className="w-16 h-0.5 bg-secondary/40"></div>
</div>
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="relative">
<div className="w-44 h-44 rounded-full overflow-hidden border-8 border-surface-variant/30 shadow-sm">
<img alt="Profile" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXd2NbS1GFV8Wa60R8Z5djgOLQw-HruqSZFnP1rrtqsbb99dZjVKT75F165HBcUeak87deivpq2tmhpGXZZsTs0lSVseFoGw_7RHDx6_KOue6ddTxGNrHmN64afczL62z3XMEYCG5U7nP6SZLidntb2A5ENc5O01MVQLDxQsXKfSmsRguRxLBxXIFWl0IAGvsskiX0BuO2-N7Gz5ZHrivydzeVS-DwkogXtFunP4RdH_54V-HTzWDE0HmVYKVsbGxuFyOopH3TEJo"/>
</div>
<button className="absolute bottom-2 right-2 p-3 bg-primary text-on-primary rounded-full shadow-lg hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-sm">photo_camera</span>
</button>
</div>
<div className="flex-1 w-full space-y-10">
<div className="relative border-b border-outline/20 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Full Name</label>
<input className="w-full bg-transparent border-none p-0 text-xl font-headline text-primary focus:ring-0" type="text" defaultValue="Elena Thorne"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative border-b border-outline/20 pb-2 transition-all">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Birth Date</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-on-surface focus:ring-0" type="text" defaultValue="March 12, 1994"/>
</div>
<div className="relative border-b border-outline/20 pb-2 transition-all">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Location</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-on-surface focus:ring-0" type="text" defaultValue="Portland, Oregon"/>
</div>
</div>
</div>
</div>
</section>
{/*  Advanced Bio Section  */}
<section className="p-12 md:p-16 rounded-2xl atelier-card relative overflow-hidden" id="advanced-bio">
<div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
<span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
</div>
<div className="mb-12 relative">
<h2 className="font-headline text-3xl text-primary mb-3">Advanced Bio</h2>
<p className="text-on-surface-variant font-body italic text-sm">Express the poetry of your inner world.</p>
</div>
<div className="space-y-12">
<div className="relative border-b border-outline/20 pb-6">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-bold">My Creative Essence</label>
<textarea className="w-full bg-transparent border-none p-0 text-lg leading-relaxed resize-none text-on-surface focus:ring-0" rows={4} defaultValue="A curator of quiet moments and wild gardens. I believe in the slow unfolding of stories and the magic found in the details of nature. Seeking someone who appreciates both the silence of a forest and the vibrance of an atelier." />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative border-b border-outline/20 pb-2">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Ideal Match Resonance</label>
<input className="w-full bg-transparent border-none p-0 text-lg italic text-on-surface focus:ring-0" type="text" defaultValue="Kind, Creative, Grounded"/>
</div>
<div className="relative border-b border-outline/20 pb-2">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Life Philosophy</label>
<input className="w-full bg-transparent border-none p-0 text-lg italic text-on-surface focus:ring-0" type="text" defaultValue="Growth is a patient art."/>
</div>
</div>
</div>
</section>
{/*  Job Details  */}
<section className="p-12 md:p-16 rounded-2xl atelier-card" id="job-details">
<div className="mb-14">
<h2 className="font-headline text-3xl text-primary mb-3">Professional Life</h2>
<div className="w-16 h-0.5 bg-secondary/40"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative border-b border-outline/20 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Profession</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-primary focus:ring-0 font-medium" type="text" defaultValue="Landscape Architect"/>
</div>
<div className="relative border-b border-outline/20 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Company / Studio</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-primary focus:ring-0 font-medium" type="text" defaultValue="Verdant Vistas Design"/>
</div>
<div className="md:col-span-2 relative border-b border-outline/20 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Purposeful Work Focus</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-on-surface focus:ring-0" type="text" defaultValue="Restoring urban ecosystems through native flora and sustainable sanctuary design."/>
</div>
</div>
</section>
{/*  Hobbies Section (Asymmetric Bento)  */}
<section className="space-y-10" id="hobbies">
<div className="px-2">
<h2 className="font-headline text-3xl text-primary mb-3">Interests &amp; Hobbies</h2>
<p className="text-on-surface-variant text-sm font-light">The activities that allow your heart to bloom.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="col-span-2 bg-primary-container p-10 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto border border-primary/5">
<span className="material-symbols-outlined text-primary text-4xl mb-6">palette</span>
<div>
<h4 className="font-headline text-2xl text-primary mb-2">Botanical Sketching</h4>
<p className="text-sm text-primary/70 leading-relaxed">Capturing the delicate geometry of ferns and flowers.</p>
</div>
</div>
<div className="bg-surface-container p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-surface-variant transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">hiking</span>
<span className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Forest Bathing</span>
</div>
<div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:opacity-90 transition-opacity cursor-pointer group">
<span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">auto_stories</span>
<span className="font-label text-[10px] uppercase tracking-widest font-bold">Nature Poetry</span>
</div>
<div className="bg-secondary-container text-on-secondary-container p-8 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group">
<span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">local_florist</span>
<span className="font-label text-[10px] uppercase tracking-widest font-bold">Ikebana</span>
</div>
<div className="col-span-2 md:col-span-3 bg-white/40 border border-outline-variant/50 p-10 rounded-2xl backdrop-blur-sm flex items-center justify-between">
<div>
<h4 className="font-headline text-xl text-primary mb-1">Add a New Interest</h4>
<p className="text-on-surface-variant text-sm">What else fuels your creativity?</p>
</div>
<button className="p-5 bg-primary text-on-primary rounded-full hover:shadow-lg transition-all active:scale-95">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</section>
{/*  Digital Garden / Social Media  */}
<section className="p-12 md:p-16 rounded-2xl atelier-card" id="social">
<div className="mb-12">
<h2 className="font-headline text-3xl text-primary mb-3">Digital Garden</h2>
<p className="text-on-surface-variant text-sm font-light">Connect your external worlds to show the depth of your presence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex items-center space-x-5 p-5 rounded-xl border border-outline-variant/30 bg-surface/30 hover:bg-surface transition-colors">
<span className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
<span className="material-symbols-outlined text-xl">camera</span>
</span>
<div className="flex-1">
<label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Instagram</label>
<input className="w-full bg-transparent border-none p-0 text-base text-on-surface focus:ring-0 placeholder:text-outline-variant" placeholder="@elena_botanical" type="text"/>
</div>
</div>
<div className="flex items-center space-x-5 p-5 rounded-xl border border-outline-variant/30 bg-surface/30 hover:bg-surface transition-colors">
<span className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
<span className="material-symbols-outlined text-xl">language</span>
</span>
<div className="flex-1">
<label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Portfolio</label>
<input className="w-full bg-transparent border-none p-0 text-base text-on-surface focus:ring-0 placeholder:text-outline-variant" placeholder="elenathorne.art" type="text"/>
</div>
</div>
</div>
</section>
{/*  Action Bar  */}
<footer className="flex flex-col md:flex-row items-center justify-end space-y-6 md:space-y-0 md:space-x-10 pt-12 border-t border-outline-variant/20">
<button className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors font-bold">Discard Draft</button>
<button className="px-14 py-5 bg-primary text-on-primary rounded-full font-headline text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95">
                    Save Your Garden
                </button>
</footer>
</div>
</div>
</main>
<footer className="bg-surface-container-low w-full border-t border-outline-variant/20 mt-20">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-screen-2xl mx-auto">
<div className="text-2xl font-headline italic text-primary">Botanical Atelier</div>
<div className="flex flex-wrap justify-center gap-10 font-label text-xs tracking-[0.15em] uppercase">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Our Story</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
</div>
<div className="text-on-surface-variant/60 font-label text-[10px] tracking-widest">
            © 2024 Botanical Atelier Matrimony.
        </div>
</div>
</footer>

    </>
  );
}

