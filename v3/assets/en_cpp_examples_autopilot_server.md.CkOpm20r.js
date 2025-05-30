import{_ as n,c as a,al as p,o as e}from"./chunks/framework.JotrKMnz.js";const d=JSON.parse('{"title":"Example: Autopilot Server","description":"","frontmatter":{"github_branch":"v3"},"headers":[],"relativePath":"en/cpp/examples/autopilot_server.md","filePath":"en/cpp/examples/autopilot_server.md"}'),l={name:"en/cpp/examples/autopilot_server.md"};function i(t,s,c,r,m,o){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="example-autopilot-server" tabindex="-1">Example: Autopilot Server <a class="header-anchor" href="#example-autopilot-server" aria-label="Permalink to &quot;Example: Autopilot Server&quot;">​</a></h1><p>The <a href="https://github.com/mavlink/MAVSDK/tree/main/examples/autopilot_server" target="_blank" rel="noreferrer">Autopilot Server</a> example creates two instances of MAVSDK, representing a client (GCS) and a server (Vehicle). The MAVSDK instances communicates with each other via UDP transmitting telemetry, publishing parameters, missions and takeoff commands.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This example shows how to use <a href="./../server_plugins.html">MAVSDK Server Plugins</a>! This is a good starting point if you are looking to implement MAVLink services to a non-MAVLink compatible system.</p></div><h2 id="run_example" tabindex="-1">Running the Example <a class="header-anchor" href="#run_example" aria-label="Permalink to &quot;Running the Example {#run_example}&quot;">​</a></h2><p>The example is built and run in the normal way (<a href="./../examples/#trying_the_examples">as described here</a>).</p><p>The example terminal output should be similar to that shown below:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is from a debug build of the SDK. A release build will omit the &quot;Debug&quot; messages.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ./autopilot_server</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[04:44:24|Info ] MAVSDK version: v0.44.0 (mavsdk_impl.cpp:29)</span></span>
<span class="line"><span>[04:44:24|Info ] MAVSDK version: v0.44.0 (mavsdk_impl.cpp:29)</span></span>
<span class="line"><span>Connected!</span></span>
<span class="line"><span>[04:44:24|Error] Sending message failed (mavsdk_impl.cpp:278)</span></span>
<span class="line"><span>[04:44:24|Debug] Initializing connection to remote system... (mavsdk_impl.cpp:473)</span></span>
<span class="line"><span>Connected autopilot server side!</span></span>
<span class="line"><span>Sleeping thread </span></span>
<span class="line"><span>[04:44:24|Info ] New system on: 127.0.0.1:40799 (with sysid: 1) (udp_connection.cpp:194)</span></span>
<span class="line"><span>[04:44:24|Debug] New: System ID: 1 Comp ID: 1 (mavsdk_impl.cpp:475)</span></span>
<span class="line"><span>[04:44:24|Debug] Component Autopilot (1) added. (system_impl.cpp:372)</span></span>
<span class="line"><span>[04:44:24|Debug] New: System ID: 245 Comp ID: 190 (mavsdk_impl.cpp:222)</span></span>
<span class="line"><span>[04:44:24|Debug] Component Unsupported component (190) added. (system_impl.cpp:372)</span></span>
<span class="line"><span>[04:44:25|Debug] Discovered 1 component(s) (system_impl.cpp:520)</span></span>
<span class="line"><span>Discovered Autopilot from Client</span></span>
<span class="line"><span>[04:44:25|Debug] Autopilot Capabilities Request (system_impl.cpp:297)</span></span>
<span class="line"><span>Setting System</span></span>
<span class="line"><span>MissionRawServer created</span></span>
<span class="line"><span>[04:44:35|Debug] Setting interval for msg id: 245 interval_ms:1000 (telemetry_server_impl.cpp:38)</span></span>
<span class="line"><span>[04:44:35|Debug] Request Param CAL_GYRO0_ID (mavlink_parameters.cpp:756)</span></span>
<span class="line"><span>[04:44:35|Debug] Request Param CAL_ACC0_ID (mavlink_parameters.cpp:756)</span></span>
<span class="line"><span>[04:44:35|Debug] Request Param CAL_MAG0_ID (mavlink_parameters.cpp:756)</span></span>
<span class="line"><span>[04:44:35|Debug] Request Param SYS_HITL (mavlink_parameters.cpp:756)</span></span>
<span class="line"><span>[04:44:40|Warn ] command unsupported (512). (mavlink_commands.cpp:205)</span></span>
<span class="line"><span>[04:44:41|Debug] Falling back to gimbal protocol v1 (mission_impl.cpp:131)</span></span>
<span class="line"><span>[04:44:45|Debug] Request Param my_param (mavlink_parameters.cpp:756)</span></span>
<span class="line"><span>Found Param my_param: 1</span></span>
<span class="line"><span>Creating Mission</span></span>
<span class="line"><span>Uploading mission...</span></span>
<span class="line"><span>SystemID1</span></span>
<span class="line"><span>[04:44:45|Debug] Receive Mission Count in Server (mission_raw_server_impl.cpp:150)</span></span>
<span class="line"><span>Received Uploaded Mission!</span></span>
<span class="line"><span>mission_plan:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    mission_items: [mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 0</span></span>
<span class="line"><span>    frame: 6</span></span>
<span class="line"><span>    command: 16</span></span>
<span class="line"><span>    current: 1</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 0.5</span></span>
<span class="line"><span>    param2: 1</span></span>
<span class="line"><span>    param3: 0</span></span>
<span class="line"><span>    param4: nan</span></span>
<span class="line"><span>Mission uploaded.    x: </span></span>
<span class="line"><span>473981703</span></span>
<span class="line"><span>    y: 85456490</span></span>
<span class="line"><span>    z: 10</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}, mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 1</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 178</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 1</span></span>
<span class="line"><span>    param2: 5</span></span>
<span class="line"><span>    param3: -1</span></span>
<span class="line"><span>    param4: 0</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: nan</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}, mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 2</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 204</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 2</span></span>
<span class="line"><span>    param2: 0</span></span>
<span class="line"><span>    param3: 0</span></span>
<span class="line"><span>    param4: 1</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: 2</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}, mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 3</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 205</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 20</span></span>
<span class="line"><span>    param2: 0</span></span>
<span class="line"><span>    param3: 60</span></span>
<span class="line"><span>    param4: nan</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: 2</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Current Item Changed!</span></span>
<span class="line"><span>Current Item: mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 0</span></span>
<span class="line"><span>    frame: 6</span></span>
<span class="line"><span>    command: 16</span></span>
<span class="line"><span>    current: 1</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 0.5</span></span>
<span class="line"><span>    param2: 1</span></span>
<span class="line"><span>    param3: 0</span></span>
<span class="line"><span>    param4: nan</span></span>
<span class="line"><span>    x: 473981703</span></span>
<span class="line"><span>    y: [8545649004:44:45|Debug] </span></span>
<span class="line"><span>    z: 10</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>current: 0, total: 1Current Item Changed! (</span></span>
<span class="line"><span>Current Item: mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>mission_impl.cpp    seq: 1</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 178</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: :1839)</span></span>
<span class="line"><span>Current: 0</span></span>
<span class="line"><span>Total: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    param2: 5</span></span>
<span class="line"><span>    param3: -1</span></span>
<span class="line"><span>    param4: 0</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: nan</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>[Current Item Changed!</span></span>
<span class="line"><span>Current Item: mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 2</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 204</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 2</span></span>
<span class="line"><span>    param2: 0</span></span>
<span class="line"><span>    param3: 0</span></span>
<span class="line"><span>    param4: 1</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: 2</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Current Item Changed!</span></span>
<span class="line"><span>Current Item: mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 3</span></span>
<span class="line"><span>    frame: 2</span></span>
<span class="line"><span>    command: 205</span></span>
<span class="line"><span>    current: 0</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 20</span></span>
<span class="line"><span>    param2: 0</span></span>
<span class="line"><span>    param3: 60</span></span>
<span class="line"><span>    param4: nan</span></span>
<span class="line"><span>    x: 0</span></span>
<span class="line"><span>    y: 0</span></span>
<span class="line"><span>    z: 2</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Current Item Changed!</span></span>
<span class="line"><span>Current Item: mission_item:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    seq: 0</span></span>
<span class="line"><span>    frame: 6</span></span>
<span class="line"><span>    command: 16</span></span>
<span class="line"><span>    current: 1</span></span>
<span class="line"><span>    autocontinue: 1</span></span>
<span class="line"><span>    param1: 0.5</span></span>
<span class="line"><span>    param2: 1</span></span>
<span class="line"><span>    param3: 0</span></span>
<span class="line"><span>    param4: nan</span></span>
<span class="line"><span>    x: 473981703</span></span>
<span class="line"><span>    y: 85456490</span></span>
<span class="line"><span>    z: 10</span></span>
<span class="line"><span>    mission_type: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>04:44:45|Debug] current: 1, total: 1 (mission_impl.cpp:839)</span></span>
<span class="line"><span>Current: 1</span></span>
<span class="line"><span>Total: 1</span></span>
<span class="line"><span>Clear All Mission!</span></span>
<span class="line"><span>Clear Mission Request</span></span>
<span class="line"><span>[04:45:05|Debug] Setting interval for msg id: 33 interval_ms:1000 (telemetry_server_impl.cpp:38)</span></span>
<span class="line"><span>Arming...</span></span>
<span class="line"><span>Altitude: 0 m</span></span>
<span class="line"><span>[04:45:05|Debug] Set Param Request: MIS_TAKEOFF_ALT (mavlink_parameters.cpp:724)</span></span>
<span class="line"><span>Taking off...</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>Altitude: 10 m</span></span>
<span class="line"><span>...</span></span></code></pre></div><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>By creating two MAVSDK instances on separate threads, configuring them and then using different plugins on each, we are able to create a full MAVLink system (GCS &lt;-&gt; Vehicle) in one program.</p><p>Each plugin (and it&#39;s respective server plugin) implements a particular MAVLink service. By utilising the server plugins and client plugins we are able to create a full MAVLink system, without the need for a separate external autopilot.</p><h2 id="source_code" tabindex="-1">Source code <a class="header-anchor" href="#source_code" aria-label="Permalink to &quot;Source code {#source_code}&quot;">​</a></h2><ul><li><a href="https://github.com/mavlink/MAVSDK/blob/main/examples/autopilot_server/CMakeLists.txt" target="_blank" rel="noreferrer">CMakeLists.txt</a></li><li><a href="https://github.com/mavlink/MAVSDK/blob/main/examples/autopilot_server/autopilot_server.cpp" target="_blank" rel="noreferrer">autopilot_server.cpp</a></li></ul>`,14)]))}const _=n(l,[["render",i]]);export{d as __pageData,_ as default};
