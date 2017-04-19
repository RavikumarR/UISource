


             function uiFloatComboFocus(psClassId) {
            try {
                var chk = $('.k-state-focused').parent().parent();
                if (chk) {
                    $("." + psClassId).parent().addClass('is-focused');
                } else {
                    $("." + psClassId).parent().removeClass('is-focused');
                }
            }
            catch (err) {

            }
        }

        function uiFloatComboBlur(psClassId, psCtrlType) {
            try {
                var chk = $('.k-state-focused').parent().parent();
                var lsCtrlID = '';
                var getValStatic = '';
                if (psCtrlType == 'date') {
                    lsCtrlID = $($("." + psClassId)[1]).prop("id");
                    getValStatic = $("#" + lsCtrlID).data("kendoDatePicker");
                }
                else if (psCtrlType == 'datetime') {
                    lsCtrlID = $($("." + psClassId)[1]).prop("id");
                    getValStatic = $("#" + lsCtrlID).data("kendoDateTimePicker");
                }
                else {
                    lsCtrlID = $($("." + psClassId)[2]).prop("id");
                    getValStatic = $("#" + lsCtrlID).data("kendoComboBox");
                }

                var actValStatic = getValStatic.value()

                //var valChk = uiGetCtrlProperty(lsCtrlID, "Value");

                if (chk != "" && actValStatic != "") {
                    $($("." + psClassId).parent().parent().parent()).addClass('is-dirty').removeClass('is-focused');
                } else {
                    $($("." + psClassId).parent().parent().parent()).removeClass('is-focused').removeClass('is-dirty');
                }
            }
            catch (err) {

            }
        }





    $(document).ready(function () {

        // Filter items collapse
        $(".filter-panels .panel-body").hide();

        $(".filter-list-item").click(function () {
            var listItem = $(this);

            var listContent = $(this).siblings(".panel-body");
            listContent.slideToggle("fast").toggleClass("opened");

            if (listContent.hasClass("opened") == true) {
                listItem.children(".indicator").removeClass("fa-angle-down").addClass("fa-angle-up");
            } else {
                listItem.children(".indicator").removeClass("fa-angle-up").addClass("fa-angle-down");
            }
        });

        // Filter items collapse ends
        $(".filter-column").hide();
        $(".background-div").hide();

        


        // Filter Button Click start
        
        // Filter Button Click end
        $(".slot-div").hide();

        // click on a day
        $(document).on("click", ".day-wrapper", function () {

            var appDate = $(this).children(".day-node").find('.app-date').html();
            var appDoctorCode = $(this).find(".doctor-code").html();

            $(".day-wrapper").removeClass("active-day");
            $(this).addClass("active-day");
            // $(this).effect("bounce", "slow");
            $(this).closest('.calendar-div').siblings(".calendar-div").hide();
            $(this).closest('.calendar-div').css("float", "left");
             $('.horizontal-scroll').animate({scrollLeft: 1000},350);
            $(".slot-div").show();

            slotDetailsExtracted = getSlots(appDoctorCode, appDate);

            var slotItemTemplate =  kendo.template($("#slotNodeTemplate").html());
            var result = slotItemTemplate(slotDetailsExtracted);

            var slotNodeTemplate = kendo.template($("#slotNodeTemplate").html());
            var result = slotNodeTemplate(slotDetailsExtracted);
            var slotBody = $('.slot-body-container');      
            slotBody.html(slotNodeTemplate);


            if(slotDetailsExtracted != 0){
              var slotBody = $('.slot-body-container');      
              slotBody.html(result);

              var statusPopupTemplate = kendo.template($("#statusPopupTemplate").html());
                slotBody.append(statusPopupTemplate);
            }else{

              var message =  kendo.template($("#noSlots").html());
              var slotBody = $('.slot-body-container');      
              slotBody.html(message);
            }

            $(".slot-box-date").html(appDate);            

        }); 
        // click on a day end


        // horizontal scroll slim scroll

        // horizontal scroll slim scroll end

    });



  
    // global variables
    var currentMonth;
    var months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var monthsShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var details = [];

    var doctors = [
      {
        DRCode: "1001",
        doctorName: "Sandosh Srinivasan",
        doctorSpec: "Cardiac Surgeon"
      }
      ,
      {
        DRCode: "1002",
        doctorName: "Ramani",
        doctorSpec: "Cardiac Surgeon"
      }
    ];

    function getDays(currentMonth, doctorCode){
      var month = monthsShort[currentMonth];
      var result = [];      
      for(var i = 0; i < detailsList.length; i++){
        if(detailsList[i].AppSlotMonth == month && detailsList[i].DRCode == doctorCode ){
          result.push(detailsList[i]); 
        }
      }

      if(result.length > 0){
        return result;
      }else{
        return 0;
      }
    }

    function getSlots(doctorCode, date){
      doctorCode = doctorCode.trim();
      date = date.trim();
      var slotResult = [];
      for(var i = 0; i < slotDetails.length; i++){
        console.log("receivig :" + doctorCode+date);
        console.log("Checking with :" + slotDetails[i].DRCode+slotDetails[i].AppDate);

        if(slotDetails[i].DRCode == doctorCode && slotDetails[i].AppDate == date){  
            slotResult.push(slotDetails[i]);
        }  
      }

      if(slotResult.length > 0){
        return slotResult;
      }else{
        return 0;
      }
    }
    
    var detailsList = [
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:0,
      BookedSlot:0,
      FreeSlot:0,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:"National Holiday",
      IsEnable:"N"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:18,
      BookedSlot:15,
      FreeSlot:11,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"N"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:45,
      BookedSlot:15,
      FreeSlot:0,
      CancelledSlot:11,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:0,
      BookedSlot:0,
      FreeSlot:0,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:"Personal Leave",
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"12/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"13/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"14/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"15/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"16/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"17/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"18/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"19/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"20/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"21/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"22/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"23/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"24/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"25/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"26/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:"Independence Day",
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"27/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"28/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"29/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"30/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"31/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"12/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"13/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc: "Daughter Birthday",
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"14/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"15/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"16/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"17/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"18/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"19/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"20/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"21/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"22/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"23/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"24/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"25/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"26/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"27/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"28/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/3/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/3/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/3/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/3/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/3/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/3/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/3/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/3/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/3/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/3/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1001,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/3/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:0,
      BookedSlot:0,
      FreeSlot:0,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:"National Holiday",
      IsEnable:"N"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:18,
      BookedSlot:15,
      FreeSlot:11,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"N"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:45,
      BookedSlot:15,
      FreeSlot:0,
      CancelledSlot:11,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:0,
      BookedSlot:0,
      FreeSlot:0,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:"Personal Leave",
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"12/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"13/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"14/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"15/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"16/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"17/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"18/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"19/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"20/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"21/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"22/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"23/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"24/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"25/1/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"26/1/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:"Independence Day",
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"27/1/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"28/1/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"29/1/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"30/1/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"31/1/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"JAN",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/2/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/2/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/2/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/2/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"12/2/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"13/2/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc: "Daughter Birthday",
      IsHoliday:"N",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"14/2/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"FEB",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"1/3/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"2/3/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"3/3/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"4/3/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"5/3/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"6/3/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"7/3/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"8/3/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"9/3/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"Y",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"10/3/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"Y",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"11/3/2017",
      AppSlotDay:"SAT",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"12/3/2017",
      AppSlotDay:"SUN",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"13/3/2017",
      AppSlotDay:"MON",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"14/3/2017",
      AppSlotDay:"TUE",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"15/3/2017",
      AppSlotDay:"WED",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"16/3/2017",
      AppSlotDay:"THU",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   },
   {  
      DRCode:1002,
      DRName:"Sandosh Srinivasan",
      DRSpec:"Cardic Surgeon",
      AppSlotDate:"17/3/2017",
      AppSlotDay:"FRI",
      AppSlotMonth:"MAR",
      TotalSlot:25,
      BookedSlot:20,
      FreeSlot:5,
      CancelledSlot:0,
      IsLeave:"N",
      IsLeaveDesc:null,
      IsHoliday:"",
      IsHolidayDesc:null,
      IsEnable:"Y"
   }
];

    var slotDetails = [
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "9:00 AM",
        AppRefNo : "",
        AppBookedBy : "Ravi",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "9:30 AM",
        AppRefNo : "",
        AppBookedBy : "Kumar",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "10:00 AM",
        AppRefNo : "",
        AppBookedBy : "Raj",
        Status : "Consultation In",
        StatusID : 3
      },
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "10:30 AM",
        AppRefNo : "",
        AppBookedBy : "Manish",
        Status : "Consultation In",
        StatusID : 3
      },
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "11:00 AM",
        AppRefNo : "",
        AppBookedBy : "Samuel",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "9/2/2017",
        SlotTime : "11:30 AM",
        AppRefNo : "",
        AppBookedBy : "Sarath Kumar",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "9:00 AM",
        AppRefNo : "",
        AppBookedBy : "Ravi",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "9:30 AM",
        AppRefNo : "",
        AppBookedBy : "Kumar",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "10:00 AM",
        AppRefNo : "",
        AppBookedBy : "Raj",
        Status : "Consultation In",
        StatusID : 3
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "10:30 AM",
        AppRefNo : "",
        AppBookedBy : "Manish",
        Status : "Consultation In",
        StatusID : 3
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "11:00 AM",
        AppRefNo : "",
        AppBookedBy : "Samuel",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "11:30 AM",
        AppRefNo : "",
        AppBookedBy : "Sarath Kumar",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 PM",
        AppRefNo : "",
        AppBookedBy : "Joeish",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:30 PM",
        AppRefNo : "",
        AppBookedBy : "Joseph Raj",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "01:00 PM",
        AppRefNo : "",
        AppBookedBy : "Ragnar Lothbrok",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "01:30 PM",
        AppRefNo : "",
        AppBookedBy : "Jon Snow",
        Status : "Checked In",
        StatusID : 2
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "02:00 PM",
        AppRefNo : "",
        AppBookedBy : "James Bond",
        Status : "Consultation In",
        StatusID : 3
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "02:30 PM",
        AppRefNo : "",
        AppBookedBy : "Rollo Lothbrok",
        Status : "Booked",
        StatusID : 1
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "03:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "03:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "04:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "04:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "05:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "05:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "06:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "06:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "07:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "07:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "08:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "08:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "09:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "09:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "10:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "10:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "11:00 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "11:30 PM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 AM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 AM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 AM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 AM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      },
      {
        DRCode : 1001,
        AppDate : "7/2/2017",
        SlotTime : "12:00 AM",
        AppRefNo : "",
        AppBookedBy : "",
        Status : "Free Slot",
        StatusID : 0
      }
    ]; 
    

    // function bindCalendar(value, div){
    //   var template = kendo.template(div.html());
    //   var slotTemplate = kendo.template($("#slotTemplate").html());      
    //   var result = template(value);      
    //   // var result += slotTemplate;
    //   $(".horizontal-scroll").html(result);
    // }


    $(document).ready(function(){


      $(document).on("click", ".nextMonth", function(){        
        var calendar = $(this).closest('.panel-heading').siblings('.panel-body').find(".calendar-body");        
        
         var template = kendo.template($("#daysTemplate").html());
         var monthValue = $(this).siblings('.month-value').html();
         var doctorCode = $(this).siblings('.doctor-code').html();
         monthValue = parseInt(monthValue);
          currentMonth = monthValue;
          currentMonth = currentMonth + 1;

          // Calling the function to store days in the array.
          details = getDays(currentMonth, doctorCode);

          var result = template(details);
          calendar.html(template);
          
          console.log(months[currentMonth]);

          var monthLabel = $(this).siblings('.month-label');          
          var monthValueTag = $(this).siblings('.month-value');          
          monthLabel.html(months[currentMonth]);
          monthValueTag.html(currentMonth);
      });

      $(document).on("click", ".prevMonth", function(){        
        var calendar = $(this).closest('.panel-heading').siblings('.panel-body').find(".calendar-body");        
        
         var template = kendo.template($("#daysTemplate").html());  

         var monthValue = $(this).siblings('.month-value').html();
         var doctorCode = $(this).siblings('.doctor-code').html();
         monthValue = parseInt(monthValue);         
         console.log(monthValue);
          currentMonth = monthValue;       

          currentMonth = currentMonth - 1;

          // Calling the function to store days in the array.
          details = getDays(currentMonth, doctorCode);

          var result = template(details);
          calendar.html(template);
          console.log(months[currentMonth]);
          var monthLabel = $(this).siblings('.month-label');
          var monthValueTag = $(this).siblings('.month-value');          
          monthLabel.html(months[currentMonth]);
          monthValueTag.html(currentMonth);
      });
    });


    
    
    <!-- @Calendar Template -->
    
  

  <!-- StatusID is the unique ID for statuses -->
  <!-- Template for slot nodes -->

  
    $(document).ready(function(){      

      $("#filter-button").click(function () {
            // var filterColumn = $(".filter-column");
            // var bgDiv = $(".background-div");
            // var filterRow = $(".filter-row")

            // filterRow.removeClass("col-md-9").addClass("col-md-12");
            // bgDiv.hide();
            // filterColumn.hide();

          var template = kendo.template($("#calendarTemplate").html());
          var slotTemplate = kendo.template($("#slotTemplate").html());
          // var details = February;
          var result = template(details);      


          // var result += slotTemplate;
          $(".horizontal-scroll").html(result);
          $(".horizontal-scroll").append(slotTemplate);

        });

        var comboData = [
          {text: "Today", value: 1},
          {text: "Tomorrow", value: 2},
          {text: "This Week", value: 3},
          {text: "This Month", value: 3}
        ]

          $("#dateRange").kendoComboBox({
              dataTextField: "text",
              dataValueField: "value",
              dataSource: comboData,
              filter: "contains"
          });

          $('.dateRangefield').live('focus blur', function (e) {
             if (e.type == "focusin")
                 uiFloatComboFocus("dateRangefield");
             else
                 uiFloatComboBlur("dateRangefield");
         }); 


            $("#fromDateFilter").kendoDatePicker({
                
            });

            $("#toDateFilter").kendoDatePicker({
                
            });


          $('.fromDateFilterfield').live('focus blur', function (e) {
             if (e.type == "focusin")
                 uiFloatComboFocus("fromDateFilterfield", "date");
             else
                 uiFloatComboBlur("fromDateFilterfield", "date");
         }); 

          $('.toDateFilterfield').live('focus blur', function (e) {
             if (e.type == "focusin")
                 uiFloatComboFocus("toDateFilterfield", "date");
             else
                 uiFloatComboBlur("toDateFilterfield", "date");
         }); 
    });


          $(document).ready(function(){
          //       $(".horizontal-scroll").owlCarousel({

          //       });
            
       // slot menu click
        $(document).on('click', '.slot-menu',function () {
            
            $(this).siblings(".slot-toggle").show();

              });
        // slot menu click end

        // slot-menu-item click 
        $(document).on('click', '.slot-menu-item', function () {
            $(this).closest(".slot-toggle").hide();
            $(".status-popup").show();
        });
        // slot-menu-list click end
         // slot toggle click outside
        $(document).mouseup(function (e) {
            var container = $(".slot-toggle");

            if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
            }
        });

        // slot toggle click outside end

        // show and hide status popup
          $(document).on("click", "#closeStatusPopup", function(){
              $(".status-popup").hide();
          }); 
        // hide status popup end

        // Close slot box
          $(document).on('click', ".close-slot", function(){
              $(this).closest(".slot-div").hide();
              $(".calendar-div").show();
          });
        // Close slot box end

        // Close calendar box
          $(document).on("click", ".close-calendar", function(){
              $(this).closest(".calendar-div").hide(); 
              $(".slot-div").hide(); 
              var count = 0;
              var elements = $(".horizontal-scroll").children();
              console.log(elements);              

              for(var i=0; i<elements.length; i++){
                elements[i] = $(elements[i]);                
                if(elements[i].is(":visible") == true){
                  count++;                 
                }
              }

              if(count == 0){
                var tmpElements = $(".horizontal-scroll").children(".no-data");
                if(tmpElements.length == 0){
                  var noDataTemplate = kendo.template($("#noDataTemplate").html());
                  $(".horizontal-scroll").append(noDataTemplate);
                  $(".no-data").show();
                }else{
                  $(".no-data").show();
                }
                console.log("not visible");
              }else{
                $(".no-data").hide();
                console.log("visible");
              }
          });
        // Close calendar box end

           var noDataTemplate = kendo.template($("#noDataTemplate").html());
          $(".horizontal-scroll").append(noDataTemplate);
            $(".no-data").show();

            $(".slot-body-container").slimScroll({
                height: "460px"
            });
          });
  