# Technical Implementations

# * EXAMPLE *:

### Technical Details
Scheme users can prioritize tasks by dragging and dropping them into the desired order.

Task order is maintained in a linked-list data structure. Each task knows the IDs of its `next` and `previous` tasks, and every project knows its `last_task_id`. To assemble the tasks in the correct order and avoid n+1 queries, Scheme retrieves an unordered group of tasks within a project, hashes them by ID, and then references the `next_task_id`s to create an array of tasks in the user’s designated order.

```javascript
var sortTasks = function (tasksObj, lastTaskId) {
  // start by inserting last task into ordered array
  var taskArr = [tasksObj[lastTaskId]];
  // then insert the previous task, until !previous_task_id
  while (taskArr[0].previous_task_id) {
    taskArr.unshift(tasksObj[taskArr[0].previous_task_id]);
  }

  return taskArr;
};
```

Thanks to the linked-list structure, re-ordering tasks within a project is an O(1) time operation, and requires updating only 3-5 task records, no matter how many tasks a project includes.



## * END EXAMPLE *



## Restaurant Creation / Update Form UI

The data submitted for creating or updating a restaurant are identical, so the DashDine UI uses the same form for user input.

The form inputs are structure in a React component 