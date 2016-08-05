
whenReady(function() {  // Run this function when the document is ready

    var lists = document.getElementsByTagName("ul");
    var regexp = /\bdnd\b/;
    for(var i = 0; i < lists.length; i++)
        if (regexp.test(lists[i].className)) dnd(lists[i]);

    function dnd(list) {
        var original_class = list.className;  // Remember original CSS class
        var entered = 0;                      // Track enters and leaves

        list.ondragenter = function(e) {
            e = e || window.event;  // Standard or IE event
            var from = e.relatedTarget; 

            entered++;
            if ((from && !ischild(from, list)) || entered == 1) {
                var dt = e.dataTransfer; 
                var types = dt.types;    // What formats data is available in

                if (!types ||                                           // IE
                    (types.contains && types.contains("text/plain")) || //HTML5
                    (types.indexOf && types.indexOf("text/plain")!=-1)) //Webkit 
                {
                    list.className = original_class + " droppable";
                    return false;
                }
                return;   // without canceling
            }
            return false; // If not the first enter, we're still interested
        };

        list.ondragover = function(e) { return false; };

        list.ondragleave = function(e) {
            e = e || window.event;
            var to = e.relatedTarget;

            entered--;
            if ((to && !ischild(to,list)) || entered <= 0) {
                list.className = original_class;
                entered = 0;
            }
            return false;
        };

        list.ondrop = function(e) {
            e = e || window.event;       // Get the event

            var dt = e.dataTransfer;       // dataTransfer object
            var text = dt.getData("Text"); // Get dropped data as plain text.

            if (text) {
                var item = document.createElement("li"); // Create new <li>
                item.draggable = true;                   // Make it draggable
                item.appendChild(document.createTextNode(text)); // Add text
                list.appendChild(item);                  // Add it to the list

                // Restore the list's original style and reset the entered count
                list.className = original_class;
                entered = 0;

                return false;
            }
        };

        var items = list.getElementsByTagName("li");
        for(var i = 0; i < items.length; i++)
            items[i].draggable = true;

        list.ondragstart = function(e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.tagName !== "LI") return false;
            var dt = e.dataTransfer;
            dt.setData("Text", target.innerText || target.textContent);
            dt.effectAllowed = "copyMove";
        };

        list.ondragend = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (e.dataTransfer.dropEffect === "move")
                target.parentNode.removeChild(target);
        }

        function ischild(a,b) {
            for(; a; a = a.parentNode) if (a === b) return true;
            return false;
        }
    }
});