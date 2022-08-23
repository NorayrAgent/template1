function WMSSessionConfig(){}WMSSessionConfig.CHAT=1,WMSSessionConfig.CHAT_PRESENCE=2,WMSSessionConfig.PRESENCE_PERSONAL=4,WMSSessionConfig.PRESENCE_ORG=8,WMSSessionConfig.LOADBALANCED=16,WMSSessionConfig.MP=32,WMSSessionConfig.CROSS_PRD=64,WMSSessionConfig.MULTI_DISPATCH=128,WMSSessionConfig.REUSE_SESSION=256,WMSSessionConfig.TRANSIENT_PEX=512,WMSSessionConfig.APPNOTIFY=1024;var _WMSAUTHTOKEN,_WMSAUTHSCOPE,_WMSZAID,_WMSPOTYPE,_WMSOAUTHTOKEN,_WMSOAUTHORGSCOPE,_WMSOAUTHUSERSCOPE,_WMSOAUTHOPRSCOPE,_WMSRTCATOKEN,wmsCountDownTimer,WM_TICKET="IAMAGENTTICKET",WM_D="zoho.com",WM_SAMED=!1,WM_FD=!1,WM_C="15",_WMSCONT="wms",wms_op=-1!=navigator.userAgent.indexOf("Opera"),wms_sf=-1!=navigator.userAgent.indexOf("Safari"),wms_ie=!wms_op&&/msie/i.test(navigator.userAgent),lfromstatic=!1,wmsjsversion="v60",_WMS_NODOMAINCHANGE=!1,_WMSSST=!1,_RETRYREGINTERVAL=1e4,iswmsframemonitorrunning=!1,iswmsframeloaded=!1,retryregistertimer=null,wmsdebuginfo=[],_WMS_RETRY_COUNT=0,wmsUserConfig={},_WMS_LP="false",_NEWCLIENTPORTAL_AUTHENTICATION=!1;function push(e){WmsLite.push(e),setTimeout(function(){WmsLite.updateClientDebugStore(e)},1)}function getPrd(){return WmsLite.prd}function getWmsConfig(){return WM_C}function getUserName(){return WmsLite.uname}function getNickName(){return WmsLite.nname}function getZuid(){return WmsLite.zuid}function getUserId(){return WmsLite.uid}function getSid(){return WmsLite.sid}function getRawSid(){return WmsLite.rsid}function isReconnecting(){return WmsLite.reconnecting}function disablewms(){WmsLite.disable()}function isdisablewms(){return WmsLite.disablewms}function goOffline(){}function getWmsContacts(){return{}}function updateWmsContacts(){}function getWmsXA(){return WmsLite.XA}function WmsLite(){}function getWMSOAuthCredentials(){return{token:_WMSOAUTHTOKEN,orgscope:_WMSOAUTHORGSCOPE,userscope:_WMSOAUTHUSERSCOPE,oprscope:_WMSOAUTHOPRSCOPE}}function getWMSRTCAccessToken(){return _WMSRTCATOKEN}function getNewClientPortalAuthentication(){return _NEWCLIENTPORTAL_AUTHENTICATION}function populateSpecialWMSAnnouncement(e){WmsLite.populateSpecialWMSAnnouncement(e)}function isLongPollingForced(){return _WMS_LP}function _getAuthType(){return WmsLite.authtype}function getAuthToken(){return _WMSAUTHTOKEN}function getAuthScope(){return _WMSAUTHSCOPE}function getZAID(){return _WMSZAID}function nocachefix(){return"&nocache="+(new Date).getTime()}!function(){var t=[];WmsLite.updateClientDebugStore=function(e){1e3<=t.length&&t.shift(),e.timestamp=(new Date).getTime(),e.mtype&&("12"===e.mtype?e.msg&&(e.msg.msg="**********",e.msg.notification_text&&(e.msg.notification_text="**********")):"20"===e.mtype&&e.msg&&(e.msg.comment="**********",e.msg.msg&&(e.msg.msg.comment="**********"))),t.push(e)},WmsLite.getClientDebugStore=function(){return t}}(),WmsLite.jsstaticdomain="js.zohocdn.com",WmsLite.bsettings={},WmsLite.network_info={},WmsLite.getDebugInfo=function(){return wmsdebuginfo},WmsLite.updateDebugInfo=function(e){"string"==typeof e?(e+=";;"+(new Date).getTime(),300<=wmsdebuginfo.length&&wmsdebuginfo.splice(0,1),wmsdebuginfo.push(e)):wmsdebuginfo=e},WmsLite.setOAuthCredentials=function(e,t,i,n){_WMSOAUTHTOKEN=e,_WMSOAUTHORGSCOPE=t||_WMSOAUTHORGSCOPE,_WMSOAUTHUSERSCOPE=i||_WMSOAUTHUSERSCOPE,_WMSOAUTHOPRSCOPE=n||_WMSOAUTHOPRSCOPE,"function"==typeof WmsLite.updateOAuthCredInBridge&&WmsLite.updateOAuthCredInBridge()},WmsLite.init=function(){function t(e){var t=JSON.parse(e.data),i=t.opr,n=t.params;"push"===i?push.apply(null,n):"serverup"===i?WmsLite.serverup.apply(null,n):"serverdown"===i?WmsLite.serverdown.apply(null,n):"updateDebugInfo"===i?WmsLite.updateDebugInfo.apply(null,n):"disablewms"===i&&disablewms()}return function(){if(_WMS_NODOMAINCHANGE||wms_op||WM_SAMED||!(!wms_ie||wms_ie&&WM_FD)||(document.domain=WM_D),void 0!==document.querySelector){var e=document.querySelector('script[src*="ichat"][src*="wmslite"]');e&&!e.getAttribute("isdev")&&(WmsLite.jsstaticdomain=e.src.split("/")[2])}this.lastconnect=-1,this.disablewms=!1,WmsLite.offline=!1,WmsLite.initcountdown=!0,WmsLite.isCrossOriginAllowed()&&(WmsLite.triggerbind=function(){var e={opr:"triggerbind",params:{zuid:WmsLite.zuid,rawsid:WmsLite.rsid,sid:WmsLite.sid}};WmsLite.pconnectframe.contentWindow.postMessage(JSON.stringify(e),"*")},window.removeEventListener("message",t),window.addEventListener("message",t))}}(),WmsLite.isCrossOriginAllowed=function(){if(WmsLite.crossoriginallowed&&"$"===this.zuid.charAt(0))return!0},WmsLite.allowCrossOrigin=function(e){WmsLite.crossoriginallowed=!0,WmsLite.hosturl=e},WmsLite.reconnect=function(e,t,i){null!=i&&1==i&&(this.reconnecting=!1),1!=this.reconnecting&&(this.reconnecting=!0,null==this.retry&&(this.retry=0),this.retry++,setTimeout(function(){WmsLite.registerWms(WmsLite.prd,WmsLite.zuid,WmsLite.uname,null,!0,!0)},e),this.serverdown())},WmsLite.registerZuid=function(e,t,i,n){this.registerWms(e,t,i,null,n)},WmsLite.setIamTicketName=function(e){WM_TICKET=e},WmsLite.setConfig=function(e){WM_C=e},WmsLite.setDomain=function(e){WM_D=e},WmsLite.useSameDomain=WmsLite.enableCustomDomain=function(){WM_SAMED=!0},WmsLite.forceDomainChange=function(){WM_FD=!0},WmsLite.setNoDomainChange=function(){_WMS_NODOMAINCHANGE=!0},WmsLite.setNewClientPortalAuthentication=function(){_NEWCLIENTPORTAL_AUTHENTICATION=!0},WmsLite.setRTCAccessToken=function(e){_WMSRTCATOKEN=e},WmsLite.registerAnnon=function(e,t,i,n){WmsLite.authtype=4,WmsLite.register(e,t,i,n)},WmsLite.register=function(e,t,i,n,s,o,r,m,a){if("undefined"==typeof JSON){var u=document.createElement("script"),c=window.location.protocol,l="https:"===c?wmsjsversion+"_https":wmsjsversion;u.type="text/javascript",u.src=c+"//"+this.jsstaticdomain+"/ichat/"+l+"/js/0ea6dc8b_json2.min.js",document.body.appendChild(u),WmsLite.attachonload.call(u,W)}else W();function W(){_WMSAUTHSCOPE=o,_WMSZAID=r,_WMSPOTYPE=m,(_WMSAUTHTOKEN=s)&&_WMSAUTHSCOPE&&(WmsLite.authtype=1),_WMSAUTHTOKEN&&_WMSZAID&&(WmsLite.authtype=8),_WMSZAID&&WmsLite.tokenpairauth&&(WmsLite.authtype=10),_WMSOAUTHTOKEN&&(WmsLite.authtype=9),_WMSRTCATOKEN&&(WmsLite.authtype=13),WmsLite.registerWms(e,t,null,i,n,null,a)}},WmsLite.attachonload=function(e){void 0!==this.readyState?this.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||e.call(this)}:this.onload=function(){e.call(this)}},WmsLite.enablePreconnectToWMS=function(e){WmsLite.preconnect_wms_domain=e},WmsLite.setNetworkDetails=function(e){return WmsLite.network_info.id=e.id,WmsLite.network_info.user_id="o-"+WmsLite.prd+"-"+e.id+"-"+WmsLite.zuid,WmsLite.network_info.url=e.url,WmsLite.network_info.details=e.details,WmsLite.network_info.user_id},WmsLite.enableCrossOriginIsolation=function(){WmsLite.crossoriginisolation=!0},WmsLite.registerWms=function(e,t,i,n,s,o,r){if(WmsLite.preconnect_wms_domain){var m=document.createElement("link");m.href="https://"+WmsLite.preconnect_wms_domain,m.rel="preconnect",document.head.appendChild(m)}if(this.prd=e,this.uname=null!=i&&null!=i?i:"",this.zuid=null!=t&&null!=t?t:"",this.zuid=this.zuid&&r?this.setNetworkDetails(r):this.zuid,_WMS_RETRY_COUNT++,WmsLite.updateDebugInfo("onRegister. Tab ID: "+window.getWmsTabId()+" count: "+_WMS_RETRY_COUNT),void 0===WmsLite.authtype&&WmsLite.enableTokenPairAuth(),void 0===this.nname&&(this.nname=null!=n&&null!=n?n:""),null==o&&this.init(null!=s&&s),this.pconnectframe=document.getElementById("pconnect"),!this.pconnectframe){var a=document.createElement("iframe");a.name="wmspconnect",a.id="pconnect",a.style.display="none",document.body.appendChild(a),this.pconnectframe=document.getElementById("pconnect")}var u=""!=this.zuid?this.zuid:this.uname,c="";WmsLite.network_info.url&&(c="/"+(c="/"===WmsLite.network_info.url[0]?WmsLite.network_info.url.slice(1):WmsLite.network_info.url));var l="/"+_WMSCONT+c+"/pconnect.sas?settings=true&prd="+this.prd+"&uname="+u+"&samedomain="+WM_SAMED+nocachefix()+"&config="+WM_C+"&wmscont="+_WMSCONT+"&nodomainchange="+_WMS_NODOMAINCHANGE+"&retrycount="+_WMS_RETRY_COUNT+"&tabid="+window.getWmsTabId();lfromstatic&&(l+="&staticdomain="+WmsLite.jsstaticdomain+"&staticversion="+wmsjsversion),_WMSSST&&(l+="&sst=true"),WmsLite.tokenpairauth&&(l+="&tokenpair=true"),WmsLite.crossoriginallowed&&(l+="&crossorigin=true"),WmsLite.hosturl&&(l=WmsLite.hosturl+l),WmsLite.frameorigin&&(l+="&frameorigin="+WmsLite.frameorigin),WmsLite.fp_hash&&(l+="&hash="+WmsLite.fp_hash["wmsbridge.js"].split("_")[0]),_WMSZAID&&(l+="&zaid="+_WMSZAID),_WMSPOTYPE&&(l+="&potype="+_WMSPOTYPE),WmsLite.crossoriginisolation&&(l+="&coi=true"),this.pconnectframe.src=l,iswmsframeloaded=!1,WmsLite.scheduleWMSFrameMonitor()},WmsLite.scheduleWMSFrameMonitor=function(){iswmsframemonitorrunning||(iswmsframemonitorrunning=!0,WmsLite.updateDebugInfo("Started frame monitor"),clearTimeout(retryregistertimer),retryregistertimer=setTimeout(function(){WmsLite.registerMonitor()},6*_RETRYREGINTERVAL))},WmsLite.registerMonitor=function(){WmsLite.offline=!0,WmsLite.updateDebugInfo("Retry triggered from frame monitor"),WmsLite.isReuseSession()?WmsLite.retryRegister():WmsLite.initReconnect()},WmsLite.retryRegister=function(){WmsLite.isReuseSession()&&!op&&top.WmsLite.offline||WmsLite.reconnect(0,"Retry Register",!0),clearTimeout(retryregistertimer),retryregistertimer=setTimeout(function(){WmsLite.registerMonitor()},_RETRYREGINTERVAL)},WmsLite.initReconnect=function(e,t){WmsLite.offline=!0;var i=!!WmsLite.initcountdown;(WmsLite.initcountdown=!1)===iswmsframeloaded?WmsLite.reconnectTimer(i,WmsLite.retryRegister,e,t):WmsLite.reconnectTimer(i,WmsLite.triggerbind,e,t)},WmsLite.retryConnection=function(){iswmsframemonitorrunning?WmsLite.forceRegister():WmsLite.forceReconnect()},WmsLite.forceRegister=function(){WmsLite.initcountdown=!0,WmsLite.retryRegister()},WmsLite.forceReconnect=function(){WmsLite.initcountdown=!0,WmsLite.triggerbind()},WmsLite.reconnectTimer=function(){var o=[30,60,90,120],r=0;function m(e,t){return e=+e,t=+t,Math.floor(Math.random()*(t-e+1)+e)}return window.addEventListener("online",function(){r=-1}),function(e,t,i,n){e?o[r=0]=m(5,30):r<o.length-1&&r++;var s=o[r];i&&(s=m(i,n=n||i)),WmsLite.countDown(s,t)}}(),WmsLite.countDown=function(t,i){clearTimeout(wmsCountDownTimer),function e(){setTimeout(function(){"function"==typeof WmsliteImpl.reconnectionCountDown&&WmsliteImpl.reconnectionCountDown(t)},1);if(0===t)return clearTimeout(wmsCountDownTimer),void i();t--;wmsCountDownTimer=setTimeout(e,1e3)}()},WmsLite.isReuseSession=function(){return(WM_C&WMSSessionConfig.REUSE_SESSION)==WMSSessionConfig.REUSE_SESSION},WmsLite.clearWMSFrameMonitor=function(e){iswmsframemonitorrunning&&WmsLite.updateDebugInfo("Stopped frame monitor"),clearTimeout(retryregistertimer),WmsLite.initcountdown=!0,iswmsframemonitorrunning=!1,e&&(WmsLite.offline=!1)},WmsLite.setWmsContext=function(e){_WMSCONT=e},WmsLite.disable=function(){this.disablewms=!0,this.abortBind(),this.clearWMSFrameMonitor()},WmsLite.push=function(e){if(0==e.mtype){var t=e.msg;this.uid=t.uid,this.nname=t.nname,this.sid=t.sid,this.rsid=t.rsid,this.zuid=t.zuid,this.XA=t.xa,this.retry=0,this.reconnecting=!1,WmsLite.clearWMSFrameMonitor(!0),iswmsframeloaded=!0,this.serverup(e.msg)}else if(-1==e.mtype){var i,n=e.msg||{};if(n&&n.instruction)i=n.instruction.split("-")[0];void 0===i&&this.reconnect(10,"psdown",!0)}else if(-2==e.mtype){this.disable(),n=e.msg;try{WmsliteImpl.handleLogout(n.reason)}catch(e){}}else if(-7==e.mtype)try{WmsliteImpl.handleServiceMessage(e.msg)}catch(e){}else if(-5==e.mtype){n=e.msg,this.disable();try{WmsliteImpl.handleAccountDisabled(n.reason),WmsliteImpl.handleAuthFailure()}catch(e){}}else if(-16==e.mtype)iswmsframeloaded=!0,WmsLite.clearWMSFrameMonitor();else if(-12==e.mtype||-17==e.mtype){iswmsframeloaded=!1,WmsLite.scheduleWMSFrameMonitor();try{WmsliteImpl.handleAuthFailure()}catch(e){}}else if(-10==e.mtype){wmsUserConfig.infomsgid=e.msg.id,wmsUserConfig.infomsgprd=e.prd;try{""!==e.msg.msg?WmsliteImpl.showAnnouncement(e.msg.msg,e.msg.type,e.msg.id):e.msg.msg_spl?(wmsUserConfig.infomsg=e.msg.msg_spl,wmsUserConfig.infomsgtype=e.msg.type,WmsLite.processSpecialAnnouncement(JSON.parse(wmsUserConfig.infomsg))):WmsliteImpl.hideAnnouncement()}catch(e){}}else if(38==e.mtype)if(e.msg&&"updatewmssettings"===e.msg.module&&e.msg.data&&e.msg.data.disann){if(WmsLite.bsettings.disann=e.msg.data.disann,wmsUserConfig.infomsg&&!0===WmsLite.isAnnBlocked())try{WmsliteImpl.hideAnnouncement()}catch(e){}}else try{WmsliteImpl.handleMessage(e.mtype,e.msg)}catch(e){setTimeout(function(){throw e},1)}else if(800==e.mtype){var s=e.msg,o=s.opr;"pubsub.ulist"==o?(PubSubApi.addUsers(s.pskey,s.psid,s.ulist),PubSubImpl.handleUserList(s.pskey,s.ulist)):"pubsub.usersubscribed"==o?(PubSubApi.addUsers(s.pskey,s.psid,s.ulist),PubSubImpl.handleUserIn(s.pskey,s.ulist)):"pubsub.userunsubscribed"==o?(PubSubApi.removeUsers(s.pskey,s.psid,s.ulist),PubSubImpl.handleUserOut(s.pskey,s.ulist)):"pubsub.message"==o&&PubSubImpl.handleMessage(s.pskey,s.msg)}else if(43==e.mtype){var r=e.msg;"undefined"!=typeof AcsApi&&AcsApi.handlePush(r.type,r.data)}else if("_"===e)WmsLite.RTT_callback(Date.now()-WmsLite.RTT_senttime);else{try{WmsliteImpl.handleMessage(e.mtype,e.msg,e.meta)}catch(e){setTimeout(function(){throw e},1)}-3==e.mtype&&("undefined"!=typeof AcsApi&&AcsApi.handleServerUP(),_WMS_RETRY_COUNT=0)}},WmsLite.serverup=function(e){WmsLite.initcountdown=!0,_WMS_RETRY_COUNT=0,clearTimeout(wmsCountDownTimer),setTimeout(function(){try{WmsLite.updateDebugInfo("Called serverup"),WmsliteImpl.serverup(e),"undefined"!=typeof AcsApi&&AcsApi.handleServerUP()}catch(e){}},100)},WmsLite.serverdown=function(e,t){e?(clearTimeout(retryregistertimer),WmsLite.initReconnect(e,t)):iswmsframemonitorrunning||WmsLite.initReconnect(),setTimeout(function(){try{WmsLite.updateDebugInfo("Called serverdown"),WmsliteImpl.serverdown()}catch(e){}},100)},WmsLite.setJSStaticDomain=function(e){WmsLite.jsstaticdomain=e},WmsLite.enableSST=function(){},WmsLite.enableTokenPairAuth=function(){this.tokenpairauth=!0,this.authtype=10},WmsLite.setAuthType=function(e){this.authtype=e},WmsLite.setUserConfig=function(e){wmsUserConfig=e},WmsLite.isAnnBlocked=function(){var e=WmsLite.bsettings.disann,t=wmsUserConfig.infomsgid;return!(!e||!e[WmsLite.prd]&&!e.All||!t)&&(e[WmsLite.prd]===t||e.All===t)},WmsLite.setBarSettingsValue=function(e){if(WmsLite.bsettings=e,wmsUserConfig.infomsg&&!1===WmsLite.isAnnBlocked())try{if(void 0!==WmsliteImpl&&WmsliteImpl.showAnnouncement)try{var t=JSON.parse(wmsUserConfig.infomsg);"true"==t.splann?window.frameElement&&"undefined"!=typeof CrmPlusLib&&CrmPlusLib.isLoadedInCrmplusFrame||WmsLite.processSpecialAnnouncement(t):WmsliteImpl.showAnnouncement(wmsUserConfig.infomsg,wmsUserConfig.infomsgtype,wmsUserConfig.infomsgid)}catch(e){WmsliteImpl.showAnnouncement(wmsUserConfig.infomsg,wmsUserConfig.infomsgtype,wmsUserConfig.infomsgid)}}catch(e){}},WmsLite.setChatCSRFParamName=function(e){WmsLite._CHATCSRFPARAMNAME=e},WmsLite.setChatCSRFCookieName=function(e){WmsLite._CHATCSRFCOOKIENAME=e},WmsLite.clearAnnouncement=function(e){var t,i,n,s="property=bchatsettings&key=disann&value="+wmsUserConfig.infomsgid+"&prd="+wmsUserConfig.infomsgprd;s+="&"+WmsLite._CHATCSRFPARAMNAME+"="+(t=document.cookie,i=t.indexOf(WmsLite._CHATCSRFCOOKIENAME),n=t.indexOf("=",i)+1,t.substring(n,t.indexOf("; ",n)))+nocachefix();var o=new XMLHttpRequest;o.onreadystatechange=e,o.open("POST","/_chat/updwmssettings.do"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),o.send(s)},WmsLite.setFrameOrigin=function(e){WmsLite.frameorigin=e||window.location.origin},WmsLite.useLongPolling=function(){_WMS_LP="true"},WmsLite.getWMSRTT=function(e){WmsLite.RTT_callback=e,WmsLite.RTT_senttime=Date.now(),WmsLite.triggerRTTPing()},WmsLite.getIAMServiceName=function(e){return WmsLite.servicelist[e]},WmsLite.populateSpecialWMSAnnouncement=function(e){if("success"==e.result){var t=e.response,i=JSON.parse(wmsUserConfig.infomsg);if(0==t.banner_status)return;WmsliteImpl.showAnnouncement(i[t.banner_status],wmsUserConfig.infomsgtype)}},WmsLite.processSpecialAnnouncement=function(e){if(e.apiurl){var t=e.apiurl+"?zuid="+WmsLite.zuid+"&iam_service="+WmsLite.getIAMServiceName(WmsLite.prd)+"&callback=populateSpecialWMSAnnouncement",i=$WC.Util.createElement("script");i.src=t,document.body.appendChild(i)}},function(){var e=(new Date).getTime()+"_"+Math.floor(1e4*Math.random());window.getWmsTabId=function(){return WmsLite.zuid+"_"+WmsLite.prd+"_"+e}}(),WmsLite.servicelist={ZI:"ZohoShowtime",ZP:"ZohoPayments",ZH:"ZohoHome",CC:"ZohoCommandCenter",PY:"PayRoll",ZG:"Zoho Bigin",ZK:"ZohoInk",OF:"ZohoOffice",TI:"TeamInbox",ZX:"ZohoShowtimeAPI",RA:"ZohoRemoteAccess",VO:"Zoho Mail",ZM:"Zoho Mobile",SL:"DataPrep",WE:"ZohoWebinar",SZ:"ZohoSites",CT:"ZohoCliq",ZS:"ZohoSupport",ML:"MTACENTRAL",BT:"ZohoBugtracker",WR:"ZohoWriter",ST:"ZohoSheet",NB:"Notebook",RE:"Remotely",SW:"ZohoShow",ZO:"Business",OZ:"ZohoChat",PD:"ZOHOPAD",FO:"ZohoForms",ZE:"ZohoExpense",CP:"CRMPlus",IV:"ZohoInventory",WH:"Startwith",MC:"ZohoMCreator",ZB:"ZohoBooks",ZV:"ZohoInvoice",SB:"ZohoSubscriptions",CI:"ZohoCode",AL:"alarmsone",ZA:"ZohoRecruit",EX:"Zoho Docs",TD:"TeamDrive",PZ:"ZIAPlatform",AU:"Temp Staffing",BP:"Orchestly",CO:"ZohoContacts",CR:"ZohoCRM",CE:"ZohoCreator",PR:"ZohoProjects",WK:"ZohoWiki",CA:"ZohoCampaigns",MI:"MICS",VA:"ZohoVault",PB:"PhoneBridge",FS:"ZohoFSM",PT:"ZohoPilot",MP:"ZohoProjectsMarketPlace",SC:"Screenplay",PE:"Peopleplus",GC:"ZohoGC",PI:"ZIAPipelines",RS:"Solopreneur",IM:"ZohoIM",RY:"ZohoRepository",SD:"Service Desk Plus",MT:"ZohoMeeting",TL:"Trainercentral",WB:"Whiteboard",MU:"Murphy",IG:"Insights",MD:"MDMOnDemand",LE:"ZohoLens",FM:"ZohoDiscussions",AC:"AaaServer",CL:"ZohoCalendar",RM:"Remote Agent",SG:"ZohoSign",TC:"Tele Adapter - CRM",TS:"Tele Adapter - Support",SI:"Site 24 x 7",SR:"Zoho Store",ZC:"ZohoGadgets",IS:"Zoho Issue Tracker",HR:"zohopeople",VI:"ZohoVideo",ZF:"ZohoFlow",SE:"ZohoSearch",JS:"Jabber Server",CM:"Contacts Manager",MB:"Zoho Mobile Sync",SV:"ZohoSurvey",MO:"zohomotivator",AT:"ZohoAssist",ZQ:"QUOTES",ES:"ZohoReports",PG:"ZohoPlugin",SP:"ZohoSprints",BS:"zohobackstage",BI:"ZohoBills",IO:"ZohoIOT",ZD:"ZohoDirectory",ZN:"ZohoDirectory",PM:"PATCHMANAGER",BL:"BLOGS",RC:"RECEIPTS",XS:"Zoho Showtime",SH:"ZohoShowtime-local",ZT:"ZohoTax",AD:"DirectoryAdmin",CH:"CHECKOUT",VE:"ZohoVoice",MH:"ZohoMarketingHub",ZW:"ZohoWorkerly",IN:"ZohoPulse",DC:"DesktopCentralCloud",DE:"DesktopCentralMSPCloud",VH:"ZohoChatVijay",CS:"CRM SalesInbox",LC:"Logs360Cloud",CY:"ZohoCatalyst",ZL:"ZohoTables",CZ:"contracts",PC:"ZohoCreatorPlus",RP:"RemoteAccessPlusCloud",OA:"OfficeAPI",LZ:"ZohoLearn",SU:"shortenurl",NS:"ZohoBetaLens",TZ:"Slate",CU:"Cirrus",AS:"Activity Collation Server",ZR:"ZohoSocial",WP:"Workplace",WA:"WebAnalytics",WS:"WebStats",LD:"Zoho SalesIQ",SF:"ZohoShifts",HS:"HackSaw"},setTimeout(function(){if(void 0!==document.querySelector){var e=document.querySelector('script[src*="ichat"][src*="wmslite"]');e&&!e.getAttribute("isdev")&&(WmsLite.jsstaticdomain=e.src.split("/")[2]);var t,i=document.createElement("link"),n=WmsLite.fp_hash?WmsLite.fp_hash["wmsbridge.js"]:"wmsbridge.js";t=WmsLite.fp_hash?"https://"+WmsLite.jsstaticdomain+"/ichat/js/"+n:"https://"+WmsLite.jsstaticdomain+"/ichat/"+wmsjsversion+"_https/js/"+n,i.href=t,i.rel="preload",i.as="script",document.head.appendChild(i)}},1);wmsjsversion="Jul_08_2022_1";function WmsliteImpl(){}WmsliteImpl.serverdown=function(){},WmsliteImpl.serverup=function(){},WmsliteImpl.handleLogout=function(e){},WmsliteImpl.handleMessage=function(e,t){},WmsliteImpl.handleAccountDisabled=function(e){},WmsliteImpl.handleServiceMessage=function(e){},WmsliteImpl.reconnectionCountDown=function(e){},WmsliteImpl.showAnnouncement=function(e,t,i){},WmsliteImpl.hideAnnouncement=function(){},WmsliteImpl.handleAuthFailure=function(){};var lfromstatic=!0;
WmsLite.fp_hash={"wmsbridge.js":"9de0233f_wmsbridge.js"}