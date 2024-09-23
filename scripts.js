function filterProperties() {
    const propertyType = document.getElementById("propertyType").value;
    const properties = document.querySelectorAll(".property-card");

    properties.forEach((property) => {
        if (propertyType === "all") {
            property.style.display = "block";
        } else {
            if (property.getAttribute("data-type") === propertyType) {
                property.style.display = "block";
            } else {
                property.style.display = "none";
            }
        }
    });
}
