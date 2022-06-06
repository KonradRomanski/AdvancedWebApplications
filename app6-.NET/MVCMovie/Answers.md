## 1. What are the responsibilities of each layer of the MVC architecture and how are they connected?  
MVC consist of 3 layers:
- Models - classes that represent application data. Manages the app data, logic and rules directly
- Views - Components that are responsible for displaying the UI od an app. This UI displays model data.
- Controller - Responds to user input and performs interactions on data model objects. It receives inputs, optionally validates them and passes to the model.

## 2. What are the naming conventions for models, controllers, controller actions, views folders and views themselves?  

All filenames starts with capital letters:
- models - class name
- controllers - contains `Controller` in their filename, for example: `MovieController`
- controller actions - the same name as the name of the file in the template views folder that is returned by this function, example: `public IActionResult Welcome(string name, int numTimes = 1)`
- views - examples: `Create.cshtml`, `Update.cshtml`
- views folder - examples: `HelloWorld`, `Movies`

## 3. How to pass data from controllers to views (2 options)?

- Arguments in calls - example: `return View(movie);`
- Using ViewData -  `ViewData["Message"] = "Hello " + name;`

## 4. How to map url’s to controller actions?
Using Startup.cs:
```cs
	endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
```

## 5. How to restrict controller actions to be executed only via certain HTTP request types (e.g., only via POST)?

```cs
        [HttpPost] #HERE
        public string Index(string searchString, bool notUsed)
        {
            return "From [HttpPost]Index: filter on " + searchString;
        }
```

## 6. How to make sure a controller action can only be called through a form on our website and
not through some external request?

This method in controller:
```cs
[ValidateAntiForgeryToken]
```

## 7. Where do you define data validation and how do you ensure it in views and controllers?

It's defined in models above class atributes
```cs
	[RegularExpression(@"^[A-Z]+[a-zA-Z""'\s-]*$")]
        [Required]
        [StringLength(30)]
```

`ModelState.IsValid` checks for validation errors and calling this method evaluates any validation that have been aplied to the object.