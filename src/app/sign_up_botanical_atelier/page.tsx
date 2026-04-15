export default function SignUpBotanicalAtelier() {
  return (
    <>

<main className="min-h-screen flex flex-col md:flex-row overflow-hidden relative botanical-bg bg-opacity-5">
{/*  Left Side: Brand Message & Visuals  */}
<section className="hidden md:flex md:w-5/12 bg-primary relative flex-col justify-between p-16 text-on-primary overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img alt="" className="w-full h-full object-cover" data-alt="close-up of delicate fine-line botanical illustrations with intertwined vines and soft petals on a dark forest green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByN3A_sHVpqlE41C2-uNLEyivboW7YOqgJ35tYoTDQlQS86wO8DDu2ihf4Hje_EJZVdQHp_72vctO5eU5cLToeJ_96G2Vn6pjXpbyp1MRFWYjN5PQKFUTnxa0fonahS4QY5jZbRUl7MlD69Fk30Sg1LNhx_knWvf7ZXfJtJDgksQPRCKi3WlwzSYNQ_j9nCvw45cNajAF5q4i0bG3pz39aN7AEwH0ujcNSv0KupMhZsvbL-g5Ya5RMT4uhMAvgP04_0Fj7HWDIMJk"/>
</div>
<div className="relative z-10">
<div className="text-2xl font-headline italic tracking-tighter text-secondary-fixed">Botanical Atelier</div>
</div>
<div className="relative z-10 max-w-sm">
<h1 className="text-5xl font-headline font-bold leading-tight tracking-tight mb-6">Where Love Blooms Naturally.</h1>
<p className="text-body-lg text-on-primary/80 leading-relaxed mb-8">
                    Discover a curated matrimony experience where traditional values meet modern elegance. Join a community that celebrates deep roots and beautiful futures.
                </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-primary object-cover" data-alt="portrait of a smiling woman in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMx0lqh7SzcnSUV7y0XnLZ0MjcBW8nmFOS4q0iShszn77RHsFBFzIp-H-8oxP1gYNm0WJVnZ_ZTagzjAJa7SCZjXlCSlxDMVs8kXRJGJRgbT2RV4SMC3edlPZGT5tz2tXNycI2Q7rwJn7nWGBxkoqPLdKOmo6AzcfzNFJg8xIcNYhrvqjgKYi_bwCDVZaAkZV0SjZVg-HI0WAm4CIKm0ZOhi1EiySfH2VVr8FcRA5O6JQSyPv_MMTM7fCh7j7Ahnxv5DW1NUXeqg"/>
<img className="w-10 h-10 rounded-full border-2 border-primary object-cover" data-alt="portrait of a man with a gentle expression and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYaJ3hh4eTRfIYgi68t9nLg9_G6kG4jyAB43KYb9HryByuMj5dgMsgd0oiEJVZvGhUdz3irxiTVqBXJcvLt45_We-URM-1DHoQQv118pHKnZo483dp7X5WgoOGhFr5On2bbiIU3fI0ltVPumXHgG76SMoZRu0HcQCv2BNsHFUDOd6ECZxSbyDtHVyqp-MrkrGRGYbR9R3U3nyzjGJ5RzgatWPFIhHR3ReIyl0l3l7B2HROrB4jtH-2PGhFYsR4VBOmmxPKXkD8W0"/>
<img className="w-10 h-10 rounded-full border-2 border-primary object-cover" data-alt="portrait of a woman in an elegant outdoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLkdTfE6-8uDDZjDv68jAkz1Wjc5Hi_s60RcD_NKbN1cUg770lAkWnJ1GsklxiEN2BfB6w9WG_sbh1V3SfvsVvPnrK8GnhCeUl2OU4yU9fJwAD3p3cWmEvf29OaB3tMdbrU01RtQAdc26EMUUAKtZqRMWuaZG8FgTMgkWP1bMhVTZiYGvm6s3uD0VrjlsSXJ2C_8JxWES_nJM8SkH6wQCNDVug5ZrW7KiqLqNGBC2OJYhsUqqfs27-S_6XIKAOSBmbJrnWZA3ej-I"/>
</div>
<span className="text-sm font-label tracking-wide uppercase opacity-70">10k+ Soulmates Found</span>
</div>
</div>
<div className="relative z-10">
<footer className="text-xs font-label uppercase tracking-[0.2em] opacity-50">
                    © 2024 Botanical Atelier Matrimony
                </footer>
</div>
</section>
{/*  Right Side: Registration Form  */}
<section className="flex-1 flex flex-col justify-center items-center p-8 md:p-24 relative bg-surface">
{/*  Mobile Header  */}
<div className="md:hidden w-full text-center mb-12">
<div className="text-xl font-headline italic text-primary">Botanical Atelier</div>
</div>
<div className="w-full max-w-lg">
<div className="mb-10 text-center md:text-left">
<span className="inline-block px-3 py-1 mb-4 text-[10px] font-label font-bold tracking-[0.2em] uppercase bg-secondary-fixed text-on-secondary-fixed rounded-full">Membership Application</span>
<h2 className="text-3xl font-headline font-bold text-primary mb-2">Create Your Profile</h2>
<p className="text-on-surface-variant">Already a member? <a className="text-primary font-bold hover:underline decoration-secondary" href="#">Sign In</a></p>
</div>
<form className="space-y-8">
{/*  Personal Details Cluster  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">Full Name</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder:text-surface-variant text-on-surface" placeholder="Eleanor Vance" type="text"/>
</div>
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder:text-surface-variant text-on-surface" placeholder="eleanor@botanical.com" type="email"/>
</div>
</div>
{/*  Role/Intent Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">I am a</label>
<select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all text-on-surface appearance-none">
<option>Woman</option>
<option>Man</option>
<option>Non-binary</option>
</select>
</div>
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">Seeking a</label>
<select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all text-on-surface appearance-none">
<option>Man</option>
<option>Woman</option>
<option>Either</option>
</select>
</div>
</div>
{/*  Date Selection  */}
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">Date of Birth</label>
<div className="grid grid-cols-3 gap-4">
<input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder:text-surface-variant" placeholder="DD" type="number"/>
<select className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all">
<option>Month</option>
<option>Jan</option>
<option>Feb</option>
<option>Mar</option>
<option>Apr</option>
<option>May</option>
<option>Jun</option>
<option>Jul</option>
<option>Aug</option>
<option>Sep</option>
<option>Oct</option>
<option>Nov</option>
<option>Dec</option>
</select>
<input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder:text-surface-variant" placeholder="YYYY" type="number"/>
</div>
</div>
{/*  Password Section  */}
<div className="group relative">
<label className="block text-[10px] font-label font-bold uppercase tracking-widest text-outline transition-colors group-focus-within:text-secondary mb-1">Create Password</label>
<div className="flex items-center">
<input className="flex-1 bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder:text-surface-variant" placeholder="••••••••••••" type="password"/>
<span className="material-symbols-outlined text-outline-variant cursor-pointer ml-2 hover:text-primary transition-colors">visibility</span>
</div>
</div>
{/*  Terms Check  */}
<div className="flex items-start gap-3 mt-4">
<input className="mt-1 w-4 h-4 rounded text-primary focus:ring-secondary border-outline-variant" id="terms" type="checkbox"/>
<label className="text-xs leading-relaxed text-on-surface-variant" htmlFor="terms">
                            I agree to the <a className="text-primary underline decoration-secondary" href="#">Privacy Policy</a> and <a className="text-primary underline decoration-secondary" href="#">Terms of Service</a>. I confirm I am over 18 years old.
                        </label>
</div>
{/*  Action Buttons  */}
<div className="pt-6 space-y-4">
<button className="w-full bg-primary text-on-primary font-label font-bold py-5 rounded-xl hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/10 tracking-widest uppercase" type="submit">
                            Begin My Journey
                        </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="flex-shrink mx-4 text-[10px] font-label font-bold uppercase tracking-widest text-outline">Or Sign up with</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 py-4 px-6 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all" type="button">
<img alt="Google" className="w-4 h-4 grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwLXSmnkf5WV-SGFwE4Zklpuf0RKp6LSU5H-BYRts0j_x055-AjHWqXmuJIM01fEvfRT0Uc3HBaXsGP2CKA7zqb4wO7l67GpS-3H4LfxTUoddQBCEKltB1HRleJhEASKxH6ctdBq0-XDHjFgZh3UsUNZgro5hhBgfzmFd6u1_GDM4PXA-kUFRW0aFl7DdLxvZ2NqZVOi3OuqXySHGLiq5heGv4PwCuaFirQ5A4ZDBvtOtMEn6QWebiGeVNLkivQ7U0wEioWjubPcc"/>
<span className="text-xs font-label font-bold uppercase tracking-wider text-on-surface-variant">Google</span>
</button>
<button className="flex items-center justify-center gap-2 py-4 px-6 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all" type="button">
<span className="material-symbols-outlined text-sm text-on-surface-variant">mail</span>
<span className="text-xs font-label font-bold uppercase tracking-wider text-on-surface-variant">Apple</span>
</button>
</div>
</div>
</form>
</div>
{/*  Absolute Decorative Element  */}
<div className="absolute bottom-10 right-10 opacity-10 pointer-events-none hidden lg:block">
<span className="material-symbols-outlined text-[120px] text-primary" data-icon="yard">yard</span>
</div>
</section>
</main>
{/*  Global Footer Component (Minimized for Auth Context)  */}
<footer className="bg-surface-container py-8 border-t border-outline-variant/15">
<div className="max-w-screen-2xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xl font-headline italic text-primary">Botanical Atelier</div>
<div className="flex gap-8">
<a className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Our Story</a>
<a className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Safety Guide</a>
<a className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-colors" href="#">Support</a>
</div>
<div className="text-[10px] font-label text-outline uppercase tracking-widest">
                © 2024 Botanical Atelier Matrimony. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
