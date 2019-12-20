    var planner = [{
        time: "9",
        message: "",
        save: false,
    },
    {
        time: "10",
        message: "",
        save: false,
    },
    {
        time: "11",
        message: "",
        save: false,
    },
    {
        time: "12",
        message: "",
        save: false,
    },
    {
        time: "13",
        message: "",
        save: false,
    },
    {
        time: "14",
        message: "",
        save: false,
    },
    {
        time: "15",
        message: "",
        save: false,
    },
    {
        time: "16",
        message: "",
        save: false,
    },
    {
        time: "17",
        message: "",
        save: false,
    }

    ]

    function addTask(){

        $(document).ready(function () {
        
            $(".saveBtn").on("click", function () {
        
                var task = $(this).siblings(".description").val()

                console.log("task", task);
        
                //get the value the user types and store it in the task    
            })
        })


    }



    function addDate() {

        // This function adds day of the week and date to the jumbotron. 

        var weekDay = (moment().format('dddd, MMM Do YYYY'));
        document.getElementById("currentDay").innerHTML = weekDay
    }


    function applyColor() {

        // Gets the current time and compares to the each of the times
        // in the planner to add the correct past, present and future colors.

        var timeofDay = (moment().format('h'));

        if (timeofDay == 1) {
            (timeofDay = 13);
        };
        if (timeofDay == 2) { 
            (timeofDay = 14);
        };
        if (timeofDay == 3) {
            timeofDay = 15;
        };
        if (timeofDay == 4) {
            timeofDay = 16;
        };
        if (timeofDay == 5) {
            timeofDay = 17;
        };

        for (var i = 0; i < planner.length; i++) {

            var plannerRepo = planner[i];
                        
            if (timeofDay == plannerRepo.time) {
                    $(".description");
                    $(".description").addClass("present");
            }
                    else if (timeofDay < plannerRepo.time) {
                        $(".description");
                        $(".description").addClass("future");
                    }
                        else if (timeofDay > plannerRepo.time) {
                            //add gray to the box;
                            $(".description");
                            $(".description").addClass("past");              
                        }

        }

    }


    addDate();
    applyColor();
    addTask();
