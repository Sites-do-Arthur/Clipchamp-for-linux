package com.arthur.clipchamp_for_linux;

import javafx.fxml.FXML;
import javafx.scene.web.*;

public class PrimaryController {

    @FXML
    private WebView site;
    
    @FXML
    private void initialize() {
        WebEngine engine = site.getEngine();
        engine.load("https://https://app.clipchamp.com/login");
    }
}
