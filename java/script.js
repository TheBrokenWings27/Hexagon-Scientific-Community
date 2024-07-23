function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  $(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $("#navbar").removeClass("transparent").addClass("scrolled");
        } else {
            $("#navbar").removeClass("scrolled").addClass("transparent");
        }
    });
});