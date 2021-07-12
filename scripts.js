////////////////////////////////////////////////////////////////////////
// ANNOTATE
////////////////////////////////////////////////////////////////////////
const annotateTools = document.querySelector('.scope-annotate');
const annotateToggle = document.querySelector('.btn-annotate');
const annotateBtnLabel = document.querySelector('.btn-annotate span');
const annotateBtnIcon = document.querySelector('.btn-annotate i');

// Toggle annotation menu off and on with nmenu button
annotateToggle.addEventListener('click', () => {
   annotateTools.classList.toggle('scope-annotate__on');
   if (annotateBtnLabel.textContent === 'Annotate') {
      annotateBtnLabel.textContent = 'Hide';
      annotateBtnIcon.setAttribute('class', 'fas fa-pencil')
   }
   else {
      annotateBtnLabel.textContent = 'Annotate';
      annotateBtnIcon.setAttribute('class', 'fas fa-pencil')
   }
})

////////////////////////////////////////////////////////////////////////
//  BROADCAST
////////////////////////////////////////////////////////////////////////
const broadcastAlert = document.querySelector('.alert-broadcast');
const btnBroadcast = document.querySelector('.btn-broadcast');
const btnBroadcastLabel= document.querySelector('.btn-broadcast span');
const btnBroadcastIcon = document.querySelector('.btn-broadcast i');

// Toggle the brodcast alert on/off
btnBroadcast.addEventListener('click', () => {
   if (btnBroadcastLabel.textContent === 'Broadcast') {
      broadcastAlert.classList.toggle('show');  
   }
   else {
      broadcastAlertOff.classList.toggle('show'); 
   }

})
// Close the broadcast alert with cross icon
const iconCloseBroadcastAlert = document.querySelector('.alert-broadcast .close-alert');
iconCloseBroadcastAlert.addEventListener('click', () => {
   broadcastAlert.classList.toggle('show');
})
// Close the broadcast OFF alert with cross icon
const broadcastAlertOff = document.querySelector('.alert-broadcast-off');
const iconCloseBroadcastAlertOff = document.querySelector('.alert-broadcast-off .close-alert');
iconCloseBroadcastAlertOff.addEventListener('click', () => {
   broadcastAlertOff.classList.toggle('show');
})
// Close the broadcast OFF alert with continue button
const btnContinueBroadcast = document.querySelector('.continue-broadcast');
btnContinueBroadcast.addEventListener('click', () => {
   broadcastAlertOff.classList.toggle('show');
})

// Set broadcast to live
const btnGoLive = document.querySelector('.btn-alert-live');
const liveTag = document.querySelector('.scope-main__feed-live-tag');
btnGoLive.addEventListener('click', () => {
   liveTag.classList.add('scope-main__feed-tag-on');
   broadcastAlert.classList.toggle('show');
   btnBroadcastLabel.innerHTML = 'Live';
   btnBroadcastIcon.classList.add('live');
})
// Stop the broadcast
const btnStopBroadcast = document.querySelector('.stop-brodcast');
btnStopBroadcast.addEventListener('click', () => {
   broadcastAlertOff.classList.toggle('show');
   liveTag.removeAttribute('class', 'scope-main__feed-tag-on');
   btnBroadcastLabel.textContent = 'Broadcast';
   btnBroadcastIcon.setAttribute('class', 'fas fa-signal-stream');
})

////////////////////////////////////////////////////////////////////////
//  GALLERY
////////////////////////////////////////////////////////////////////////
const btnGallery = document.querySelector('.btn-gallery');
const galleryCover = document.querySelector('.scope-gallery');
const alertGallery = document.querySelector('.alert__gallery');
const iconCloseGallery = document.querySelector('.close-gallery');

btnGallery.addEventListener('click', () => {
   alertGallery.classList.toggle('show');
   galleryCover.classList.toggle('cover-on');
});

iconCloseGallery.addEventListener('click', () => {
   alertGallery.classList.toggle('show');
   galleryCover.classList.toggle('cover-on');
})

///////////////////////////////////////////////////////////
// CAPTURE
///////////////////////////////////////////////////////////
const btnCapture = document.querySelector('.btn-capture');
const screenFlashDiv = document.querySelector('.screen-flash');

btnCapture.addEventListener('mousedown', () => {
   screenFlashDiv.classList.add("screen-flash-on")
})
btnCapture.addEventListener('mouseup', () => {
   screenFlashDiv.classList.remove("screen-flash-on")
})

///////////////////////////////////////////////////////////
// RECORD
///////////////////////////////////////////////////////////
const btnRecord = document.querySelector('.btn-record');
const btnRecordSpan = document.querySelector('.btn-record span');
const btnRecordIcon = document.querySelector('.btn-record i');
const timeTag = document.querySelector('.scope-record-timer');

btnRecord.addEventListener('click', () => {
   if (btnRecordSpan.innerHTML === "Record") {
      btnRecordSpan.innerHTML = "00:43";
      btnRecordIcon.setAttribute('class', 'fas fa-circle'); 
      //timeTag.setAttribute('class', 'scope-record-timer show');
   }
   else {
      btnRecordSpan.innerHTML ="Record";
      btnRecordIcon.setAttribute('class', 'far fa-video');
      timeTag.setAttribute('class', 'scope-record-timer');
   }
})

///////////////////////////////////////////////////////////
// COMPLETE
///////////////////////////////////////////////////////////
const btnComplete = document.querySelector('.btn-complete');
const alertComplete = document.querySelector('.alert__dialog__complete');
const scopeCompleteCloseIcon = document.querySelector('.scope-complete__close-icon');

btnComplete.addEventListener('click', () => {
   alertComplete.classList.toggle('show');
})
scopeCompleteCloseIcon.addEventListener('click', () => {
   alertComplete.classList.toggle('show');
})

///////////////////////////////////////////////////////////
// PROCTEE POPUP MENU
///////////////////////////////////////////////////////////
const popupProcteeMenu = document.querySelector('.scope-popup__proctee');
const popupCloseProcteeMenu = document.querySelector('.available-feeds__proctee .scope-popup__close-icon');
const popupCloseProcterMenu = document.querySelector('.available-feeds__proctor .scope-popup__close-icon');
const popupProcteeDots = document.querySelector('.available-feeds__proctee .available-feeds__feed__icon-ellipsis');

// Open proctee popup menu
popupProcteeDots.addEventListener('click', () => {
   popupProcteeMenu.classList.add('show');
})

// Close proctee popup menu
popupCloseProcteeMenu.addEventListener('click', () => {
   popupProcteeMenu.classList.remove('show');
})

///////////////////////////////////////////////////////////
// PROCTOR POPUP MENU
///////////////////////////////////////////////////////////

const popupProctorMenu = document.querySelector('.scope-popup__proctor');
const popupProctorDots = document.querySelector('.available-feeds__proctor .available-feeds__feed__icon-ellipsis');
const proctorFeed = document.querySelector('.available-feeds__proctor');

//Open proctor popup menu
popupProctorDots.addEventListener('click', () => {
   popupProctorMenu.classList.add('show');
})

// Close proctor popup menu
popupCloseProcterMenu.addEventListener('click', (e) => {
   popupProctorMenu.classList.remove('show');
})

// Deactivatee feed
const popupProctorDeactivate = document.querySelector('.scope-popup__proctor-menu__deactive');
popupProctorDeactivate.addEventListener('click', () => {
   proctorFeed.classList.remove('feed-active');
   proctorFeed.classList.add('feed-inactive');
   popupProctorMenu.classList.remove('show');
})

// Edit feed name
const popupProctorEditName = document.querySelector('.scope-popup__proctor-menu__edit-proctor');
const feedNameAlert = document.querySelector('.alert__edit-feed-name');
popupProctorEditName.addEventListener('click', () => {
   feedNameAlert.classList.add('show');
})

//Edit proctor colour
const popupProctorEditColour = document.querySelector('.scope-popup__proctor-menu__edit-colour');
const feedAnnotationColourAlert = document.querySelector('.alert__annotation-colour');
popupProctorEditColour.addEventListener('click', () => {
   feedAnnotationColourAlert.classList.add('show');
})

//Remove proctor feed
//Edit proctor colour
const popupProctorRemove = document.querySelector('.scope-popup__proctor-menu__remove-feed');
popupProctorRemove.addEventListener('click', () => {
   proctorFeed.classList.remove('show');
   proctorFeed.classList.remove('feed-active');
   proctorFeed.classList.add('feed-inactive');
})

///////////////////////////////////////////////////////////
// DATA POPUP MENU
///////////////////////////////////////////////////////////

const popupDataFeedMenu = document.querySelector('.available-feeds__data .scope-popup');
const popupDataFeedMenuClose = document.querySelector('.available-feeds__data .scope-popup__close-icon');
const popupDataFeedDots = document.querySelector('.available-feeds__data .available-feeds__feed__icon-ellipsis');
const popupDataFeedFullScreen = document.querySelector('.available-feeds__feed__full-screen');

const popupDataFeedMenuAddToMain = document.querySelector('.available-feeds__data .scope-popup');

popupDataFeedDots.addEventListener('click', () => {
   popupDataFeedMenu.classList.toggle('show');
})

popupDataFeedMenuClose.addEventListener('click', () => {
   popupDataFeedMenu.classList.toggle('show');
})





///////////////////////////////////////////////////////////
// FEED AUDIO MUTE TOGGLING 
///////////////////////////////////////////////////////////

// Get nodelist of matches, cycle through them and attach event listener to each for the toggle
const micToggleIcons = document.querySelectorAll('.available-feeds__feed__icon-mic');
micToggleIcons.forEach(micIcon => {
   micIcon.addEventListener('click', () => {
         micIcon.classList.toggle('fa-microphone-slash');
   })
})

///////////////////////////////////////////////////////////
// MUTE ALL BUTTON
///////////////////////////////////////////////////////////
const muteAllButton = document.querySelector('.scope-main__menu .btn-mute');
muteAllButton.addEventListener('click', () => {
   micToggleIcons.forEach(micIcon => {
      micIcon.classList.add('fa-microphone-slash');
   })
})


///////////////////////////////////////////////////////////
// EDIT ANNOTATION COLOUR
///////////////////////////////////////////////////////////
const alertAnnotationColour = document.querySelector('.alert__annotation-colour');
const closeColourAlertIcon = document.querySelector('.alert__annotation-colour i');
const editColourMenuItem = document.querySelector('.scope-popup__edit-colour');

editColourMenuItem.addEventListener('click', () => {
   alertAnnotationColour.classList.toggle('show');
})

closeColourAlertIcon.addEventListener('click', () => {
   alertAnnotationColour.classList.toggle('show');
})
///////////////////////////////////////////////////////////
// EDIT FEED NAME
///////////////////////////////////////////////////////////
const alertFeedNameCloseIcon = document.querySelector('.alert__edit-feed-name__icon__close');
const alertFeedName = document.querySelector('.alert__edit-feed-name');
const editNameMenuItem = document.querySelector('.scope-popup__edit-name');

editNameMenuItem.addEventListener('click', () => {
   alertFeedName.classList.toggle('show');
})
alertFeedNameCloseIcon.addEventListener('click', () => {
   alertFeedName.classList.toggle('show');
})

///////////////////////////////////////////////////////////
// ADD A PROCTOR TO STREAM
///////////////////////////////////////////////////////////
const feedsBtnAddProctor = document.querySelector('.scope-chat__footer__add-proctor');
const feedDivSaj = document.querySelector('.available-feeds__sajad-rana');
const feedsBtnAdmit = document.querySelector('.available-feeds__btn-admit');
const feedsBtnAddQuick = document.querySelector('.scope-contacts__quick-add__sajad');

feedsBtnAddProctor.addEventListener('click', () => {
   feedDivSaj.classList.add('show');
})
feedsBtnAdmit.addEventListener('click', () => {
   feedDivSaj.classList.remove('feed-inactive');
   feedDivSaj.classList.add('feed-active');
})
feedsBtnAddQuick.addEventListener('click', e => {
   feedDivSaj.classList.add('show');
   console.log(e);
   e.stopPropagation();
})


///////////////////////////////////////////////////////////
// CHAT AND CONTACTS MENU - ON & OFF
///////////////////////////////////////////////////////////
const scopeSidebar = document.querySelector('.scope__sidebar');
const scopeSidebarCloseIcon = document.querySelector('.scope__sidebar__close');
const contactsChatButton = document.querySelector('.contacts-chat-menu__icon');
const feedsWrapper = document.querySelector('.feeds-wrapper');

// Close the entire sidbar, turn sidebar toggle icon on, dock feeds to scope
scopeSidebarCloseIcon.addEventListener('click', () => {
   scopeSidebar.classList.toggle('scope__sidebar__off');
   contactsChatButton.classList.add('show');
   feedsWrapper.classList.toggle('chat-off');
})

// Turn sidebar back on and hide toggle icon
contactsChatButton.addEventListener('click', () => {
   scopeSidebar.classList.toggle('scope__sidebar__off');
   contactsChatButton.classList.remove('show');
   feedsWrapper.classList.toggle('chat-off');
})
 
///////////////////////////////////////////////////////////
// CHAT AND CONTACTS MENU - SWITCHING
///////////////////////////////////////////////////////////
const proctorSaj = document.querySelector('.scope-contacts__card__sajad');
const chatMenu = document.querySelector('.scope-chat');
const chatIconBack= document.querySelector('.scope-chat__icon-back');
const closeChatMenu = document.querySelector('.chat_sidebar__close');

// Show the chat menu, hide contacts menu
proctorSaj.addEventListener('click', () => {
   chatMenu.classList.add('scope-chat__on');
})

// Go back from chat to contacts menu
chatIconBack.addEventListener('click', () => {
   chatMenu.classList.remove('scope-chat__on');
})

// Close chat menu
closeChatMenu.addEventListener('click', () => {
   scopeSidebar.classList.toggle('scope__sidebar__off');
   contactsChatButton.classList.add('show');
})







