# O2O (Offline-to-Online) Robotic Teaching Tool

## Overview
This project introduces a teaching tool designed to program robotic arm movements for complex tasks such as polishing.

## Problem Background
Polishing requires the robot to follow a smooth and precise trajectory across the surface of a workpiece. To achieve this, many reference points must be recorded. The more points captured, the more accurate the robot’s movement becomes. However, when dealing with objects that have intricate geometries—multiple sides, curves, or edges—the number of required points increases significantly. Recording these points manually with a teach pendant is inefficient and impractical.

## Offline Programming Approach
An alternative method is to use a simulator. By leveraging 3D CAD models of the workpiece, operators can design precise robot paths. The user selects edges or surfaces to be polished, and the software automatically generates waypoints along those areas. This process, known as offline programming, provides a more efficient way to create trajectories.

## Challenge: Real-World Implementation
The main challenge lies in transferring trajectories from the simulator to the real robot. In practice, the physical workpiece may not be positioned exactly as in the simulation, requiring calibration to align the path origin.

## Proposed Solution: Teleoperation with Haptic Control
To address this, we developed a method to modify trajectories online through teleoperation. Using a haptic device—a miniature arm controller—operators can directly control the robot’s end-effector in 3D space (x, y, z) and orientation (rx, ry, rz).

Key features of the haptic system:

- Intuitive control: Operators can freely adjust the robot’s position and orientation.

 - Force feedback: The device provides tactile feedback when the end-effector collides with an object, enhancing precision and safety.

- Hybrid workflow: Offline trajectories serve as reference paths, while teleoperation enables calibration and fine-tuning in real time.

# Teaching Software Integration
All features are integrated into a custom teaching software developed in C++ with CLR support, allowing modern access to Windows Forms components (buttons, tables, images, etc.) beyond traditional MFC tools.

The software connects to Yaskawa robot controllers via socket communication, enabling users to:
- Load and execute trajectory files
- Control robot movements directly
- Calibrate the end-effector
- Modify trajectories interactively
- Design and manage jobs (robot tasks)

This project demonstrates how offline trajectory planning and online teleoperation can be combined into a unified teaching platform, making robotic polishing tasks more efficient, precise, and user-friendly.