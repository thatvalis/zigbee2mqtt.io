"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53459],{35671:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-81794e18",path:"/devices/500.67.html",title:"Paulmann 500.67 control via MQTT",lang:"en-US",frontmatter:{title:"Paulmann 500.67 control via MQTT",description:"Integrate your Paulmann 500.67 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-05-19T20:48:40.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Extended hue",slug:"extended-hue",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/500.67.md",git:{updatedTime:1638896007e3}}},39840:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(66252);const i=(0,n.uE)('<h1 id="paulmann-500-67" tabindex="-1"><a class="header-anchor" href="#paulmann-500-67" aria-hidden="true">#</a> Paulmann 500.67</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>500.67</td></tr><tr><td>Vendor</td><td>Paulmann</td></tr><tr><td>Description</td><td>RGB remote control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/500.67.jpg" alt="Paulmann 500.67"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ul><li>Press W-key for 3 seconds</li><li>Press Power On/Off Key for 5 seconds</li><li>Press Power On/Off again for 3 seconds Now the device should show up.</li></ul><h3 id="extended-hue" tabindex="-1"><a class="header-anchor" href="#extended-hue" aria-hidden="true">#</a> Extended hue</h3><p>The device gives extended hue values. Zigbee2MQTT calculates also the normal hue and provides both via MQTT.</p><ul><li>hue = extendedhue * 360 / 65536 % 360</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',9),s=(0,n.Uk)("How to use device type specific configuration"),o=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>brightness_stop</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>scene_*</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},l=(0,a(83744).Z)(d,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}}}]);