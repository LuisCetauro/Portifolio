$(document).ready(function () {
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    


    //p1
    $("#cover1").click(function () {
        $("#main").hide();
        $("#project1").show();
       
    });
 
    $("#button-right1").click(function () {
        project1next();
    });

    $("#button-left1").click(function () {
        project1before();
    });

    $("#button-back1").click(function () {

        $("#project1").hide();
        $("#main").show();
    });


    //p2
    $("#cover2").click(function () {
        $("#main").hide();
        $("#project2").show();
    });

    $("#button-right2").click(function () {
        project2next();
    });

    $("#button-left2").click(function () {
        project2before();
    });

    $("#button-back2").click(function () {

        $("#project2").hide();
        $("#main").show();
    });

    //p3
    $("#cover3").click(function () {
        $("#main").hide();
        $("#project3").show();
    });

    $("#button-right3").click(function () {
        project3next();
    });

    $("#button-left3").click(function () {
        project3before();
    });

    $("#button-back3").click(function () {

        $("#project3").hide();
        $("#main").show();
    });


    //p4

    $("#cover4").click(function () {
        $("#main").hide();
        $("#project4").show();
    });

    $("#button-right4").click(function () {
        project4next();
    });

    $("#button-left4").click(function () {
        project4before();
    });

    $("#button-back4").click(function () {

        $("#project4").hide();
        $("#main").show();
    });

    $("#wppb").click(function () {
        transfer(0);
    });
    $("#wppbm").click(function () {
        transfer(0);
    });
    $("#emailb").click(function () {
        transfer(1);
    });
    $("#emailbm").click(function () {
        transfer(1);
    });

    showproject1();
    showproject2();
    showproject3();
    showproject4();

});

