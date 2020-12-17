// JavaScript Document
(function () {
  if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
        rel: 0, //関連動画の指定
        autoplay: 0, //自動再生の指定
        controls: 0, //コントロールさせるかどうかの指定
      },
    });
  }
})();

/*↓↓ここからスライダー↓↓*/
$('.slick01').slick({
  autoplay:true,
  infinite:true,
  dots:false,
  arrows:false,
  slidesToShow:1,
  slidesToScroll:1,
});