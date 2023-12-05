// This function is for segmentation pids

$(document).ready(function () {
	// click event handler for button
	$("#btn").on("click", function () {
		$("#segmentpidresult").show();


		var getpids = document.getElementById("pidvalue").value;


		var getsegment = document.getElementById("segmentvalue").value;

		//document.write("Your pids is" + getpids +"And segement is:"+ getsegment);

		const pid = getpids.split("\n");
		length = pid.length;
		let text = "";
		let data = "{";
		var test = length - 1;
		let count = 0;
		for (var i = 0; i < length; i++) {
			text = pid[i];

			data += '\n"' + text + '": {';
			data += '\n"segments": ["' + getsegment + '"]' + "\n";
			if (test == count) {
				data += "   }" + "\n";
			}
			else {
				data += "   }," + "\n";
			}
			count += 1;
		}
		data += "\n }";
		console.log(data);
		document.getElementById("segmentpidresult").innerHTML = data;
	});
});

//// load function close

// segmentation pids ends here


// footer start here use javascript to load

window.onload = function () {
	runcode();
	function runcode() {
		const zafer = "<span><em>Designed and developed by </em>Mohammad Zafer Shekh</span>";
		document.getElementById("footer").innerHTML = zafer;
	};
}



// footer end here



//Url generator code start here


$(document).ready(function () {
	$('.group').hide();
	$('#section1').show();
	$('#url-devlop').change(function () {
		$('.group').hide();
		$('#' + $(this).val()).show();
	})
});


//Url generator dropdown code above

$(document).ready(function () {

	// click event handler for button

	$("#geturlbydata").on("click", function () {

		let pagetype = document.getElementById("pagetypedetails").value;
		let pagename = document.getElementById("pagedatadetails").value;
		let urldesktop = "https://www.nykaa.com/sp/" + pagetype + "/" + pagename;
		let urlapp = "https://www.nykaa.com/?dl_type=nlp&pagetype=" + pagetype + "&pagedata=" + pagename;
		let urldeeplink = "nykaa://nykaa?dl_type=nlp&pagetype=" + pagetype + "&pagedata=" + pagename;

		let urlgen = "<strong>Desktop Url: </strong>" + urldesktop + "<br /><br /><strong>App Url: </strong>" + urlapp + "<br /><br /><strong>Deeplink: </strong>" + urldeeplink;

		document.getElementById("result-url").innerHTML = urlgen;

	});
	$("#bulkgeturl").on("click", function () {
		var getdeskurl = $("#deskurldata").val();
		var spilturlsingle = getdeskurl.split("\n");
		var urllength = spilturlsingle.length;
		urlcomplitedata = "";
		for (var i = 0; i < urllength; i++) {
			var urlsup = spilturlsingle[i];
			var spilturldata = urlsup.split("/");
			if (spilturldata[3] == "sp") {
				// alert("Coming Soon!, Thank");
				// document.getElementById("bulkurlresult").innerHTML = getdeskurl;
				var title = spilturldata[5].replace(/-/g," ");
				let urldesktop = "https://www.nykaa.com/sp/" + spilturldata[4] + "/" + spilturldata[5];
				let urlapp = "https://www.nykaa.com/?dl_type=nlp&pagetype=" + spilturldata[4] + "&pagedata=" + spilturldata[5];
				let urldeeplink = "nykaa://nykaa?dl_type=nlp&pagetype=" + spilturldata[4] + "&pagedata=" + spilturldata[5];

				urlcomplitedata += "<strong style='text-transform: capitalize;'>Page Name: "+title+"</strong><br><strong>Desktop Url: </strong>" + urldesktop + "<br /><br /><strong>App Url: </strong>" + urlapp + "<br /><br /><strong>Deeplink: </strong>" 
				+ urldeeplink +"<br><br><br>";
				

			}
			else {
				alert("Hybrid/CMS Page Not Supported.");
			}
			document.getElementById("bulkurlresult").innerHTML = urlcomplitedata;
		}
		

	});

});




//Url generator code ends here



// brand and category code start here


$(document).ready(function () {

	

	// click event handler for button

	$("#getinventory").on("click", function () {

		document.getElementById("tabledata").innerHTML = "";

		var inventroyid = document.getElementById("inventroyid").value;
		let branda = "https://nykaa-widgets.nykaa.com/inventory/?q=";
		let brandb = "&page_types=app-category-listing,desktop-category-listing,mweb-category-listing";
		let tabledata = document.getElementById("tabledata");
		const inventorydata = inventroyid.split("\n");
		let data = "";
		var num = 1;

		var inventorylenth = inventorydata.length;
		for (var i = 0; i < inventorylenth; i++) {

			data = inventorydata[i];
			let row = tabledata.insertRow(-1);
			let c1 = row.insertCell(0);
			let c2 = row.insertCell(1);
			let c3 = row.insertCell(2);
			c1.innerText = num;
			c2.innerText = data;
			Urlmeta = branda + data + brandb;
			Urldata = '<a href="' + Urlmeta + '">Inventry URL....</a>';
			c3.innerHTML = Urldata;
			num += 1;
		}



	});
});

// brand and category code ends here



// pid generator code starts here

$(document).ready(function () {

	$("#getpid").on("click", function () {
		
			var selectsup = $("#select-sup").val();


			var pid = document.getElementById("piddata").value;

			const pidarr = pid.split("\n");
			let pidlength = pidarr.length;
			let result = "";
			let lastpid = pidlength - 1;
			let count = 0;


			

			for (var i = 0; i < pidlength; i++) {

				if(lastpid == count && selectsup == '-17,'){

					result += pidarr[i] + "-17";
				}
				else if (lastpid == count) {
					result += pidarr[i];
				}
				else{
					result += pidarr[i] + selectsup;
				}
				count += 1;

			}
			var pidres = document.getElementById("pidsresult");
			pidres.innerText = result;

		
	})
});


// pid generator code ends here

//Epoch timestamp Converter code start

$(document).ready(function(){
	$("#epochgetdata").on("click",function(){
		var datetimedata = document.getElementById("datetimeinput").value;
		var myDate = new Date(datetimedata);
		var myEpoch = myDate.getTime()/1000.0; //Convert to Epoch timezone
		document.getElementById("epochtimestampresult").innerHTML = "Epoch Timestamp: "+myEpoch;
		
	})
	$("#humandategetdata").on("click",function(){
		var datetimedata = document.getElementById("epochdatainput").value;
		var myDate = new Date( datetimedata *1000);
		myEpoch = myDate.toLocaleString();//Convert to normal timezone
		timesplit = myEpoch.split(",");
		gettime = timesplit[1];
		var date = myDate.getDate();
		var month = myDate.getMonth() + 1;
		var years = myDate.getFullYear();

		myEpoch = date+"/"+month+"/"+years+" "+gettime;
		document.getElementById("normaltimestampresult").innerHTML = myEpoch;
		
	})

});

//Epoch timestamp Converter code end


// Mark My Calendar Code start

$(document).ready(function(){

	// Function to format date and time as required by Google Calendar
	function formatDateTime(date) {
        return date.toISOString().replace(/-|:|\.\d+/g, '');
    }
	
	$("#getmmcurl").on("click", function(){
		$("#showappurl").show();
		$("#showdeskurl").show();
		var getmmctitle = document.getElementById("mmctitle").value;
		var getmmcdesc = document.getElementById("mmcdesc").value;
		var getmmcdate1 = document.getElementById("mmcstartdate").value;
		var getmmcdate2 = document.getElementById("mmcenddate").value;
		

		if(getmmctitle != "" && getmmcdesc != "" && getmmcdate1 != "" && getmmcdate2!= ""){
		//desktop Code
			var userstartDate = new Date(getmmcdate1);
			var userendDate = new Date(getmmcdate2);
			var encodedesc = encodeURIComponent(getmmcdesc).replace(/%20/g,"+");
			var adencodedesc = encodedesc.replace(/%/g,"%25");
			var googleCalendarBaseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit?';
			var eventUrl = googleCalendarBaseUrl + '&text=' + encodeURIComponent(getmmctitle) +
            '&details=' + adencodedesc +
            '&dates=' +
            formatDateTime(userstartDate) + '/' +
            formatDateTime(userendDate);

			document.getElementById("mmcurldesktopresult").innerHTML = eventUrl;


		//app Code
			var mmcdate1 = new Date(getmmcdate1);
			var convertdata1 = mmcdate1.getTime();
			var mmcdate2 = new Date(getmmcdate2);
			var convertdata2 = mmcdate2.getTime();
			var appmmcurl = convertdata1 + "||" + convertdata2 + "||" + getmmctitle +
				"||www.nykaa.com||" + getmmcdesc + "||";
			document.getElementById("mmcappurlresult").innerHTML = appmmcurl;

		}
		else{
			alert("Please Fill all the details!")
		}

		
	
		
	})
});

// Mark My Calendar Code ends