// Feature 1: Form Validation
function validateForm() {
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const address1 = document.getElementById("address1").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const country = document.getElementById("country").value.trim();
    const email = document.getElementById("email").value.trim();
    const donationAmount = document.querySelector('input[name="amount"]:checked');

    const missing = [];

    if (!firstName) missing.push("First Name");
    if (!lastName) missing.push("Last Name");
    if (!address1) missing.push("Address 1");
    if (!city) missing.push("City");
    if (!state) missing.push("State");
    if (!zip) missing.push("Zip Code");
    if (!country) missing.push("Country");
    if (!email) missing.push("Email");

    if (!donationAmount || donationAmount.value === "none") {
        missing.push("Donation Amount");
    } else if (donationAmount.value === "other") {
        const otherVal = (document.getElementById("other_amount").value || "").toString().trim();
        if (!otherVal || isNaN(otherVal) || Number(otherVal) <= 0) {
            missing.push("Other Donation Amount");
        }
    }

    if (missing.length > 0) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Feature 2: Email Validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Email Validation Function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Feature 3: Donation Amount Check
document.querySelectorAll('input[name="amount"]').forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
        const otherAmountField = document.getElementById("other_amount");
        if (!otherAmountField) return;
        if (this.value === "other") {
            otherAmountField.style.display = "inline-block";
        } else {
            otherAmountField.style.display = "none";
            otherAmountField.value = "";
        }
    });
});

// Feature 4: Recurring Donation Fields
const recurringCheckbox = document.querySelector('input[name="recurring"], #recurring');
if (recurringCheckbox) {
    recurringCheckbox.addEventListener("change", function () {
        const recurringFields = document.querySelector(".recurring-fields");
        if (!recurringFields) return;
        if (this.checked) {
            recurringFields.style.display = "block";
        } else {
            recurringFields.style.display = "none";
            const inputs = recurringFields.querySelectorAll("input");
            inputs.forEach(i => i.value = "");
            const total = document.getElementById("recurring_total");
            if (total) total.textContent = "";
        }
    });
}

// Feature 5: Select State and Country Default Options
window.addEventListener('load', function () {
    var defaultState = 'NY';      
    var defaultCountry = 'US';    

    var stateSel = document.getElementById('state') || document.querySelector('select[name="state"]');
    var countrySel = document.getElementById('country') || document.querySelector('select[name="country"]');

    function pickDefault(sel, desired) {
        if (!sel) return;
        if (desired) {
            var found = Array.from(sel.options).find(function (o) { return o.value === desired; });
            if (found) {
                sel.value = desired;
                return;
            }
        }
        var firstNonEmpty = Array.from(sel.options).find(function (o) { return o.value && o.value.trim() !== ''; });
        if (firstNonEmpty) sel.value = firstNonEmpty.value;
    }

    pickDefault(stateSel, defaultState);
    pickDefault(countrySel, defaultCountry);
});


// Feature 6: Confirm Password (If Needed)
function validatePassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    if (!password || !confirmPassword) return true; 
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

// Feature 7: Reset Button Logic
const resetButton = document.querySelector('button[type="reset"], #resetBtn');
if (resetButton) {
    resetButton.addEventListener("click", function (event) {
        const confirmation = confirm("Are you sure you want to reset the form?");
        if (!confirmation) {
            event.preventDefault();
        } else {
            setTimeout(function () {
                document.querySelectorAll('input[name="amount"]').forEach(r => r.dispatchEvent(new Event('change')));
                const recurringEvtTarget = document.querySelector('input[name="recurring"], #recurring');
                if (recurringEvtTarget) recurringEvtTarget.dispatchEvent(new Event('change'));
                window.dispatchEvent(new Event('load'));
            }, 10);
        }
    });
}

// Feature 8: Show/Hide Additional Fields (Acknowledge Donation)
document.querySelectorAll('input[name="memorial"]').forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
        const acknowledgeSection = document.getElementById("acknowledge_section");
        if (!acknowledge_section && !acknowledgeSection) return;
        if (acknowledgeSection) {
            const anyChecked = Array.from(document.querySelectorAll('input[name="memorial"]')).some(r => r.checked);
            if (anyChecked) acknowledgeSection.style.display = "block";
            else acknowledgeSection.style.display = "none";
        }
        const ackRow = document.getElementById("ack-row");
        if (ackRow) {
            const honor = document.getElementById("honor");
            const memory = document.getElementById("memory");
            if (honor && honor.checked) ackRow.style.display = "";
            else if (memory && memory.checked) ackRow.style.display = "none";
            else ackRow.style.display = "";
        }
    });
});

// Feature 9: Character Limit on Comments
const commentsField = document.getElementById("comments");
if (commentsField) {
    commentsField.addEventListener("input", function () {
        const charLimit = 200;
        const currentLength = this.value.length;
        if (currentLength > charLimit) {
            alert("Character limit reached!");
            this.value = this.value.substring(0, charLimit);
        }
    });
}

// Feature 10: Calculate Recurring Donation Total
const monthlyInput = document.querySelector('input[name="monthly_amount"], #monthly_amount');
const monthsInput = document.querySelector('input[name="months"], #months');
const recurringTotalEl = document.getElementById("recurring_total");
function updateRecurringTotal() {
    const monthly = parseFloat((monthlyInput && monthlyInput.value) || 0) || 0;
    const months = parseInt((monthsInput && monthsInput.value) || 0, 10) || 0;
    if (monthly > 0 && months > 0) {
        const total = monthly * months;
        if (recurringTotalEl) recurringTotalEl.textContent = `Total donation for ${months} months: $${total.toFixed(2)}`;
    } else {
        if (recurringTotalEl) recurringTotalEl.textContent = "";
    }
}
if (monthlyInput) monthlyInput.addEventListener("input", updateRecurringTotal);
if (monthsInput) monthsInput.addEventListener("input", updateRecurringTotal);

// Attach form submit handler (uses validateForm + password check)
const formEl = document.getElementById("donationForm");
if (formEl) {
    formEl.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
            return;
        }
        if (!validatePassword()) {
            event.preventDefault();
            return;
        }
    });
}
