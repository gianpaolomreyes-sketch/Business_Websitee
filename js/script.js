var reviewForm = document.getElementById("reviewForm");

if (reviewForm) {
    reviewForm.addEventListener("submit", function() {

        var name = document.getElementById("reviewName").value;
        if(name=null){
            name="Anonymous";
        }
        var status = document.getElementById("reviewMessageStatus");

        status.textContent = "Thank you, " + name + "! Your review has been submitted.";

        /*For database things*/ 


        reviewForm.reset();
    });
}