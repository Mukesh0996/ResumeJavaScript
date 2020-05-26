function createPage() {
  console.log("hello");
  var body = document.getElementsByTagName("body")[0];

  // creating the header
  var head = document.createElement("div");
  head.classList.add("main");
  head.setAttribute("style", "width1000px; height:300px;");

  // creating the topmost part of the header
  var topbar = document.createElement("div");
  topbar.classList.add("topBar");
  topbar.setAttribute(
    "style",
    "width:1000px; height:150px; background-color:grey"
  );

  // create profile picture
  var center = document.createElement("center");
  var image = document.createElement("img");
  image.setAttribute("src", "IMG_2044.JPG");
  image.setAttribute(
    "style",
    " width: 200px; height: 200px;border-radius: 100px; border-color: yellowgreen; border-style: dashed;"
  );

  center.appendChild(image);
  topbar.appendChild(center);
  head.appendChild(topbar);

  // creating the middle bar of the header
  var middlebar = document.createElement("div");
  middlebar.classList.add("middle");
  middlebar.setAttribute(
    "style",
    "height:60px; width:1000px; background-color:white;"
  );

  // creating the name
  var center = document.createElement("center");
  var centerDiv = document.createElement("div");
  centerDiv.classList.add("center");
  centerDiv.setAttribute(
    "style",
    "width:30%; height:40%; background-color: yellowgreen; border-radius:15px; position:relative"
  );

  var br = document.createElement("br");
  centerDiv.appendChild(br);
  center.appendChild(centerDiv);

  var innerDiv = document.createElement("div");
  var h3 = document.createElement("h3");
  h3.innerText = "MUKESH KUMAR K";
  innerDiv.appendChild(h3);
  centerDiv.appendChild(innerDiv);

  center.appendChild(centerDiv);
  middlebar.appendChild(center);
  head.appendChild(middlebar);

  // creating the bottom bar of the header
  var bottom = document.createElement("div");
  bottom.classList.add("bottom");
  bottom.setAttribute(
    "style",
    "width:1000px; height:90px; background-color:grey;"
  );
  head.appendChild(bottom);
  body.appendChild(head);

  //creating the address
  var addressDiv = document.createElement("div");
  addressDiv.classList.add("address");

  var address = document.createElement("p");
  address.innerText =
    "#26, Flat no:4B, Vijaya Apts, Balaji Nagar, First Street, Royapettah, Chennai-600014 |+91 9962598908 | mukeshkeerthipati96@gmail.com";
    addressDiv.appendChild(address);

  var hr = document.createElement("hr");
  addressDiv.appendChild(hr);
  body.appendChild(addressDiv);

  //creating the main content
  var main = document.createElement("div");
  main.classList.add('mainOne')

  //creating the left div
  var main_left = document.createElement("div");
  main_left.classList.add("left_content");
  main.appendChild(main_left);
  body.appendChild(main);


// Creating content in the left pane
  var profileIcon = document.createElement('img');
 profileIcon.setAttribute('src', 'https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png')
 main_left.appendChild(profileIcon);

 // Creating Profile
 var profile = document.createElement('span')
 profile.innerText = " PROFILE";
 main_left.appendChild(profile)

 var profileContent = document.createElement('p');
 profileContent.setAttribute('style','text-align:justify');
 profileContent.innerText = "To pursue a highly rewarding career by gaining good knowledge in software testing, to work in a challenging and healthy work environment where I can utilize my skills and knowledge efficiently.";
 main_left.appendChild(profileContent);

 var skillsIcon = document.createElement('img');
 skillsIcon.setAttribute('src','https://static.thenounproject.com/png/369287-200.png');
 main_left.appendChild(skillsIcon);

 var skillsContent = document.createElement('span')
 skillsContent.innerText = " SKILLS"
 main_left.appendChild(skillsContent);

 // Creating Technical Skills

  var TechSkills = document.createElement('p');
  TechSkills.setAttribute('style','text-align: center; font-weight: bold;');
  TechSkills.innerText = "Technical Skills";
  main_left.appendChild(TechSkills);


  var skillsDiv = document.createElement('div');
  skillsDiv.classList.add('skillscontent');
  main_left.appendChild(skillsDiv)

  //skill one
  var skillOne = document.createElement('label');
  skillOne.setAttribute('for','JS')
  skillOne.innerText = "JavaScript";
  skillsDiv.appendChild(skillOne);

  var skillOneRange = document.createElement('input');
  skillOneRange.setAttribute('id', 'JS');
  skillOneRange.setAttribute('value', '50');
  skillOneRange.setAttribute('style','float:right; vertical-align:middle;');
  skillOneRange.setAttribute('type', 'range')
  skillsDiv.appendChild(skillOneRange);
  
  var br1 = document.createElement('br');
  skillsDiv.appendChild(br1);
  var br2 = document.createElement('br');
  skillsDiv.appendChild(br2);

  //skill two
  var skillTwo = document.createElement('label');
  skillTwo.setAttribute('for', 'html');
  skillTwo.innerText = "HTML";
  skillsDiv.appendChild(skillTwo);

  var skillTwoRange = document.createElement('input');
  skillTwoRange.setAttribute('id', 'JS');
  skillTwoRange.setAttribute('style','float:right;');
  skillTwoRange.setAttribute('type', 'range')
  skillsDiv.appendChild(skillTwoRange);

  var br3 = document.createElement('br');
  skillsDiv.appendChild(br3);
  var br4 = document.createElement('br');
  skillsDiv.appendChild(br4);


  //skill three
  var skillThree = document.createElement('label');
  skillThree.setAttribute('for', 'angular');
  skillThree.innerText = "Angular";
  skillsDiv.appendChild(skillThree);

  var skillThreeRange = document.createElement('input');
  skillThreeRange.setAttribute('id', 'angular');
  skillThreeRange.setAttribute('style','float:right;');
  skillThreeRange.setAttribute('type', 'range')
  skillsDiv.appendChild(skillThreeRange);

  var br5 = document.createElement('br');
  skillsDiv.appendChild(br5);
  var br6 = document.createElement('br');
  skillsDiv.appendChild(br6);

  //skill Four
  var skillFour = document.createElement('label');
  skillFour.setAttribute('for', 'python');
  skillFour.innerText = "Python";
  skillsDiv.appendChild(skillFour);

  var skillFourRange = document.createElement('input');
  skillFourRange.setAttribute('id', 'python');
  skillFourRange.setAttribute('style','float:right;');
  skillFourRange.setAttribute('type', 'range')
  skillsDiv.appendChild(skillFourRange);

// additional skills
var addSkillsDiv = document.createElement('div');
addSkillsDiv.classList.add('AddSkillsDiv');
main_left.appendChild(addSkillsDiv);

var p1 = document.createElement('p');
p1.setAttribute('style', 'text-align:center; font-weight:bold;')
p1.innerText = "Additional Skills";
addSkillsDiv.appendChild(p1);

var p2 = document.createElement('p');
p2.innerText = "Product Management";
addSkillsDiv.appendChild(p2);

var p3 = document.createElement('p');
p3.innerText = "Team Player";
addSkillsDiv.appendChild(p3);

var p4 = document.createElement('p');
p4.innerText = "Effecively co-ordinating with the other teams";
addSkillsDiv.appendChild(p4);

var workExperience = document.createElement('div');
workExperience.classList.add('workexperience')
main_left.appendChild(workExperience);

var workImg = document.createElement('img');
workImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOsBYLCjFTFZ-D-gvjjRPbK0_NP5a_VjO6fVT_Vbgt7hqa8QVc&usqp=CAU');
workExperience.appendChild(workImg);

var work = document.createElement('span')
work.innerText = " Work Experience"
workExperience.appendChild(work);

var workTitle = document.createElement('p');
workTitle.setAttribute('style','font-weight:bold;')
workTitle.innerText = "Technical Support Engineer ";
workExperience.appendChild(workTitle);

var description = document.createElement('p');
description.innerText ="Zoho Corporation, Estancia IT Park, Plot No. 140 & 151 GST Road, Vallancherry Village, Chengalpattu, Tamil Nadu 603202";
workExperience.appendChild(description);

var des2 = document.createElement('p');
des2.innerText ="Experienced Technical Support Engineer in Zoho Corporation PVT LTD with a demonstrated history of working in Information Technology and Services industry (SAAS). Skilled in Zoho CRM (Customer Relationship Management), Zoho Desk, Zoho Projects, Zoho Mail and a variety of cloud based Zoho suite of products."
workExperience.appendChild(des2);

var des3 = document.createElement('p');
des3.setAttribute('style','font-weight:bold; text-align:center;')
des3.innerText ="Responsibilities";
workExperience.appendChild(des3);

var ul = document.createElement('ul');

var li1 = document.createElement('li')
li1.innerText ="Handling users on a daily basis.";
ul.appendChild(li1);

var li2 = document.createElement('li')
li2.innerText ="Driving end to end technical solutions.";
ul.appendChild(li2);

var li3 = document.createElement('li')
li3.innerText ="Troubleshooting and providing workarounds based on the users requirement.";
ul.appendChild(li3);

var li4 = document.createElement('li')
li4.innerText ="Debug Logs analyst.";
ul.appendChild(li4);

var li5 = document.createElement('li')
li5.innerText ="Effectively working with Quality Assurance and the Development team to analyse and release potential feature developments and solutions.";
ul.appendChild(li5);

var li6 = document.createElement('li')
li6.innerText ="Deploying deliverables and debug build to narrow down exceptions for the users.";
ul.appendChild(li6);
workExperience.appendChild(ul);


  // creatingthe right div
  var main_right = document.createElement("div");
  main_right.classList.add("right_content");
  main_right.setAttribute("style", "flex:1");
  main.appendChild(main_right);
  body.appendChild(main);

  //creating content in the right div
  var eduImage = document.createElement('img');
  eduImage.setAttribute('src','https://st2.depositphotos.com/8696740/12003/v/950/depositphotos_120031742-stock-illustration-graduation-hat-isolated.jpg')
  main_right.appendChild(eduImage);

  var education = document.createElement('span');
  education.innerText = " Education";
  main_right.appendChild(education);

  var h3 = document.createElement('h3');
  h3.innerText = "B.Tech [Information Technology]";
  main_right.appendChild(h3);

  var edup = document.createElement('p');
  edup.innerText = "Institution - Meenakshi Sundararajan Engg College";
  main_right.appendChild(edup);

  var edup1 = document.createElement('p');
  edup1.innerText = "University/ Board - Anna Universiity";
  main_right.appendChild(edup1);

  var edup2 = document.createElement('p');
  edup2.innerText = "Percentage/ CGPA - 6.72";
  main_right.appendChild(edup2);

  var edup3 = document.createElement('p');
  edup3.innerText = "Year of Passing - 2018";
  main_right.appendChild(edup3);



  var hsc = document.createElement('h3');
  hsc.innerText ="HSC";
  main_right.appendChild(hsc);

  var hscinfo1 = document.createElement('p');
  hscinfo1.innerText ="Institution - Kumararani Meena Muthiah Hr. Sec. Schoool"
  main_right.appendChild(hscinfo1);

  var hscinfo2 = document.createElement('p');
  hscinfo2.innerText = "University/ Board - State Board";
  main_right.appendChild(hscinfo2);

  var hscinfo3 = document.createElement('p');
  hscinfo3.innerText = "Percentage/ CGPA - 73.6%";
  main_right.appendChild(hscinfo3);

  var hscinfo4 = document.createElement('p');
  hscinfo4.innerText = "Year of Passing - 2014";
  main_right.appendChild(hscinfo4);

 

  var sslc = document.createElement('h3');
  sslc.innerText = "SSLC";
  main_right.appendChild(sslc);

  var sslc1 =document.createElement('p');
  sslc1.innerText = "Institution - Kumararani Meena Muthiah Hr. Sec. Schoool"
  main_right.appendChild(sslc1);


  var sslc2 =document.createElement('p');
  sslc2.innerText = "Universiity/ Board - State Board"
  main_right.appendChild(sslc2);

  var sslc3 =document.createElement('p');
  sslc3.innerText = "Percentage/ CGPA - 83.6%"
  main_right.appendChild(sslc3);

  var sslc4 =document.createElement('p');
  sslc4.innerText = "Year of Passing - 2012"
  main_right.appendChild(sslc4);


  var languagesh3 = document.createElement('h3');
  languagesh3.innerText = "Languages Known"
  main_right.appendChild(languagesh3);

  var lang1 = document.createElement('p');
  lang1.innerText ="English";
  main_right.appendChild(lang1);

  var lang2 = document.createElement('p');
  lang2.innerText ="Hindi";
  main_right.appendChild(lang2);

  var lang3 = document.createElement('p');
  lang3.innerText ="Tamil";
  main_right.appendChild(lang3);

  var lang4 = document.createElement('p');
  lang4.innerText ="Telugu";
  main_right.appendChild(lang4);

  var br10 = document.createElement('br');
  main_right.appendChild(br10);

  var declaration = document.createElement('h3');
  declaration.innerText ="Declaration:"
  main_right.appendChild(declaration);

  var declareContent = document.createElement('p');
  declareContent.innerText = " I hereby declare that the above mentioned particulars are true to my knowledge.";
  main_right.appendChild(declareContent);

  var br11 = document.createElement('br');
  main_right.appendChild(br11);

  var br12 = document.createElement('br');
  main_right.appendChild(br12);

  var signature = document.createElement('p');
  signature.setAttribute('style', 'text-align:right;')
  signature.innerText = "Regards,"
  main_right.appendChild(signature);

  var br13 = document.createElement('br');
  main_right.appendChild(br13);

  var br14 = document.createElement('br');
  main_right.appendChild(br14);

  var name = document.createElement('p');
  name.setAttribute('style', 'float:right;')
  name.innerText ="Mukesh kumar K"
  main_right.appendChild(name);


}
createPage();
