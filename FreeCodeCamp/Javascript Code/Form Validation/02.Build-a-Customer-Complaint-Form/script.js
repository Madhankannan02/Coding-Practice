const setValid = (el) => el.style.borderColor = "green";
const setInvalid = (el) => el.style.borderColor = "red";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const orderRegex = /^2024\d{6}$/;
const productRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

function validateForm() {
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const orderNo = document.getElementById("order-no").value.trim();
  const productCode = document.getElementById("product-code").value.trim();
  const quantity = document.getElementById("quantity").value.trim();

  const complaints = document.querySelectorAll("#complaints-group input[type='checkbox']");
  const solutions = document.querySelectorAll("#solutions-group input[type='radio']");

  const complaintDesc = document.getElementById("complaint-description").value.trim();
  const solutionDesc = document.getElementById("solution-description").value.trim();

  const otherComplaint = document.getElementById("other-complaint").checked;
  const otherSolution = document.getElementById("other-solution").checked;

  const complaintsChecked = Array.from(complaints).some(c => c.checked);
  const solutionChecked = Array.from(solutions).some(r => r.checked);

  return {
    "full-name": fullName !== "",
    "email": emailRegex.test(email),
    "order-no": orderRegex.test(orderNo),
    "product-code": productRegex.test(productCode),
    "quantity": Number.isInteger(Number(quantity)) && Number(quantity) > 0,
    "complaints-group": complaintsChecked,
    "complaint-description": otherComplaint ? complaintDesc.length >= 20 : true,
    "solutions-group": solutionChecked,
    "solution-description": otherSolution ? solutionDesc.length >= 20 : true
  };
}

function isValid(result) {
  return Object.values(result).every(v => v === true);
}

document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("change", () => {
    const result = validateForm();

    ["full-name","email","order-no","product-code","quantity","complaint-description","solution-description"]
      .forEach(id => {
        const field = document.getElementById(id);
        if (field) {
          result[id] ? setValid(field) : setInvalid(field);
        }
      });

    const complaintsFieldset = document.getElementById("complaints-group");
    result["complaints-group"] ? setValid(complaintsFieldset) : setInvalid(complaintsFieldset);

    const solutionsFieldset = document.getElementById("solutions-group");
    result["solutions-group"] ? setValid(solutionsFieldset) : setInvalid(solutionsFieldset);
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  const result = validateForm();

  if (!isValid(result)) {
    e.preventDefault();

    Object.keys(result).forEach(key => {
      if (!result[key]) {
        const el = document.getElementById(key);

        if (el) {
          setInvalid(el);
        } else if (key === "complaints-group") {
          setInvalid(document.getElementById("complaints-group"));
        } else if (key === "solutions-group") {
          setInvalid(document.getElementById("solutions-group"));
        }
      }
    });
  }
});