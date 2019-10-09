<template>
  <div>
    <group>
      <cell title="used in cell">
        <x-icon type="ios-plus" class="cell-x-icon" @click="console"></x-icon>
      </cell>
    </group>
    <div style="padding: 10px;">
      <x-icon type="alert-circled" size="30" @click="showType('alert-circled')"></x-icon>
      <x-icon type="alert" size="30" @click="showType('alert')"></x-icon>
      <x-icon type="android-add-circle" size="30" @click="showType('android-add-circle')"></x-icon>
      <x-icon type="android-add" size="30" @click="showType('android-add')"></x-icon>
      <x-icon type="android-alarm-clock" size="30" @click="showType('android-alarm-clock')"></x-icon>
      <x-icon type="android-alert" size="30" @click="showType('android-alert')"></x-icon>
      <x-icon type="android-apps" size="30" @click="showType('android-apps')"></x-icon>
      <x-icon type="android-archive" size="30" @click="showType('android-archive')"></x-icon>
      <x-icon type="android-arrow-back" size="30" @click="showType('android-arrow-back')"></x-icon>
      <x-icon type="android-arrow-down" size="30" @click="showType('android-arrow-down')"></x-icon>
      <x-icon type="android-arrow-dropdown-circle" size="30" @click="showType('android-arrow-dropdown-circle')"></x-icon>
      <x-icon type="android-arrow-dropdown" size="30" @click="showType('android-arrow-dropdown')"></x-icon>
      <x-icon type="android-arrow-dropleft-circle" size="30" @click="showType('android-arrow-dropleft-circle')"></x-icon>
      <x-icon type="android-arrow-dropleft" size="30" @click="showType('android-arrow-dropleft')"></x-icon>
      <x-icon type="android-arrow-dropright-circle" size="30" @click="showType('android-arrow-dropright-circle')"></x-icon>
      <x-icon type="android-arrow-dropright" size="30" @click="showType('android-arrow-dropright')"></x-icon>
      <x-icon type="android-arrow-dropup-circle" size="30" @click="showType('android-arrow-dropup-circle')"></x-icon>
      <x-icon type="android-arrow-dropup" size="30" @click="showType('android-arrow-dropup')"></x-icon>
      <x-icon type="android-arrow-forward" size="30" @click="showType('android-arrow-forward')"></x-icon>
      <x-icon type="android-arrow-up" size="30" @click="showType('android-arrow-up')"></x-icon>
      <x-icon type="android-attach" size="30" @click="showType('android-attach')"></x-icon>
      <x-icon type="android-bar" size="30" @click="showType('android-bar')"></x-icon>
      <x-icon type="android-bicycle" size="30" @click="showType('android-bicycle')"></x-icon>
      <x-icon type="android-boat" size="30" @click="showType('android-boat')"></x-icon>
      <x-icon type="android-bookmark" size="30" @click="showType('android-bookmark')"></x-icon>
      <x-icon type="android-bulb" size="30" @click="showType('android-bulb')"></x-icon>
      <x-icon type="android-bus" size="30" @click="showType('android-bus')"></x-icon>
      <x-icon type="android-calendar" size="30" @click="showType('android-calendar')"></x-icon>
      <x-icon type="android-call" size="30" @click="showType('android-call')"></x-icon>
      <x-icon type="android-camera" size="30" @click="showType('android-camera')"></x-icon>
      <x-icon type="android-cancel" size="30" @click="showType('android-cancel')"></x-icon>
      <x-icon type="android-car" size="30" @click="showType('android-car')"></x-icon>
      <x-icon type="android-cart" size="30" @click="showType('android-cart')"></x-icon>
      <x-icon type="android-chat" size="30" @click="showType('android-chat')"></x-icon>
      <x-icon type="android-checkbox-blank" size="30" @click="showType('android-checkbox-blank')"></x-icon>
      <x-icon type="android-checkbox-outline-blank" size="30" @click="showType('android-checkbox-outline-blank')"></x-icon>
      <x-icon type="android-checkbox-outline" size="30" @click="showType('android-checkbox-outline')"></x-icon>
      <x-icon type="android-checkbox" size="30" @click="showType('android-checkbox')"></x-icon>
      <x-icon type="android-checkmark-circle" size="30" @click="showType('android-checkmark-circle')"></x-icon>
      <x-icon type="android-clipboard" size="30" @click="showType('android-clipboard')"></x-icon>
      <x-icon type="android-close" size="30" @click="showType('android-close')"></x-icon>
      <x-icon type="android-cloud-circle" size="30" @click="showType('android-cloud-circle')"></x-icon>
      <x-icon type="android-cloud-done" size="30" @click="showType('android-cloud-done')"></x-icon>
      <x-icon type="android-cloud-outline" size="30" @click="showType('android-cloud-outline')"></x-icon>
      <x-icon type="android-cloud" size="30" @click="showType('android-cloud')"></x-icon>
      <x-icon type="android-color-palette" size="30" @click="showType('android-color-palette')"></x-icon>
      <x-icon type="android-compass" size="30" @click="showType('android-compass')"></x-icon>
      <x-icon type="android-contact" size="30" @click="showType('android-contact')"></x-icon>
      <x-icon type="android-contacts" size="30" @click="showType('android-contacts')"></x-icon>
      <x-icon type="android-contract" size="30" @click="showType('android-contract')"></x-icon>
      <x-icon type="android-create" size="30" @click="showType('android-create')"></x-icon>
      <x-icon type="android-delete" size="30" @click="showType('android-delete')"></x-icon>
      <x-icon type="android-desktop" size="30" @click="showType('android-desktop')"></x-icon>
      <x-icon type="android-document" size="30" @click="showType('android-document')"></x-icon>
      <x-icon type="android-done-all" size="30" @click="showType('android-done-all')"></x-icon>
      <x-icon type="android-done" size="30" @click="showType('android-done')"></x-icon>
      <x-icon type="android-download" size="30" @click="showType('android-download')"></x-icon>
      <x-icon type="android-drafts" size="30" @click="showType('android-drafts')"></x-icon>
      <x-icon type="android-exit" size="30" @click="showType('android-exit')"></x-icon>
      <x-icon type="android-expand" size="30" @click="showType('android-expand')"></x-icon>
      <x-icon type="android-favorite-outline" size="30" @click="showType('android-favorite-outline')"></x-icon>
      <x-icon type="android-favorite" size="30" @click="showType('android-favorite')"></x-icon>
      <x-icon type="android-film" size="30" @click="showType('android-film')"></x-icon>
      <x-icon type="android-folder-open" size="30" @click="showType('android-folder-open')"></x-icon>
      <x-icon type="android-folder" size="30" @click="showType('android-folder')"></x-icon>
      <x-icon type="android-funnel" size="30" @click="showType('android-funnel')"></x-icon>
      <x-icon type="android-globe" size="30" @click="showType('android-globe')"></x-icon>
      <x-icon type="android-hand" size="30" @click="showType('android-hand')"></x-icon>
      <x-icon type="android-hangout" size="30" @click="showType('android-hangout')"></x-icon>
      <x-icon type="android-happy" size="30" @click="showType('android-happy')"></x-icon>
      <x-icon type="android-home" size="30" @click="showType('android-home')"></x-icon>
      <x-icon type="android-image" size="30" @click="showType('android-image')"></x-icon>
      <x-icon type="android-laptop" size="30" @click="showType('android-laptop')"></x-icon>
      <x-icon type="android-list" size="30" @click="showType('android-list')"></x-icon>
      <x-icon type="android-locate" size="30" @click="showType('android-locate')"></x-icon>
      <x-icon type="android-lock" size="30" @click="showType('android-lock')"></x-icon>
      <x-icon type="android-mail" size="30" @click="showType('android-mail')"></x-icon>
      <x-icon type="android-map" size="30" @click="showType('android-map')"></x-icon>
      <x-icon type="android-menu" size="30" @click="showType('android-menu')"></x-icon>
      <x-icon type="android-microphone-off" size="30" @click="showType('android-microphone-off')"></x-icon>
      <x-icon type="android-microphone" size="30" @click="showType('android-microphone')"></x-icon>
      <x-icon type="android-more-horizontal" size="30" @click="showType('android-more-horizontal')"></x-icon>
      <x-icon type="android-more-vertical" size="30" @click="showType('android-more-vertical')"></x-icon>
      <x-icon type="android-navigate" size="30" @click="showType('android-navigate')"></x-icon>
      <x-icon type="android-notifications-none" size="30" @click="showType('android-notifications-none')"></x-icon>
      <x-icon type="android-notifications-off" size="30" @click="showType('android-notifications-off')"></x-icon>
      <x-icon type="android-notifications" size="30" @click="showType('android-notifications')"></x-icon>
      <x-icon type="android-open" size="30" @click="showType('android-open')"></x-icon>
      <x-icon type="android-options" size="30" @click="showType('android-options')"></x-icon>
      <x-icon type="android-people" size="30" @click="showType('android-people')"></x-icon>
      <x-icon type="android-person-add" size="30" @click="showType('android-person-add')"></x-icon>
      <x-icon type="android-person" size="30" @click="showType('android-person')"></x-icon>
      <x-icon type="android-phone-landscape" size="30" @click="showType('android-phone-landscape')"></x-icon>
      <x-icon type="android-phone-portrait" size="30" @click="showType('android-phone-portrait')"></x-icon>
      <x-icon type="android-pin" size="30" @click="showType('android-pin')"></x-icon>
      <x-icon type="android-plane" size="30" @click="showType('android-plane')"></x-icon>
      <x-icon type="android-playstore" size="30" @click="showType('android-playstore')"></x-icon>
      <x-icon type="android-print" size="30" @click="showType('android-print')"></x-icon>
      <x-icon type="android-radio-button-off" size="30" @click="showType('android-radio-button-off')"></x-icon>
      <x-icon type="android-radio-button-on" size="30" @click="showType('android-radio-button-on')"></x-icon>
      <x-icon type="android-refresh" size="30" @click="showType('android-refresh')"></x-icon>
      <x-icon type="android-remove-circle" size="30" @click="showType('android-remove-circle')"></x-icon>
      <x-icon type="android-remove" size="30" @click="showType('android-remove')"></x-icon>
      <x-icon type="android-restaurant" size="30" @click="showType('android-restaurant')"></x-icon>
      <x-icon type="android-sad" size="30" @click="showType('android-sad')"></x-icon>
      <x-icon type="android-search" size="30" @click="showType('android-search')"></x-icon>
      <x-icon type="android-send" size="30" @click="showType('android-send')"></x-icon>
      <x-icon type="android-settings" size="30" @click="showType('android-settings')"></x-icon>
      <x-icon type="android-share-alt" size="30" @click="showType('android-share-alt')"></x-icon>
      <x-icon type="android-share" size="30" @click="showType('android-share')"></x-icon>
      <x-icon type="android-star-half" size="30" @click="showType('android-star-half')"></x-icon>
      <x-icon type="android-star-outline" size="30" @click="showType('android-star-outline')"></x-icon>
      <x-icon type="android-star" size="30" @click="showType('android-star')"></x-icon>
      <x-icon type="android-stopwatch" size="30" @click="showType('android-stopwatch')"></x-icon>
      <x-icon type="android-subway" size="30" @click="showType('android-subway')"></x-icon>
      <x-icon type="android-sunny" size="30" @click="showType('android-sunny')"></x-icon>
      <x-icon type="android-sync" size="30" @click="showType('android-sync')"></x-icon>
      <x-icon type="android-textsms" size="30" @click="showType('android-textsms')"></x-icon>
      <x-icon type="android-time" size="30" @click="showType('android-time')"></x-icon>
      <x-icon type="android-train" size="30" @click="showType('android-train')"></x-icon>
      <x-icon type="android-unlock" size="30" @click="showType('android-unlock')"></x-icon>
      <x-icon type="android-upload" size="30" @click="showType('android-upload')"></x-icon>
      <x-icon type="android-volume-down" size="30" @click="showType('android-volume-down')"></x-icon>
      <x-icon type="android-volume-mute" size="30" @click="showType('android-volume-mute')"></x-icon>
      <x-icon type="android-volume-off" size="30" @click="showType('android-volume-off')"></x-icon>
      <x-icon type="android-volume-up" size="30" @click="showType('android-volume-up')"></x-icon>
      <x-icon type="android-walk" size="30" @click="showType('android-walk')"></x-icon>
      <x-icon type="android-warning" size="30" @click="showType('android-warning')"></x-icon>
      <x-icon type="android-watch" size="30" @click="showType('android-watch')"></x-icon>
      <x-icon type="android-wifi" size="30" @click="showType('android-wifi')"></x-icon>
      <x-icon type="aperture" size="30" @click="showType('aperture')"></x-icon>
      <x-icon type="archive" size="30" @click="showType('archive')"></x-icon>
      <x-icon type="arrow-down-a" size="30" @click="showType('arrow-down-a')"></x-icon>
      <x-icon type="arrow-down-b" size="30" @click="showType('arrow-down-b')"></x-icon>
      <x-icon type="arrow-down-c" size="30" @click="showType('arrow-down-c')"></x-icon>
      <x-icon type="arrow-expand" size="30" @click="showType('arrow-expand')"></x-icon>
      <x-icon type="arrow-graph-down-left" size="30" @click="showType('arrow-graph-down-left')"></x-icon>
      <x-icon type="arrow-graph-down-right" size="30" @click="showType('arrow-graph-down-right')"></x-icon>
      <x-icon type="arrow-graph-up-left" size="30" @click="showType('arrow-graph-up-left')"></x-icon>
      <x-icon type="arrow-graph-up-right" size="30" @click="showType('arrow-graph-up-right')"></x-icon>
      <x-icon type="arrow-left-a" size="30" @click="showType('arrow-left-a')"></x-icon>
      <x-icon type="arrow-left-b" size="30" @click="showType('arrow-left-b')"></x-icon>
      <x-icon type="arrow-left-c" size="30" @click="showType('arrow-left-c')"></x-icon>
      <x-icon type="arrow-move" size="30" @click="showType('arrow-move')"></x-icon>
      <x-icon type="arrow-resize" size="30" @click="showType('arrow-resize')"></x-icon>
      <x-icon type="arrow-return-left" size="30" @click="showType('arrow-return-left')"></x-icon>
      <x-icon type="arrow-return-right" size="30" @click="showType('arrow-return-right')"></x-icon>
      <x-icon type="arrow-right-a" size="30" @click="showType('arrow-right-a')"></x-icon>
      <x-icon type="arrow-right-b" size="30" @click="showType('arrow-right-b')"></x-icon>
      <x-icon type="arrow-right-c" size="30" @click="showType('arrow-right-c')"></x-icon>
      <x-icon type="arrow-shrink" size="30" @click="showType('arrow-shrink')"></x-icon>
      <x-icon type="arrow-swap" size="30" @click="showType('arrow-swap')"></x-icon>
      <x-icon type="arrow-up-a" size="30" @click="showType('arrow-up-a')"></x-icon>
      <x-icon type="arrow-up-b" size="30" @click="showType('arrow-up-b')"></x-icon>
      <x-icon type="arrow-up-c" size="30" @click="showType('arrow-up-c')"></x-icon>
      <x-icon type="asterisk" size="30" @click="showType('asterisk')"></x-icon>
      <x-icon type="at" size="30" @click="showType('at')"></x-icon>
      <x-icon type="backspace-outline" size="30" @click="showType('backspace-outline')"></x-icon>
      <x-icon type="backspace" size="30" @click="showType('backspace')"></x-icon>
      <x-icon type="bag" size="30" @click="showType('bag')"></x-icon>
      <x-icon type="battery-charging" size="30" @click="showType('battery-charging')"></x-icon>
      <x-icon type="battery-empty" size="30" @click="showType('battery-empty')"></x-icon>
      <x-icon type="battery-full" size="30" @click="showType('battery-full')"></x-icon>
      <x-icon type="battery-half" size="30" @click="showType('battery-half')"></x-icon>
      <x-icon type="battery-low" size="30" @click="showType('battery-low')"></x-icon>
      <x-icon type="beaker" size="30" @click="showType('beaker')"></x-icon>
      <x-icon type="beer" size="30" @click="showType('beer')"></x-icon>
      <x-icon type="bluetooth" size="30" @click="showType('bluetooth')"></x-icon>
      <x-icon type="bonfire" size="30" @click="showType('bonfire')"></x-icon>
      <x-icon type="bookmark" size="30" @click="showType('bookmark')"></x-icon>
      <x-icon type="bowtie" size="30" @click="showType('bowtie')"></x-icon>
      <x-icon type="briefcase" size="30" @click="showType('briefcase')"></x-icon>
      <x-icon type="bug" size="30" @click="showType('bug')"></x-icon>
      <x-icon type="calculator" size="30" @click="showType('calculator')"></x-icon>
      <x-icon type="calendar" size="30" @click="showType('calendar')"></x-icon>
      <x-icon type="camera" size="30" @click="showType('camera')"></x-icon>
      <x-icon type="card" size="30" @click="showType('card')"></x-icon>
      <x-icon type="cash" size="30" @click="showType('cash')"></x-icon>
      <x-icon type="chatbox-working" size="30" @click="showType('chatbox-working')"></x-icon>
      <x-icon type="chatbox" size="30" @click="showType('chatbox')"></x-icon>
      <x-icon type="chatboxes" size="30" @click="showType('chatboxes')"></x-icon>
      <x-icon type="chatbubble-working" size="30" @click="showType('chatbubble-working')"></x-icon>
      <x-icon type="chatbubble" size="30" @click="showType('chatbubble')"></x-icon>
      <x-icon type="chatbubbles" size="30" @click="showType('chatbubbles')"></x-icon>
      <x-icon type="checkmark-circled" size="30" @click="showType('checkmark-circled')"></x-icon>
      <x-icon type="checkmark-round" size="30" @click="showType('checkmark-round')"></x-icon>
      <x-icon type="checkmark" size="30" @click="showType('checkmark')"></x-icon>
      <x-icon type="chevron-down" size="30" @click="showType('chevron-down')"></x-icon>
      <x-icon type="chevron-left" size="30" @click="showType('chevron-left')"></x-icon>
      <x-icon type="chevron-right" size="30" @click="showType('chevron-right')"></x-icon>
      <x-icon type="chevron-up" size="30" @click="showType('chevron-up')"></x-icon>
      <x-icon type="clipboard" size="30" @click="showType('clipboard')"></x-icon>
      <x-icon type="clock" size="30" @click="showType('clock')"></x-icon>
      <x-icon type="close-circled" size="30" @click="showType('close-circled')"></x-icon>
      <x-icon type="close-round" size="30" @click="showType('close-round')"></x-icon>
      <x-icon type="close" size="30" @click="showType('close')"></x-icon>
      <x-icon type="closed-captioning" size="30" @click="showType('closed-captioning')"></x-icon>
      <x-icon type="cloud" size="30" @click="showType('cloud')"></x-icon>
      <x-icon type="code-download" size="30" @click="showType('code-download')"></x-icon>
      <x-icon type="code-working" size="30" @click="showType('code-working')"></x-icon>
      <x-icon type="code" size="30" @click="showType('code')"></x-icon>
      <x-icon type="coffee" size="30" @click="showType('coffee')"></x-icon>
      <x-icon type="compass" size="30" @click="showType('compass')"></x-icon>
      <x-icon type="compose" size="30" @click="showType('compose')"></x-icon>
      <x-icon type="connection-bars" size="30" @click="showType('connection-bars')"></x-icon>
      <x-icon type="contrast" size="30" @click="showType('contrast')"></x-icon>
      <x-icon type="crop" size="30" @click="showType('crop')"></x-icon>
      <x-icon type="cube" size="30" @click="showType('cube')"></x-icon>
      <x-icon type="disc" size="30" @click="showType('disc')"></x-icon>
      <x-icon type="document-text" size="30" @click="showType('document-text')"></x-icon>
      <x-icon type="document" size="30" @click="showType('document')"></x-icon>
      <x-icon type="drag" size="30" @click="showType('drag')"></x-icon>
      <x-icon type="earth" size="30" @click="showType('earth')"></x-icon>
      <x-icon type="easel" size="30" @click="showType('easel')"></x-icon>
      <x-icon type="edit" size="30" @click="showType('edit')"></x-icon>
      <x-icon type="egg" size="30" @click="showType('egg')"></x-icon>
      <x-icon type="eject" size="30" @click="showType('eject')"></x-icon>
      <x-icon type="email-unread" size="30" @click="showType('email-unread')"></x-icon>
      <x-icon type="email" size="30" @click="showType('email')"></x-icon>
      <x-icon type="erlenmeyer-flask-bubbles" size="30" @click="showType('erlenmeyer-flask-bubbles')"></x-icon>
      <x-icon type="erlenmeyer-flask" size="30" @click="showType('erlenmeyer-flask')"></x-icon>
      <x-icon type="eye-disabled" size="30" @click="showType('eye-disabled')"></x-icon>
      <x-icon type="eye" size="30" @click="showType('eye')"></x-icon>
      <x-icon type="female" size="30" @click="showType('female')"></x-icon>
      <x-icon type="filing" size="30" @click="showType('filing')"></x-icon>
      <x-icon type="film-marker" size="30" @click="showType('film-marker')"></x-icon>
      <x-icon type="fireball" size="30" @click="showType('fireball')"></x-icon>
      <x-icon type="flag" size="30" @click="showType('flag')"></x-icon>
      <x-icon type="flame" size="30" @click="showType('flame')"></x-icon>
      <x-icon type="flash-off" size="30" @click="showType('flash-off')"></x-icon>
      <x-icon type="flash" size="30" @click="showType('flash')"></x-icon>
      <x-icon type="folder" size="30" @click="showType('folder')"></x-icon>
      <x-icon type="fork-repo" size="30" @click="showType('fork-repo')"></x-icon>
      <x-icon type="fork" size="30" @click="showType('fork')"></x-icon>
      <x-icon type="forward" size="30" @click="showType('forward')"></x-icon>
      <x-icon type="funnel" size="30" @click="showType('funnel')"></x-icon>
      <x-icon type="gear-a" size="30" @click="showType('gear-a')"></x-icon>
      <x-icon type="gear-b" size="30" @click="showType('gear-b')"></x-icon>
      <x-icon type="grid" size="30" @click="showType('grid')"></x-icon>
      <x-icon type="hammer" size="30" @click="showType('hammer')"></x-icon>
      <x-icon type="happy-outline" size="30" @click="showType('happy-outline')"></x-icon>
      <x-icon type="happy" size="30" @click="showType('happy')"></x-icon>
      <x-icon type="headphone" size="30" @click="showType('headphone')"></x-icon>
      <x-icon type="heart-broken" size="30" @click="showType('heart-broken')"></x-icon>
      <x-icon type="heart" size="30" @click="showType('heart')"></x-icon>
      <x-icon type="help-buoy" size="30" @click="showType('help-buoy')"></x-icon>
      <x-icon type="help-circled" size="30" @click="showType('help-circled')"></x-icon>
      <x-icon type="help" size="30" @click="showType('help')"></x-icon>
      <x-icon type="home" size="30" @click="showType('home')"></x-icon>
      <x-icon type="icecream" size="30" @click="showType('icecream')"></x-icon>
      <x-icon type="image" size="30" @click="showType('image')"></x-icon>
      <x-icon type="images" size="30" @click="showType('images')"></x-icon>
      <x-icon type="information-circled" size="30" @click="showType('information-circled')"></x-icon>
      <x-icon type="information" size="30" @click="showType('information')"></x-icon>
      <x-icon type="ionic" size="30" @click="showType('ionic')"></x-icon>
      <x-icon type="ios-alarm-outline" size="30" @click="showType('ios-alarm-outline')"></x-icon>
      <x-icon type="ios-alarm" size="30" @click="showType('ios-alarm')"></x-icon>
      <x-icon type="ios-albums-outline" size="30" @click="showType('ios-albums-outline')"></x-icon>
      <x-icon type="ios-albums" size="30" @click="showType('ios-albums')"></x-icon>
      <x-icon type="ios-americanfootball-outline" size="30" @click="showType('ios-americanfootball-outline')"></x-icon>
      <x-icon type="ios-americanfootball" size="30" @click="showType('ios-americanfootball')"></x-icon>
      <x-icon type="ios-analytics-outline" size="30" @click="showType('ios-analytics-outline')"></x-icon>
      <x-icon type="ios-analytics" size="30" @click="showType('ios-analytics')"></x-icon>
      <x-icon type="ios-arrow-back" size="30" @click="showType('ios-arrow-back')"></x-icon>
      <x-icon type="ios-arrow-down" size="30" @click="showType('ios-arrow-down')"></x-icon>
      <x-icon type="ios-arrow-forward" size="30" @click="showType('ios-arrow-forward')"></x-icon>
      <x-icon type="ios-arrow-left" size="30" @click="showType('ios-arrow-left')"></x-icon>
      <x-icon type="ios-arrow-right" size="30" @click="showType('ios-arrow-right')"></x-icon>
      <x-icon type="ios-arrow-thin-down" size="30" @click="showType('ios-arrow-thin-down')"></x-icon>
      <x-icon type="ios-arrow-thin-left" size="30" @click="showType('ios-arrow-thin-left')"></x-icon>
      <x-icon type="ios-arrow-thin-right" size="30" @click="showType('ios-arrow-thin-right')"></x-icon>
      <x-icon type="ios-arrow-thin-up" size="30" @click="showType('ios-arrow-thin-up')"></x-icon>
      <x-icon type="ios-arrow-up" size="30" @click="showType('ios-arrow-up')"></x-icon>
      <x-icon type="ios-at-outline" size="30" @click="showType('ios-at-outline')"></x-icon>
      <x-icon type="ios-at" size="30" @click="showType('ios-at')"></x-icon>
      <x-icon type="ios-barcode-outline" size="30" @click="showType('ios-barcode-outline')"></x-icon>
      <x-icon type="ios-barcode" size="30" @click="showType('ios-barcode')"></x-icon>
      <x-icon type="ios-baseball-outline" size="30" @click="showType('ios-baseball-outline')"></x-icon>
      <x-icon type="ios-baseball" size="30" @click="showType('ios-baseball')"></x-icon>
      <x-icon type="ios-basketball-outline" size="30" @click="showType('ios-basketball-outline')"></x-icon>
      <x-icon type="ios-basketball" size="30" @click="showType('ios-basketball')"></x-icon>
      <x-icon type="ios-bell-outline" size="30" @click="showType('ios-bell-outline')"></x-icon>
      <x-icon type="ios-bell" size="30" @click="showType('ios-bell')"></x-icon>
      <x-icon type="ios-body-outline" size="30" @click="showType('ios-body-outline')"></x-icon>
      <x-icon type="ios-body" size="30" @click="showType('ios-body')"></x-icon>
      <x-icon type="ios-bolt-outline" size="30" @click="showType('ios-bolt-outline')"></x-icon>
      <x-icon type="ios-bolt" size="30" @click="showType('ios-bolt')"></x-icon>
      <x-icon type="ios-book-outline" size="30" @click="showType('ios-book-outline')"></x-icon>
      <x-icon type="ios-book" size="30" @click="showType('ios-book')"></x-icon>
      <x-icon type="ios-bookmarks-outline" size="30" @click="showType('ios-bookmarks-outline')"></x-icon>
      <x-icon type="ios-bookmarks" size="30" @click="showType('ios-bookmarks')"></x-icon>
      <x-icon type="ios-box-outline" size="30" @click="showType('ios-box-outline')"></x-icon>
      <x-icon type="ios-box" size="30" @click="showType('ios-box')"></x-icon>
      <x-icon type="ios-briefcase-outline" size="30" @click="showType('ios-briefcase-outline')"></x-icon>
      <x-icon type="ios-briefcase" size="30" @click="showType('ios-briefcase')"></x-icon>
      <x-icon type="ios-browsers-outline" size="30" @click="showType('ios-browsers-outline')"></x-icon>
      <x-icon type="ios-browsers" size="30" @click="showType('ios-browsers')"></x-icon>
      <x-icon type="ios-calculator-outline" size="30" @click="showType('ios-calculator-outline')"></x-icon>
      <x-icon type="ios-calculator" size="30" @click="showType('ios-calculator')"></x-icon>
      <x-icon type="ios-calendar-outline" size="30" @click="showType('ios-calendar-outline')"></x-icon>
      <x-icon type="ios-calendar" size="30" @click="showType('ios-calendar')"></x-icon>
      <x-icon type="ios-camera-outline" size="30" @click="showType('ios-camera-outline')"></x-icon>
      <x-icon type="ios-camera" size="30" @click="showType('ios-camera')"></x-icon>
      <x-icon type="ios-cart-outline" size="30" @click="showType('ios-cart-outline')"></x-icon>
      <x-icon type="ios-cart" size="30" @click="showType('ios-cart')"></x-icon>
      <x-icon type="ios-chatboxes-outline" size="30" @click="showType('ios-chatboxes-outline')"></x-icon>
      <x-icon type="ios-chatboxes" size="30" @click="showType('ios-chatboxes')"></x-icon>
      <x-icon type="ios-chatbubble-outline" size="30" @click="showType('ios-chatbubble-outline')"></x-icon>
      <x-icon type="ios-chatbubble" size="30" @click="showType('ios-chatbubble')"></x-icon>
      <x-icon type="ios-checkmark-empty" size="30" @click="showType('ios-checkmark-empty')"></x-icon>
      <x-icon type="ios-checkmark-outline" size="30" @click="showType('ios-checkmark-outline')"></x-icon>
      <x-icon type="ios-checkmark" size="30" @click="showType('ios-checkmark')"></x-icon>
      <x-icon type="ios-circle-filled" size="30" @click="showType('ios-circle-filled')"></x-icon>
      <x-icon type="ios-circle-outline" size="30" @click="showType('ios-circle-outline')"></x-icon>
      <x-icon type="ios-clock-outline" size="30" @click="showType('ios-clock-outline')"></x-icon>
      <x-icon type="ios-clock" size="30" @click="showType('ios-clock')"></x-icon>
      <x-icon type="ios-close-empty" size="30" @click="showType('ios-close-empty')"></x-icon>
      <x-icon type="ios-close-outline" size="30" @click="showType('ios-close-outline')"></x-icon>
      <x-icon type="ios-close" size="30" @click="showType('ios-close')"></x-icon>
      <x-icon type="ios-cloud-download-outline" size="30" @click="showType('ios-cloud-download-outline')"></x-icon>
      <x-icon type="ios-cloud-download" size="30" @click="showType('ios-cloud-download')"></x-icon>
      <x-icon type="ios-cloud-outline" size="30" @click="showType('ios-cloud-outline')"></x-icon>
      <x-icon type="ios-cloud-upload-outline" size="30" @click="showType('ios-cloud-upload-outline')"></x-icon>
      <x-icon type="ios-cloud-upload" size="30" @click="showType('ios-cloud-upload')"></x-icon>
      <x-icon type="ios-cloud" size="30" @click="showType('ios-cloud')"></x-icon>
      <x-icon type="ios-cloudy-night-outline" size="30" @click="showType('ios-cloudy-night-outline')"></x-icon>
      <x-icon type="ios-cloudy-night" size="30" @click="showType('ios-cloudy-night')"></x-icon>
      <x-icon type="ios-cloudy-outline" size="30" @click="showType('ios-cloudy-outline')"></x-icon>
      <x-icon type="ios-cloudy" size="30" @click="showType('ios-cloudy')"></x-icon>
      <x-icon type="ios-cog-outline" size="30" @click="showType('ios-cog-outline')"></x-icon>
      <x-icon type="ios-cog" size="30" @click="showType('ios-cog')"></x-icon>
      <x-icon type="ios-color-filter-outline" size="30" @click="showType('ios-color-filter-outline')"></x-icon>
      <x-icon type="ios-color-filter" size="30" @click="showType('ios-color-filter')"></x-icon>
      <x-icon type="ios-color-wand-outline" size="30" @click="showType('ios-color-wand-outline')"></x-icon>
      <x-icon type="ios-color-wand" size="30" @click="showType('ios-color-wand')"></x-icon>
      <x-icon type="ios-compose-outline" size="30" @click="showType('ios-compose-outline')"></x-icon>
      <x-icon type="ios-compose" size="30" @click="showType('ios-compose')"></x-icon>
      <x-icon type="ios-contact-outline" size="30" @click="showType('ios-contact-outline')"></x-icon>
      <x-icon type="ios-contact" size="30" @click="showType('ios-contact')"></x-icon>
      <x-icon type="ios-copy-outline" size="30" @click="showType('ios-copy-outline')"></x-icon>
      <x-icon type="ios-copy" size="30" @click="showType('ios-copy')"></x-icon>
      <x-icon type="ios-crop-strong" size="30" @click="showType('ios-crop-strong')"></x-icon>
      <x-icon type="ios-crop" size="30" @click="showType('ios-crop')"></x-icon>
      <x-icon type="ios-download-outline" size="30" @click="showType('ios-download-outline')"></x-icon>
      <x-icon type="ios-download" size="30" @click="showType('ios-download')"></x-icon>
      <x-icon type="ios-drag" size="30" @click="showType('ios-drag')"></x-icon>
      <x-icon type="ios-email-outline" size="30" @click="showType('ios-email-outline')"></x-icon>
      <x-icon type="ios-email" size="30" @click="showType('ios-email')"></x-icon>
      <x-icon type="ios-eye-outline" size="30" @click="showType('ios-eye-outline')"></x-icon>
      <x-icon type="ios-eye" size="30" @click="showType('ios-eye')"></x-icon>
      <x-icon type="ios-fastforward-outline" size="30" @click="showType('ios-fastforward-outline')"></x-icon>
      <x-icon type="ios-fastforward" size="30" @click="showType('ios-fastforward')"></x-icon>
      <x-icon type="ios-filing-outline" size="30" @click="showType('ios-filing-outline')"></x-icon>
      <x-icon type="ios-filing" size="30" @click="showType('ios-filing')"></x-icon>
      <x-icon type="ios-film-outline" size="30" @click="showType('ios-film-outline')"></x-icon>
      <x-icon type="ios-film" size="30" @click="showType('ios-film')"></x-icon>
      <x-icon type="ios-flag-outline" size="30" @click="showType('ios-flag-outline')"></x-icon>
      <x-icon type="ios-flag" size="30" @click="showType('ios-flag')"></x-icon>
      <x-icon type="ios-flame-outline" size="30" @click="showType('ios-flame-outline')"></x-icon>
      <x-icon type="ios-flame" size="30" @click="showType('ios-flame')"></x-icon>
      <x-icon type="ios-flask-outline" size="30" @click="showType('ios-flask-outline')"></x-icon>
      <x-icon type="ios-flask" size="30" @click="showType('ios-flask')"></x-icon>
      <x-icon type="ios-flower-outline" size="30" @click="showType('ios-flower-outline')"></x-icon>
      <x-icon type="ios-flower" size="30" @click="showType('ios-flower')"></x-icon>
      <x-icon type="ios-folder-outline" size="30" @click="showType('ios-folder-outline')"></x-icon>
      <x-icon type="ios-folder" size="30" @click="showType('ios-folder')"></x-icon>
      <x-icon type="ios-football-outline" size="30" @click="showType('ios-football-outline')"></x-icon>
      <x-icon type="ios-football" size="30" @click="showType('ios-football')"></x-icon>
      <x-icon type="ios-game-controller-a-outline" size="30" @click="showType('ios-game-controller-a-outline')"></x-icon>
      <x-icon type="ios-game-controller-a" size="30" @click="showType('ios-game-controller-a')"></x-icon>
      <x-icon type="ios-game-controller-b-outline" size="30" @click="showType('ios-game-controller-b-outline')"></x-icon>
      <x-icon type="ios-game-controller-b" size="30" @click="showType('ios-game-controller-b')"></x-icon>
      <x-icon type="ios-gear-outline" size="30" @click="showType('ios-gear-outline')"></x-icon>
      <x-icon type="ios-gear" size="30" @click="showType('ios-gear')"></x-icon>
      <x-icon type="ios-glasses-outline" size="30" @click="showType('ios-glasses-outline')"></x-icon>
      <x-icon type="ios-glasses" size="30" @click="showType('ios-glasses')"></x-icon>
      <x-icon type="ios-grid-view-outline" size="30" @click="showType('ios-grid-view-outline')"></x-icon>
      <x-icon type="ios-grid-view" size="30" @click="showType('ios-grid-view')"></x-icon>
      <x-icon type="ios-heart-outline" size="30" @click="showType('ios-heart-outline')"></x-icon>
      <x-icon type="ios-heart" size="30" @click="showType('ios-heart')"></x-icon>
      <x-icon type="ios-help-empty" size="30" @click="showType('ios-help-empty')"></x-icon>
      <x-icon type="ios-help-outline" size="30" @click="showType('ios-help-outline')"></x-icon>
      <x-icon type="ios-help" size="30" @click="showType('ios-help')"></x-icon>
      <x-icon type="ios-home-outline" size="30" @click="showType('ios-home-outline')"></x-icon>
      <x-icon type="ios-home" size="30" @click="showType('ios-home')"></x-icon>
      <x-icon type="ios-infinite-outline" size="30" @click="showType('ios-infinite-outline')"></x-icon>
      <x-icon type="ios-infinite" size="30" @click="showType('ios-infinite')"></x-icon>
      <x-icon type="ios-information-empty" size="30" @click="showType('ios-information-empty')"></x-icon>
      <x-icon type="ios-information-outline" size="30" @click="showType('ios-information-outline')"></x-icon>
      <x-icon type="ios-information" size="30" @click="showType('ios-information')"></x-icon>
      <x-icon type="ios-ionic-outline" size="30" @click="showType('ios-ionic-outline')"></x-icon>
      <x-icon type="ios-keypad-outline" size="30" @click="showType('ios-keypad-outline')"></x-icon>
      <x-icon type="ios-keypad" size="30" @click="showType('ios-keypad')"></x-icon>
      <x-icon type="ios-lightbulb-outline" size="30" @click="showType('ios-lightbulb-outline')"></x-icon>
      <x-icon type="ios-lightbulb" size="30" @click="showType('ios-lightbulb')"></x-icon>
      <x-icon type="ios-list-outline" size="30" @click="showType('ios-list-outline')"></x-icon>
      <x-icon type="ios-list" size="30" @click="showType('ios-list')"></x-icon>
      <x-icon type="ios-location-outline" size="30" @click="showType('ios-location-outline')"></x-icon>
      <x-icon type="ios-location" size="30" @click="showType('ios-location')"></x-icon>
      <x-icon type="ios-locked-outline" size="30" @click="showType('ios-locked-outline')"></x-icon>
      <x-icon type="ios-locked" size="30" @click="showType('ios-locked')"></x-icon>
      <x-icon type="ios-loop-strong" size="30" @click="showType('ios-loop-strong')"></x-icon>
      <x-icon type="ios-loop" size="30" @click="showType('ios-loop')"></x-icon>
      <x-icon type="ios-medical-outline" size="30" @click="showType('ios-medical-outline')"></x-icon>
      <x-icon type="ios-medical" size="30" @click="showType('ios-medical')"></x-icon>
      <x-icon type="ios-medkit-outline" size="30" @click="showType('ios-medkit-outline')"></x-icon>
      <x-icon type="ios-medkit" size="30" @click="showType('ios-medkit')"></x-icon>
      <x-icon type="ios-mic-off" size="30" @click="showType('ios-mic-off')"></x-icon>
      <x-icon type="ios-mic-outline" size="30" @click="showType('ios-mic-outline')"></x-icon>
      <x-icon type="ios-mic" size="30" @click="showType('ios-mic')"></x-icon>
      <x-icon type="ios-minus-empty" size="30" @click="showType('ios-minus-empty')"></x-icon>
      <x-icon type="ios-minus-outline" size="30" @click="showType('ios-minus-outline')"></x-icon>
      <x-icon type="ios-minus" size="30" @click="showType('ios-minus')"></x-icon>
      <x-icon type="ios-monitor-outline" size="30" @click="showType('ios-monitor-outline')"></x-icon>
      <x-icon type="ios-monitor" size="30" @click="showType('ios-monitor')"></x-icon>
      <x-icon type="ios-moon-outline" size="30" @click="showType('ios-moon-outline')"></x-icon>
      <x-icon type="ios-moon" size="30" @click="showType('ios-moon')"></x-icon>
      <x-icon type="ios-more-outline" size="30" @click="showType('ios-more-outline')"></x-icon>
      <x-icon type="ios-more" size="30" @click="showType('ios-more')"></x-icon>
      <x-icon type="ios-musical-note" size="30" @click="showType('ios-musical-note')"></x-icon>
      <x-icon type="ios-musical-notes" size="30" @click="showType('ios-musical-notes')"></x-icon>
      <x-icon type="ios-navigate-outline" size="30" @click="showType('ios-navigate-outline')"></x-icon>
      <x-icon type="ios-navigate" size="30" @click="showType('ios-navigate')"></x-icon>
      <x-icon type="ios-nutrition-outline" size="30" @click="showType('ios-nutrition-outline')"></x-icon>
      <x-icon type="ios-nutrition" size="30" @click="showType('ios-nutrition')"></x-icon>
      <x-icon type="ios-paper-outline" size="30" @click="showType('ios-paper-outline')"></x-icon>
      <x-icon type="ios-paper" size="30" @click="showType('ios-paper')"></x-icon>
      <x-icon type="ios-paperplane-outline" size="30" @click="showType('ios-paperplane-outline')"></x-icon>
      <x-icon type="ios-paperplane" size="30" @click="showType('ios-paperplane')"></x-icon>
      <x-icon type="ios-partlysunny-outline" size="30" @click="showType('ios-partlysunny-outline')"></x-icon>
      <x-icon type="ios-partlysunny" size="30" @click="showType('ios-partlysunny')"></x-icon>
      <x-icon type="ios-pause-outline" size="30" @click="showType('ios-pause-outline')"></x-icon>
      <x-icon type="ios-pause" size="30" @click="showType('ios-pause')"></x-icon>
      <x-icon type="ios-paw-outline" size="30" @click="showType('ios-paw-outline')"></x-icon>
      <x-icon type="ios-paw" size="30" @click="showType('ios-paw')"></x-icon>
      <x-icon type="ios-people-outline" size="30" @click="showType('ios-people-outline')"></x-icon>
      <x-icon type="ios-people" size="30" @click="showType('ios-people')"></x-icon>
      <x-icon type="ios-person-outline" size="30" @click="showType('ios-person-outline')"></x-icon>
      <x-icon type="ios-person" size="30" @click="showType('ios-person')"></x-icon>
      <x-icon type="ios-personadd-outline" size="30" @click="showType('ios-personadd-outline')"></x-icon>
      <x-icon type="ios-personadd" size="30" @click="showType('ios-personadd')"></x-icon>
      <x-icon type="ios-photos-outline" size="30" @click="showType('ios-photos-outline')"></x-icon>
      <x-icon type="ios-photos" size="30" @click="showType('ios-photos')"></x-icon>
      <x-icon type="ios-pie-outline" size="30" @click="showType('ios-pie-outline')"></x-icon>
      <x-icon type="ios-pie" size="30" @click="showType('ios-pie')"></x-icon>
      <x-icon type="ios-pint-outline" size="30" @click="showType('ios-pint-outline')"></x-icon>
      <x-icon type="ios-pint" size="30" @click="showType('ios-pint')"></x-icon>
      <x-icon type="ios-play-outline" size="30" @click="showType('ios-play-outline')"></x-icon>
      <x-icon type="ios-play" size="30" @click="showType('ios-play')"></x-icon>
      <x-icon type="ios-plus-empty" size="30" @click="showType('ios-plus-empty')"></x-icon>
      <x-icon type="ios-plus-outline" size="30" @click="showType('ios-plus-outline')"></x-icon>
      <x-icon type="ios-plus" size="30" @click="showType('ios-plus')"></x-icon>
      <x-icon type="ios-pricetag-outline" size="30" @click="showType('ios-pricetag-outline')"></x-icon>
      <x-icon type="ios-pricetag" size="30" @click="showType('ios-pricetag')"></x-icon>
      <x-icon type="ios-pricetags-outline" size="30" @click="showType('ios-pricetags-outline')"></x-icon>
      <x-icon type="ios-pricetags" size="30" @click="showType('ios-pricetags')"></x-icon>
      <x-icon type="ios-printer-outline" size="30" @click="showType('ios-printer-outline')"></x-icon>
      <x-icon type="ios-printer" size="30" @click="showType('ios-printer')"></x-icon>
      <x-icon type="ios-pulse-strong" size="30" @click="showType('ios-pulse-strong')"></x-icon>
      <x-icon type="ios-pulse" size="30" @click="showType('ios-pulse')"></x-icon>
      <x-icon type="ios-rainy-outline" size="30" @click="showType('ios-rainy-outline')"></x-icon>
      <x-icon type="ios-rainy" size="30" @click="showType('ios-rainy')"></x-icon>
      <x-icon type="ios-recording-outline" size="30" @click="showType('ios-recording-outline')"></x-icon>
      <x-icon type="ios-recording" size="30" @click="showType('ios-recording')"></x-icon>
      <x-icon type="ios-redo-outline" size="30" @click="showType('ios-redo-outline')"></x-icon>
      <x-icon type="ios-redo" size="30" @click="showType('ios-redo')"></x-icon>
      <x-icon type="ios-refresh-empty" size="30" @click="showType('ios-refresh-empty')"></x-icon>
      <x-icon type="ios-refresh-outline" size="30" @click="showType('ios-refresh-outline')"></x-icon>
      <x-icon type="ios-refresh" size="30" @click="showType('ios-refresh')"></x-icon>
      <x-icon type="ios-reload" size="30" @click="showType('ios-reload')"></x-icon>
      <x-icon type="ios-reverse-camera-outline" size="30" @click="showType('ios-reverse-camera-outline')"></x-icon>
      <x-icon type="ios-reverse-camera" size="30" @click="showType('ios-reverse-camera')"></x-icon>
      <x-icon type="ios-rewind-outline" size="30" @click="showType('ios-rewind-outline')"></x-icon>
      <x-icon type="ios-rewind" size="30" @click="showType('ios-rewind')"></x-icon>
      <x-icon type="ios-rose-outline" size="30" @click="showType('ios-rose-outline')"></x-icon>
      <x-icon type="ios-rose" size="30" @click="showType('ios-rose')"></x-icon>
      <x-icon type="ios-search-strong" size="30" @click="showType('ios-search-strong')"></x-icon>
      <x-icon type="ios-search" size="30" @click="showType('ios-search')"></x-icon>
      <x-icon type="ios-settings-strong" size="30" @click="showType('ios-settings-strong')"></x-icon>
      <x-icon type="ios-settings" size="30" @click="showType('ios-settings')"></x-icon>
      <x-icon type="ios-shuffle-strong" size="30" @click="showType('ios-shuffle-strong')"></x-icon>
      <x-icon type="ios-shuffle" size="30" @click="showType('ios-shuffle')"></x-icon>
      <x-icon type="ios-skipbackward-outline" size="30" @click="showType('ios-skipbackward-outline')"></x-icon>
      <x-icon type="ios-skipbackward" size="30" @click="showType('ios-skipbackward')"></x-icon>
      <x-icon type="ios-skipforward-outline" size="30" @click="showType('ios-skipforward-outline')"></x-icon>
      <x-icon type="ios-skipforward" size="30" @click="showType('ios-skipforward')"></x-icon>
      <x-icon type="ios-snowy" size="30" @click="showType('ios-snowy')"></x-icon>
      <x-icon type="ios-speedometer-outline" size="30" @click="showType('ios-speedometer-outline')"></x-icon>
      <x-icon type="ios-speedometer" size="30" @click="showType('ios-speedometer')"></x-icon>
      <x-icon type="ios-star-half" size="30" @click="showType('ios-star-half')"></x-icon>
      <x-icon type="ios-star-outline" size="30" @click="showType('ios-star-outline')"></x-icon>
      <x-icon type="ios-star" size="30" @click="showType('ios-star')"></x-icon>
      <x-icon type="ios-stopwatch-outline" size="30" @click="showType('ios-stopwatch-outline')"></x-icon>
      <x-icon type="ios-stopwatch" size="30" @click="showType('ios-stopwatch')"></x-icon>
      <x-icon type="ios-sunny-outline" size="30" @click="showType('ios-sunny-outline')"></x-icon>
      <x-icon type="ios-sunny" size="30" @click="showType('ios-sunny')"></x-icon>
      <x-icon type="ios-telephone-outline" size="30" @click="showType('ios-telephone-outline')"></x-icon>
      <x-icon type="ios-telephone" size="30" @click="showType('ios-telephone')"></x-icon>
      <x-icon type="ios-tennisball-outline" size="30" @click="showType('ios-tennisball-outline')"></x-icon>
      <x-icon type="ios-tennisball" size="30" @click="showType('ios-tennisball')"></x-icon>
      <x-icon type="ios-thunderstorm-outline" size="30" @click="showType('ios-thunderstorm-outline')"></x-icon>
      <x-icon type="ios-thunderstorm" size="30" @click="showType('ios-thunderstorm')"></x-icon>
      <x-icon type="ios-time-outline" size="30" @click="showType('ios-time-outline')"></x-icon>
      <x-icon type="ios-time" size="30" @click="showType('ios-time')"></x-icon>
      <x-icon type="ios-timer-outline" size="30" @click="showType('ios-timer-outline')"></x-icon>
      <x-icon type="ios-timer" size="30" @click="showType('ios-timer')"></x-icon>
      <x-icon type="ios-toggle-outline" size="30" @click="showType('ios-toggle-outline')"></x-icon>
      <x-icon type="ios-toggle" size="30" @click="showType('ios-toggle')"></x-icon>
      <x-icon type="ios-trash-outline" size="30" @click="showType('ios-trash-outline')"></x-icon>
      <x-icon type="ios-trash" size="30" @click="showType('ios-trash')"></x-icon>
      <x-icon type="ios-undo-outline" size="30" @click="showType('ios-undo-outline')"></x-icon>
      <x-icon type="ios-undo" size="30" @click="showType('ios-undo')"></x-icon>
      <x-icon type="ios-unlocked-outline" size="30" @click="showType('ios-unlocked-outline')"></x-icon>
      <x-icon type="ios-unlocked" size="30" @click="showType('ios-unlocked')"></x-icon>
      <x-icon type="ios-upload-outline" size="30" @click="showType('ios-upload-outline')"></x-icon>
      <x-icon type="ios-upload" size="30" @click="showType('ios-upload')"></x-icon>
      <x-icon type="ios-videocam-outline" size="30" @click="showType('ios-videocam-outline')"></x-icon>
      <x-icon type="ios-videocam" size="30" @click="showType('ios-videocam')"></x-icon>
      <x-icon type="ios-volume-high" size="30" @click="showType('ios-volume-high')"></x-icon>
      <x-icon type="ios-volume-low" size="30" @click="showType('ios-volume-low')"></x-icon>
      <x-icon type="ios-wineglass-outline" size="30" @click="showType('ios-wineglass-outline')"></x-icon>
      <x-icon type="ios-wineglass" size="30" @click="showType('ios-wineglass')"></x-icon>
      <x-icon type="ios-world-outline" size="30" @click="showType('ios-world-outline')"></x-icon>
      <x-icon type="ios-world" size="30" @click="showType('ios-world')"></x-icon>
      <x-icon type="ipad" size="30" @click="showType('ipad')"></x-icon>
      <x-icon type="iphone" size="30" @click="showType('iphone')"></x-icon>
      <x-icon type="ipod" size="30" @click="showType('ipod')"></x-icon>
      <x-icon type="jet" size="30" @click="showType('jet')"></x-icon>
      <x-icon type="key" size="30" @click="showType('key')"></x-icon>
      <x-icon type="knife" size="30" @click="showType('knife')"></x-icon>
      <x-icon type="laptop" size="30" @click="showType('laptop')"></x-icon>
      <x-icon type="leaf" size="30" @click="showType('leaf')"></x-icon>
      <x-icon type="levels" size="30" @click="showType('levels')"></x-icon>
      <x-icon type="lightbulb" size="30" @click="showType('lightbulb')"></x-icon>
      <x-icon type="link" size="30" @click="showType('link')"></x-icon>
      <x-icon type="load-a" size="30" @click="showType('load-a')"></x-icon>
      <x-icon type="load-b" size="30" @click="showType('load-b')"></x-icon>
      <x-icon type="load-c" size="30" @click="showType('load-c')"></x-icon>
      <x-icon type="load-d" size="30" @click="showType('load-d')"></x-icon>
      <x-icon type="location" size="30" @click="showType('location')"></x-icon>
      <x-icon type="lock-combination" size="30" @click="showType('lock-combination')"></x-icon>
      <x-icon type="locked" size="30" @click="showType('locked')"></x-icon>
      <x-icon type="log-in" size="30" @click="showType('log-in')"></x-icon>
      <x-icon type="log-out" size="30" @click="showType('log-out')"></x-icon>
      <x-icon type="loop" size="30" @click="showType('loop')"></x-icon>
      <x-icon type="magnet" size="30" @click="showType('magnet')"></x-icon>
      <x-icon type="male" size="30" @click="showType('male')"></x-icon>
      <x-icon type="man" size="30" @click="showType('man')"></x-icon>
      <x-icon type="map" size="30" @click="showType('map')"></x-icon>
      <x-icon type="medkit" size="30" @click="showType('medkit')"></x-icon>
      <x-icon type="merge" size="30" @click="showType('merge')"></x-icon>
      <x-icon type="mic-a" size="30" @click="showType('mic-a')"></x-icon>
      <x-icon type="mic-b" size="30" @click="showType('mic-b')"></x-icon>
      <x-icon type="mic-c" size="30" @click="showType('mic-c')"></x-icon>
      <x-icon type="minus-circled" size="30" @click="showType('minus-circled')"></x-icon>
      <x-icon type="minus-round" size="30" @click="showType('minus-round')"></x-icon>
      <x-icon type="minus" size="30" @click="showType('minus')"></x-icon>
      <x-icon type="model-s" size="30" @click="showType('model-s')"></x-icon>
      <x-icon type="monitor" size="30" @click="showType('monitor')"></x-icon>
      <x-icon type="more" size="30" @click="showType('more')"></x-icon>
      <x-icon type="mouse" size="30" @click="showType('mouse')"></x-icon>
      <x-icon type="music-note" size="30" @click="showType('music-note')"></x-icon>
      <x-icon type="navicon-round" size="30" @click="showType('navicon-round')"></x-icon>
      <x-icon type="navicon" size="30" @click="showType('navicon')"></x-icon>
      <x-icon type="navigate" size="30" @click="showType('navigate')"></x-icon>
      <x-icon type="network" size="30" @click="showType('network')"></x-icon>
      <x-icon type="no-smoking" size="30" @click="showType('no-smoking')"></x-icon>
      <x-icon type="nuclear" size="30" @click="showType('nuclear')"></x-icon>
      <x-icon type="outlet" size="30" @click="showType('outlet')"></x-icon>
      <x-icon type="paintbrush" size="30" @click="showType('paintbrush')"></x-icon>
      <x-icon type="paintbucket" size="30" @click="showType('paintbucket')"></x-icon>
      <x-icon type="paper-airplane" size="30" @click="showType('paper-airplane')"></x-icon>
      <x-icon type="paperclip" size="30" @click="showType('paperclip')"></x-icon>
      <x-icon type="pause" size="30" @click="showType('pause')"></x-icon>
      <x-icon type="person-add" size="30" @click="showType('person-add')"></x-icon>
      <x-icon type="person-stalker" size="30" @click="showType('person-stalker')"></x-icon>
      <x-icon type="person" size="30" @click="showType('person')"></x-icon>
      <x-icon type="pie-graph" size="30" @click="showType('pie-graph')"></x-icon>
      <x-icon type="pin" size="30" @click="showType('pin')"></x-icon>
      <x-icon type="pinpoint" size="30" @click="showType('pinpoint')"></x-icon>
      <x-icon type="pizza" size="30" @click="showType('pizza')"></x-icon>
      <x-icon type="plane" size="30" @click="showType('plane')"></x-icon>
      <x-icon type="planet" size="30" @click="showType('planet')"></x-icon>
      <x-icon type="play" size="30" @click="showType('play')"></x-icon>
      <x-icon type="playstation" size="30" @click="showType('playstation')"></x-icon>
      <x-icon type="plus-circled" size="30" @click="showType('plus-circled')"></x-icon>
      <x-icon type="plus-round" size="30" @click="showType('plus-round')"></x-icon>
      <x-icon type="plus" size="30" @click="showType('plus')"></x-icon>
      <x-icon type="podium" size="30" @click="showType('podium')"></x-icon>
      <x-icon type="pound" size="30" @click="showType('pound')"></x-icon>
      <x-icon type="power" size="30" @click="showType('power')"></x-icon>
      <x-icon type="pricetag" size="30" @click="showType('pricetag')"></x-icon>
      <x-icon type="pricetags" size="30" @click="showType('pricetags')"></x-icon>
      <x-icon type="printer" size="30" @click="showType('printer')"></x-icon>
      <x-icon type="pull-request" size="30" @click="showType('pull-request')"></x-icon>
      <x-icon type="qr-scanner" size="30" @click="showType('qr-scanner')"></x-icon>
      <x-icon type="quote" size="30" @click="showType('quote')"></x-icon>
      <x-icon type="radio-waves" size="30" @click="showType('radio-waves')"></x-icon>
      <x-icon type="record" size="30" @click="showType('record')"></x-icon>
      <x-icon type="refresh" size="30" @click="showType('refresh')"></x-icon>
      <x-icon type="reply-all" size="30" @click="showType('reply-all')"></x-icon>
      <x-icon type="reply" size="30" @click="showType('reply')"></x-icon>
      <x-icon type="ribbon-a" size="30" @click="showType('ribbon-a')"></x-icon>
      <x-icon type="ribbon-b" size="30" @click="showType('ribbon-b')"></x-icon>
      <x-icon type="sad-outline" size="30" @click="showType('sad-outline')"></x-icon>
      <x-icon type="sad" size="30" @click="showType('sad')"></x-icon>
      <x-icon type="scissors" size="30" @click="showType('scissors')"></x-icon>
      <x-icon type="search" size="30" @click="showType('search')"></x-icon>
      <x-icon type="settings" size="30" @click="showType('settings')"></x-icon>
      <x-icon type="share" size="30" @click="showType('share')"></x-icon>
      <x-icon type="shuffle" size="30" @click="showType('shuffle')"></x-icon>
      <x-icon type="skip-backward" size="30" @click="showType('skip-backward')"></x-icon>
      <x-icon type="skip-forward" size="30" @click="showType('skip-forward')"></x-icon>
      <x-icon type="social-android-outline" size="30" @click="showType('social-android-outline')"></x-icon>
      <x-icon type="social-android" size="30" @click="showType('social-android')"></x-icon>
      <x-icon type="social-angular-outline" size="30" @click="showType('social-angular-outline')"></x-icon>
      <x-icon type="social-angular" size="30" @click="showType('social-angular')"></x-icon>
      <x-icon type="social-apple-outline" size="30" @click="showType('social-apple-outline')"></x-icon>
      <x-icon type="social-apple" size="30" @click="showType('social-apple')"></x-icon>
      <x-icon type="social-bitcoin-outline" size="30" @click="showType('social-bitcoin-outline')"></x-icon>
      <x-icon type="social-bitcoin" size="30" @click="showType('social-bitcoin')"></x-icon>
      <x-icon type="social-buffer-outline" size="30" @click="showType('social-buffer-outline')"></x-icon>
      <x-icon type="social-buffer" size="30" @click="showType('social-buffer')"></x-icon>
      <x-icon type="social-chrome-outline" size="30" @click="showType('social-chrome-outline')"></x-icon>
      <x-icon type="social-chrome" size="30" @click="showType('social-chrome')"></x-icon>
      <x-icon type="social-codepen-outline" size="30" @click="showType('social-codepen-outline')"></x-icon>
      <x-icon type="social-codepen" size="30" @click="showType('social-codepen')"></x-icon>
      <x-icon type="social-css3-outline" size="30" @click="showType('social-css3-outline')"></x-icon>
      <x-icon type="social-css3" size="30" @click="showType('social-css3')"></x-icon>
      <x-icon type="social-designernews-outline" size="30" @click="showType('social-designernews-outline')"></x-icon>
      <x-icon type="social-designernews" size="30" @click="showType('social-designernews')"></x-icon>
      <x-icon type="social-dribbble-outline" size="30" @click="showType('social-dribbble-outline')"></x-icon>
      <x-icon type="social-dribbble" size="30" @click="showType('social-dribbble')"></x-icon>
      <x-icon type="social-dropbox-outline" size="30" @click="showType('social-dropbox-outline')"></x-icon>
      <x-icon type="social-dropbox" size="30" @click="showType('social-dropbox')"></x-icon>
      <x-icon type="social-euro-outline" size="30" @click="showType('social-euro-outline')"></x-icon>
      <x-icon type="social-euro" size="30" @click="showType('social-euro')"></x-icon>
      <x-icon type="social-facebook-outline" size="30" @click="showType('social-facebook-outline')"></x-icon>
      <x-icon type="social-facebook" size="30" @click="showType('social-facebook')"></x-icon>
      <x-icon type="social-foursquare-outline" size="30" @click="showType('social-foursquare-outline')"></x-icon>
      <x-icon type="social-foursquare" size="30" @click="showType('social-foursquare')"></x-icon>
      <x-icon type="social-freebsd-devil" size="30" @click="showType('social-freebsd-devil')"></x-icon>
      <x-icon type="social-github-outline" size="30" @click="showType('social-github-outline')"></x-icon>
      <x-icon type="social-github" size="30" @click="showType('social-github')"></x-icon>
      <x-icon type="social-google-outline" size="30" @click="showType('social-google-outline')"></x-icon>
      <x-icon type="social-google" size="30" @click="showType('social-google')"></x-icon>
      <x-icon type="social-googleplus-outline" size="30" @click="showType('social-googleplus-outline')"></x-icon>
      <x-icon type="social-googleplus" size="30" @click="showType('social-googleplus')"></x-icon>
      <x-icon type="social-hackernews-outline" size="30" @click="showType('social-hackernews-outline')"></x-icon>
      <x-icon type="social-hackernews" size="30" @click="showType('social-hackernews')"></x-icon>
      <x-icon type="social-html5-outline" size="30" @click="showType('social-html5-outline')"></x-icon>
      <x-icon type="social-html5" size="30" @click="showType('social-html5')"></x-icon>
      <x-icon type="social-instagram-outline" size="30" @click="showType('social-instagram-outline')"></x-icon>
      <x-icon type="social-instagram" size="30" @click="showType('social-instagram')"></x-icon>
      <x-icon type="social-javascript-outline" size="30" @click="showType('social-javascript-outline')"></x-icon>
      <x-icon type="social-javascript" size="30" @click="showType('social-javascript')"></x-icon>
      <x-icon type="social-linkedin-outline" size="30" @click="showType('social-linkedin-outline')"></x-icon>
      <x-icon type="social-linkedin" size="30" @click="showType('social-linkedin')"></x-icon>
      <x-icon type="social-markdown" size="30" @click="showType('social-markdown')"></x-icon>
      <x-icon type="social-nodejs" size="30" @click="showType('social-nodejs')"></x-icon>
      <x-icon type="social-octocat" size="30" @click="showType('social-octocat')"></x-icon>
      <x-icon type="social-pinterest-outline" size="30" @click="showType('social-pinterest-outline')"></x-icon>
      <x-icon type="social-pinterest" size="30" @click="showType('social-pinterest')"></x-icon>
      <x-icon type="social-python" size="30" @click="showType('social-python')"></x-icon>
      <x-icon type="social-reddit-outline" size="30" @click="showType('social-reddit-outline')"></x-icon>
      <x-icon type="social-reddit" size="30" @click="showType('social-reddit')"></x-icon>
      <x-icon type="social-rss-outline" size="30" @click="showType('social-rss-outline')"></x-icon>
      <x-icon type="social-rss" size="30" @click="showType('social-rss')"></x-icon>
      <x-icon type="social-sass" size="30" @click="showType('social-sass')"></x-icon>
      <x-icon type="social-skype-outline" size="30" @click="showType('social-skype-outline')"></x-icon>
      <x-icon type="social-skype" size="30" @click="showType('social-skype')"></x-icon>
      <x-icon type="social-snapchat-outline" size="30" @click="showType('social-snapchat-outline')"></x-icon>
      <x-icon type="social-snapchat" size="30" @click="showType('social-snapchat')"></x-icon>
      <x-icon type="social-tumblr-outline" size="30" @click="showType('social-tumblr-outline')"></x-icon>
      <x-icon type="social-tumblr" size="30" @click="showType('social-tumblr')"></x-icon>
      <x-icon type="social-tux" size="30" @click="showType('social-tux')"></x-icon>
      <x-icon type="social-twitch-outline" size="30" @click="showType('social-twitch-outline')"></x-icon>
      <x-icon type="social-twitch" size="30" @click="showType('social-twitch')"></x-icon>
      <x-icon type="social-twitter-outline" size="30" @click="showType('social-twitter-outline')"></x-icon>
      <x-icon type="social-twitter" size="30" @click="showType('social-twitter')"></x-icon>
      <x-icon type="social-usd-outline" size="30" @click="showType('social-usd-outline')"></x-icon>
      <x-icon type="social-usd" size="30" @click="showType('social-usd')"></x-icon>
      <x-icon type="social-vimeo-outline" size="30" @click="showType('social-vimeo-outline')"></x-icon>
      <x-icon type="social-vimeo" size="30" @click="showType('social-vimeo')"></x-icon>
      <x-icon type="social-whatsapp-outline" size="30" @click="showType('social-whatsapp-outline')"></x-icon>
      <x-icon type="social-whatsapp" size="30" @click="showType('social-whatsapp')"></x-icon>
      <x-icon type="social-windows-outline" size="30" @click="showType('social-windows-outline')"></x-icon>
      <x-icon type="social-windows" size="30" @click="showType('social-windows')"></x-icon>
      <x-icon type="social-wordpress-outline" size="30" @click="showType('social-wordpress-outline')"></x-icon>
      <x-icon type="social-wordpress" size="30" @click="showType('social-wordpress')"></x-icon>
      <x-icon type="social-yahoo-outline" size="30" @click="showType('social-yahoo-outline')"></x-icon>
      <x-icon type="social-yahoo" size="30" @click="showType('social-yahoo')"></x-icon>
      <x-icon type="social-yen-outline" size="30" @click="showType('social-yen-outline')"></x-icon>
      <x-icon type="social-yen" size="30" @click="showType('social-yen')"></x-icon>
      <x-icon type="social-youtube-outline" size="30" @click="showType('social-youtube-outline')"></x-icon>
      <x-icon type="social-youtube" size="30" @click="showType('social-youtube')"></x-icon>
      <x-icon type="soup-can-outline" size="30" @click="showType('soup-can-outline')"></x-icon>
      <x-icon type="soup-can" size="30" @click="showType('soup-can')"></x-icon>
      <x-icon type="speakerphone" size="30" @click="showType('speakerphone')"></x-icon>
      <x-icon type="speedometer" size="30" @click="showType('speedometer')"></x-icon>
      <x-icon type="spoon" size="30" @click="showType('spoon')"></x-icon>
      <x-icon type="star" size="30" @click="showType('star')"></x-icon>
      <x-icon type="stats-bars" size="30" @click="showType('stats-bars')"></x-icon>
      <x-icon type="steam" size="30" @click="showType('steam')"></x-icon>
      <x-icon type="stop" size="30" @click="showType('stop')"></x-icon>
      <x-icon type="thermometer" size="30" @click="showType('thermometer')"></x-icon>
      <x-icon type="thumbsdown" size="30" @click="showType('thumbsdown')"></x-icon>
      <x-icon type="thumbsup" size="30" @click="showType('thumbsup')"></x-icon>
      <x-icon type="toggle-filled" size="30" @click="showType('toggle-filled')"></x-icon>
      <x-icon type="toggle" size="30" @click="showType('toggle')"></x-icon>
      <x-icon type="transgender" size="30" @click="showType('transgender')"></x-icon>
      <x-icon type="trash-a" size="30" @click="showType('trash-a')"></x-icon>
      <x-icon type="trash-b" size="30" @click="showType('trash-b')"></x-icon>
      <x-icon type="trophy" size="30" @click="showType('trophy')"></x-icon>
      <x-icon type="tshirt-outline" size="30" @click="showType('tshirt-outline')"></x-icon>
      <x-icon type="tshirt" size="30" @click="showType('tshirt')"></x-icon>
      <x-icon type="umbrella" size="30" @click="showType('umbrella')"></x-icon>
      <x-icon type="university" size="30" @click="showType('university')"></x-icon>
      <x-icon type="unlocked" size="30" @click="showType('unlocked')"></x-icon>
      <x-icon type="upload" size="30" @click="showType('upload')"></x-icon>
      <x-icon type="usb" size="30" @click="showType('usb')"></x-icon>
      <x-icon type="videocamera" size="30" @click="showType('videocamera')"></x-icon>
      <x-icon type="volume-high" size="30" @click="showType('volume-high')"></x-icon>
      <x-icon type="volume-low" size="30" @click="showType('volume-low')"></x-icon>
      <x-icon type="volume-medium" size="30" @click="showType('volume-medium')"></x-icon>
      <x-icon type="volume-mute" size="30" @click="showType('volume-mute')"></x-icon>
      <x-icon type="wand" size="30" @click="showType('wand')"></x-icon>
      <x-icon type="waterdrop" size="30" @click="showType('waterdrop')"></x-icon>
      <x-icon type="wifi" size="30" @click="showType('wifi')"></x-icon>
      <x-icon type="wineglass" size="30" @click="showType('wineglass')"></x-icon>
      <x-icon type="woman" size="30" @click="showType('woman')"></x-icon>
      <x-icon type="wrench" size="30" @click="showType('wrench')"></x-icon>
      <x-icon type="xbox" size="30" @click="showType('xbox')"></x-icon>
    </div>

    <div v-transfer-dom>
      <confirm ref="confirmDom" v-model="showConfirmFlag" show-input title="提示" @on-show="onShow"></confirm>
    </div>
  </div>
</template>

<script>
import { Cell, Confirm, Group, TransferDom } from 'k12vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Cell,
    Confirm,
    Group
  },
  data () {
    return {
      showConfirmFlag: false,
      allIcons: [
        'alert-circled',
        'alert',
        'android-add-circle',
        'android-add',
        'android-alarm-clock',
        'android-alert',
        'android-apps',
        'android-archive',
        'android-arrow-back',
        'android-arrow-down',
        'android-arrow-dropdown-circle',
        'android-arrow-dropdown',
        'android-arrow-dropleft-circle',
        'android-arrow-dropleft',
        'android-arrow-dropright-circle',
        'android-arrow-dropright',
        'android-arrow-dropup-circle',
        'android-arrow-dropup',
        'android-arrow-forward',
        'android-arrow-up',
        'android-attach',
        'android-bar',
        'android-bicycle',
        'android-boat',
        'android-bookmark',
        'android-bulb',
        'android-bus',
        'android-calendar',
        'android-call',
        'android-camera',
        'android-cancel',
        'android-car',
        'android-cart',
        'android-chat',
        'android-checkbox-blank',
        'android-checkbox-outline-blank',
        'android-checkbox-outline',
        'android-checkbox',
        'android-checkmark-circle',
        'android-clipboard',
        'android-close',
        'android-cloud-circle',
        'android-cloud-done',
        'android-cloud-outline',
        'android-cloud',
        'android-color-palette',
        'android-compass',
        'android-contact',
        'android-contacts',
        'android-contract',
        'android-create',
        'android-delete',
        'android-desktop',
        'android-document',
        'android-done-all',
        'android-done',
        'android-download',
        'android-drafts',
        'android-exit',
        'android-expand',
        'android-favorite-outline',
        'android-favorite',
        'android-film',
        'android-folder-open',
        'android-folder',
        'android-funnel',
        'android-globe',
        'android-hand',
        'android-hangout',
        'android-happy',
        'android-home',
        'android-image',
        'android-laptop',
        'android-list',
        'android-locate',
        'android-lock',
        'android-mail',
        'android-map',
        'android-menu',
        'android-microphone-off',
        'android-microphone',
        'android-more-horizontal',
        'android-more-vertical',
        'android-navigate',
        'android-notifications-none',
        'android-notifications-off',
        'android-notifications',
        'android-open',
        'android-options',
        'android-people',
        'android-person-add',
        'android-person',
        'android-phone-landscape',
        'android-phone-portrait',
        'android-pin',
        'android-plane',
        'android-playstore',
        'android-print',
        'android-radio-button-off',
        'android-radio-button-on',
        'android-refresh',
        'android-remove-circle',
        'android-remove',
        'android-restaurant',
        'android-sad',
        'android-search',
        'android-send',
        'android-settings',
        'android-share-alt',
        'android-share',
        'android-star-half',
        'android-star-outline',
        'android-star',
        'android-stopwatch',
        'android-subway',
        'android-sunny',
        'android-sync',
        'android-textsms',
        'android-time',
        'android-train',
        'android-unlock',
        'android-upload',
        'android-volume-down',
        'android-volume-mute',
        'android-volume-off',
        'android-volume-up',
        'android-walk',
        'android-warning',
        'android-watch',
        'android-wifi',
        'aperture',
        'archive',
        'arrow-down-a',
        'arrow-down-b',
        'arrow-down-c',
        'arrow-expand',
        'arrow-graph-down-left',
        'arrow-graph-down-right',
        'arrow-graph-up-left',
        'arrow-graph-up-right',
        'arrow-left-a',
        'arrow-left-b',
        'arrow-left-c',
        'arrow-move',
        'arrow-resize',
        'arrow-return-left',
        'arrow-return-right',
        'arrow-right-a',
        'arrow-right-b',
        'arrow-right-c',
        'arrow-shrink',
        'arrow-swap',
        'arrow-up-a',
        'arrow-up-b',
        'arrow-up-c',
        'asterisk',
        'at',
        'backspace-outline',
        'backspace',
        'bag',
        'battery-charging',
        'battery-empty',
        'battery-full',
        'battery-half',
        'battery-low',
        'beaker',
        'beer',
        'bluetooth',
        'bonfire',
        'bookmark',
        'bowtie',
        'briefcase',
        'bug',
        'calculator',
        'calendar',
        'camera',
        'card',
        'cash',
        'chatbox-working',
        'chatbox',
        'chatboxes',
        'chatbubble-working',
        'chatbubble',
        'chatbubbles',
        'checkmark-circled',
        'checkmark-round',
        'checkmark',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'clipboard',
        'clock',
        'close-circled',
        'close-round',
        'close',
        'closed-captioning',
        'cloud',
        'code-download',
        'code-working',
        'code',
        'coffee',
        'compass',
        'compose',
        'connection-bars',
        'contrast',
        'crop',
        'cube',
        'disc',
        'document-text',
        'document',
        'drag',
        'earth',
        'easel',
        'edit',
        'egg',
        'eject',
        'email-unread',
        'email',
        'erlenmeyer-flask-bubbles',
        'erlenmeyer-flask',
        'eye-disabled',
        'eye',
        'female',
        'filing',
        'film-marker',
        'fireball',
        'flag',
        'flame',
        'flash-off',
        'flash',
        'folder',
        'fork-repo',
        'fork',
        'forward',
        'funnel',
        'gear-a',
        'gear-b',
        'grid',
        'hammer',
        'happy-outline',
        'happy',
        'headphone',
        'heart-broken',
        'heart',
        'help-buoy',
        'help-circled',
        'help',
        'home',
        'icecream',
        'image',
        'images',
        'information-circled',
        'information',
        'ionic',
        'ios-alarm-outline',
        'ios-alarm',
        'ios-albums-outline',
        'ios-albums',
        'ios-americanfootball-outline',
        'ios-americanfootball',
        'ios-analytics-outline',
        'ios-analytics',
        'ios-arrow-back',
        'ios-arrow-down',
        'ios-arrow-forward',
        'ios-arrow-left',
        'ios-arrow-right',
        'ios-arrow-thin-down',
        'ios-arrow-thin-left',
        'ios-arrow-thin-right',
        'ios-arrow-thin-up',
        'ios-arrow-up',
        'ios-at-outline',
        'ios-at',
        'ios-barcode-outline',
        'ios-barcode',
        'ios-baseball-outline',
        'ios-baseball',
        'ios-basketball-outline',
        'ios-basketball',
        'ios-bell-outline',
        'ios-bell',
        'ios-body-outline',
        'ios-body',
        'ios-bolt-outline',
        'ios-bolt',
        'ios-book-outline',
        'ios-book',
        'ios-bookmarks-outline',
        'ios-bookmarks',
        'ios-box-outline',
        'ios-box',
        'ios-briefcase-outline',
        'ios-briefcase',
        'ios-browsers-outline',
        'ios-browsers',
        'ios-calculator-outline',
        'ios-calculator',
        'ios-calendar-outline',
        'ios-calendar',
        'ios-camera-outline',
        'ios-camera',
        'ios-cart-outline',
        'ios-cart',
        'ios-chatboxes-outline',
        'ios-chatboxes',
        'ios-chatbubble-outline',
        'ios-chatbubble',
        'ios-checkmark-empty',
        'ios-checkmark-outline',
        'ios-checkmark',
        'ios-circle-filled',
        'ios-circle-outline',
        'ios-clock-outline',
        'ios-clock',
        'ios-close-empty',
        'ios-close-outline',
        'ios-close',
        'ios-cloud-download-outline',
        'ios-cloud-download',
        'ios-cloud-outline',
        'ios-cloud-upload-outline',
        'ios-cloud-upload',
        'ios-cloud',
        'ios-cloudy-night-outline',
        'ios-cloudy-night',
        'ios-cloudy-outline',
        'ios-cloudy',
        'ios-cog-outline',
        'ios-cog',
        'ios-color-filter-outline',
        'ios-color-filter',
        'ios-color-wand-outline',
        'ios-color-wand',
        'ios-compose-outline',
        'ios-compose',
        'ios-contact-outline',
        'ios-contact',
        'ios-copy-outline',
        'ios-copy',
        'ios-crop-strong',
        'ios-crop',
        'ios-download-outline',
        'ios-download',
        'ios-drag',
        'ios-email-outline',
        'ios-email',
        'ios-eye-outline',
        'ios-eye',
        'ios-fastforward-outline',
        'ios-fastforward',
        'ios-filing-outline',
        'ios-filing',
        'ios-film-outline',
        'ios-film',
        'ios-flag-outline',
        'ios-flag',
        'ios-flame-outline',
        'ios-flame',
        'ios-flask-outline',
        'ios-flask',
        'ios-flower-outline',
        'ios-flower',
        'ios-folder-outline',
        'ios-folder',
        'ios-football-outline',
        'ios-football',
        'ios-game-controller-a-outline',
        'ios-game-controller-a',
        'ios-game-controller-b-outline',
        'ios-game-controller-b',
        'ios-gear-outline',
        'ios-gear',
        'ios-glasses-outline',
        'ios-glasses',
        'ios-grid-view-outline',
        'ios-grid-view',
        'ios-heart-outline',
        'ios-heart',
        'ios-help-empty',
        'ios-help-outline',
        'ios-help',
        'ios-home-outline',
        'ios-home',
        'ios-infinite-outline',
        'ios-infinite',
        'ios-information-empty',
        'ios-information-outline',
        'ios-information',
        'ios-ionic-outline',
        'ios-keypad-outline',
        'ios-keypad',
        'ios-lightbulb-outline',
        'ios-lightbulb',
        'ios-list-outline',
        'ios-list',
        'ios-location-outline',
        'ios-location',
        'ios-locked-outline',
        'ios-locked',
        'ios-loop-strong',
        'ios-loop',
        'ios-medical-outline',
        'ios-medical',
        'ios-medkit-outline',
        'ios-medkit',
        'ios-mic-off',
        'ios-mic-outline',
        'ios-mic',
        'ios-minus-empty',
        'ios-minus-outline',
        'ios-minus',
        'ios-monitor-outline',
        'ios-monitor',
        'ios-moon-outline',
        'ios-moon',
        'ios-more-outline',
        'ios-more',
        'ios-musical-note',
        'ios-musical-notes',
        'ios-navigate-outline',
        'ios-navigate',
        'ios-nutrition-outline',
        'ios-nutrition',
        'ios-paper-outline',
        'ios-paper',
        'ios-paperplane-outline',
        'ios-paperplane',
        'ios-partlysunny-outline',
        'ios-partlysunny',
        'ios-pause-outline',
        'ios-pause',
        'ios-paw-outline',
        'ios-paw',
        'ios-people-outline',
        'ios-people',
        'ios-person-outline',
        'ios-person',
        'ios-personadd-outline',
        'ios-personadd',
        'ios-photos-outline',
        'ios-photos',
        'ios-pie-outline',
        'ios-pie',
        'ios-pint-outline',
        'ios-pint',
        'ios-play-outline',
        'ios-play',
        'ios-plus-empty',
        'ios-plus-outline',
        'ios-plus',
        'ios-pricetag-outline',
        'ios-pricetag',
        'ios-pricetags-outline',
        'ios-pricetags',
        'ios-printer-outline',
        'ios-printer',
        'ios-pulse-strong',
        'ios-pulse',
        'ios-rainy-outline',
        'ios-rainy',
        'ios-recording-outline',
        'ios-recording',
        'ios-redo-outline',
        'ios-redo',
        'ios-refresh-empty',
        'ios-refresh-outline',
        'ios-refresh',
        'ios-reload',
        'ios-reverse-camera-outline',
        'ios-reverse-camera',
        'ios-rewind-outline',
        'ios-rewind',
        'ios-rose-outline',
        'ios-rose',
        'ios-search-strong',
        'ios-search',
        'ios-settings-strong',
        'ios-settings',
        'ios-shuffle-strong',
        'ios-shuffle',
        'ios-skipbackward-outline',
        'ios-skipbackward',
        'ios-skipforward-outline',
        'ios-skipforward',
        'ios-snowy',
        'ios-speedometer-outline',
        'ios-speedometer',
        'ios-star-half',
        'ios-star-outline',
        'ios-star',
        'ios-stopwatch-outline',
        'ios-stopwatch',
        'ios-sunny-outline',
        'ios-sunny',
        'ios-telephone-outline',
        'ios-telephone',
        'ios-tennisball-outline',
        'ios-tennisball',
        'ios-thunderstorm-outline',
        'ios-thunderstorm',
        'ios-time-outline',
        'ios-time',
        'ios-timer-outline',
        'ios-timer',
        'ios-toggle-outline',
        'ios-toggle',
        'ios-trash-outline',
        'ios-trash',
        'ios-undo-outline',
        'ios-undo',
        'ios-unlocked-outline',
        'ios-unlocked',
        'ios-upload-outline',
        'ios-upload',
        'ios-videocam-outline',
        'ios-videocam',
        'ios-volume-high',
        'ios-volume-low',
        'ios-wineglass-outline',
        'ios-wineglass',
        'ios-world-outline',
        'ios-world',
        'ipad',
        'iphone',
        'ipod',
        'jet',
        'key',
        'knife',
        'laptop',
        'leaf',
        'levels',
        'lightbulb',
        'link',
        'load-a',
        'load-b',
        'load-c',
        'load-d',
        'location',
        'lock-combination',
        'locked',
        'log-in',
        'log-out',
        'loop',
        'magnet',
        'male',
        'man',
        'map',
        'medkit',
        'merge',
        'mic-a',
        'mic-b',
        'mic-c',
        'minus-circled',
        'minus-round',
        'minus',
        'model-s',
        'monitor',
        'more',
        'mouse',
        'music-note',
        'navicon-round',
        'navicon',
        'navigate',
        'network',
        'no-smoking',
        'nuclear',
        'outlet',
        'paintbrush',
        'paintbucket',
        'paper-airplane',
        'paperclip',
        'pause',
        'person-add',
        'person-stalker',
        'person',
        'pie-graph',
        'pin',
        'pinpoint',
        'pizza',
        'plane',
        'planet',
        'play',
        'playstation',
        'plus-circled',
        'plus-round',
        'plus',
        'podium',
        'pound',
        'power',
        'pricetag',
        'pricetags',
        'printer',
        'pull-request',
        'qr-scanner',
        'quote',
        'radio-waves',
        'record',
        'refresh',
        'reply-all',
        'reply',
        'ribbon-a',
        'ribbon-b',
        'sad-outline',
        'sad',
        'scissors',
        'search',
        'settings',
        'share',
        'shuffle',
        'skip-backward',
        'skip-forward',
        'social-android-outline',
        'social-android',
        'social-angular-outline',
        'social-angular',
        'social-apple-outline',
        'social-apple',
        'social-bitcoin-outline',
        'social-bitcoin',
        'social-buffer-outline',
        'social-buffer',
        'social-chrome-outline',
        'social-chrome',
        'social-codepen-outline',
        'social-codepen',
        'social-css3-outline',
        'social-css3',
        'social-designernews-outline',
        'social-designernews',
        'social-dribbble-outline',
        'social-dribbble',
        'social-dropbox-outline',
        'social-dropbox',
        'social-euro-outline',
        'social-euro',
        'social-facebook-outline',
        'social-facebook',
        'social-foursquare-outline',
        'social-foursquare',
        'social-freebsd-devil',
        'social-github-outline',
        'social-github',
        'social-google-outline',
        'social-google',
        'social-googleplus-outline',
        'social-googleplus',
        'social-hackernews-outline',
        'social-hackernews',
        'social-html5-outline',
        'social-html5',
        'social-instagram-outline',
        'social-instagram',
        'social-javascript-outline',
        'social-javascript',
        'social-linkedin-outline',
        'social-linkedin',
        'social-markdown',
        'social-nodejs',
        'social-octocat',
        'social-pinterest-outline',
        'social-pinterest',
        'social-python',
        'social-reddit-outline',
        'social-reddit',
        'social-rss-outline',
        'social-rss',
        'social-sass',
        'social-skype-outline',
        'social-skype',
        'social-snapchat-outline',
        'social-snapchat',
        'social-tumblr-outline',
        'social-tumblr',
        'social-tux',
        'social-twitch-outline',
        'social-twitch',
        'social-twitter-outline',
        'social-twitter',
        'social-usd-outline',
        'social-usd',
        'social-vimeo-outline',
        'social-vimeo',
        'social-whatsapp-outline',
        'social-whatsapp',
        'social-windows-outline',
        'social-windows',
        'social-wordpress-outline',
        'social-wordpress',
        'social-yahoo-outline',
        'social-yahoo',
        'social-yen-outline',
        'social-yen',
        'social-youtube-outline',
        'social-youtube',
        'soup-can-outline',
        'soup-can',
        'speakerphone',
        'speedometer',
        'spoon',
        'star',
        'stats-bars',
        'steam',
        'stop',
        'thermometer',
        'thumbsdown',
        'thumbsup',
        'toggle-filled',
        'toggle',
        'transgender',
        'trash-a',
        'trash-b',
        'trophy',
        'tshirt-outline',
        'tshirt',
        'umbrella',
        'university',
        'unlocked',
        'upload',
        'usb',
        'videocamera',
        'volume-high',
        'volume-low',
        'volume-medium',
        'volume-mute',
        'wand',
        'waterdrop',
        'wifi',
        'wineglass',
        'woman',
        'wrench',
        'xbox'
      ]
    }
  },
  methods: {
    console () {
      console.log('click')
    },
    showType (data) {
      this.showConfirmFlag = true
      this.$nextTick(() => {
        this.$refs.confirmDom.setInputValue(data)
      })
    }
  }
}
</script>

<style>
.vux-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>
