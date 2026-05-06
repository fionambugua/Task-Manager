# TASK MANAGER PROJECT
## Project Description
The Task Manager is designed to help users organize their daily activities efficiently. Many individuals struggle with keeping track of tasks, leading to missed deadlines and reduced productivity. It provides a simple and user-friendly interface where users can add, view, and manage tasks. The system improves productivity by helping users stay organized and focused.

## Project Link
- URL: https://fionambugua.github.io/Task-Manager/

## How It Works
1. The user navigates to the Add Task page and enters a task title and description.
2. The application captures the input using a form.
3. The task is stored as an object in an array.
4. The array is saved in the browser using localStorage.
5. On the Tasks page:
- All saved tasks are displayed.
- Users can mark tasks as completed or delete them.
6. On the Dashboard:
- Total, completed, and pending tasks are calculated and displayed dynamically.

## Author Information
- Name : Fiona Mbugua
- Email : fionambuguanjeri@gmail.com
- Github : https://github.com/fionambugua

## Setup Instructions
### Prerequisites
 - A modern web browser (Chrome, Firefox, Safari, or Edge)
 - A text editor (optional, for viewing/editing the code)

## BDD(Behavior-Driven Development)
Feature: User can manage tasks
### Scenario 1: User adds a task
- Given: The user is on the Add Task page
- When: The user enters a title and description and submits the form
- Then: The task is saved and displayed on the Tasks page
### Scenario 2: User views tasks
- Given: Tasks have been added
- When: The user navigates to the Tasks page
- Then: All tasks are displayed in a list
### Scenario 3: User deletes a task
- Given: Tasks are displayed
- When: The user clicks the delete button
- Then: The selected task is removed
### Scenario 4: User marks a task as completed
- Given: A task exists
- When: The user clicks the "Complete" button
- Then: The task is marked as completed and visually updated
### Scenario 5: Dashboard updates automatically
- Given: Tasks exist
- When: Tasks are added, completed, or deleted
- Then: The dashboard updates total, completed, and pending counts

## TECHNOLOGIES USED
1. HTML5
2. CSS
3. JavaScript 

## LICENSE AND COPYRIGHT INFORMATION
Copyright © 2026 Fiona Mbugua

This project is licensed under the MIT License. See below for details:

### MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

