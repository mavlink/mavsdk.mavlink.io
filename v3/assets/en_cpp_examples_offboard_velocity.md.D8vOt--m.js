import{_ as s,c as n,al as e,o as p}from"./chunks/framework.JotrKMnz.js";const o="/v3/assets/qgc_offboard_velocity.Dizz_O51.png",u=JSON.parse('{"title":"Example: Offboard Velocity","description":"","frontmatter":{"github_branch":"v3"},"headers":[],"relativePath":"en/cpp/examples/offboard_velocity.md","filePath":"en/cpp/examples/offboard_velocity.md"}'),i={name:"en/cpp/examples/offboard_velocity.md"};function t(l,a,c,r,d,m){return p(),n("div",null,a[0]||(a[0]=[e('<h1 id="example-offboard-velocity" tabindex="-1">Example: Offboard Velocity <a class="header-anchor" href="#example-offboard-velocity" aria-label="Permalink to &quot;Example: Offboard Velocity&quot;">​</a></h1><p>This example shows how to how to control a vehicle in <em>Offboard mode</em> using velocity commands (in both the NED and body frames).</p><p><img src="'+o+`" alt="Offboard Mode - Velocity Control QGC Screenshot"></p><h2 id="run_example" tabindex="-1">Running the Example <a class="header-anchor" href="#run_example" aria-label="Permalink to &quot;Running the Example {#run_example}&quot;">​</a></h2><p>The example is built and run <a href="./../examples/#trying_the_examples">as described here</a> (the standard way).</p><p>The example terminal output should be similar to that shown below:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is from a debug build of the SDK. A release build will omit the &quot;Debug&quot; messages.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ./offboard udpin://0.0.0.0:14540</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Wait for system to connect via heartbeat</span></span>
<span class="line"><span>[12:53:03|Info ] New device on: 127.0.0.1:14557 (udp_connection.cpp:208)</span></span>
<span class="line"><span>[12:53:03|Debug] New: System ID: 1 Comp ID: 1 (dronecode_sdk_impl.cpp:286)</span></span>
<span class="line"><span>[12:53:03|Debug] Component Autopilot added. (mavlink_system.cpp:349)</span></span>
<span class="line"><span>[12:53:03|Debug] MAVLink: info: [logger] file: rootfs/fs/microsd/log/2018-05-23/0 (mavlink_system.cpp:286)</span></span>
<span class="line"><span>[12:53:04|Debug] Found 1 component(s). (mavlink_system.cpp:481)</span></span>
<span class="line"><span>[12:53:04|Debug] Discovered 4294967298 (mavlink_system.cpp:483)</span></span>
<span class="line"><span>Waiting for system to be ready</span></span>
<span class="line"><span>System is ready</span></span>
<span class="line"><span>Armed</span></span>
<span class="line"><span>[12:53:05|Debug] MAVLink: info: ARMED by arm/disarm component command (mavlink_system.cpp:286)</span></span>
<span class="line"><span>In Air...</span></span>
<span class="line"><span>[12:53:05|Debug] MAVLink: info: Using minimum takeoff altitude: 2.50 m (mavlink_system.cpp:286)</span></span>
<span class="line"><span>[12:53:05|Debug] MAVLink: info: Takeoff detected (mavlink_system.cpp:286)</span></span>
<span class="line"><span>[12:53:05|Debug] MAVLink: critical: Using minimum takeoff altitude: 2.50 m (mavlink_system.cpp:286)</span></span>
<span class="line"><span>[NED] Offboard started</span></span>
<span class="line"><span>[NED] Turn to face East</span></span>
<span class="line"><span>[NED] Go North and back South</span></span>
<span class="line"><span>[NED] Turn to face West</span></span>
<span class="line"><span>[NED] Go up 2 m/s, turn to face South</span></span>
<span class="line"><span>[NED] Go down 1 m/s, turn to face North</span></span>
<span class="line"><span>[NED] Offboard stopped</span></span>
<span class="line"><span>[BODY] Offboard started</span></span>
<span class="line"><span>[BODY] Turn clock-wise and climb</span></span>
<span class="line"><span>[BODY] Turn back anti-clockwise</span></span>
<span class="line"><span>[BODY] Wait for a bit</span></span>
<span class="line"><span>[BODY] Fly a circle</span></span>
<span class="line"><span>[BODY] Wait for a bit</span></span>
<span class="line"><span>[BODY] Fly a circle sideways</span></span>
<span class="line"><span>[BODY] Wait for a bit</span></span>
<span class="line"><span>[BODY] Offboard stopped</span></span>
<span class="line"><span>[12:54:29|Debug] MAVLink: info: Landing at current position (mavlink_system.cpp:286)</span></span>
<span class="line"><span>Landed</span></span></code></pre></div><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>The operation of most of this code is discussed in the guide: <a href="./../guide/offboard.html">Offboard Control</a>.</p><h2 id="source_code" tabindex="-1">Source code <a class="header-anchor" href="#source_code" aria-label="Permalink to &quot;Source code {#source_code}&quot;">​</a></h2><ul><li><a href="https://github.com/mavlink/MAVSDK/blob/main/examples/offboard/CMakeLists.txt" target="_blank" rel="noreferrer">CMakeLists.txt</a></li><li><a href="https://github.com/mavlink/MAVSDK/blob/main/examples/offboard/offboard.cpp" target="_blank" rel="noreferrer">offboard_velocity.cpp</a></li></ul>`,13)]))}const b=s(i,[["render",t]]);export{u as __pageData,b as default};
