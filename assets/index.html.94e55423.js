import{_ as i,r as n,o as r,c as a,a as e,b as o,d as t,e as s}from"./app.3b10895b.js";const d={},c=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),p=e("li",null,"A device running iOS/iPadOS 15.0 to 15.7.1 or 16.0 to 16.1.2",-1),h=e("li",null,"The Tips app installed to your device",-1),u={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dhinakg.github.io/apps.html",target:"_blank",rel:"noopener noreferrer"},m=s('<h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the TrollInstallerMDC <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The TrollInstallerMDC application can now be opened from home screen.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you&#39;re on iOS 16.0 to 16.1.2, you&#39;ll also need to enable Developer Mode.</p><p>To do so, go into <code>Settings</code> -&gt; <code>Privacy &amp; Security</code> and then scroll down until you see <code>Developer Mode</code>, tap that option, toggle Developer Mode on, and follow the on-screen instructions</p></div><h2 id="injecting-trollstore-helper" tabindex="-1"><a class="header-anchor" href="#injecting-trollstore-helper" aria-hidden="true">#</a> Injecting TrollStore Helper</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you&#39;ve already opened Tips, reboot your device before following these steps</p></div><ol><li>Open TrollInstallerMDC</li><li>Once it says &quot;Successfully replaced Tips binary&quot;, close the <code>TrollInstallerMDC</code> app <ul><li>If it gives an error, close TrollInstallerMDC and re-open it</li></ul></li></ol><h2 id="installing-trollstore" tabindex="-1"><a class="header-anchor" href="#installing-trollstore" aria-hidden="true">#</a> Installing TrollStore</h2><ol><li>Open the <code>Tips</code> app</li><li>Tap <code>Install TrollStore</code></li></ol><p>Your device should respring, and TrollStore should now be installed.</p><h2 id="installing-persistence-helper" tabindex="-1"><a class="header-anchor" href="#installing-persistence-helper" aria-hidden="true">#</a> Installing Persistence Helper</h2><ol><li>Open the <code>TrollStore</code> app on your home screen</li><li>Press <code>Settings</code>, then press <code>Install Persistence Helper</code></li><li>Select <code>Tips</code> from the list of apps</li></ol>',15);function _(v,y){const l=n("ExternalLinkIcon");return r(),a("div",null,[c,e("ul",null,[p,h,e("li",null,[o("The latest version of "),e("a",u,[o("Sideloadly"),t(l)])]),e("li",null,[o("The latest version of "),e("a",g,[o("iTunes"),t(l)]),o(" if on Windows")]),e("li",null,[o("The latest version of "),e("a",f,[o("TrollInstallerMDC"),t(l)])])]),m])}var I=i(d,[["render",_],["__file","index.html.vue"]]);export{I as default};
