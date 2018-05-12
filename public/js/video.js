
$(document).ready(function() {
    var video = $(".metvideobox");
    if (video.length > 0) {
        $.extend({
            includePath: '',
            include: function(file) {
                var files = typeof file == "string" ? [file] : file;
                for (var i = 0; i < files.length; i++) {
                    var name = files[i].replace(/^\s|\s$/g, "");
                    var att = name.split('.');
                    var ext = att[att.length - 1].toLowerCase();
                    var isCSS = ext == "css";
                    var tag = isCSS ? "link" : "script";
                    var attr = isCSS ? " type='text/css' rel='stylesheet' " : " type='text/javascript' ";
                    var link = (isCSS ? "href" : "src") + "='" + $.includePath + name + "'";
                    if ($(tag + "[" + link + "]").length == 0) $("head").prepend("<" + tag + attr + link + "></" + tag + ">");
                }
            }
        });
        $.include('../public/ui/v1/js/effects/video-js/video-js.css');

        var videolist = $(".metvideobox");
        videolist.each(function() {
            var data = $(this).attr("data-metvideo");
            data = data.split("|");
            var width = data[0],
                height = data[1],
                poster = data[2],
                autoplay = data[3],
                src = data[4];
            var vhtml = '<div class="metvideobox"><video class="metvideo video-js vjs-default-skin" controls preload="none" width="' + width + '" height="' + height + '" poster="' + poster + '" data-setup=\'{\"autoplay\": ' + autoplay + '}\'>';
            vhtml += '<source src="' + src + '" type="video/mp4" />';
            vhtml += '</video></div>';
            $(this).after(vhtml);
            $(this).remove();
        });

        $.getScript("../public/ui/v1/js/effects/video-js/video_hack.js");

        // videojs.options.flash.swf = videpath+"public/ui/v1/js/effects/video-js/video-js.swf";

    }
})