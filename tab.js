// dataset으로 탭메뉴 만들기

document.querySelector(".list").addEventListener("click", function (e) {
  tab(parseInt(e.target.dataset.id));
});

function tab(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").eq(i).addClass("show");
}
