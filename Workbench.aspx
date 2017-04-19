<%@ Page Title="" Language="C#" AutoEventWireup="true" CodeBehind="Workbench.aspx.cs" Inherits="SampleProjectDHA.Workbench" MasterPageFile="~/Master/uiStaticPage.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentHead" runat="server">
  <link id="style_colors" href="Library/Metronic/assets/admin/layout/css/themes/default.css" rel="stylesheet" type="text/css" />
      <link href="Library/Metronic/assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/global/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/admin/pages/css/timeline-old.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/admin/pages/css/profile-old.css" rel="stylesheet" type="text/css" />
    <link href="Library/Metronic/assets/global/plugins/fancybox/source/jquery.fancybox.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="Library/Metronic/assets/global/plugins/select2/select2.css" />
    <link rel="stylesheet" type="text/css" href="Library/Metronic/assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css" />
    <link href="Library/Metronic/assets/global/plugins/ion.rangeslider/css/ion.rangeSlider.css" rel="stylesheet" />
    <link href="Library/Metronic/assets/global/plugins/ion.rangeslider/css/ion.rangeSlider.Metronic.css" rel="stylesheet" />
    <link href="Library/Metronic/assets/global/plugins/jstree/dist/themes/default/style.min.css" rel="stylesheet" />
    <link href="Library/Metronic/Oreassets/global/plugins/owl-carousel/owl.theme.css" rel="stylesheet" />
    <link href="Library/Metronic/Oreassets/global/plugins/owl-carousel/owl.carousel.css" rel="stylesheet" />
    <link href="Library/Common/Global/select2.min.css" rel="stylesheet" />
    <script src="Library/Kui/js/cultures/kendo.culture.ar-OM.min.js"></script>
	
    <link rel="stylesheet" href="appointment.css" type="text/css">    
        <!-- owl carousel.min.css -->
    <link rel="stylesheet" href="Library/OwlCarousel2-2.2.0/dist/assets/owl.carousel.min.css" type="text/css">    
    <link rel="stylesheet" href="Library/OwlCarousel2-2.2.0/dist/assets/owl.theme.default.min.css" type="text/css">    



</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentHTML" runat="server">



    <div class="appointment-container">    
        <div class="row">
            <div class="col col-md-3 col-sm-3 col-xs-12 h-50">
                <div class="c-header bg-green ph pl-10 pt-10">
                    <i class="c-header-icon fa fa-book data-white fs-18 spacer-10"></i>
                    <span class="c-header-title data-white fs-16">Appointment Booking</span>
                </div>
            </div>
            <div class="col col-md-9 col-sm-9 col-xs-12 filter-row h-50">
                <div class="row h-50" id="filter-controls bg-white bb-thin">
                    <!-- <div class="col col-md-3 col-sm-3 col-xs-12 h-50 pl-15 pr-5">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="sample3">
                          <label class="mdl-textfield__label" for="sample3">MRN</label>
                        </div>
                    </div> -->
                    <div class="col col-md-4 col-sm-4 col-xs-12 h-50 pl-10 pr-5">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: calc( 100% - 20px ) !important;">
                            <input class="mdl-textfield__input pr-25" type="text" id="Text1">
                            <label class="mdl-textfield__label" for="sample3">Search MRN</label>
                        </div>
                        <i class="fa fa-search fs-16 font-gray drag-left-25"></i>
                    </div>

                    <div class="col col-md-7 col-sm-7 col-xs-11 h-50">
                        <div class="row">
                            <div class="col col-md-4 col-sm-4 col-xs-4 pl-5 pr-5">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input dateRangefield" type="text" id="dateRange">
                                    <label class="mdl-textfield__label" for="dateRange">Date Range</label>
                                </div>      
                            </div>
                            <div class="col col-md-4 col-sm-4 col-xs-4 pl-5 pr-5">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input fromDateFilterfield" type="text" id="fromDateFilter">
                                    <label class="mdl-textfield__label" for="fromDateFilter">From</label>
                                </div>      
                            </div>
                            <div class="col col-md-4 col-sm-4 col-xs-4 pl-5 pr-5">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input toDateFilterfield" type="text" id="toDateFilter">
                                    <label class="mdl-textfield__label" for="toDateFilter">To</label>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-1 col-sm-1 col-xs-11 h-50 pt-25" align="center">
                        <i class="fa fa-th font-gray fs-25 pointer" id="filter-button"></i>
                    </div>
                </div>
            </div>


            <div class="col col-md-3 col-sm-3 col-xs-12 br-thin filter-column">
                <div class="pw" style="height:507px;">
                    <div class="row">
                        <div class="col-md-12 h-50 pl-15 pr-5">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: calc( 100% - 20px );">
                                <input class="mdl-textfield__input pr-25" type="text" id="Text5">
                                <label class="mdl-textfield__label" for="sample3">Search Doctor/Speciality</label>
                            </div>
                            <i class="fa fa-search fs-16 font-gray drag-left-25"></i>
                        </div>
                    </div>
                    <div class="row mt-10 filter-panels">
                        <div class="col-md-12 scroll-div pw" style="padding:2px; height:250px;">
                            <div class="panel panel-default">
                                <div class="panel-heading pointer bg-cyan filter-list-item">
                                    <i class="fa fa-stethoscope spacer-10"></i> Cardiac Surgeon
                                    <i class="fa fa-angle-down pull-right indicator mt-5"></i>
                                </div>
                                <div class="panel-body npt npb">
                                    <ul class="list-group">
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check1">
                                          <input type="checkbox" id="check1" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check2">
                                          <input type="checkbox" id="check2" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check3">
                                          <input type="checkbox" id="check3" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                    </ul>     
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading pointer bg-cyan filter-list-item">
                                    <i class="fa fa-stethoscope spacer-10"></i> Radiologist
                                    <i class="fa fa-angle-down pull-right indicator mt-5"></i>
                                </div>
                                <div class="panel-body npt npb">
                                    <ul class="list-group">
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check4">
                                          <input type="checkbox" id="check4" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check5">
`
                                          <input type="checkbox" id="check5" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">
                                        <i class="fa fa-user-md pull-left fs-20 list-icon"></i> 
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check6">
                                          <input type="checkbox" id="check6" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Dr. Santosh Srinivasan</span> 
                                        </label>
                                      </li>
                                    </ul>     
                                </div>
                            </div>
                        </div>
                        
                    </div>        

                    <div class="row">
                        <div class="col col-md-12">
                        <!-- slot filter -->
                            <div class="panel panel-default" style="padding:2px;">
                                <div class="panel-heading pointer bg-lightgray filter-list-item" style="border-radius: 0px; ">
                                    Slot Filter
                                </div>
                                <div class="panel-body scroll-div npt npb" style="height:150px;">
                                    <ul class="list-group">
                                      <li class="list-group-item nb">                                        
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check1">
                                          <input type="checkbox" id="Checkbox1" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Free Slots</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">                                        
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check2">
                                          <input type="checkbox" id="Checkbox2" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Booked Slots</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">                                        
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check3">
                                          <input type="checkbox" id="Checkbox3" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Confirmed Slots</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">                                        
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check3">
                                          <input type="checkbox" id="Checkbox4" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Consulation In</span> 
                                        </label>
                                      </li>
                                      <li class="list-group-item nb">                                        
                                       <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check3">
                                          <input type="checkbox" id="Checkbox5" class="mdl-checkbox__input" />
                                          <span class="mdl-checkbox__label">Consulation Out</span> 
                                        </label>
                                      </li>
                                    </ul>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col col-md-9 col-sm-9 col-xs-12 br-thin background-div" style="height:507px;">
                
            </div>
            
			<!-- horizontal Scroll for Calendars -->
      <div class="scroll-hide">
			<div class="horizontal-scroll">

            <!-- calendar div -->
            <div class="col col-md-6 col-sm-12 col-xs-12 padding-5 calendar-div" style="height:507px; display:none">
                <div class="panel panel-default no-br no-shadow">
                    <div class="panel-heading c-header no-br nb bg-darkblue">
                        <i class="fa fa-user-md c-header-icon font-white"></i>
                        <span class="c-header-title font-white">Dr. Santosh Srinivasan - Cardiac Surgeon</span>
                        <i class="fa fa-times-circle pull-right font-white close-calendar"></i>
                    </div>
                    <div class="panel-body">
                        <div class="calendar-container">
                            <div class="row calendar-header bg-white">
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">SUN</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">MON</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">TUE</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">WED</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">THU</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">FRI</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">SAT</div>
                            </div>
                            <div class="row calendar-body">

                            <!-- Holiday template NOT current month-->
                                <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">
                                            <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="pw ph bg-darkblue" align="center">
                                                <span class="holiday-text">Holiday</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- Holiday template NOT current month End -->
                            
                            <!-- Normal day template NOT current month -->
                                <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- Normal day template NOT current month End -->

                            <!-- Holiday template-->
                                <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">
                                            <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="pw ph bg-darkblue" align="center">
                                                <span class="holiday-text">Holiday</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- Holiday templateEnd -->
                            
                            <!-- Normal day template-->
                                <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- Normal day templateEnd -->
                            
                            <!-- Holiday template-->
                                  <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                      <div class="day-node bg-white">
                                          <div class="day-header" align="center">
                                              <span class="day-header-text"> 30/10/2016 </span>   
                                          </div>
                                          <div class="day-body" align="center">
                                              <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                                          </div>
                                          <div class="day-footer">
                                              <!-- Holiday -->
                                              <div class="pw ph bg-red" align="center">
                                                  <span class="holiday-text">Leave</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                            <!-- Holiday templateEnd -->
                            
                            <!-- Duplications -->

                            <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center">
                                    <div class="day-node bg-white">
                                        <div class="day-header" align="center">
                                            <span class="day-header-text"> 30/10/2016 </span>   
                                        </div>
                                        <div class="day-body" align="center">       
                                            <span class="font-gray day-body-text">18</span>
                                        </div>
                                        <div class="day-footer">
                                            <!-- Holiday -->
                                            <div class="row  bt-thin" align="center">
                                                <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                    <i class="fa fa-book font-green"></i>
                                                    <span class="booked">15</span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                    <i class="fa fa-ban font-red"></i>
                                                    <span class="booked">11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        
                     

            <!-- Slot Sheet panel -->
            <!-- <div class="col col-md-6 col-sm-12 col-xs-12 padding-5 slot-div" style="height:507px; display:none;">
                <div class="slot-container pw ph">
                    <div class="row slot-header h-50">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                            <i class="fa fa-th fs-20 mt-10"></i>
                            <div class="clip pull-right"></div>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 npl">
                            <span class="font-white fs-16 bold"> Slot Sheet </span><br>
                            <span class="font-white fs-16 bold"> 10/11/2016 </span>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                            <div class="clip pull-left"></div>
                        </div>
                    </div>
                    <div class="slot-body pw padding-15" style="height: 448px;">
                        <div class="slot-body-container pw ph padding-5">
 -->
                        <!-- Status update Popup -->
                        <!-- <div class="status-popup" style="display: none;">
                            <div class="row" style="background: #337ab7;">
                                <div class="col-md-12 col-sm-12 h-30" style="padding: 6px 14px;">
                                  <span class="bold fs-12" style="color:white">Status Update</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                  <span class="bg-white font-gray fs-12">Do you want to update Status?</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-6" style="padding:5px;">
                                    <table>
                                      <tr>
                                        <th class="fs-10">From Status</th>
                                        <td class="fs-10">Booked</td>
                                      </tr>
                                      <tr>
                                        <th class="fs-10">To Status</th>
                                        <td class="fs-10">Confirm</td>
                                      </tr>
                                    </table>
                                </div>
                                <div class="col-md-6 col-sm-6" style="padding:5px;">
                                      <table>
                                      <tr>
                                        <th class="fs-10">Michael John</th>
                                        <td class="fs-8">10/11/2016 10:30 AM</td>
                                      </tr>
                                      <tr>
                                        <th class="fs-10">PAT758585</th>
                                        <td></td>
                                      </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="row status-buttons">
                              <button class="btn btn-primary pull-right" id="closeStatusPopup">No</button>
                              <button class="btn btn-primary pull-right">Yes</button>
                            </div>
                        </div> -->
                        <!-- Status update Popup End -->

                        <!-- slot 1 Checked In -->
                            <!-- <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-green">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Checked In</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                                              <i class="fa fa-ellipsis-v fs-12"></i>
                                            </button>

                                            <div class="slot-toggle">
                                            	<div class="row slot-toggle-wrapper nm pl-5">
                                            		<div class="col col-md-4 col-sm-4" align="center">		
                                            			<div class="slot-toggle-thumbnail mt-5">
                                            				
                                            			</div>
                                            		</div>
                                            		<div class="col col-md-8 col-sm-8 mt-5 pl-5">
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="bold fs-10 font-darkblue">PAT20122333</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">55 Year</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">+91 8586958878</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                                            			</div>
                                            		</div>
                                            	</div>
	                                            
	                                            <div class="slot-menu-item pointer bb-thin">
	                                            	<i class="fa fa-hand-o-right spacer-10 "></i>Consultation In
	                                            </div>
	                                            <div class="slot-menu-item pointer">
	                                            	<i class="fa fa-times spacer-10"></i>Cancel
	                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-darkblue">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Booked</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button id="button2" class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                                              <i class="fa fa-ellipsis-v fs-12"></i>
                                            </button>

                  											<div class="slot-toggle">
                                            	<div class="row slot-toggle-wrapper nm pl-5">
                                            		<div class="col col-md-4 col-sm-4" align="center">		
                                            			<div class="slot-toggle-thumbnail mt-5">
                                            				
                                            			</div>
                                            		</div>
                                            		<div class="col col-md-8 col-sm-8 mt-5 pl-5">
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="bold fs-10 font-darkblue">PAT20122333</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">55 Year</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">+91 8586958878</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                                            			</div>
                                            		</div>
                                            	</div>
	                                            
	                                            <div class="slot-menu-item pointer bb-thin">
	                                            	<i class="fa fa-check spacer-10"></i>Confirm
	                                            </div>
	                                            <div class="slot-menu-item pointer">
	                                            	<i class="fa fa-times spacer-10"></i>Cancel
	                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-cyan">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Consultation In</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                                              <i class="fa fa-ellipsis-v fs-12"></i>
                                            </button>

                                            <div class="slot-toggle">
                                            	<div class="row slot-toggle-wrapper nm pl-5">
                                            		<div class="col col-md-4 col-sm-4" align="center">		
                                            			<div class="slot-toggle-thumbnail mt-5">
                                            				
                                            			</div>
                                            		</div>
                                            		<div class="col col-md-8 col-sm-8 mt-5 pl-5">
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="bold fs-10 font-darkblue">PAT20122333</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">55 Year</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-10 font-gray">+91 8586958878</span>
                                            			</div>
                                            			<div class="col-md-12 col-sm-12 npl">
                                            				<span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                                            			</div>
                                            		</div>
                                            	</div>
	                                            
	                                            <div class="slot-menu-item pointer bb-thin">
	                                            	<i class="fa fa-hand-o-left spacer-10"></i>Consultation Out
	                                            </div>
	                                            <div class="slot-menu-item pointer">
	                                            	<i class="fa fa-times spacer-10"></i>Cancel
	                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
 -->
                            
                            <!-- Duplications -->

                            <!-- <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-cyan">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Consultation In</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button id="Button3"
                                                    class="mdl-button mdl-js-button mdl-button--icon mt-10">
                                              <i class="fa fa-ellipsis-v fs-12 "></i>
                                            </button>

                                            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                                for="demo-menu-lower-right">
                                              <li class="mdl-menu__item">Book Appointment</li>
                                              <li class="mdl-menu__item">Block Seat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3 np disabled-slot" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-cyan">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Consultation In</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button id="Button4"
                                                    class="mdl-button mdl-js-button mdl-button--icon mt-10">
                                              <i class="fa fa-ellipsis-v fs-12 "></i>
                                            </button>

                                            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                                for="demo-menu-lower-right">
                                              <li class="mdl-menu__item">Book Appointment</li>
                                              <li class="mdl-menu__item">Block Seat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw bg-cyan">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-book fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-8">08:00 AM</span><br>
                                            <span class="font-gray bold fs-8">Rajesh</span><br>
                                            <span class="font-gray bold fs-8">Consultation</span>
                                        </div>
                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button id="Button5"
                                                    class="mdl-button mdl-js-button mdl-button--icon mt-10">
                                              <i class="fa fa-ellipsis-v fs-12"></i>
                                            </button>

                                            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                                for="demo-menu-lower-right">
                                              <li class="mdl-menu__item">Book Appointment</li>
                                              <li class="mdl-menu__item">Block Seat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- Free slot -->
                           <!--  <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
                                <div class="slot-node bg-white np">
                                    <div class="slot-thumbnail pull-left">
                                        <div class="row slot-color pw" style="background: #bdf6f9;">
                                            
                                        </div>
                                        <div class="slot-icon pw bg-gray">
                                            <i class="fa fa-calendar fs-20 mt-10"></i>
                                        </div>
                                    </div>
                                    <div class="row slot-node-body pull-left bg-white np">
                                       
                                        <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                                            <span class="font-gray bold fs-12">08:00 AM</span><br>
                                            
                                            <span class="font-gray bold fs-8">Free Slot</span>
                                        </div>

                                        <div class="col-md-1 col-sm-1 col-xs-1 np">    
                                            <button class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                                              <i class="fa fa-ellipsis-v fs-12"></i>
                                            </button>

                                            <div class="slot-toggle">
                                              <div class="slot-menu-item pointer bb-thin">
                                                <i class="fa fa-book spacer-10"></i>Boot Appointment
                                              </div>
                                              <div class="slot-menu-item pointer">
                                                <i class="fa fa-ban spacer-10"></i>Block Slot
                                              </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> -->


			</div>
            <!-- horizontal scroll ends -->
            </div>
            <!-- scroll hide end -->
        </div>

    </div>
</asp:Content>



<asp:Content ID="Content3" ContentPlaceHolderID="ContentJs" runat="server">
<script src="appointment.js" type="text/javascript"></script>

    <script id="slotTemplate" type="text/x-kendo-template">    
      <div class="col col-md-6 col-sm-12 col-xs-12 padding-5 slot-div" style="display:none; height:auto; float:none;">
                <div class="slot-container pw ph">
                    <div class="row slot-header h-50">
                        <div class="col-md-2 col-sm-2 col-xs-2">
                            <i class="fa fa-th fs-20 mt-10"></i>
                            <div class="clip pull-right"></div>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 npl">
                            <span class="font-white fs-16 bold slot-box-title"> Slot Sheet </span><br>
                            <span class="font-white fs-16 bold slot-box-date"> 10/11/2016 </span>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                            <div class="clip pull-left"></div>                            
                              <i class="fa fa-times-circle pull-right font-white close-slot"></i>                          
                        </div>
                    </div>
                    <div class="slot-body pw padding-15" style="height: 490px;">
                        <div class="slot-body-container pw ph padding-5" style="overflow-y: auto;">
                        
                        </div>
                    </div>
                </div>
            </div>
    </script>

  <!-- Kendo data binding for Calendar -->

    <script id="daysTemplate" type="text/x-kendo-template">  
      #
      if(details.length > 0){
      for (var j = 0; j < details.length; j++) { #
      #  
        var offset = "0%";
      if(j == 0){
          if(details[j].AppSlotDay == "SUN"){
              offset = "0%";
          }else if(details[j].AppSlotDay == "MON"){
              offset = "14.285%";
          }else if(details[j].AppSlotDay == "TUE"){
              offset = "28.5%"; 
          }else if(details[j].AppSlotDay == "WED"){
              offset = "42.855%"; 
          }else if(details[j].AppSlotDay == "THU"){
              offset = "57.14%"; 
          }else if(details[j].AppSlotDay == "FRI"){
              offset = "71.425%"; 
          }else if(details[j].AppSlotDay == "SAT"){
              offset = "85.71%"; 
          }
        }
      #
      #
if(details[j].IsHoliday == "Y" || details[j].IsLeave == "Y" ){ 
  if(details[j].IsHoliday == "Y"){#

            <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                <div class="day-node bg-white">
                    <div class="day-header" align="center">
                        <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>   
                        <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   
                    </div>
                    <div class="day-body" align="center">
                        <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                    </div>
                    <div class="day-footer">
                        <!-- Holiday -->
                        <div class="pw ph bg-darkblue" align="center">
                            <span class="holiday-text">Holiday</span>
                        </div>
                    </div>
                </div>
            </div>
            
            #
            }else if(details[j].IsLeave == "Y"){#

              <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                  <div class="day-node bg-white" style="border-top:1px solid lightgray;">
                      <div class="day-header" align="center">
                          <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>   
                          <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   
                      </div>
                      <div class="day-body" align="center">
                          <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                      </div>
                      <div class="day-footer">
                          <!-- Holiday -->
                          <div class="pw ph bg-red" align="center">
                              <span class="holiday-text">Leave</span>
                          </div>
                      </div>
                  </div>
              </div>

            #}

        }else{#

          
                <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                  <div class="day-node bg-white">
                      <div class="day-header" align="center">
                          <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>   
                          <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   
                      </div>
                      <div class="day-body" align="center">       
                          <span class="font-gray day-body-text"> #: details[j].FreeSlot # </span>
                      </div>
                      <div class="day-footer">
                          <!-- Holiday -->
                          <div class="row bt-thin" align="center">
                              <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                  <i class="fa fa-book font-green"></i>
                                  <span class="booked">#: details[j].BookedSlot #</span>
                              </div>
                              <div class="col-md-6 col-sm-6 col-xs-6 np">
                                  <i class="fa fa-ban font-red"></i>
                                  <span class="booked">#: details[j].CancelledSlot #</span>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>  
          
        #}

        #
                        # }
                        }else{#

                        <div class="row" style="margin-top:25%;">
                                  <div class="col-md-12 col-sm-12" align="center">
                                    <i class="fa fa-yelp" style="color:\\#2c3e50; font-size:75px; display:block"></i><br><br>
                                    <span class="fs-16" style="color:\\#2c3e50; font-size:20px;">No Data Found</span>
                                  </div>
                                </div>

                        #} #
    </script>  



    <script id="statusPopupTemplate" type="text/x-kendo-template">    
          <div class="status-popup" style="display: none;">
              <div class="row bg-awesomeblue">
                  <div class="col-md-12 col-sm-12 h-30" style="padding: 6px 14px;">
                    <span class="bold fs-12" style="color:white">Status Update</span>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <span class="bg-white font-gray fs-12">Do you want to update Status?</span>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6 col-sm-6" style="padding:5px;">
                      <table>
                        <tr>
                          <th class="fs-10">From Status</th>
                          <td class="fs-10">Booked</td>
                        </tr>
                        <tr>
                          <th class="fs-10">To Status</th>
                          <td class="fs-10">Confirm</td>
                        </tr>
                      </table>
                  </div>
                  <div class="col-md-6 col-sm-6" style="padding:5px;">
                        <table>
                        <tr>
                          <th class="fs-10">Michael John</th>
                          <td class="fs-8">10/11/2016 10:30 AM</td>
                        </tr>
                        <tr>
                          <th class="fs-10">PAT758585</th>
                          <td></td>
                        </tr>
                      </table>
                  </div>
              </div>
              <div class="row status-buttons">
                <button type="button" class="btn btn-primary pull-right" id="closeStatusPopup">No</button>
                <button type="button" class="btn btn-primary pull-right">Yes</button>
              </div>
          </div>
    </script>
    
    <!-- @Calendar Template -->
    <script id="calendarTemplate" type="text/x-kendo-template">    
     
    #    

     for (var i = 0; i < doctors.length; i++) { 
      
      var date = new Date();
      currentMonth = date.getMonth();
      console.log(months[currentMonth]);
      console.log(currentMonth);                
      details = getDays(currentMonth, doctors[i].DRCode);

     #
      <div class="col col-md-6 col-sm-12 col-xs-12 padding-5 calendar-div" style="height:auto; float:none;">
                <div class="panel panel-default no-br no-shadow">
                    <div class="panel-heading c-header no-br nb bg-darkblue" style="height:35px;">
                    <div class="col-md-6 col-sm-6">
                       <i class="fa fa-user-md c-header-icon font-white"></i>                        
                        <span class="c-header-title font-white"> #: doctors[i].doctorName # - #: doctors[i].doctorSpec # </span>
                    </div>
                     <div class="col-md-5 col-sm-5" align="center">
                        <i class="fa fa-caret-left font-white pull-left pointer prevMonth"></i>
                        <span class="fs-12 month-label" style="margin-top:-5px;">#: months[currentMonth] #</span>
                        <span class="fs-12 month-value" hidden="" style="margin-top:-5px;">#: currentMonth #</span>
                        <span class="fs-12 doctor-code" hidden="" style="margin-top:-5px;">#: doctors[i].DRCode #</span>
                        <i class="fa fa-caret-right font-white pull-right pointer nextMonth"></i>
                     </div>
                     <div class="col-md-1 col-sm-1" align="right">
                        <i class="fa fa-times-circle pull-right font-white close-calendar"></i>
                     </div>
                    </div>
                    <div class="panel-body">
                        <div class="calendar-container">
                            <div class="row calendar-header bg-white">
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">SUN</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">MON</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">TUE</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">WED</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">THU</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">FRI</div>
                                <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center">SAT</div>
                            </div>
                            <div class="row calendar-body">
                            #
                            if(details.length > 0){
                             for (var j = 0; j < details.length; j++) { #
                              #  
                                var offset = "0%";

                              if(j == 0){
                                  if(details[j].AppSlotDay == "SUN"){
                                      offset = "0%";
                                  }else if(details[j].AppSlotDay == "MON"){
                                      offset = "14.285%";
                                  }else if(details[j].AppSlotDay == "TUE"){
                                      offset = "28.5%"; 
                                  }else if(details[j].AppSlotDay == "WED"){
                                      offset = "42.855%"; 
                                  }else if(details[j].AppSlotDay == "THU"){
                                      offset = "57.14%"; 
                                  }else if(details[j].AppSlotDay == "FRI"){
                                      offset = "71.425%"; 
                                  }else if(details[j].AppSlotDay == "SAT"){
                                      offset = "85.71%"; 
                                  }
                                }
                              #
                              
                               #
                                if(details[j].IsHoliday == "Y" || details[j].IsLeave == "Y" ){ 
                                  if(details[j].IsHoliday == "Y"){#

                                    <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                                        <div class="day-node bg-white">
                                            <div class="day-header" align="center">
                                                <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>
                                                <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   
                                            </div>
                                            <div class="day-body" align="center">
                                                <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                                            </div>
                                            <div class="day-footer">
                                                <!-- Holiday -->
                                                <div class="pw ph bg-darkblue" align="center">
                                                    <span class="holiday-text">Holiday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    #
                                    }else if(details[j].IsLeave == "Y"){#

                                     <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                                          <div class="day-node bg-white"  style="border-top:1px solid lightgray;">
                                              <div class="day-header" align="center">
                                                  <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>   
                                                  <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   
                                              </div>
                                              <div class="day-body" align="center">
                                                  <i class="fa fa-times fs-16 font-gray day-body-text"></i>
                                              </div>
                                              <div class="day-footer">
                                                  <!-- Holiday -->
                                                  <div class="pw ph bg-red" align="center">
                                                      <span class="holiday-text">Leave</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                    #}

                                }else{#

                                        <div class="col col-md-1 col-sm-1 col-xs-1 col-lg-1 day-wrapper" align="center" style="margin-left: #:offset#">
                                          <div class="day-node bg-white">
                                              <div class="day-header" align="center">
                                                  <span class="day-header-text app-date"> #: details[j].AppSlotDate # </span>
                                                  <span class="day-header-text doctor-code" hidden=""> #: details[j].DRCode # </span>   

                                              </div>
                                              <div class="day-body" align="center">       
                                                  <span class="font-gray day-body-text"> #: details[j].FreeSlot # </span>
                                              </div>
                                              <div class="day-footer">
                                                  <!-- Holiday -->
                                                  <div class="row bt-thin" align="center">
                                                      <div class="col-md-6 col-sm-6 col-xs-6 np br-thin">
                                                          <i class="fa fa-book font-green"></i>
                                                          <span class="booked">#: details[j].BookedSlot #</span>
                                                      </div>
                                                      <div class="col-md-6 col-sm-6 col-xs-6 np">
                                                          <i class="fa fa-ban font-red"></i>
                                                          <span class="booked">#: details[j].CancelledSlot #</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        </div>  
                                  
                                #}

                                #
                            # }

                            }else{#
                                <div class="row" style="margin-top:25%;">
                                  <div class="col-md-12 col-sm-12" align="center">
                                    <i class="fa fa-yelp" style="color:\\#2c3e50; font-size:75px; display:block;"></i><br><br>
                                    <span class="fs-16" style="color:\\#2c3e50; font-size:20px;">No Data Found</span>
                                  </div>
                                </div>

                            #} #
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        # }

          if(doctors.length == 1){
            var template = kendo.template($("\\#emptyCalendarTemplate").html());
            $(".horizontal-scroll").append(template);
          }

         #                              
            
    </script>
  

  <!-- StatusID is the unique ID for statuses -->
  <!-- Template for slot nodes -->

  <script id="slotNodeTemplate" type="text/x-kendo-template">    
    # for (var i = 0; i < slotDetailsExtracted.length; i++) { 
        var position = "absolute";
        if(i%4 == 0 || i==0){
           position = "relative"
        }else{
          position = "absolute";
        }

    #
          
      #if(slotDetailsExtracted[i].StatusID == 1){
          
      #      
        
      <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
          <div class="slot-node bg-white np">
              <div class="slot-thumbnail pull-left">
                  <div class="row slot-color pw bg-darkblue">
                      
                  </div>
                  <div class="slot-icon pw bg-gray">
                      <i class="fa fa-book fs-20 mt-10"></i>
                  </div>
              </div>
              <div class="row slot-node-body pull-left bg-white np">
                  <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].SlotTime #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].AppBookedBy #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].Status #</span>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-1 np">    
                      <button id="button2" type="button" class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                        <i class="fa fa-ellipsis-v fs-12"></i>
                      </button>

                  <div class="slot-toggle" style="position: #:position#;">
                        <div class="row slot-toggle-wrapper nm pl-5">
                          <div class="col col-md-4 col-sm-4" align="center">    
                            <div class="slot-toggle-thumbnail mt-5">
                              
                            </div>
                          </div>
                          <div class="col col-md-8 col-sm-8 mt-5 pl-5">
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="bold fs-10 font-darkblue">PAT20122333</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-10 font-gray">55 Year</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-10 font-gray">+91 8586958878</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="slot-menu-item pointer bb-thin">
                          <i class="fa fa-check spacer-10"></i>Confirm
                        </div>
                        <div class="slot-menu-item pointer">
                          <i class="fa fa-times spacer-10"></i>Cancel
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      #}else if(slotDetailsExtracted[i].StatusID == 2){#

      
        <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
          <div class="slot-node bg-white np">
              <div class="slot-thumbnail pull-left">
                  <div class="row slot-color pw bg-green">
                      
                  </div>
                  <div class="slot-icon pw bg-gray">
                      <i class="fa fa-book fs-20 mt-10"></i>
                  </div>
              </div>
              <div class="row slot-node-body pull-left bg-white np">
                  <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].SlotTime #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].AppBookedBy #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].Status #</span>
                  </div>
                  <div class="col-md-1 col-sm-1 col-xs-1 np">    
                      <button type="button" class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                        <i class="fa fa-ellipsis-v fs-12"></i>
                      </button>

                      <div class="slot-toggle" style="position: #:position#;">
                        <div class="row slot-toggle-wrapper nm pl-5">
                          <div class="col col-md-4 col-sm-4" align="center">    
                            <div class="slot-toggle-thumbnail mt-5">
                              
                            </div>
                          </div>
                          <div class="col col-md-8 col-sm-8 mt-5 pl-5">
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="bold fs-10 font-darkblue">PAT20122333</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-10 font-gray">55 Year</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-10 font-gray">+91 8586958878</span>
                            </div>
                            <div class="col-md-12 col-sm-12 npl">
                              <span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="slot-menu-item pointer bb-thin">
                          <i class="fa fa-hand-o-right spacer-10 "></i>Consultation In
                        </div>
                        <div class="slot-menu-item pointer">
                          <i class="fa fa-times spacer-10"></i>Cancel
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

     # }else if(slotDetailsExtracted[i].StatusID == 3){#

      
        <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
            <div class="slot-node bg-white np">
                <div class="slot-thumbnail pull-left">
                    <div class="row slot-color pw bg-cyan">
                        
                    </div>
                    <div class="slot-icon pw bg-gray">
                        <i class="fa fa-book fs-20 mt-10"></i>
                    </div>
                </div>
                <div class="row slot-node-body pull-left bg-white np">
                    <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].SlotTime #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].AppBookedBy #</span><br>
                      <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].Status #</span>
                    </div>
                    <div class="col-md-1 col-sm-1 col-xs-1 np">    
                        <button type="button" class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                          <i class="fa fa-ellipsis-v fs-12"></i>
                        </button>

                        <div class="slot-toggle" style="position: #:position#;">
                          <div class="row slot-toggle-wrapper nm pl-5">
                            <div class="col col-md-4 col-sm-4" align="center">    
                              <div class="slot-toggle-thumbnail mt-5">
                                
                              </div>
                            </div>
                            <div class="col col-md-8 col-sm-8 mt-5 pl-5">
                              <div class="col-md-12 col-sm-12 npl">
                                <span class="bold fs-10 font-darkblue">PAT20122333</span>
                              </div>
                              <div class="col-md-12 col-sm-12 npl">
                                <span class="fs-10 font-gray">55 Year</span>
                              </div>
                              <div class="col-md-12 col-sm-12 npl">
                                <span class="fs-10 font-gray">+91 8586958878</span>
                              </div>
                              <div class="col-md-12 col-sm-12 npl">
                                <span class="fs-8 font-darkblue bold pull-right">APP20122333</span>
                              </div>
                            </div>
                          </div>
                          
                          <div class="slot-menu-item pointer bb-thin">
                            <i class="fa fa-hand-o-left spacer-10"></i>Consultation Out
                          </div>
                          <div class="slot-menu-item pointer">
                            <i class="fa fa-times spacer-10"></i>Cancel
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

      #}else if(slotDetailsExtracted[i].StatusID == 0){
          
      #


          <div class="col-md-3 col-sm-3 col-xs-3 np" style="margin: 2px 0px;">
            <div class="slot-node bg-white np">
                <div class="slot-thumbnail pull-left">
                    <div class="row slot-color pw" style="background: \\#bdf6f9">
                        
                    </div>
                    <div class="slot-icon pw bg-gray">
                        <i class="fa fa-calendar fs-20 mt-10"></i>
                    </div>
                </div>
                <div class="row slot-node-body pull-left bg-white np">
                   
                    <div class="col-md-9 col-sm-11 col-xs-11 np pl-5">
                        <span class="font-gray bold fs-12">#: slotDetailsExtracted[i].SlotTime #</span><br>
                        
                        <span class="font-gray bold fs-8">#: slotDetailsExtracted[i].Status #</span>
                    </div>

                    <div class="col-md-1 col-sm-1 col-xs-1 np">    
                        <button type="button" class="mdl-button mdl-js-button mdl-button--icon mt-10 slot-menu">
                          <i class="fa fa-ellipsis-v fs-12"></i>
                        </button>

                        <div class="slot-toggle" style="position: #:position#;">
                          <div class="slot-menu-item pointer bb-thin">
                            <i class="fa fa-book spacer-10"></i>Boot Appointment
                          </div>
                          <div class="slot-menu-item pointer">
                            <i class="fa fa-ban spacer-10"></i>Block Slot
                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
      #}#

   #}  #
  </script>

<script id="noSlots" type="text/x-kendo-template"> 
  <h1 style="text-align: center;
    margin-top: 160px;
    font-size: 35px;">NO SLOTS AVAILABLE</h1>
</script>

<script id="noDataTemplate" type="text/x-kendo-template"> 
  <div class="row no-data" align="center" style="display: none;">
      <div class="col-md-12" style="padding-top:20%;">
          <i class="fa fa-yelp" style="color:lightgray; font-size:70px;"></i><br><br>
          <span class="fs-20" style="color:lightgray;"> No data found </span>
      </div>
  </div>
</script>

<script id="emptyCalendarTemplate" type="text/x-kendo-template"> 
    <div class="col col-md-6 col-sm-12 col-xs-12 padding-5 empty-calendar calendar-div" style="height:auto; float:none;">
        <div class="panel panel-default no-br no-shadow">
            <div class="panel-heading c-header no-br nb bg-darkblue" style="height:35px;">
            <div class="col-md-6 col-sm-6">
                              
            </div>
             <div class="col-md-5 col-sm-5" align="center">
                
             </div>
             <div class="col-md-1 col-sm-1" align="right">
                <i class="fa fa-times-circle pull-right font-white"></i>
             </div>
            </div>
            <div class="panel-body">
                <div class="calendar-container">
                    <div class="row calendar-header bg-white" style="height:20px;">
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                        <div class="col-md-1 col-sm-1 col-xs-1 col-lg-1" align="center"> </div>
                    </div>
                    <div class="row calendar-body">
                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </script>

</asp:Content>


