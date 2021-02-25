# mavsdk::TrackingServer Class Reference
`#include: tracking_server.h`

----


API for an onboard image tracking software. 


## Data Structures


struct [TrackPoint](structmavsdk_1_1_tracking_server_1_1_track_point.md)

struct [TrackRectangle](structmavsdk_1_1_tracking_server_1_1_track_rectangle.md)

## Public Types


Type | Description
--- | ---
enum [CommandAnswer](#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) | Answer to respond to an incoming command.
enum [Result](#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) | Possible results returned for tracking_server requests.
std::function< void([Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2))> [ResultCallback](#classmavsdk_1_1_tracking_server_1a5f726eec45daac754660d557f43e8b99) | Callback type for asynchronous [TrackingServer](classmavsdk_1_1_tracking_server.md) calls.
std::function< void([TrackPoint](structmavsdk_1_1_tracking_server_1_1_track_point.md))> [TrackingPointCommandCallback](#classmavsdk_1_1_tracking_server_1afc190d231e0cd23d22055d5f5319f00d) | Callback type for subscribe_tracking_point_command.
std::function< void([TrackRectangle](structmavsdk_1_1_tracking_server_1_1_track_rectangle.md))> [TrackingRectangleCommandCallback](#classmavsdk_1_1_tracking_server_1ad9a54dd2042c28046a03c8b1c5ba5b41) | Callback type for subscribe_tracking_rectangle_command.
std::function< void(int32_t)> [TrackingOffCommandCallback](#classmavsdk_1_1_tracking_server_1a585e63bb331d1a5c3e0108b505c6e2e7) | Callback type for subscribe_tracking_off_command.

## Public Member Functions


Type | Name | Description
---: | --- | ---
&nbsp; | [TrackingServer](#classmavsdk_1_1_tracking_server_1addca47f6e16d95fdc47cc79003e699ea) ([System](classmavsdk_1_1_system.md) & system) | Constructor. Creates the plugin for a specific [System](classmavsdk_1_1_system.md).
&nbsp; | [TrackingServer](#classmavsdk_1_1_tracking_server_1ae8c9e362fe4a9a91dd2349295ce07b7e) (std::shared_ptr< [System](classmavsdk_1_1_system.md) > system) | Constructor. Creates the plugin for a specific [System](classmavsdk_1_1_system.md).
&nbsp; | [~TrackingServer](#classmavsdk_1_1_tracking_server_1a8689392e7c52188e50b037c115d2a8f4) () | Destructor (internal use only).
&nbsp; | [TrackingServer](#classmavsdk_1_1_tracking_server_1ade3caff75ba75c18637b30944d7fbb25) (const [TrackingServer](classmavsdk_1_1_tracking_server.md) & other) | Copy constructor.
void | [set_tracking_point_status](#classmavsdk_1_1_tracking_server_1a76404bc162c15dbfb50b7afbb2d3de4e) ([TrackPoint](structmavsdk_1_1_tracking_server_1_1_track_point.md) tracked_point)const | Set/update the current point tracking status.
void | [set_tracking_rectangle_status](#classmavsdk_1_1_tracking_server_1ae3f0696613834aecdd5dbd99a346b9a0) ([TrackRectangle](structmavsdk_1_1_tracking_server_1_1_track_rectangle.md) tracked_rectangle)const | Set/update the current rectangle tracking status.
void | [set_tracking_off_status](#classmavsdk_1_1_tracking_server_1a2d77454965d854f68704e29da645bf94) () const | Set the current tracking status to off.
void | [subscribe_tracking_point_command](#classmavsdk_1_1_tracking_server_1aa3badd9602f43a9dc16251a701858e3f) ([TrackingPointCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1afc190d231e0cd23d22055d5f5319f00d) callback) | Subscribe to incoming tracking point command.
void | [subscribe_tracking_rectangle_command](#classmavsdk_1_1_tracking_server_1ab0d5123d58caf53cb5f1e9d520659230) ([TrackingRectangleCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1ad9a54dd2042c28046a03c8b1c5ba5b41) callback) | Subscribe to incoming tracking rectangle command.
void | [subscribe_tracking_off_command](#classmavsdk_1_1_tracking_server_1af457e8565fbc58b9dd8120b260f74195) ([TrackingOffCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a585e63bb331d1a5c3e0108b505c6e2e7) callback) | Subscribe to incoming tracking off command.
[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) | [respond_tracking_point_command](#classmavsdk_1_1_tracking_server_1a75ec8813d5c5dac5dc3fcd3590a62e2a) ([CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) command_answer)const | Respond to an incoming tracking point command.
[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) | [respond_tracking_rectangle_command](#classmavsdk_1_1_tracking_server_1a6388d3a7bafeb0fbb58343a09495fc7c) ([CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) command_answer)const | Respond to an incoming tracking rectangle command.
[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) | [respond_tracking_off_command](#classmavsdk_1_1_tracking_server_1a113b2d4adf5b62a5f167b81c39474da4) ([CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) command_answer)const | Respond to an incoming tracking off command.
const [TrackingServer](classmavsdk_1_1_tracking_server.md) & | [operator=](#classmavsdk_1_1_tracking_server_1a9ea0947f9038e3affbd4129f5d6f671d) (const [TrackingServer](classmavsdk_1_1_tracking_server.md) &)=delete | Equality operator (object is not copyable).


## Constructor & Destructor Documentation


### TrackingServer() {#classmavsdk_1_1_tracking_server_1addca47f6e16d95fdc47cc79003e699ea}
```cpp
mavsdk::TrackingServer::TrackingServer(System &system)
```


Constructor. Creates the plugin for a specific [System](classmavsdk_1_1_system.md).

The plugin is typically created as shown below: 

```cpp
auto tracking_server = TrackingServer(system);
```

**Parameters**

* [System](classmavsdk_1_1_system.md)& **system** - The specific system associated with this plugin.

### TrackingServer() {#classmavsdk_1_1_tracking_server_1ae8c9e362fe4a9a91dd2349295ce07b7e}
```cpp
mavsdk::TrackingServer::TrackingServer(std::shared_ptr< System > system)
```


Constructor. Creates the plugin for a specific [System](classmavsdk_1_1_system.md).

The plugin is typically created as shown below: 

```cpp
auto tracking_server = TrackingServer(system);
```

**Parameters**

* std::shared_ptr< [System](classmavsdk_1_1_system.md) > **system** - The specific system associated with this plugin.

### ~TrackingServer() {#classmavsdk_1_1_tracking_server_1a8689392e7c52188e50b037c115d2a8f4}
```cpp
mavsdk::TrackingServer::~TrackingServer()
```


Destructor (internal use only).


### TrackingServer() {#classmavsdk_1_1_tracking_server_1ade3caff75ba75c18637b30944d7fbb25}
```cpp
mavsdk::TrackingServer::TrackingServer(const TrackingServer &other)
```


Copy constructor.


**Parameters**

* const [TrackingServer](classmavsdk_1_1_tracking_server.md)& **other** - 

## Member Typdef Documentation


### typedef ResultCallback {#classmavsdk_1_1_tracking_server_1a5f726eec45daac754660d557f43e8b99}

```cpp
using mavsdk::TrackingServer::ResultCallback =  std::function<void(Result)>
```


Callback type for asynchronous [TrackingServer](classmavsdk_1_1_tracking_server.md) calls.


### typedef TrackingPointCommandCallback {#classmavsdk_1_1_tracking_server_1afc190d231e0cd23d22055d5f5319f00d}

```cpp
using mavsdk::TrackingServer::TrackingPointCommandCallback =  std::function<void(TrackPoint)>
```


Callback type for subscribe_tracking_point_command.


### typedef TrackingRectangleCommandCallback {#classmavsdk_1_1_tracking_server_1ad9a54dd2042c28046a03c8b1c5ba5b41}

```cpp
using mavsdk::TrackingServer::TrackingRectangleCommandCallback =  std::function<void(TrackRectangle)>
```


Callback type for subscribe_tracking_rectangle_command.


### typedef TrackingOffCommandCallback {#classmavsdk_1_1_tracking_server_1a585e63bb331d1a5c3e0108b505c6e2e7}

```cpp
using mavsdk::TrackingServer::TrackingOffCommandCallback =  std::function<void(int32_t)>
```


Callback type for subscribe_tracking_off_command.


## Member Enumeration Documentation


### enum CommandAnswer {#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61}


Answer to respond to an incoming command.


Value | Description
--- | ---
<span id="classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61a382ab522931673c11e398ead1b7b1678"></span> `Accepted` | Command accepted. 
<span id="classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61a387d4d8f4b53febb38cc54fc6c361a3f"></span> `TemporarilyRejected` | Command temporarily rejected. 
<span id="classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61a58d036b9b7f0e7eb38cfb90f1cc70a73"></span> `Denied` | Command denied. 
<span id="classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61ab4080bdf74febf04d578ff105cce9d3f"></span> `Unsupported` | Command unsupported. 
<span id="classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61ad7c8c85bf79bbe1b7188497c32c3b0ca"></span> `Failed` | Command failed. 

### enum Result {#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2}


Possible results returned for tracking_server requests.


Value | Description
--- | ---
<span id="classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2a88183b946cc5f0e8c96b2e66e1c74a7e"></span> `Unknown` | Unknown result. 
<span id="classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2a505a83f220c02df2f85c3810cd9ceb38"></span> `Success` | Request succeeded. 
<span id="classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2a1119faf72ba0dfb23aeea644fed960ad"></span> `NoSystem` | No system is connected. 
<span id="classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2a094a6f6b0868122a9dd008cb91c083e4"></span> `ConnectionError` | Connection error. 

## Member Function Documentation


### set_tracking_point_status() {#classmavsdk_1_1_tracking_server_1a76404bc162c15dbfb50b7afbb2d3de4e}
```cpp
void mavsdk::TrackingServer::set_tracking_point_status(TrackPoint tracked_point) const
```


Set/update the current point tracking status.

This function is blocking.

**Parameters**

* [TrackPoint](structmavsdk_1_1_tracking_server_1_1_track_point.md) **tracked_point** - 

### set_tracking_rectangle_status() {#classmavsdk_1_1_tracking_server_1ae3f0696613834aecdd5dbd99a346b9a0}
```cpp
void mavsdk::TrackingServer::set_tracking_rectangle_status(TrackRectangle tracked_rectangle) const
```


Set/update the current rectangle tracking status.

This function is blocking.

**Parameters**

* [TrackRectangle](structmavsdk_1_1_tracking_server_1_1_track_rectangle.md) **tracked_rectangle** - 

### set_tracking_off_status() {#classmavsdk_1_1_tracking_server_1a2d77454965d854f68704e29da645bf94}
```cpp
void mavsdk::TrackingServer::set_tracking_off_status() const
```


Set the current tracking status to off.

This function is blocking.

### subscribe_tracking_point_command() {#classmavsdk_1_1_tracking_server_1aa3badd9602f43a9dc16251a701858e3f}
```cpp
void mavsdk::TrackingServer::subscribe_tracking_point_command(TrackingPointCommandCallback callback)
```


Subscribe to incoming tracking point command.


**Parameters**

* [TrackingPointCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1afc190d231e0cd23d22055d5f5319f00d) **callback** - 

### subscribe_tracking_rectangle_command() {#classmavsdk_1_1_tracking_server_1ab0d5123d58caf53cb5f1e9d520659230}
```cpp
void mavsdk::TrackingServer::subscribe_tracking_rectangle_command(TrackingRectangleCommandCallback callback)
```


Subscribe to incoming tracking rectangle command.


**Parameters**

* [TrackingRectangleCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1ad9a54dd2042c28046a03c8b1c5ba5b41) **callback** - 

### subscribe_tracking_off_command() {#classmavsdk_1_1_tracking_server_1af457e8565fbc58b9dd8120b260f74195}
```cpp
void mavsdk::TrackingServer::subscribe_tracking_off_command(TrackingOffCommandCallback callback)
```


Subscribe to incoming tracking off command.


**Parameters**

* [TrackingOffCommandCallback](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a585e63bb331d1a5c3e0108b505c6e2e7) **callback** - 

### respond_tracking_point_command() {#classmavsdk_1_1_tracking_server_1a75ec8813d5c5dac5dc3fcd3590a62e2a}
```cpp
Result mavsdk::TrackingServer::respond_tracking_point_command(CommandAnswer command_answer) const
```


Respond to an incoming tracking point command.

This function is blocking.

**Parameters**

* [CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) **command_answer** - 

**Returns**

&emsp;[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) - Result of request.

### respond_tracking_rectangle_command() {#classmavsdk_1_1_tracking_server_1a6388d3a7bafeb0fbb58343a09495fc7c}
```cpp
Result mavsdk::TrackingServer::respond_tracking_rectangle_command(CommandAnswer command_answer) const
```


Respond to an incoming tracking rectangle command.

This function is blocking.

**Parameters**

* [CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) **command_answer** - 

**Returns**

&emsp;[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) - Result of request.

### respond_tracking_off_command() {#classmavsdk_1_1_tracking_server_1a113b2d4adf5b62a5f167b81c39474da4}
```cpp
Result mavsdk::TrackingServer::respond_tracking_off_command(CommandAnswer command_answer) const
```


Respond to an incoming tracking off command.

This function is blocking.

**Parameters**

* [CommandAnswer](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1abe88efaef492f9b549a57b5b05666d61) **command_answer** - 

**Returns**

&emsp;[Result](classmavsdk_1_1_tracking_server.md#classmavsdk_1_1_tracking_server_1a1a288ecd74fd52a6f0ffbf24e8da2cc2) - Result of request.

### operator=() {#classmavsdk_1_1_tracking_server_1a9ea0947f9038e3affbd4129f5d6f671d}
```cpp
const TrackingServer& mavsdk::TrackingServer::operator=(const TrackingServer &)=delete
```


Equality operator (object is not copyable).


**Parameters**

* const [TrackingServer](classmavsdk_1_1_tracking_server.md)&  - 

**Returns**

&emsp;const [TrackingServer](classmavsdk_1_1_tracking_server.md) & - 