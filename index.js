var gender = "";
var StudentList = [];

StudentList = [];

StudentPhotoUploaded = false;

SkillsArray = [];

var StudentImageURL = "";

var Student = {
  studentImage: "",
  firstname: "",
  lastname: "",
  email: "",
  fathername: "",
  Class: "",
  phone: "",
  cgpa: "",
  roll: "",
  gender: "",
  skills: "",
  despcription: "",
};

const StudentImage = document.getElementById("StudentImage");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const ClassName = document.getElementById("class");
const DOB = document.getElementById("DOB");
const fathername = document.getElementById("fathername");
const phone = document.getElementById("phone");
const qualification = document.getElementById("qualification");
const cgpa = document.getElementById("cgpa");
const roll = document.getElementById("roll");
const html = document.getElementById("inlineCheckbox1");
const css = document.getElementById("inlineCheckbox2");
const bootstrap = document.getElementById("inlineCheckbox3");
const javascript = document.getElementById("inlineCheckbox4");
const CSharp = document.getElementById("inlineCheckbox5");
const java =document.getElementById("inlineCheckbox6");
const dis = document.getElementById("dis");
// const dis = document.getElementById("dis");

// single students view Reference....

const StudentPhoto = document.getElementById("StudentPhoto");
const FName = document.getElementById("fName");
const lName = document.getElementById("lName");
const FatherName = document.getElementById("FatherName");
const Percent = document.getElementById("Percent");
const Roll = document.getElementById("Roll");
const Class = document.getElementById("Class");
const Gender = document.getElementById("Gender");
const DateOfBirth = document.getElementById("DateOfBirth");
const Phone = document.getElementById("Phone");
const Skills = document.getElementById("Skills");
const despcription = document.getElementById("description");

function AddToList() {
  if (
    // StudentImage.value != "" &&
    firstname.value.value != "" &&
    fathername.value != "" &&
    // StudentPhotoUploaded &&
    lastname.value != "" &&
    cgpa.value != "" &&
    roll.value != "" &&
    ClassName.value != "" &&
    // gender.value != "" &&
    DOB.value != ""
  ) {
    // creating the object first..
    Student = {
      studentImage: StudentImageURL,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      dob: DOB.value,
      Class: ClassName.value,
      fathername: fathername.value,
      phone: phone.value,
      cgpa: cgpa.value,
      roll: roll.value,
      gender: gender,
      skills: SkillsArray,
      despcription: dis.value,
    };

    // pushing these object to the array.

    StudentList.push(Student);

    console.log(StudentList);

    // this div will hold student records..
    const StudentDisplay = document.getElementById("StudentListContainer");

    var record = document.createElement("div");

    StudentList.forEach((element, index) => {
      record.innerHTML = `
  <div class="d-flex">
  <h5 style="width : 250px; margin-left : 20px; margin-top : 15px">
  <span style="margin-right : 20px">${index + 1}</span>
  ${Student.firstname} ${Student.lastname}</h5>
  
  <button class="btn btn-primary m-1" onclick="ViewStudent(${index})">View</button>
  <button class="btn btn-danger m-1" onclick="RemoveStudent(${index})">Remove</button>
  </div>
  `;
    });

    // appending these html inside StudentDisplay Area...
    StudentDisplay.appendChild(record);

    StudentImage.value = "";
    firstname.value = "";
    fathername.value = "";

    lastname.value = "";
    phone.value = "";
    Percent.value = "";
    cgpa.value = "";
    roll.value = "";
    Class.value = "";
    Gender.value = "";
    DOB.value = "";
    email.value = "";
    dis.value = "";
    javascript.value = "";
    CSharp.value = "";
    java.value = "";
    html.value = "";
    css.value = "";
    bootstrap.value = "";
    
    Skills.value = "";
  } else {
    alert("please Fill all the details!!!");
  }

  // console.log(StudentImage.value);
  // console.log(firstname.value);
  // console.log(lastname.value);
  // console.log(email.value);
  // console.log(fathername.value);
  // console.log(phone.value);
  // console.log(qualification.value);
  // console.log(cgpa.value);
  // console.log(roll.value);
  // console.log(DOB.value)

  // console.log(html.checked);
  // console.log(css.checked);
  // console.log(bootstrap.checked);
  // console.log(javascript.checked);
  // console.log(CSharp.checked);
  // console.log(dis.value);
}

function SetGender(e) {
  console.log(e.target.value);
  gender = e.target.value;
}

function SetImage(e) {
  StudentPhotoUploaded = true;
  let file = e.target.files[0];
  StudentImageURL = URL.createObjectURL(file);
  console.log(e.target.files[0]);
  console.log(StudentImageURL);
}

function SetSkills(event) {
  console.log("Yes");
  if (event.target.checked == true) {
    SkillsArray.push(event.target.value);
    console.log(SkillsArray);
  } else {
    index = SkillsArray.findIndex((element) => element == event.target.value);
    SkillsArray.splice(index, 1);
    console.log(SkillsArray);
  }
}

function ViewStudent(index) {
  //displaying the card on the view button click..
  document.getElementById("singleStudent").style.display = "block";

  let StudentToView = StudentList[index];


  this.StudentPhoto.src = StudentToView.studentImage;
   FName.innerHTML = StudentToView.firstname;
   lName.innerHTML = StudentToView.lastname;
   FatherName.innerHTML = StudentToView.fathername;
   Percent.innerHTML = StudentToView.cgpa;
   Roll.innerHTML = StudentToView.roll;
   Class.innerHTML = StudentToView.Class;
   Gender.innerHTML = StudentToView.gender;
   DateOfBirth.innerHTML = StudentToView.dob;
   Phone.innerHTML = StudentToView.phone;
   Skills.innerHTML = StudentToView.Skills;
   Description.innerHTML = StudentToView.despcription;
}

// function RemoveStudent(index) {
//   StudentList.splice(index, 1);
//   StudentList = StudentList;
//   console.log(StudentList);

//   document.getElementsByClassName("d-flex").splice(index, 1);

  // removing the last element from dom
// }
function RemoveStudent(index) {
  StudentList.splice(index,1);
  StudentList = StudentList;
  console.log(StudentList); 
  document.getElementById("singleStudent").style.display = "none";
  document.getElementsByClassName('d-flex')[index].innerHTML = '';

  localStorage.setItem("StudentList",JSON.stringify(StudentList));}