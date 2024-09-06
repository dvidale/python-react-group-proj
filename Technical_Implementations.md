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

<img src="react-vite/public/assets/Screenshots/tech-imp-create-update-form.jpg" alt="create-update-form">

The restaurant creation / update form UI leverages React's dynamic data handling to employ one form to handle both user input needs.

The form is structured in a React component that is rendered at both the frontend routes for creating and updating a restaurant.


<img src="react-vite/public/assets/Screenshots/tech-imp-restaurant-form-useEffect.png" alt="restaurant-form-useEffect"/>

When a `useParams` hook detects an id is provided, a `useSelector` hook loads the target restaurant from the Redux state with that id. The restaurant data is then detected by a `useEffect` hook that populates the form's controlled inputs with the restaurant's data, now ready for updating. When no id is provided by the route, the form's controlled inputs resort to their default state. The form heading and submit button functionality are also dynamically configured.



Thanks to React's dynamic data handling, the development workload for this UI is cut in half for component creation and CSS styling.