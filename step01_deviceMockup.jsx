//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GENERATE DEVICE MOCKUPS 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPEN FILE --------------------------------------------------------------------------------------------------------
// Load step01_deviceMockup.psd file (absolute path)
const deviceMockup = File("D:/automate/workingFiles/step01_deviceMockup.psd");
app.open(deviceMockup);

// SELECTION PANEL --------------------------------------------------------------------------------------------------
// User selects a device mockup (dialog window created with https://scriptui.joonas.me/)

    // SELECTION PANEL UI -------------------------------------------------------------------------------------------
    var selectionPanel = new Window("dialog"); 
        selectionPanel.text = "Selection Panel"; 
        selectionPanel.orientation = "row"; 
        selectionPanel.alignChildren = ["left","top"]; 
        selectionPanel.spacing = 10; 
        selectionPanel.margins = 16; 

        var leftColumn = selectionPanel.add("group", undefined, {name: "leftColumn"}); 
            leftColumn.orientation = "column"; 
            leftColumn.alignChildren = ["fill","top"]; 
            leftColumn.spacing = 10; 
            leftColumn.margins = 0; 

            var deviceList = leftColumn.add("panel", undefined, undefined, {name: "deviceList"}); 
                deviceList.text = "Device Selection"; 
                deviceList.preferredSize.height = 205; 
                deviceList.orientation = "column"; 
                deviceList.alignChildren = ["left","top"]; 
                deviceList.spacing = 10; 
                deviceList.margins = 10; 

            var device1 = deviceList.add("radiobutton", undefined, undefined, {name: "touchPanel-crestronTSW760B"}); 
                device1.text = "Touch Panel - Crestron TSW760B";

            var device2 = deviceList.add("radiobutton", undefined, undefined, {name: "television-viewSonicIFP8650"}); 
                device2.text = "Television - ViewSonic IFP8650"; 

            var device3 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-acerVA270H"}); 
                device3.text = "Monitor - Acer VA270H"; 

            var device4 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-lg27MK60TMB"}); 
                device4.text = "Monitor - LG 27MK60TMB"; 
            
            deviceList.children[0].value = true;

        var rightColumn = selectionPanel.add("group", undefined, {name: "rightColumn"}); 
            rightColumn.orientation = "column"; 
            rightColumn.alignChildren = ["fill","top"]; 
            rightColumn.spacing = 10; 
            rightColumn.margins = 0; 

        var ok = rightColumn.add("button", undefined, undefined, {name: "ok"}); 
            ok.text = "OK"; 

        var cancel = rightColumn.add("button", undefined, undefined, {name: "cancel"}); 
            cancel.text = "Cancel";

    selectionPanel.show();

    // SELECTION PANEL FUNCTIONALITY --------------------------------------------------------------------------------
    // Assigned "smartObjectLayer" variable is positional (absolute path)

        // OK
        switch(true) {
            case device1.value:
                // Make device folder visible
                app.activeDocument.layerSets.getByName("touchPanel-crestronTSW760B").visible = true;
                // Assigning smart object for corresponding layer to variable 'smartObjectLayer'
                var smartObjectLayer = activeDocument.layerSets[0].artLayers[0];
                // Should return "crestron-tsw760b-screen"
                alert(smartObjectLayer.name)
                break;

            case device2.value:
                app.activeDocument.layerSets.getByName("television-viewSonicIFP8650").visible = true;
                break;

            case device3.value:
                app.activeDocument.layerSets.getByName("monitor-acerVA270H").visible = true;
                break;

            case device4.value:
                app.activeDocument.layerSets.getByName("monitor-lg27MK60TMB").visible = true;
                break;
        }

        // CANCEL
        cancel.onClick = function() {
            this.parent.close();
        }

// IMPORT IMAGES ----------------------------------------------------------------------------------------------------
// Based on user selection, the corresponding smart object should 1) import one image at a time from the folder selected, 2) resize the image to match the canvas size, 3) export the full mockup, and 4) repeat the process till all files within the folder have been imported

