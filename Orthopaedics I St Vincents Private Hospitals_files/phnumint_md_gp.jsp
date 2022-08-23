




plaserverpath = 'vxml4.plavxml.com/sited/ref/';plamid = '1517';pladstr = '.svph.org.au';placbtimer = 15000;plasessid = "0e76a1ae5a8f4aeeab1ee126d3e96bf0";plaanupd = true;mzrqd = false ;opmxrqd = false;dckrqd = false;dclkurl="cm.g.doubleclick.net/pixel?google_nid=delacon_dmp&google_cm&sessid=";adbrqd = false;szkrqd = false;tealiumrqd = false;metarqd = false;var placids = '99399';var placidsarray = placids !== "null" ? placids.split(",") : [];

phoneNumUpdateCompleted=false;

function chkIfCallMade(){
if (!phoneNumUpdateCompleted || false) {phoneNumUpdateCompleted = updatePhoneNumber();}
var timecookieval = (((new Date()).getTime() - 1659418959370  ) / 60000).toFixed(2);			
chkIfCall_Counter = chkIfCall_Counter + 1;

if (chkIfCall_Counter < 20 && true){
var ucidstr = _getuaidstr();
var dd = document, ll = dd.createElement('script'), ss = dd.getElementsByTagName('script')[0];
ll.type = 'text/javascript'; ll.async = true;				
ll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'chkcmad_md_gp.jsp?' + ucidstr + 'sessid=' + plasessid + '&m_id=' + plamid + '&counter=' +  chkIfCall_Counter + '&cbtimer=' + 15000 +'&cachebuster=' + (new Date()).getTime() + '&lapse=' + timecookieval;
if (ss != null && ss.parentNode != null) {ss.parentNode.insertBefore(ll, ss);}else{document.documentElement.appendChild(ll);}if(typeof mzrqd != "undefined" && mzrqd && typeof dctrk != "undefined") {dctrk.maxyCapture();}}
else{
clearInterval ( chkIntervalId );chkIntervalId = 0;}}
function dela_dfa_check(delares){
if (delares.indexOf("done_") == 0 && delares != "done_") {
var doneDFAUrl = delares.substring(5);
var bodyFirstChild = document.body.firstChild;
var imgVar = document.createElement('img');
imgVar.width=1; imgVar.height=1; imgVar.style.display = 'none'; imgVar.async = true; imgVar.src = doneDFAUrl;
document.body.insertBefore(imgVar, bodyFirstChild);}
else if ("allmatched" == delares){
clearInterval(chkIntervalId);chkIntervalId = 0;}}
function dela_check(pkeyin, delares, url){
if (delares.indexOf("done_") == 0 && delares != "done_") {
var doneGAId = delares.split("_");
_gaq = _gaq || [];_gaq.push(['delacon._setAccount', doneGAId[1]]); _gaq.push(['delacon._addDevId', 'D85Fz']); 
if (typeof url == "undefined") {url = '/delaconconversion.htm';}
_gaq.push(['delacon._setCustomVar', 4, 'calltracking_pkeyin', pkeyin, 3]);
_gaq.push(['delacon._trackPageview', url]);					
if (Object.prototype.toString.call(_gaq) == '[object Array]' || _gaq instanceof Array) {
(function () { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();}}
else if ("allmatched" == delares){
clearInterval(chkIntervalId);chkIntervalId = 0;}}
function dela_ua_check(pkeyin, delares, url){
if (delares.indexOf("done_") == 0 && delares != "done_") {
var doneGAId = delares.split("_");				
if (typeof ga == 'undefined') {
(function(i,s,o,g,r,a,m){i['GoggleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
a=s.createElement(o),m=s.getElementsByTagName(o)[0];
a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})
(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', doneGAId[1]);}
if (typeof url == "undefined") {url = '/delaconconversion.htm';}
var sent = false;
if (typeof ga.getAll != "undefined") {			
var trackers = ga.getAll();
for (var i = 0; i < trackers.length && !sent; i++) {
var t = trackers[i];if (t.get("trackingId") == doneGAId[1]) {t.send('pageview', {'page' : url});sent = true;}}}
if (!sent) {var n = "De" + Math.floor(Math.random()*10000);ga('create', doneGAId[1], {'name': n});ga(n + '.send', 'pageview', {'page' : url});}}
else if ("allmatched" == delares){clearInterval(chkIntervalId);chkIntervalId = 0;}}
if (typeof ga != "undefined") {ga(function(tracker) {if (typeof tracker == "undefined" && typeof ga.getAll != "undefined" && ga.getAll().length > 0) {tracker = ga.getAll()[0];} if (typeof tracker != "undefined" && tracker.get("clientId") != null) {ucidstr = "uacid=" + tracker.get("clientId") + "&"; if (!ucidsent && plasessid != "") {var dddd = document, llll = dddd.createElement('script'), ssss = dddd.getElementsByTagName('script')[0];llll.type = 'text/javascript'; llll.async = true;llll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&uacid=' + tracker.get("clientId");if (ssss != null && ssss.parentNode != null) {ssss.parentNode.insertBefore(llll, ssss);} else {document.documentElement.appendChild(llll);}ucidsent=true;}}});}	
var dela_nospantag = false;var dela_event_no_stop = false;var _gaq = _gaq || [];var chkIntervalId = chkIntervalId || setInterval ( "chkIfCallMade()", placbtimer );var delaconreq = false;var chkIfCall_Counter = 0;		
phoneNumUpdateCompleted = updatePhoneNumber("99399,1300 462 115,true,02 8382 0515,au,|");
if (!phoneNumUpdateCompleted) {
if (window.addEventListener) {window.addEventListener('load', updatePhoneNumber, false);}
else if (window.attachEvent) {window.attachEvent('onload', updatePhoneNumber);}}	
	ucidsent = typeof ucidsent == "undefined" ? false : ucidsent;
	if (!ucidsent) {
		setTimeout(function() {
			var ucidstr = _getuaidstr();
			if (ucidstr.length > 0) {
				if (ucidstr.substr(ucidstr.length - 1) == "&") {
					ucidstr = ucidstr.substr(0, ucidstr.length - 1);
				}
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?' + ucidstr + '&sessid=' + plasessid;
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}
				ucidsent = true;
			}
		}, 1500);
	}
		
//	if (typeof(szUID) != "undefined" && typeof(szCID) != "undefined" && typeof(szSuccess) != "undefined") {
//		setTimeout( function() {
//			if (szSuccess == 1 && szUID != "" && szCID != "") {
//			
//				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
//				lll.type = 'text/javascript'; lll.async = true;
//				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&szmkuserid=' + szUID + '&szmkconvid=' + szCID;
//				sss.parentNode.insertBefore(lll, sss);	
//			}
//		}, 2500);
//	}

	if (typeof(szUID) != "undefined" && typeof(szCID) != "undefined" && typeof(szSuccess) != "undefined") {
		setTimeout( function() {
			if (szSuccess == 1 && szUID != "" && szCID != "") {
			
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&szmkuserid=' + szUID + '&szmkconvid=' + szCID;
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}
			}
		}, 2500);
	}

	if (window.cookieGet && cookieGet("_mkto_trk") != "" ) {
		setTimeout( function() {
			var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
			lll.type = 'text/javascript'; lll.async = true;
			lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&marketoid=' + encodeURIComponent(cookieGet("_mkto_trk"));
			if (sss != null && sss.parentNode != null) {
				sss.parentNode.insertBefore(lll, sss);	
			}
			else {
				document.documentElement.appendChild(lll);
			}		
			
		}, 3000);
	}
	
	
	setTimeout( function() {
		if (delaGetGlobalVar("Signal.suid")) {
			var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
			lll.type = 'text/javascript'; lll.async = true;
			lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&ssuid=' + encodeURIComponent(delaGetGlobalVar("Signal.suid"));
			if (sss != null && sss.parentNode != null) {
				sss.parentNode.insertBefore(lll, sss);	
			}
			else {
				document.documentElement.appendChild(lll);
			}
		}
	}, 3500);
	

	window["optimizely"] = window["optimizely"] || [];
	window["optimizely"].push({
		type: "addListener",
		filter: {
			type: "lifecycle",
			name: "initialized"
		},
		handler: onOptimizelyInitializedTriggerDela
	});
		
	window["optimizely"].push({
		type: "addListener",
		filter: {
			type: "lifecycle",
			name: "campaignDecided"
		},
		handler: onOptimizelyCampaignDecidedTriggerDela
	});
	
	window["optimizely"].push({
		type: "addListener",
		filter: {
			type: "lifecycle",
			name: "activated"
		},
		handler: onOptimizelyActivatedTriggerDela
	});
	
	window["optimizely"].push({
		type: "addListener",
		filter: {
			type: "lifecycle",
			name: "pageActivated"
		},
		handler: onOptimizelyPageActivatedTriggerDela
	});	
	
	function onOptimizelyCampaignDecidedTriggerDela(event) {
		console.log("Optimizely X campaign decided function is called");
		var optimizelyData, optimizelyVisitorId, optimizelyState;
		optimizelyData = event.optimizely.get("data");
		optimizelyVisitorId = optimizely.get("visitor_id");
		optimizelyState = optimizely.get("state")
				
		console.log("optimizer event : " + event.data.decision.variationId + ":" + event.data.campaign_name); 		
		console.log("##" + optimizelyData);
		console.log("##" +optimizelyVisitorId);
		console.log("##" + optimizelyState);		
	
	}
	
	function onOptimizelyInitializedTriggerDela() {
		console.log("Optimizely X initializer function is called");
	}
	
	function onOptimizelyActivatedTriggerDela() {
		console.log("Optimizely X activate function is called");
	}	

	function onOptimizelyPageActivatedTriggerDela() {
		console.log("Optimizely X page activate function is called");
	}

	setTimeout( function() {
		if (typeof(optimizely) != "undefined") {
			if(typeof(optimizely.getProjectId) == "function" && typeof(optimizely.getAccountId) == "function") {

				var opmprjid = optimizely.getProjectId();
				var opmaccid = optimizely.getAccountId();
				var opmusrid = cookieGet("optimizelyEndUserId");
				var opmvaris = cookieGet("optimizelyBuckets");
				var opmsegms = cookieGet("optimizelySegments");			

				var extTrkParameters = "";

				if (typeof getExtTrkParameters == "function") 
				{
					extTrkParameters = getExtTrkParameters();
				}

				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath +'integration.jsp?sessid=' + plasessid + '&opmusrid=' + opmusrid + '&opmprjid=' + opmprjid + '&opmaccid=' + opmaccid + '&opmvaris=' + encodeURIComponent(opmvaris) + "&opmsegms=" + encodeURIComponent(opmsegms) + extTrkParameters;
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}		
			}
			if (typeof(optimizely.get) == "function"){
				var optimizelyData, optimizelyVisitorId, optimizelyState;
				optimizelyData = optimizely.get("data");
				optimizelyVisitorId = optimizely.get("visitor_id");
				optimizelyState = optimizely.get("state")
				
				//console.log("optimizelyGet function result : ");

				if (optimizelyData != null && optimizelyVisitorId != null && optimizelyState != null) {
				   try{
					var opmxvisid, opmxaccid, opmxprjid, campaigns, opmxcamp, extTrkParameters;
					opmxvisid = optimizelyVisitorId.randomId;
					opmxaccid = optimizelyData.accountId;
					opmxprjid = optimizelyData.projectId;
					opmxcamp = [];
					campaigns = optimizelyState.getCampaignStates({isActive:true});
					extTrkParameters = "";
					for(var prop in campaigns){
						if(campaigns.hasOwnProperty(prop)){
							opmxcamp.push({campaign_id:prop,experiment_id:campaigns[prop].experiment.id,variation_id:campaigns[prop].variation.id});		
						}
					}
					
					if (typeof getExtTrkParameters == "function") 
					{
						extTrkParameters = getExtTrkParameters();
					}

					var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
					lll.type = 'text/javascript'; lll.async = true;
					lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath +'integration.jsp?sessid=' + plasessid + '&opmxvisid=' + opmxvisid + '&opmxprjid=' + opmxprjid + '&opmxaccid=' + opmxaccid + '&opmxcamp=' + encodeURIComponent(JSON.stringify(opmxcamp)) + extTrkParameters;
					if (sss != null && sss.parentNode != null) {
						sss.parentNode.insertBefore(lll, sss);	
					}
					else {
						document.documentElement.appendChild(lll);
					}				
				   }catch(e){
				   	console.log(e);
				   }
				}
			}
		}
	}, 3000);
	

	if (typeof(extTrkSent) == "undefined" || !extTrkSent) {	
		setTimeout( function() {				
			if (typeof extTrkStr == "string" && extTrkStr.length > 0) {		
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'extratrack.jsp?sessid=' + plasessid + '&extTrkStr=' + extTrkStr + '&extTrkAction=' + (typeof extTrkAction == "string" ? extTrkAction : ""); 
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}	
			}
		}, 3000);
	}
	
	setTimeout( function() {
		var id247 = typeof delaGet247Var == "function" ? delaGet247Var() : "";
		if (id247 != "") {
			var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
			lll.type = 'text/javascript'; lll.async = true;
			lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&id247=' + encodeURIComponent(id247);
			
			if (sss != null && sss.parentNode != null) {
				sss.parentNode.insertBefore(lll, sss);	
			}
			else {
				document.documentElement.appendChild(lll);
			}
		}
	
		if (window.mzrqd) {
			var idmaxy = typeof delaGetMaxymizerVar == "function" ? delaGetMaxymizerVar() : "";
			if (idmaxy != "") {			
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&maxyid=' + encodeURIComponent(idmaxy);
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}
				mzrqd = false;
			}
		}

		if (window.dckrqd) {	
			var ddd = document, lll = ddd.createElement('img'), sss = document.documentElement;
			lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + dclkurl + plasessid;
			lll.style.display = "none";
			sss.appendChild(lll);
		}		
	}, 4000);
	
	setTimeout( function() {
		if (window.adbrqd) {
			var adbCloudVisitorId,adbVisitorId,vis = null;
			adbCloudVisitorId = null;
			adbVisitorId = null;
			 
			if (typeof visitor != "undefined") {
				vis = visitor;	
				if (vis && typeof vis.getMarketingCloudVisitorID == "function") {
					adbCloudVisitorId = vis.getMarketingCloudVisitorID();
					console.log("MarketingCloudVisitorID = " + adbCloudVisitorId);
				}
				if (vis && typeof vis.getAnalyticsVisitorID == "function") {
					adbVisitorId = vis.getAnalyticsVisitorID();
					console.log("Visitor ID (visitor object) = " + adbVisitorId);
				}
			}
			
			if ((adbCloudVisitorId == null || adbCloudVisitorId == "")
				&& (adbVisitorId == null || adbVisitorId == "")
				&& typeof _satelite != "undefined" && typeof _satelite.getVisitorId() == "function") {
				vis = _satelite;
				console.log("getting visitor from _satelite");
				if (vis && typeof vis.getMarketingCloudVisitorID == "function") {
					adbCloudVisitorId = vis.getMarketingCloudVisitorID();
					console.log("MarketingCloudVisitorID = " + adbCloudVisitorId);
				}
				if (vis && typeof vis.getAnalyticsVisitorID == "function") {
					adbVisitorId = vis.getAnalyticsVisitorID();
					console.log("Visitor ID (visitor object) = " + adbVisitorId);
				}
			}
			
			if ((adbCloudVisitorId == null || adbCloudVisitorId == "")
				&& (adbVisitorId == null || adbVisitorId == "")
				&& typeof s_c_il != "undefined" && typeof s_c_il[0] != "undefined") {
				vis = s_c_il[0];
				console.log("getting visitor from s_c_il");
				if (vis && typeof vis.getMarketingCloudVisitorID == "function") {
					adbCloudVisitorId = vis.getMarketingCloudVisitorID();
					console.log("MarketingCloudVisitorID = " + adbCloudVisitorId);
				}
				if (vis && typeof vis.getAnalyticsVisitorID == "function") {
					adbVisitorId = vis.getAnalyticsVisitorID();
					console.log("Visitor ID (visitor object) = " + adbVisitorId);
				}
			}
			
			if ((adbCloudVisitorId == null || adbCloudVisitorId == "")
				&& (adbVisitorId == null || adbVisitorId == "")
				&& typeof _s_c_il != "undefined" && typeof _s_c_il[0] != "undefined") {
				vis = _s_c_il[0];
				console.log("getting visitor from _s_c_il");
				if (vis && typeof vis.getMarketingCloudVisitorID == "function") {
					adbCloudVisitorId = vis.getMarketingCloudVisitorID();
					console.log("MarketingCloudVisitorID = " + adbCloudVisitorId);
				}
				if (vis && typeof vis.getAnalyticsVisitorID == "function") {
					adbVisitorId = vis.getAnalyticsVisitorID();
					console.log("Visitor ID (visitor object) = " + adbVisitorId);
				}
			}
			
			if ((adbVisitorId == null || adbVisitorId == "") && window.cookieGet && cookieGet("s_vi") != "" ) {
				adbVisitorId = cookieGet("s_vi");
				console.log("Visitor ID (cookie) = " + adbVisitorId);
			}
			adbCloudVisitorId = (adbCloudVisitorId == null) ? "" : adbCloudVisitorId;
			adbVisitorId = (adbVisitorId == null) ? "" : adbVisitorId;
			if (adbCloudVisitorId != "" || adbVisitorId != "") {
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&adbid=' + encodeURIComponent(adbVisitorId) + '&adbcid=' + encodeURIComponent(adbCloudVisitorId);
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}			
			}
		}
	}, 10000);
	
	var szktmrid,szretrycnt,tealiumtmrid,tealiumretrycnt;
	szretrycnt = 3;
	if (window.szkrqd) {	
		szktmrid = setInterval(function () {
  
			if (typeof (SZCD) != 'undefined' && typeof(SZCD.status) != 'undefined' && 
			   (SZCD.status == 'complete' || SZCD.status == 'failed') && typeof (SZCD.UID) != 'undefined' && typeof(SZCD.VTID) != 'undefined')  {
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&szmkuserid=' + SZCD.UID + '&szmkconvid=' + SZCD.VTID;
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}	
							
				szretrycnt = -1;
			} else {			
				szretrycnt--;	
			}
			if (szretrycnt <= 0) {		
				clearInterval(szktmrid);
			}
		}, 5000);
 	}

	tealiumretrycnt = 3;
	if (window.tealiumrqd) {
		tealiumtmrid = setInterval(function () {
		
			if (typeof(utag_data) != 'undefined' && typeof(utag_data.tealium_visitor_id) != 'undefined')  {
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&tealiumvid=' + utag_data.tealium_visitor_id;
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}
			
				tealiumretrycnt = -1;
			} else {
				tealiumretrycnt--;	
			}
			if (tealiumretrycnt <= 0) {		
				clearInterval(tealiumtmrid);
			}
		}, 4000);
 	}
 	
 		
	setTimeout( function() {
		if (typeof(midExtTrkCode) != 'undefined') {
			if(midExtTrkCode.length > 0){
				var midExtTrkStr = eval(midExtTrkCode);
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'extratrack.jsp?sessid=' + plasessid + '&extTrkAction=u&extTrkStr=' + midExtTrkStr; 
				if (sss != null && sss.parentNode != null) {
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					document.documentElement.appendChild(lll);
				}
			}
		}
	}, 3000);
	
	if (window.metarqd) {
		setTimeout(function () {
			console.log("metareq is set to true");
			var fbp = cookieGet("_fbp");
			var fbc = cookieGet("_fbc");
			console.log(fbp + ":" + fbc);
			if (fbp != "" || fbc != "")  {
				console.log("going to send to Delacon about fb cookie");
				var ddd = document, lll = ddd.createElement('script'), sss = ddd.getElementsByTagName('script')[0];
				lll.type = 'text/javascript'; lll.async = true;
				lll.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + plaserverpath + 'integration.jsp?sessid=' + plasessid + '&fbp=' + fbp + "&fbc=" + fbc;
				if (sss != null && sss.parentNode != null) {
					console.log("insert");
					sss.parentNode.insertBefore(lll, sss);	
				}
				else {
					console.log("add");
					document.documentElement.appendChild(lll);
				}
			} 
		}, 4000);
 	}
 	
	


reloadNumbers=[];
delaconphonenums = '99399,1300 462 115,true,02 8382 0515,au,|';
document.cookie="delaconsessid=0e76a1ae5a8f4aeeab1ee126d3e96bf0; path=/; Domain=.svph.org.au;" + ('https:' == document.location.protocol ? ';SameSite=None; Secure' : '');

document.cookie="delaconphonenums=99399,1300 462 115,true,02 8382 0515,au,|; path=/; Domain=.svph.org.au;" + ('https:' == document.location.protocol ? ';SameSite=None; Secure' : '');

