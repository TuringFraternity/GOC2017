//Questa Events

$("#hr").click(function(){

	cmdetails=""; 
	cmdetails+="<b>Head Coordinator : </b></br>-Akbar</br>-Shubhi</p>";
//	cmdetails+="<b>Coordinator : </b></br>-Apurva Agarwal</p>";
//	cmdetails+="<b>Venue : </b></br>ClassRoom";

	$("#modalheader").html("HR");
	$("#modalbody").html(cmdetails);
});

$("#marketing").click(function(){

	cmdetails=""; 
	cmdetails+="<b>Head Coordinator : </b></br>-Gaurav</br>-Mehar</p>";
//	cmdetails+="<b>Coordinator : </b></br>-Apurva Agarwal</p>";
//	cmdetails+="<b>Venue : </b></br>ClassRoom";

	$("#modalheader").html("Marketing");
	$("#modalbody").html(cmdetails);
});

$("#finance").click(function(){

	cmdetails=""; 
	cmdetails+="<b>Head Coordinator : </b></br>-Padmesh</br>-Miralini</p>";
//	cmdetails+="<b>Coordinator : </b></br>-Apurva Agarwal</p>";
//	cmdetails+="<b>Venue : </b></br>ClassRoom";

	$("#modalheader").html("Finance");
	$("#modalbody").html(cmdetails);
});

//Quest End