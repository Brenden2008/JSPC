//Javascript Interpretor by Jquery terminal
function startTerminal() {
  //Create App Container
  var twindow = document.createElement("div");
  twindow.setAttribute("id", "terminalwindow");
  var tbox = document.getElementById("appbox");
  tbox.appendChild(twindow);

  //Actualy Start the code
  jQuery(function($, undefined) {
    $("#terminalwindow").terminal(
      function(command) {
        if (command !== "") {
          try {
            var result = window.eval(command);
            if (result !== undefined) {
              this.echo(new String(result));
            }
          } catch (e) {
            this.error(new String(e));
          }
        } else {
          this.echo("");
        }
      },
      {
        greetings: "JavaScript Interpreter",
        name: "js_inter",
        height: 200,
        prompt: "js> "
      }
    );
  });
}
