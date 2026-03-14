function checkEligibility(age) {
    if (age >= 18) {
        console.log("Eligible for vote");
    } else {
        console.log("Minor!!!");
    }

}

checkEligibility(17);
checkEligibility(18);
checkEligibility(19);