export default function UserSettingsBotanicalAtelier() {
  return (
    <>

<div className="fixed inset-0 bg-pattern pointer-events-none" data-alt="Subtle botanical pattern featuring delicate hand-drawn leaves and floral sketches on a warm cream paper texture"></div>
{/*  Top Navigation  */}
<nav className="fixed top-0 w-full z-50 bg-[#fbf9f1]/80 dark:bg-[#1b1c17]/80 backdrop-blur-md flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
<div className="text-2xl font-serif italic text-[#163422] dark:text-[#ffe088]">Botanical Atelier</div>
<div className="hidden md:flex items-center gap-10 font-noto-serif text-sm tracking-widest uppercase">
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Discover</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Matches</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-colors duration-300" href="#">Messages</a>
<a className="text-[#163422] dark:text-[#ffe088] border-b border-[#ffe088] pb-1" href="#">Ceremonies</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-[#163422] cursor-pointer hover:scale-95 duration-200">notifications</span>
<span className="material-symbols-outlined text-[#163422] cursor-pointer hover:scale-95 duration-200">favorite</span>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant/20">
<img alt="User profile avatar" data-alt="High-end editorial close-up portrait of an elegant woman with a gentle expression in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvwHaYhcFuTs_UQWKk2FgreHg63oX-3Ufy0LnLTBtYlUq8adJm6NcF8fmpSGZnvpOwpxAz78-C7KKZaQMfHqytgHk_aYSdXL78hs_zsmqRcArVg7juvTbHqQ0GtrMPeRHMEsPXqjCNVbnI_qYPdV0nJyqbcdQfa2oKKUlKByMHIMVQ5owMmugXA_ausKCnNmK9DMKk0K1dodRtHa5C-A0dqLbsYxqUyTpMFH0oSGgF-NPwmAhMWeMQhf7KjHzrPgOuCvE-DpQHpIY"/>
</div>
</div>
</nav>
<main className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
{/*  Sidebar Navigation  */}
<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-32 space-y-2">
<div className="mb-8 px-4">
<h2 className="font-noto-serif text-2xl text-primary font-bold">Settings</h2>
<p className="text-on-surface-variant text-sm mt-1">Manage your atelier experience</p>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-surface-container" href="#">
<span className="material-symbols-outlined text-primary/60 group-hover:text-primary">dashboard</span>
<span className="font-medium text-on-surface-variant group-hover:text-primary">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-surface-container" href="#">
<span className="material-symbols-outlined text-primary/60 group-hover:text-primary">diversity_1</span>
<span className="font-medium text-on-surface-variant group-hover:text-primary">My Matches</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-surface-container-low bloom-shadow border-l-4 border-primary" href="#">
<span className="material-symbols-outlined text-primary">person</span>
<span className="font-bold text-primary">Profile</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-surface-container" href="#">
<span className="material-symbols-outlined text-primary/60 group-hover:text-primary">temp_preferences_custom</span>
<span className="font-medium text-on-surface-variant group-hover:text-primary">Interests</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-surface-container" href="#">
<span className="material-symbols-outlined text-primary/60 group-hover:text-primary">settings_suggest</span>
<span className="font-medium text-on-surface-variant group-hover:text-primary">Preferences</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-surface-container" href="#">
<span className="material-symbols-outlined text-primary/60 group-hover:text-primary">verified_user</span>
<span className="font-medium text-on-surface-variant group-hover:text-primary">Security</span>
</a>
</nav>
<div className="mt-12 p-6 rounded-2xl bg-primary-container text-on-primary relative overflow-hidden">
<div className="relative z-10">
<h4 className="font-noto-serif font-bold text-lg">Botanical Premium</h4>
<p className="text-xs text-on-primary/80 mt-2">Unlock unlimited matches and fine-art gallery uploads.</p>
<button className="mt-4 px-4 py-2 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full hover:scale-105 transition-transform">Upgrade Now</button>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-white/10 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<section className="flex-grow space-y-8">
{/*  Profile Overview Bento Section  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-surface-container-lowest bloom-shadow p-8 rounded-3xl relative overflow-hidden group">
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="relative">
<div className="w-32 h-32 rounded-3xl overflow-hidden bloom-shadow rotate-3 group-hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover" data-alt="Elegant editorial portrait of a woman in a garden setting with soft morning light and floral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDRk912w_fhkZZpvInri-jqLPomPWwqJy3ZvxHil3R_88NSWonMvI7kFvoEGF1wvgqjim0nQ1Nhzu0alpWGEWjkO8oPXG4ouEuxzcDiZFJV7KeN6f0LdMwG7SAJ--Rz9To67_0fI0iP904Vqbk49X4aHGx7hkCwNSKvcz_wsiLluxEa0kngUX4Eu7vQI6DEerJ_kEbBy9HK6Kqvo6IAZVk9qOafNYq0uxW1IIl8e76CcfE6LGXE2JoCrLkYtL4nl7_imAmJJdW6Fc"/>
</div>
<button className="absolute -bottom-2 -right-2 bg-secondary-fixed p-2 rounded-full shadow-lg hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
<div className="space-y-4 flex-grow">
<div>
<h3 className="font-noto-serif text-3xl text-primary font-bold">Eleanor Vance</h3>
<p className="text-on-surface-variant flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> Paris, France
                                </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">Landscape Designer</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">Poetry Lover</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium text-primary">Early Bird</span>
</div>
</div>
</div>
{/*  Decorative botanical icon  */}
<span className="material-symbols-outlined absolute top-4 right-4 text-primary/5 text-9xl pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>local_florist</span>
</div>
<div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
<div>
<h4 className="font-noto-serif font-bold text-primary">Profile Strength</h4>
<div className="mt-4 h-2 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-secondary-fixed-dim w-3/4 rounded-full"></div>
</div>
<p className="text-xs text-on-surface-variant mt-2">75% Complete</p>
</div>
<button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-sm mt-6 hover:bg-primary-container transition-colors">Complete Profile</button>
</div>
</div>
{/*  Settings Sections  */}
<div className="space-y-6">
{/*  Visibility & Privacy  */}
<div className="bg-surface-container-lowest bloom-shadow rounded-3xl overflow-hidden">
<div className="px-8 py-6 border-b border-outline-variant/10">
<h4 className="font-noto-serif text-xl text-primary font-bold">Profile Visibility</h4>
</div>
<div className="p-8 space-y-8">
<div className="flex items-center justify-between">
<div className="max-w-md">
<h5 className="font-bold text-on-surface">Private Atelier Mode</h5>
<p className="text-sm text-on-surface-variant mt-1">Only matches you've interacted with can see your full gallery and personal details.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="max-w-md">
<h5 className="font-bold text-on-surface">Discovery Visibility</h5>
<p className="text-sm text-on-surface-variant mt-1">Allow your profile to be shown in the "Discover" section to potential matches.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="max-w-md">
<h5 className="font-bold text-on-surface">Interest Requests</h5>
<p className="text-sm text-on-surface-variant mt-1">Accept invitations to browse private botanical journals from matched partners.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
{/*  Account Details  */}
<div className="bg-surface-container-lowest bloom-shadow rounded-3xl overflow-hidden">
<div className="px-8 py-6 border-b border-outline-variant/10">
<h4 className="font-noto-serif text-xl text-primary font-bold">Account Details</h4>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 py-3 text-on-surface transition-colors" type="email" value="eleanor.vance@atelier.com"/>
<span className="material-symbols-outlined absolute right-0 top-3 text-primary/40 text-sm">lock</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
<input className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 py-3 text-on-surface transition-colors" type="tel" value="+33 6 12 34 56 78"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Display Language</label>
<select className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 py-3 text-on-surface transition-colors">
<option>English (US)</option>
<option>French (FR)</option>
<option>Italian (IT)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Timezone</label>
<select className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 py-3 text-on-surface transition-colors">
<option>Central European Time (CET)</option>
<option>Eastern Standard Time (EST)</option>
</select>
</div>
</div>
<div className="px-8 py-6 bg-surface-container-low/50 flex justify-end gap-4">
<button className="px-6 py-2 rounded-full text-on-surface-variant font-bold text-sm hover:bg-surface-container transition-colors">Discard</button>
<button className="px-8 py-2 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-container bloom-shadow transition-colors">Save Changes</button>
</div>
</div>
{/*  Notifications  */}
<div className="bg-surface-container-lowest bloom-shadow rounded-3xl overflow-hidden">
<div className="px-8 py-6 border-b border-outline-variant/10">
<h4 className="font-noto-serif text-xl text-primary font-bold">Notification Preferences</h4>
</div>
<div className="p-8 space-y-6">
<div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-surface-container-low transition-colors">
<div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary">mail</span>
</div>
<div className="flex-grow">
<h5 className="font-bold text-on-surface">Email Digests</h5>
<p className="text-sm text-on-surface-variant">Weekly curation of top matches and upcoming ceremonies.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
<div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-surface-container-low transition-colors">
<div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">chat_bubble</span>
</div>
<div className="flex-grow">
<h5 className="font-bold text-on-surface">Message Alerts</h5>
<p className="text-sm text-on-surface-variant">Instant push notifications when you receive a message.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full border-t border-[#c2c8c0]/15 bg-[#f0eee6] dark:bg-[#1b1c17] mt-12">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-screen-2xl mx-auto">
<div className="text-xl font-serif text-[#163422] dark:text-[#ffe088]">Botanical Atelier</div>
<div className="flex flex-wrap justify-center gap-10 font-manrope text-sm tracking-normal">
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-opacity" href="#">Our Story</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-opacity" href="#">Privacy Policy</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-opacity" href="#">Terms of Service</a>
<a className="text-[#424843] dark:text-[#c2c8c0] hover:text-[#163422] dark:hover:text-[#ffe088] transition-opacity" href="#">Contact Us</a>
</div>
<div className="text-[#424843] dark:text-[#c2c8c0] text-sm opacity-80">
                © 2024 Botanical Atelier Matrimony. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
