# Task Manager REST API

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=102)](https://github.com/git-shashwat/Task-Manager-API)  &nbsp;&nbsp;
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/git-shashwat/Task-Manager-API)  &nbsp;&nbsp;
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/git-shashwat/Task-Manager-API)

A MongoDB based task manager REST API completely ready to be interfaced & deployed with express and nodeJS.

# How to use it ?
Connect your web-application with this API to provide your users seamless task management.🏂

# Routes
- Login User: **GET** {{url}}/users/login
- Create User: **POST** {{url}}/users/
- Logout: **POST** {{url}}/users/logout
- Logout All: **POST** {{url}}/users/logoutAll
- Get Profile: **GET** {{url}}/users/me
- User Update: **PATCH** {{url}}/users/me
- Delete User: **DELETE** {{url}}/users/me
- Create Task: **POST** {{url}}/tasks
- Read Tasks: **GET** {{url}}/tasks?sortBy=createdAt_desc (various filters & sortings can be applied)
- Read Specific Task: **GET** {{url}}/tasks/5d9cc8b60350a63326ff14df
- Task Update: **PATCH** {{url}}/tasks/5d9cd3aa982a0e353b1d8906
- Delete Task: **DELETE** {{url}}/tasks/5d9cc8b60350a63326ff14df
- Upload Avatar: **POST** {{url}}/users/me/avatar
- Delete Avatar: **DELETE** {{url}}/users/me/avatar

# Tech Used
> Routing
+ NodeJS
+ Express.js
> Database
+ MongoDB
> Testing
+ JEST
> Tools
+ Postman
+ MongoDB Compass

# In Action
<img src="https://user-images.githubusercontent.com/43851597/72468472-444a5180-3803-11ea-8313-e5f51238918e.png" alt="login"/>
<img src="https://user-images.githubusercontent.com/43851597/72468520-5deb9900-3803-11ea-88d9-2a160f67596e.png" alt="profile"/>
<img src="https://user-images.githubusercontent.com/43851597/72468572-765bb380-3803-11ea-9e2a-3c38dfb1967c.png" alt="create_task"/>
<img src="https://user-images.githubusercontent.com/43851597/72468611-883d5680-3803-11ea-8db3-d51f0bb67b4f.png" alt="read_task"/>


# Contribution
Feel free to raise issues, if you find any errors or have some suggestions that can make this application better.
