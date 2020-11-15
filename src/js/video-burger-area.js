(()=> {

    $(document).ready(function() {
        const btn_show_video = $('.btn-show-video');
        const btn_hide_video = $('.btn-close-video');
        const area_video = $('.video-burger-container');
        const video_burger = $('.video-burger');

        btn_show_video.click(function(){
            area_video.fadeIn(1000);
        })

        btn_hide_video.click(function(){
            area_video.fadeOut(1000);
            video_burger.trigger('pause');
        })

       
    })
  
})(); 