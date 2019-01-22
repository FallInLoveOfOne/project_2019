seajs.config({
      alias: {
        '$': 'jquery/jquery/1.7.2/jquery-debug',
        'jquery': 'jquery/jquery/1.7.2/jquery-debug',
        'widget': 'arale/widget/1.1.1/widget-debug',
        'class' : 'arale/class/1.1.0/class-debug',
        'events' : 'arale/events/1.1.0/events-debug',
        'base' : 'arale/base/1.1.1/base-debug',
        'autocomplete':'arale/autocomplete/1.3.0/autocomplete-debug',
        'textarea':'arale/autocomplete/1.3.0/textarea-complete-debug',
        'calendar':'arale/calendar/0.9.0/calendar-debug',
        'cookie':'arale/cookie/1.0.2/cookie-debug',
        'detector':'arale/detector/1.2.1/detector-debug',
        'dialog':'arale/dialog/1.2.1/dialog-debug',
        'confirmbox':'arale/dialog/1.2.1/confirmbox-debug',
        'easing':'arale/easing/1.0.0/easing-debug',
        'iframe-shim':'arale/iframe-shim/1.0.2/iframe-shim-debug',
        'messenger':'arale/messenger/1.0.2/messenger-debug',
        'overlay':'arale/overlay/1.1.2/overlay-debug',
        'mask':'arale/overlay/1.1.2/mask-debug',
        'placeholder':'arale/placeholder/1.1.0/placeholder-debug',
        'popup':'arale/popup/1.1.3/popup-debug',
        'position':'arale/position/1.0.1/position-debug',
        'select':'arale/select/0.9.6/select-debug',
        'sticky':'arale/sticky/1.2.1/sticky-debug',
        'switchable':'arale/switchable/1.0.0/switchable-debug',
        'accordion':'arale/switchable/1.0.0/accordion-debug',
        'carousel':'arale/switchable/1.0.0/carousel-debug',
        'slide':'arale/switchable/1.0.0/slide-debug',
        'tabs':'arale/switchable/1.0.0/tabs-debug',
        'templatable':'arale/templatable/0.9.2/templatable-debug',
        'tip':'arale/tip/1.1.4/tip-debug',
        'atip':'arale/tip/1.1.4/atip-debug',
        'upload':'arale/upload/1.0.1/upload-debug',
        'validator':'arale/validator/0.9.5/validator-debug',
        'validator-core':'arale/validator/0.9.5/core-debug',
        'dnd':'arale/dnd/1.0.0/dnd-debug.js',

        'scroll':'gallery/scroll/1.0.0/scroll-debug',
        'metro':'gallery/metro/1.0.0/metro-debug',
        'backbone':'gallery/backbone/1.0.0/backbone-debug',
        'underscore':'gallery/underscore/1.4.4/underscore-debug',
        'handlebars':'gallery/handlebars/1.0.2/handlebars-debug',
        'handlebars-runtime':'gallery/handlebars/1.0.2/runtime-debug',
        'moment':'gallery/moment/2.0.0/moment-debug',
        'selection':'gallery/selection/0.9.0/selection-debug',
        'ztree':'gallery/ztree/3.5.2/ztree-debug',
        'schedule':'gallery/schedule/1.0.1/schedule-debug',
        'schedule1':'gallery/schedule1/1.0.0/schedule-debug',
        'appmenu':'gallery/appmenu/1.0.0/appmenu-debug',
        'range':'gallery/range/1.0.1/range-debug',
        'menu':'inno/menu/1.0.0/menu-debug',
        'qrcode':'jquery/qrcode/1.0.0/qrcode-debug',
        'easyui':'jquery/easyui/1.3.0/jquery.easyui.min',
        'fileupload':'jquery/upload/1.0.0/upload-debug',
        'highchart':'gallery/highchart/2.3.2/highcharts-debug',
        'form':'inno/form/0.0.1/form-debug'
       
      },
      preload: ["jquery"],
      debug:2,
      map: [
            [ /^(.*\/report\/newInstance\/.*\.(?:css|js))(?:.*)$/i, '$1?20151123' ]
          ]
    });