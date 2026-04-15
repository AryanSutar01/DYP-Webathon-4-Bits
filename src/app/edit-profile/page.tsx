/* eslint-disable react/no-unescaped-entities */
export default function EditProfileBotanicalAtelier() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="bg-surface/80 dark:bg-[#1b1c17]/80 backdrop-blur-md fixed top-0 w-full z-50">
<div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
<div className="text-2xl font-serif italic text-primary dark:text-secondary-fixed">Botanical Atelier</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Discover</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Matches</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Messages</a>
<a className="font-noto-serif text-sm tracking-widest uppercase text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-colors duration-300" href="#">Ceremonies</a>
</div>
<div className="flex items-center space-x-6">
<span className="material-symbols-outlined text-primary cursor-pointer scale-95 duration-200 ease-in-out">notifications</span>
<span className="material-symbols-outlined text-primary cursor-pointer scale-95 duration-200 ease-in-out">favorite</span>
<div className="w-10 h-10 rounded-full border border-outline-variant/20 overflow-hidden ring-2 ring-secondary-fixed ring-offset-2">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="Close-up portrait of a woman with a serene expression, soft natural lighting, elegant botanical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyNtkKmpPqlRgX65PXTPgfJIoIBcizG1aqsX98Jvg3kJ7YgsoZhLymQSFTiCCnZg5iKrYRxPlMrkVq5fPqHIbJQNeNy4ou8Sh_tb2ZU9QMQO8wMotK1KEh_AZFJ_pB5zztEofN0KqbzeRB-HfeHJu2PLfzwdc-5xQmw8THeVx1iQhW5K8ShdJzUEQJs75iq0YcVtKDUB_JLzbE3SYz5MmrRt14L5jbao1EQZdRn8vRl5qg4kCbN_xJsvwjY0gRtfVFBWfT22ZpNEg"/>
</div>
</div>
</div>
</nav>
<main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
{/*  Header Section  */}
<header className="mb-16 text-center md:text-left">
<span className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-4 block">Refine Your Essence</span>
<h1 className="font-headline text-5xl md:text-6xl text-primary font-bold tracking-tight mb-4">Edit Profile</h1>
<p className="text-on-surface-variant max-w-2xl text-lg">Curate your botanical presence. Every detail shared is a seed planted for a future connection.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
{/*  Side Navigation / Sticky Summary  */}
<aside className="lg:col-span-3 sticky top-40 hidden lg:block">
<div className="space-y-6">
<div className="p-8 rounded-xl bg-surface-container-low bloom-shadow relative overflow-hidden">
<div className="absolute -top-10 -right-10 opacity-10">
<span className="material-symbols-outlined text-9xl text-primary">eco</span>
</div>
<h3 className="font-headline text-xl text-primary mb-6">Profile Completion</h3>
<div className="w-full bg-outline-variant/20 h-1.5 rounded-full mb-4 overflow-hidden">
<div className="bg-secondary w-3/4 h-full"></div>
</div>
<p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">75% Cultivated</p>
</div>
<nav className="flex flex-col space-y-2">
<a className="px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-semibold transition-all duration-300" href="#basic-info">Basic Info</a>
<a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all duration-300" href="#advanced-bio">Advanced Bio</a>
<a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all duration-300" href="#job-details">Professional Life</a>
<a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all duration-300" href="#hobbies">Interests &amp; Hobbies</a>
<a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all duration-300" href="#social">Social Connections</a>
</nav>
</div>
</aside>
{/*  Main Form Canvas  */}
<div className="lg:col-span-9 space-y-12">
{/*  Basic Info Section  */}
<section className="p-10 md:p-16 rounded-xl bg-surface-container-lowest bloom-shadow relative" id="basic-info">
<div className="mb-12">
<h2 className="font-headline text-3xl text-primary mb-2">Basic Info</h2>
<div className="w-12 h-1 bg-secondary-fixed mb-6"></div>
</div>
<div className="flex flex-col md:flex-row gap-12 items-center mb-12">
<div className="relative group">
<div className="w-40 h-40 rounded-full overflow-hidden bloom-shadow ring-4 ring-surface-container">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Modern studio portrait of a woman with soft lighting and minimalist cream background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXd2NbS1GFV8Wa60R8Z5djgOLQw-HruqSZFnP1rrtqsbb99dZjVKT75F165HBcUeak87deivpq2tmhpGXZZsTs0lSVseFoGw_7RHDx6_KOue6ddTxGNrHmN64afczL62z3XMEYCG5U7nP6SZLidntb2A5ENc5O01MVQLDxQsXKfSmsRguRxLBxXIFWl0IAGvsskiX0BuO2-N7Gz5ZHrivydzeVS-DwkogXtFunP4RdH_54V-HTzWDE0HmVYKVsbGxuFyOopH3TEJo"/>
</div>
<button className="absolute bottom-2 right-2 p-3 bg-secondary text-on-secondary rounded-full bloom-shadow hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
<div className="flex-1 w-full space-y-8">
<div className="relative border-b border-outline/30 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Full Name</label>
<input className="w-full bg-transparent border-none p-0 text-xl font-headline text-primary" type="text" defaultValue="Elena Thorne"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative border-b border-outline/30 pb-2 transition-all">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Birth Date</label>
<input className="w-full bg-transparent border-none p-0 text-lg" type="text" defaultValue="March 12, 1994"/>
</div>
<div className="relative border-b border-outline/30 pb-2 transition-all">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Location</label>
<input className="w-full bg-transparent border-none p-0 text-lg" type="text" defaultValue="Portland, Oregon"/>
</div>
</div>
</div>
</div>
</section>
{/*  Advanced Bio Section  */}
<section className="p-10 md:p-16 rounded-xl bg-surface-container-low relative overflow-hidden" id="advanced-bio">
<div className="absolute top-0 right-0 p-8 opacity-5">
<span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
</div>
<div className="mb-10">
<h2 className="font-headline text-3xl text-primary mb-2">Advanced Bio</h2>
<p className="text-on-surface-variant font-body italic">Share the poetry of your daily life.</p>
</div>
<div className="space-y-10">
<div className="relative border-b border-outline/30 pb-4">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-3">About My Soul</label>
<textarea className="w-full bg-transparent border-none p-0 text-lg leading-relaxed resize-none" rows={4} defaultValue="A curator of quiet moments and wild gardens. I believe in the slow unfolding of stories and the magic found in the details of nature. Seeking someone who appreciates both the silence of a forest and the vibrance of an atelier." />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative border-b border-outline/30 pb-2">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Ideal Match Essence</label>
<input className="w-full bg-transparent border-none p-0 text-lg italic" type="text" defaultValue="Kind, Creative, Grounded"/>
</div>
<div className="relative border-b border-outline/30 pb-2">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Life Philosophy</label>
<input className="w-full bg-transparent border-none p-0 text-lg italic" type="text" defaultValue="Growth is a patient art."/>
</div>
</div>
</div>
</section>
{/*  Job Details  */}
<section className="p-10 md:p-16 rounded-xl bg-surface-container-lowest bloom-shadow" id="job-details">
<div className="mb-10">
<h2 className="font-headline text-3xl text-primary mb-2">Job Details</h2>
<div className="w-12 h-1 bg-secondary-fixed mb-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative border-b border-outline/30 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Profession</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-primary" type="text" defaultValue="Landscape Architect"/>
</div>
<div className="relative border-b border-outline/30 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Company / Studio</label>
<input className="w-full bg-transparent border-none p-0 text-lg text-primary" type="text" defaultValue="Verdant Vistas Design"/>
</div>
<div className="md:col-span-2 relative border-b border-outline/30 pb-2 transition-all group">
<label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">Passionate Work Focus</label>
<input className="w-full bg-transparent border-none p-0 text-lg" type="text" defaultValue="Restoring urban ecosystems through native flora and sustainable sanctuary design."/>
</div>
</div>
</section>
{/*  Hobbies Section (Asymmetric Bento)  */}
<section className="space-y-6" id="hobbies">
<div className="px-4">
<h2 className="font-headline text-3xl text-primary mb-2">Interests &amp; Hobbies</h2>
<p className="text-on-surface-variant mb-8">The activities that make your heart bloom.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="col-span-2 bg-primary-container/10 p-8 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">palette</span>
<h4 className="font-headline text-2xl text-primary mb-2">Botanical Sketching</h4>
<p className="text-sm opacity-80">Capturing the delicate geometry of ferns and flowers.</p>
</div>
<div className="bg-surface-container-high p-6 rounded-xl flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-primary mb-3">hiking</span>
<span className="font-label text-xs uppercase tracking-widest font-bold">Forest Bathing</span>
</div>
<div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-xl flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined mb-3">auto_stories</span>
<span className="font-label text-xs uppercase tracking-widest font-bold">Nature Poetry</span>
</div>
<div className="bg-secondary-fixed text-on-secondary-fixed p-6 rounded-xl flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined mb-3">local_florist</span>
<span className="font-label text-xs uppercase tracking-widest font-bold">Ikebana</span>
</div>
<div className="col-span-2 md:col-span-3 bg-surface-container-lowest p-8 rounded-xl bloom-shadow flex items-center justify-between">
<div>
<h4 className="font-headline text-xl text-primary mb-1">Add a New Interest</h4>
<p className="text-on-surface-variant text-sm">What else fuels your creativity?</p>
</div>
<button className="p-4 bg-outline-variant/20 rounded-full hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</section>
{/*  Social Media Section  */}
<section className="p-10 md:p-16 rounded-xl bg-surface-container-lowest bloom-shadow" id="social">
<div className="mb-10">
<h2 className="font-headline text-3xl text-primary mb-2">Social Connections</h2>
<p className="text-on-surface-variant text-sm">Link your digital garden to show more of your world.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex items-center space-x-4 p-4 rounded-xl border border-outline-variant/15 hover:bg-surface-container transition-colors">
<span className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-lg">
<span className="material-symbols-outlined text-lg">camera</span>
</span>
<div className="flex-1">
<label className="block font-label text-[10px] uppercase text-on-surface-variant">Instagram</label>
<input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0" placeholder="@elena_botanical" type="text"/>
</div>
</div>
<div className="flex items-center space-x-4 p-4 rounded-xl border border-outline-variant/15 hover:bg-surface-container transition-colors">
<span className="w-10 h-10 flex items-center justify-center bg-tertiary text-on-tertiary rounded-lg">
<span className="material-symbols-outlined text-lg">language</span>
</span>
<div className="flex-1">
<label className="block font-label text-[10px] uppercase text-on-surface-variant">Personal Atelier</label>
<input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0" placeholder="elenathorne.art" type="text"/>
</div>
</div>
</div>
</section>
{/*  Action Bar  */}
<footer className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-6 pt-8">
<button className="font-label text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Discard Draft</button>
<button className="px-12 py-4 bg-primary text-on-primary rounded-full font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95">
                        Save Your Garden
                    </button>
</footer>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-surface-container dark:bg-[#1b1c17] w-full border-t border-[#c2c8c0]/15">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-screen-2xl mx-auto">
<div className="text-xl font-serif text-primary dark:text-secondary-fixed">Botanical Atelier</div>
<div className="flex flex-wrap justify-center gap-8 font-manrope text-sm tracking-normal">
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-opacity opacity-80 hover:opacity-100" href="#">Our Story</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-[#c2c8c0] hover:text-primary dark:hover:text-secondary-fixed transition-opacity opacity-80 hover:opacity-100" href="#">Contact Us</a>
</div>
<div className="text-on-surface-variant dark:text-[#c2c8c0] font-manrope text-sm">
                © 2024 Botanical Atelier Matrimony. All rights reserved.
            </div>
</div>
</footer>
{/*  Absolute Botanical Overlay Decorations  */}
<div className="fixed top-40 -left-20 opacity-10 pointer-events-none select-none -z-0">
<img alt="decoration" className="w-[500px] rotate-12" data-alt="Fine line art of eucalyptus leaves and branches, minimalist style on transparent background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtn5lre5wEnxLZYEsjaKf4jHEBZWmqDKODGn4aO8EaJ90SDKRiNojFmY3EMH9l_qdhNvpykSsMvR_-t5tV-yCHNIJGZriDgBo5Y95HU8H8PeBD9VQb8nfKSxwQCh3e9RLgNrDbkvuQNwH0WN7sFwUZbEbTXYuZRc8T3A4QKS9OLKfqs4-JyThYaP1owyxERFU9Z8-AUWhtRzHG-j6ifJvvgcqanQZY1uXoTHhhKnqd5VF10n2pPrVtN8h9zAmOxd8IHl1pz6LekE"/>
</div>
<div className="fixed bottom-0 -right-20 opacity-10 pointer-events-none select-none -z-0">
<img alt="decoration" className="w-[600px] -rotate-12" data-alt="Elegant pencil drawing of a blooming peony with soft petals and detailed textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx9FD0ubgA9abYaY3aKQXsCrLRINW4prWeC6K0d3XqckaNk2NWHRfB9I0YjPHcUgQAoAekpSLw5Na19EVbUw58AiqETSPSoXNEML7oNhecWpJMazfD5P8D2GmFNsRbeBYzYmofYhul09bsZkl7xt59Vqa_GYCEjZqpILfS9XnjfYhWpzkd-cVlQ5IXT1kgyaFHZZLIjKLNxi2uXm1dlZShD-XaB5Fdzl05DfFO2YuI3XL7JueCvSGNh2tyGxCSjA5-Lr5RVLHZoXc"/>
</div>

    </>
  );
}

