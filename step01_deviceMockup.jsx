//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GENERATE DEVICE MOCKUPS 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OPEN FILE --------------------------------------------------------------------------------------------------------
// Load step01_deviceMockup.psd file (change absolute path as necessary)
const deviceMockup = File("D:/automationFiles/workingFiles/step01_deviceMockup.psd");
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

            // DEVICE MOCKUPS
            var device1 = deviceList.add("radiobutton", undefined, undefined, {name: "touchPanel-crestron-tsw760b"}); 
                device1.text = "Touch Panel - Crestron TSW760B";

            var device2 = deviceList.add("radiobutton", undefined, undefined, {name: "television-viewSonic-ifp8650"}); 
                device2.text = "Television - ViewSonic IFP8650"; 

            var device3 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-acer-va270h"}); 
                device3.text = "Monitor - Acer VA270H"; 

            var device4 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-lg-27mk60tmb"}); 
                device4.text = "Monitor - LG 27MK60TMB"; 

            var device5 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-apple-imacpro"}); 
                device5.text = "Monitor - Apple iMac Pro";

            var device6 = deviceList.add("radiobutton", undefined, undefined, {name: "monitor-apple-imac"}); 
                device6.text = "Monitor - Apple iMac"; 

            var device7 = deviceList.add("radiobutton", undefined, undefined, {name: "laptop-dell-xps15"}); 
                device7.text = "Laptop - Dell XPS 15"; 

            var device8 = deviceList.add("radiobutton", undefined, undefined, {name: "laptop-acer-travelmatespinb1"}); 
                device8.text = "Laptop - Acer TravelMate Spin B1"; 
            
            var device9 = deviceList.add("radiobutton", undefined, undefined, {name: "laptop-apple-macbookair"}); 
                device9.text = "Laptop - Apple Macbook Air";

            var device10 = deviceList.add("radiobutton", undefined, undefined, {name: "laptop-dell-precisionmobileworkstation5000s"}); 
                device10.text = "Laptop - Dell Precision Mobile Workstation 5000s"; 

            var device11 = deviceList.add("radiobutton", undefined, undefined, {name: "phone-oneplus-6"}); 
                device11.text = "Phone - OnePlus 6"; 

            var device12 = deviceList.add("radiobutton", undefined, undefined, {name: "phone-samsung-s9"}); 
                device12.text = "Phone - Samsung S9"; 

            var device13 = deviceList.add("radiobutton", undefined, undefined, {name: "phone-samsung-galaxys10e"}); 
                device13.text = "Phone - Samsung Galaxy S10E";

            var device14 = deviceList.add("radiobutton", undefined, undefined, {name: "phone-essential-ph1"}); 
                device14.text = "Phone - Essential PH1"; 

            var device15 = deviceList.add("radiobutton", undefined, undefined, {name: "phone-apple-iphone6s"}); 
                device15.text = "Phone - Apple iPhone 6S"; 

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
                app.activeDocument.layerSets.getByName("touchPanel-crestron-tsw760b").visible = true;
                // Assigning smart object for corresponding layer to variable 'smartObjectLayer'
                var smartObjectLayer = activeDocument.layerSets[0].artLayers[0];
                // Should return "crestron-tsw760b-screen"
                alert(smartObjectLayer.name)
                // Load step01_deviceMockup.psb file (change absolute path as necessary)
                // var openSmartObjectFile = File("D:/automationFiles/workingFiles/smartObjectLinks/touchPanel-crestron-tsw760b-screen.psb");
                // app.open(deviceMockup);
                break;

            case device2.value:
                app.activeDocument.layerSets.getByName("television-viewSonic-ifp8650").visible = true;
                break;

            case device3.value:
                app.activeDocument.layerSets.getByName("monitor-acer-va270h").visible = true;
                break;

            case device4.value:
                app.activeDocument.layerSets.getByName("monitor-lg-27mk60tmb").visible = true;
                break;
        }

        // CANCEL
        cancel.onClick = function() {
            this.parent.close();
        }

// SMART LAYER REPLACE ----------------------------------------------------------------------------------------------------
// Based on user selection, the corresponding smart object should:
//   1) Import one image at a time from the folder selected
//   2) Resize the image to match the canvas size
//   3) Save
//   4) Switch activeDocument to mockup
//   5) Export for web into folder selected
//   4) Repeat the process till all files within the folder have been imported

// openSmartObjectFile = app.activeDocument;
