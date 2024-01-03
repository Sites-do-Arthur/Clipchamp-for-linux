module com.arthur.clipchamp_for_linux {
    requires javafx.controls;
    requires javafx.fxml;

    opens com.arthur.clipchamp_for_linux to javafx.fxml;
    exports com.arthur.clipchamp_for_linux;
    requires javafx.baseEmpty;
    requires javafx.web;
}
