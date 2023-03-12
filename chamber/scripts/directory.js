const businessList = document.querySelector(".businesses");

// get the location of the file in question
const URL = "scripts/directories.json";

fetch(URL)
  .then((response) => response.json())
  .then((info) => {
    console.log(info);

    for (i = 0; i < info.directories.length; i++) {
      let businessName = document.createElement("h2");
      businessName.textContent = info.directories[i].name;

      let businessAddress = document.createElement("p");
      businessAddress.textContent = "Address: " + info.directories[i].address;

      let businessPhone = document.createElement("p");
      businessPhone.textContent = "Phone: " + info.directories[i].phone;

      let businessUrl = document.createElement("p");
      businessUrl.textContent = "Website: " + info.directories[i].url;

      let businessSection = document.createElement("section");
      businessSection.appendChild(businessName);
      businessSection.appendChild(businessAddress);
      businessSection.appendChild(businessPhone);
      businessSection.appendChild(businessUrl);

      // add image
      let businessImage = document.createElement("img");
      businessImage.src = info.directories[i].img;
      businessImage.alt = info.directories[i].name;

      let business = document.createElement("div");
      business.classList.add("element");

      business.appendChild(businessImage);
      business.appendChild(businessSection);

      // this will automatically add the div to our html page
      document.querySelector(".businesses").appendChild(business);
    } // end for
  });

