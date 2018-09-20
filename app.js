$("#chatPopover").popover({
  title: `How can we help you?<button id="popoverClose" type="button" class="ml-auto close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>`,
  content: `
        <form>
          <label for="question">Ask a question.</label>
          <input type="text" class="form-control" id="question">
          <button style="margin-top: 0.5rem;" type="submit" class="btn">Submit</button>
        </form>
        `,
  html: true,
  placement: "top",
  trigger: "manual"
}).popover("show");


$("body").on("click", "#popoverClose", function() {
  $("#chatPopover").popover("toggle");
  $(".chat").toggleClass("closed-state");
});

$(".chat").click(function() {
  $("#chatPopover").popover("toggle");
  $(this).toggleClass("closed-state");
});



