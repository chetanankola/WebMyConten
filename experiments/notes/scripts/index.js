YUI().use('dd', 'anim', 'node-event-delegate', 'node', 'gallery-storage-lite',  function(Y) {
    //Listen for all drop:over events
    //Y.DD.DDM._debugShim = true;

    var del = new Y.DD.Delegate({
        container: '#play',
        nodes: 'ul li',
        target: true
    });

    var keyname = 'storage-lite-example', notes = Y.one('#notes');
    // Populate the textarea with the stored
     // note text on page load.
    notes.set('value', Y.StorageLite.getItem(keyname) || '');
  // Save the contents of the textarea after
  // each keystroke.
    notes.on('keyup', function() { Y.StorageLite.setItem(keyname, notes.get('value'));});
    /////////////// minimize  ////////////////
var animConfig = {
        from : { height: 0 },
        to : { height: function(node) {
            return node.get('scrollHeight');
        }},
        easing : Y.Easing.easeOut,
        duration: 0.3
    };
    
        Y.delegate('click', function(e) {
            var module = e.target.ancestor('.item'),
                bd = module.one('.inner');
    
            if (!bd.fx) {
                bd.plug(Y.Plugin.NodeFX, Y.mix(animConfig, {}));
            }
            //Is this anim already running?
            if (!bd.fx.get('running')) {
                //Nope, now run it
                module.toggleClass('yui3-closed');
                bd.fx.set('reverse', !bd.fx.get('reverse'));
                bd.fx.run();
            }
        }, '#play ul', '.min');
    
    
    ////////////  closing  //////////////////
        var animate = new Y.Anim({
            to: {opacity: 0},
            duration: 0.3
        });
    
    
        var remove = function() {
            //remove this listner
            this.detach('end', remove);
            //remove the node.
            this.get('node').remove();
        };
        var onEnd = function() {
            //Remove the onEnd
            this.detach('end', onEnd);
            this.setAttrs({
               to: { height: 0 },
               easing: Y.Easing.bounceOut,
                duration: 1.3
            });
            //Add the remove event to this anim
            this.on('end', remove);
            this.run();
        };
 

    var onClose = function(e) {
        e.preventDefault();
        //Reset the animation instance
        animate.reset();
        //Add the onEnd back that you remove in the onEnd handler
        animate.on('end', onEnd);
        animate.set("node", e.currentTarget.ancestor('li'));
        animate.run();
    };

    Y.one('#play').delegate('click', onClose, '.close');
        //This function will sync all dynamically added li's as a drop targets
        Y.one('#play ul').on('mouseenter', function() {
        //alert("Sync ok!");
        del.syncTargets();
    });


     del.on('drop:over', function(e) {
        //Get a reference to our drag and drop nodes
        var drag = e.drag.get('node'),
            drop = e.drop.get('node');

            
        //Are we dropping on a li node?
        if (drop.get('tagName').toLowerCase() === 'li') {
            //Are we not going up?
            if (!goingUp) {
                drop = drop.get('nextSibling');
            }
            //Add the node to this list
            e.drop.get('node').get('parentNode').insertBefore(drag, drop);
            //Set the new parentScroll on the nodescroll plugin
            e.drag.nodescroll.set('parentScroll', e.drop.get('node').get('parentNode'));
            //Resize this nodes shim, so we can drop on it later.
            e.drop.sizeShim();
        }
    });


    del.on('drag:drophit', function(e) {
        var drop = e.drop.get('node'),
            drag = e.drag.get('node');

        //if we are not on an li, we must have been dropped on a ul
        if (drop.get('tagName').toLowerCase() !== 'li') {
            if (!drop.contains(drag)) {
                drop.appendChild(drag);
                //Set the new parentScroll on the nodescroll plugin
                //e.drag.nodescroll.set('parentScroll', e.drop.get('node'));
            }
        }
    });



    //Listen for all drag:drag events
    del.on('drag:drag', function(e) {
        //Get the last y point
        var y = e.target.lastXY[1];
        //is it greater than the lastY var?
        if (y < lastY) {
            //We are going up
            goingUp = true;
        } else {
            //We are going down.
            goingUp = false;
        }
        //Cache for next check
        lastY = y;
        Y.DD.DDM.syncActiveShims(true);
    });


    del.on('drag:start', function(e) {
        var drag = e.target;
        drag.get('node').setStyle('opacity', '.25');
        drag.get('dragNode').set('innerHTML', drag.get('node').get('innerHTML'));
        drag.get('dragNode').setStyles({
            opacity: '.5',
            borderColor: drag.get('node').getStyle('borderColor'),
            backgroundColor: drag.get('node').getStyle('backgroundColor')
        });
    });

    del.on('drag:end', function(e) {
        var drag = e.target;
        //Put our styles back
        drag.get('node').setStyles({
            visibility: '',
            opacity: '1'
        });
    });

    //Static Vars
    var goingUp = false,
        lastY = 0;

    del.dd.plug(Y.Plugin.DDProxy, {
        moveOnEnd: false,
        cloneNode: true
    });


    del.dd.plug(Y.Plugin.DDConstrained, {
        constrain2node: '#play'
    });

    del.dd.plug(Y.Plugin.DDNodeScroll, {
        node: 'ul'
    });

    //Create simple targets for the 2 lists.
    var uls = Y.all('#play ul');
    uls.each(function(v, k) {
        var tar = new Y.DD.Drop({
            node: v
        });
    });

});