// ****************** COPY / PASTED FROM STUDIO DYNAMIC FEED *****************


// useful links
// -- dynamic profile: https://www.google.com/doubleclick/studio/#ContentManagement:ProfileGuides:id=10010526&pr=10045804&step=MANAGE_DATA&revision=DRAFT
// -- creative: https://www.google.com/doubleclick/studio/#creative:step=PUBLISH&advertiserId=60046417&creativeId=60696206&ownerId=2810368&entityId=348303020
// -- assets: https://www.google.com/doubleclick/studio/#assets:accountId=37945686&folderId=60892837
// -- DCM campaign: https://www.google.com/dfa/trafficking/#/accounts/9386/campaigns/21218270/explorer?statuses=0;2
// -- studio help center: https://support.google.com/richmedia#topic=4455749
// -- feed: https://docs.google.com/spreadsheets/d/1u6U_FwoSYMe89xgUEhDa-LDn0hXMTmC8NBxf14rApVg/edit#gid=0


// easy tag appstop: http://easy-tag.appspot.com
// <ins class='dcmads' style='display:inline-block;width:300px;height:250px'
//     data-dcm-placement='N9386.2498307ALOKRAWAT_INVITEME9/B21218270.222088014'
//     data-dcm-rendering-mode='iframe'
//     data-dcm-https-only
//     data-dcm-resettable-device-id=''
//     data-dcm-app-id=''
//     data-dcm-param-phone_name='{$phone_name}'>
//   <script src='https://www.googletagservices.com/dcm/dcmads.js'></script>
// </ins>


// floodlight tag
// -- https://ad.doubleclick.net/ddm/activity/src=4242527;type=Anima0;cat=adevi0;u7=samsung;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?

// add studio profileID
var profileID = 10045804;
var data      = [];


// sets profile ID
Enabler.setProfileId(profileID);

// dev variables
// for training purpopse, to be copy / pasted in console
var devDynamicContent = {};
devDynamicContent.soshTradelab_training_feed_master_feed= [{},{},{}];
devDynamicContent.soshTradelab_training_feed_master_feed[0]._id = 0;
devDynamicContent.soshTradelab_training_feed_master_feed[0].id = 1;
devDynamicContent.soshTradelab_training_feed_master_feed[0].reporting_label = "samsung_99e";
devDynamicContent.soshTradelab_training_feed_master_feed[0].phone_name = "samsung";
devDynamicContent.soshTradelab_training_feed_master_feed[0].price = 99;
devDynamicContent.soshTradelab_training_feed_master_feed[0].picture_url = {};
devDynamicContent.soshTradelab_training_feed_master_feed[0].picture_url.Type = "file";
devDynamicContent.soshTradelab_training_feed_master_feed[0].picture_url.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/67192606/dirty/phone_samsung.jpg";
devDynamicContent.soshTradelab_training_feed_master_feed[0].landing_page = {};
devDynamicContent.soshTradelab_training_feed_master_feed[0].landing_page.Url = "https://boutique.orange.fr/mobile/samsung-galaxy-a8-noir";
devDynamicContent.soshTradelab_training_feed_master_feed[0].active = true;
devDynamicContent.soshTradelab_training_feed_master_feed[0].default = true;
devDynamicContent.soshTradelab_training_feed_master_feed[0].utms = "";
devDynamicContent.soshTradelab_training_feed_master_feed[1].id = 1;
devDynamicContent.soshTradelab_training_feed_master_feed[1].reporting_label = "samsung_99e";
devDynamicContent.soshTradelab_training_feed_master_feed[1].phone_name = "samsung";
devDynamicContent.soshTradelab_training_feed_master_feed[1].price = 99;
devDynamicContent.soshTradelab_training_feed_master_feed[1].picture_url = {};
devDynamicContent.soshTradelab_training_feed_master_feed[1].picture_url.Type = "file";
devDynamicContent.soshTradelab_training_feed_master_feed[1].picture_url.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/67192606/dirty/phone_samsung.jpg";
devDynamicContent.soshTradelab_training_feed_master_feed[1].landing_page = {};
devDynamicContent.soshTradelab_training_feed_master_feed[1].landing_page.Url = "https://boutique.orange.fr/mobile/samsung-galaxy-a8-noir";
devDynamicContent.soshTradelab_training_feed_master_feed[1].active = true;
devDynamicContent.soshTradelab_training_feed_master_feed[1].default = true;
devDynamicContent.soshTradelab_training_feed_master_feed[1].utms = "";
devDynamicContent.soshTradelab_training_feed_master_feed[2].id = 1;
devDynamicContent.soshTradelab_training_feed_master_feed[2].reporting_label = "samsung_99e";
devDynamicContent.soshTradelab_training_feed_master_feed[2].phone_name = "samsung";
devDynamicContent.soshTradelab_training_feed_master_feed[2].price = 99;
devDynamicContent.soshTradelab_training_feed_master_feed[2].picture_url = {};
devDynamicContent.soshTradelab_training_feed_master_feed[2].picture_url.Type = "file";
devDynamicContent.soshTradelab_training_feed_master_feed[2].picture_url.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/67192606/dirty/phone_samsung.jpg";
devDynamicContent.soshTradelab_training_feed_master_feed[2].landing_page = {};
devDynamicContent.soshTradelab_training_feed_master_feed[2].landing_page.Url = "https://boutique.orange.fr/mobile/samsung-galaxy-a8-noir";
devDynamicContent.soshTradelab_training_feed_master_feed[2].active = true;
devDynamicContent.soshTradelab_training_feed_master_feed[2].default = true;
devDynamicContent.soshTradelab_training_feed_master_feed[2].utms = "";

Enabler.setDevDynamicContent(devDynamicContent);





// ****************** DBCL STUDIO LOAD RULES *****************


// waits for enabler to load
window.onload = function() {

  if (Enabler.isInitialized()) {
    enablerInitialized();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
  }

}


// waits for page to load
function enablerInitialized() {

  // re-structure data (DCM data pass / feed / key-values / etc...)
  if (dynamicContent) {
    data = dynamicContent.soshTradelab_training_feed_master_feed;
  } else {
    data = devDynamicContent.soshTradelab_training_feed_master_feed;
  }

  // page is loaded (polite load)
  if (Enabler.isPageLoaded()) {
    pageLoaded();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoaded);
  }

};







// exits
// https://support.google.com/richmedia/answer/2664807
// var exitURL = "http://www.yoursite.com";

// function exitClickHandler() {
//   Enabler.exitOverride("exit name goes here", exitURL);
// }

// exitButton.addEventListener('click', exitClickHandler, false);



// ADD COUNTERS FOR REPORTING ON INTERACTIONS
// function tabOneClickHandler(e) {
//     Enabler.counter('Click on Tab 1');
// }
// document.getElementById('tab-one').addEventListener('click',
// tabOneClickHandler, false);


