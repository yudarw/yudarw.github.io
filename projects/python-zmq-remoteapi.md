# python-zmq-remoteapi

## Overview

ZeroMQ is a special kind of communication endpoint provided by the ZeroMQ library. Unlike traditional TCP/UDP sockets, ZeroMQ sockets are asynchrounous message queues that enable complex messaging patterns. such as publish/subscribe, request/reply, pipeline, etc. The ZMQ remote api is the modern way to connect external applications, like Python, to CoppeliaSim. It replaces the Legacy Remote API which was socket-based and limited. With ZMQ, we could get access to all CoppeliaSim functions, better performance, and multi-language support.