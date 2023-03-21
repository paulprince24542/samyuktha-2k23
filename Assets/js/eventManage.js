//Taking event name from URL
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("event");

//var URL = 'https://app-kkkthwlndq-uc.a.run.app'
var URL = "http://localhost:5000";

var errmsg = document.getElementById("errmsg");
var spinner = document.getElementById("spinnerreg");
var registersuccess = document.getElementById("reg");

spinner.style.display = "none";
errmsg.style.display = "none";
registersuccess.style.display = "none";
//Test
//Defining Rules
const nisaram = `
<li class="pb-3">A team can have 2-4 members.</li>
<li class="pb-3">The decision of the judging panel will be final.</li>
<li class="pb-3">The organizing committee has the rights to make changes to the event.</li>
<li class="pb-3">The event is only for PG and UG students other than Engineering stream.</li>
<li class="pb-3">All teams should bring their own Laptops and other required Gadgets.</li>
<li class="pb-3">The competition will have a specific theme or problem statement that the
teams need to address through their idea. The theme will be announced on
the day of the competition.</li>
<li class="pb-3">Each team must submit their idea in a PowerPoint. The submission should
be no longer than 10 slides and must include a title slide, problem
statement, solution, implementation plan, and any necessary visuals. The
deadline for submission will be 3 hours from the start of the competition.</li>
<li class="pb-3">Each team shall be allotted 5 minutes for presentation.</li>
<li class="pb-3">The presentation shall be followed by a Q/A round where the judges shall
pose questions regarding the presentation.</li>
<li class="pb-3">Copying of ideas is strictly prohibited.</li>
<li class="pb-3">Judging will be based on innovativeness and feasibility of the presented
idea.</li>
<li class="pb-3">Rules are subjected to change by committee members if certain criteria(s) are not met.
</li>

`;

const sankalpam = `
<li class="pb-3">The competition is about designing the layout of a website based on a theme.</li>
<li class="pb-3">Participants will have to finish their coding within 2 hours.</li>
<li class="pb-3">Use of internet and any kind of storage medium is strictly prohibited.</li>
<li class="pb-3">There will be 2 rounds, Based on number of participants :</li>
<ul>
    <li class="pb-3">Round1 : Aptitude.(Elimination Round)</li>
    <li class="pb-3">Round2 : Designing Round.</li>
</ul>
<ul>
    <li class="pb-3">Application software [VS code,Notepad,Notepad++]</li>
    <li class="pb-3">Programming languages [HTML, CSS, JavaScript]</li>
</ul>
<li class="pb-3">The event is only for MCA, BCA, M.SC Computer Science and B.SC Computer
Science students.</li>
<li class="pb-3">Decision of judges will be final .</li>
`;

const samarthyaShasthram = `
<li class="pb-3">Theme: Kalaropangal</li>
<li class="pb-3">Every rounds will be based on the following theme.</li>
<li class="pb-3">Each team comprises 2 to 4 members.</li>
<li class="pb-3">The team members cannot change their team.</li>
<li class="pb-3">Participant should carry their college ID card.</li>
<li class="pb-3">The clues are to be found in a particular order. Manipulation of the clues will lead to
disqualification. The participant do not have the right to replace or manipulate others
clues.</li>
<li class="pb-3">Organizers have the right to disqualify the teams on the grounds of misbehaviour and the
use of unfair means. Their decision is final and not subject to dispute.</li>
<li class="pb-3">Use of mobile phones in between the competition is strictly prohibited.</li>
<li class="pb-3">Interaction between other team members in between the competition is not allowed.</li>
<li class="pb-3">The event will be organized in two rounds initially, there is a possibility of adding more
rounds based on the number of participants and in each round there will be an elimination process</li>
<li class="pb-3">The competition will consist of a series of clues, which will lead the teams to the location
of the next clue. Each clue will be in the form of a riddle, a puzzle, a photo or a cryptic
message. Teams will need to use their problem-solving skills and teamwork to solve the
clues.</li>
<li class="pb-3">The competition will start at a designated time and place, and all teams must be present at
the starting point at the designated time.</li>
<li class="pb-3">Each team will have a time limit to complete the competition. The 1st round will be 20 to
30 minutes and the 2nd round will be of 2hrs of time limit. Those instructions regarding
the time limits of the competition will be announced before the competition starts.</li>
<li class="pb-3">Teams must follow all safety rules during the competition. No dangerous or illegal
activities will be permitted.</li>
<li class="pb-3">The team that completes the competition in the shortest amount of time and with the most
correct answers will be declared the winner.</li>
<li class="pb-3">In case of any disputes or issues during the competition, the decision of the judges will be
final.</li>
<li class="pb-3">All teams must conduct themselves in a respectful and sportsmanlike manner during the
competition.</li>
`;

const pariharaUg = `
<li class="pb-3">Mobile device with internet connection is mandatory.</li>
<li class="pb-3">The decision of the judging panel will be final.</li>
<li class="pb-3">The organizing committee has the rights to make changes to the event.</li>
<li class="pb-3">Event is only for UG students of non-engineering courses.</li>
<li class="pb-3">Participants need to have a <a class="text-light" style="text-decoration:underline" href="https://www.hackerrank.com/">HackerRank</a> account.</li>
<li class="pb-3">College ID is mandatory</li>
<ol type="i">
    <li class="pb-3">Preliminary round – Aptitude test with 20 questions (Elimination)</li>
    <li class="pb-3">Final round - Problem solving in C/C++ language.</li>
</ol>
<li class="pb-3">Final round will be held within a computing facility of the college.</li>
`;

const pariharaPg = `
<li class="pb-3">Mobile device with internet connection is mandatory.</li>
<li class="pb-3">The decision of the judging panel will be final.</li>
<li class="pb-3">The organizing committee has the rights to make changes to the event.</li>
<li class="pb-3">The event is only for UG and PG students other than Engineering streams.</li>
<li class="pb-3">Participants need to have a <a class="text-light" style="text-decoration:underline" href="https://www.hackerrank.com/">HackerRank</a> account.</li>
<li class="pb-3">College ID is mandatory</li>
<ol type="i">
<li class="pb-3">Preliminary round - Aptitude test with 20 questions and Bugs removal in Java
(Elimination)</li>
<li class="pb-3">Final round - Problem solving in Java.</li>
`;

const alpaneram = `
<li class="pb-3">This is an individual event.</li>
<li class="pb-3">Open for both UG and PG students.</li>
<li class="pb-3">Four Level tasks : entertainment level , talent level , speed level , memory level.</li>
<li class="pb-3">Entertainment level consist of series of games.</li>
<li class="pb-3">Time limit per participants will be 1 minute for a single task | (Levels : speed , talent , memory)</li>
<li class="pb-3">Game Instructions will be given by coordinators.</li>
<li class="pb-3">Only selected participants can perform in next task.</li>
<li class="pb-3">Participants will be judged on:</li>
<ul>
    <li class="pb-3">Follow the order established at the beginning of the game, and be patient while
        waiting for your turn.</li>
    <li class="pb-3">Be respectful: Be a good sport and respect the other players. Don't cheat, and don't
        be rude or disrespectful.</li>
    <li class="pb-3">Winner judged by best time managing and complete task as best among the
        participants.</li>
</ul>
<li class="pb-3">Rules are subjected to change by committee members if certain criteria(s) are not met.
</li>
`;

const swaralayam = `
<li class="pb-3">This is an individual event.</li>
<li class="pb-3">Open for both UG and PG students.</li>
<li class="pb-3">Only registered students will be allowed to participate.</li>
<li class="pb-3">No accompanying instruments will be allowed.</li>
<li class="pb-3">Time limit for performance is 5 minutes.</li>
<li class="pb-3">Repetition of songs will not be allowed.</li>
<li class="pb-3">Participant must use karoke for performance.</li>
<li class="pb-3">Events will be conducted in 2 rounds:</li>
<ul>
    <li class="pb-3">Preliminary round - Participants have to sing classical/melody songs of his/her choice with karoke.</li>
    <li class="pb-3">Finals - Participants have to sing fast beats songs of his/her choice with karoke.</li>
</ul>
<li class="pb-3">Spot registration will be allowed.</li>
<li class="pb-3">Participants must share the required music track for both rounds in mp3 format at least 45 minutes before commencement of rounds. </li>

`;

const aatam = `
<li class="pb-3">This is an individual event, Open for both UG and PG students.</li>
<li class="pb-3">Time limit per participants will be 3 minutes.</li>
<li class="pb-3">Participants will not be having any choice for the songs to be stepped up.</li>
<li class="pb-3">The event will be conducted in 2 rounds :</li>
<ul>
    <li class="pb-3">First round – It will be Mixed Groove. Participant has to dance for the fusion tracks played
    in background, which will be changing randomly.</li>
    <li class="pb-3">Second round – It will be Property Round. The property round where 8 unique properties
    will be kept on stage out of which the participants should be use at least 3ps.</li>
</ul>
<li class="pb-3">Both round in which we will be giving a mix of songs and the participates have to dance to that.</li>
<li class="pb-3">Only selected participants can perform in round 2.</li>
<li class="pb-3">Participants must always be ready to perform for 3 minutes prior to their scheduled time.</li>
<li class="pb-3">Participants will be judged on:</li>
<ul>
    <li class="pb-3">Authenticity, clarity of steps, and timing.</li>
    <li class="pb-3">Sharpness in the steps (e.g. pointing of legs and hands).</li>
    <li class="pb-3">Clarity of theme.</li>
    <li class="pb-3">Stage effect & Presence (e.g. whether the details of performance as well as
        the stage effects as a whole are outstanding, interaction with the audience).</li>
</ul>
<li class="pb-3">Specific rules will be given before start of actual competition.</li>
<li class="pb-3">Rules are subjected to change by committee members if certain criteria(s) are not met.</li>
<li class="pb-3">There can be multiple entries from a college.</li>
`;

const prathibha = `
<li class="pb-3">This is an individual event; designed to hunt for the best talent.</li>
<li class="pb-3">Any number of contestants from a college can participate in the event.</li>
<li class="pb-3">There will be 2 rounds of the competition based on which participants will
be judged.</li>
<li class="pb-3">Contestants are not permitted to carry mobile phones or any type of
electronic devices.</li>
<li class="pb-3">The organizing committee takes the privilege of disqualifying a participant
if he/she is found duplicitous.</li>
<li class="pb-3">Further information will be provided at the time of the participation.</li>
`;

const chithram = `
<li class="pb-3">Participants should complete the registration and report to the venue at 10 am.</li>
<li class="pb-3">Candidates should bring their college id for registration.</li>
<li class="pb-3">Theme for the contest will be given by the committee members after the registration.</li>
<li class="pb-3">Participants can use mobile cameras, DSLR, SLR or Digital cameras.</li>
<li class="pb-3">Editing and filtering are not allowed.</li>
<li class="pb-3">Participants should bring formatted memory card.</li>
<li class="pb-3">Candidate can submit only one photograph.</li>
<li class="pb-3">Photos taken from inside the college premises are only allowed.</li>
<li class="pb-3">The photograph should be submitted in jpeg format to the provided mail id.</li>
<li class="pb-3">The contest duration will be from 10.30 am to 2.00 pm.</li>
`;

const thaalam = `
<li class="pb-3">One entry per college.</li>
<li class="pb-3">Time limit is 5-10 minutes for each performance. Negative marking for exceeding the time limit.</li>
<li class="pb-3">Each team may have 2-7 members, including coordinators.</li>
<li class="pb-3">Choice of songs is open to the participants.</li>
<li class="pb-3">The participants are requested to bring two copies of the song for avoiding any kind of  technical issues.</li>
<li class="pb-3">No props will be provided by the coordinators. Participants can carry their own props.</li>
<li class="pb-3">Dance performance should not convey any indecent gestures.</li>
<li class="pb-3"> The participants will be judged on the basis of their rhythm, formation, synchronization, expressions, and costumes, makeup, setup and overall effects.</li>
<li class="pb-3">Decision of the judges will be final and binding.</li>
`;

const rasikan = `
<li class="pb-3">This is an individual event.</li>
<li class="pb-3">Open for both UG and PG students.</li>
<li class="pb-3">Time limit per participants will be 2 to 4 minutes.</li>
<li class="pb-3">Participants can decide the topic themselves.</li>
<li class="pb-3">Participants will be judged on the basis of content, fluency, spontaneity, presentation
and sense of humor.</li>
<li class="pb-3">Inappropriate & offensive contents, and dirty jokes will lead to disqualification.</li>
<li class="pb-3">Participants can use Malayalam or English language.</li>
<li class="pb-3">Specific rules will be given before start of actual competition.</li>
`;

//Routing Rules
const eventName = document.getElementById("event_name");
const eventDesc = document.getElementById("event_desc");
const eventContact = document.getElementById("event_contact");
var eventType = "";
const minSize = 2;
var maxSize = 0;
const rules = document.getElementById("rules");
if (eventId === "8") {
  eventName.innerHTML = "swaralayam";
  eventType = "single";
  eventDesc.innerText = "(Best Singer)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Ayana B : 
        <a class="yellow text-decoration-underline" href="tel:+918089013296">+91 80890 13296</a>
    `;
  rules.innerHTML = swaralayam;
} else if (eventId === "11") {
  eventName.innerHTML = "Alpaneram";
  eventType = "single";
  eventDesc.innerText = "(JAM)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Nidish Natarajan : 
        <a class="yellow text-decoration-underline" href="tel:+919207575209">+91 92075 75209</a>
    `;
  rules.innerHTML = alpaneram;
} else if (eventId === "3") {
  eventName.innerHTML = "Sankalpam";
  eventType = "single";
  eventDesc.innerText = "(Web Design)";
  eventContact.innerHTML = `
    <i class="fa-solid fa-phone yellow pe-1"></i>
    Aromal P Shaji : 
    <a class="yellow text-decoration-underline" href="tel:+917025821775">+91 70258 21775</a>
`;
  rules.innerHTML = sankalpam;
} else if (eventId === "6") {
  eventName.innerHTML = "Chithram";
  eventType = "single";
  eventDesc.innerText = "(Photography)";
  eventContact.innerHTML = `
    <i class="fa-solid fa-phone yellow pe-1"></i>
    Asad T Prasad : 
    <a class="yellow text-decoration-underline" href="tel:+916282491383">+91 62824 91383</a>
`;
  rules.innerHTML = chithram;
} else if (eventId === "9") {
  eventName.innerHTML = "Nisaram";
  eventType = "group";
  maxSize = 3;
  eventDesc.innerText = "(Ideathon)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Lison Sabu : 
        <a class="yellow text-decoration-underline" href="tel:+916238254869">+91 62382 54869</a>
    `;
  rules.innerHTML = nisaram;
} else if (eventId === "10") {
  eventName.innerHTML = "rasikan";
  eventType = "single";
  eventDesc.innerText = "(Standup Comedy)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Josna Jose : 
        <a class="yellow text-decoration-underline" href="tel:+917593054254">+91 75930 54254</a>
    `;
  rules.innerHTML = rasikan;
} else if (eventId === "4") {
  eventName.innerHTML = "Samarthya Shasthram";
  eventType = "group";
  maxSize = 3;
  eventDesc.innerText = "(Treasure Hunt)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Ligin Thomas : 
        <a class="yellow text-decoration-underline" href="tel:+919995552503">+91 99955 52503</a>
    `;
  rules.innerHTML = samarthyaShasthram;
} else if (eventId === "7") {
  eventName.innerHTML = "Aatam";
  eventType = "single";
  eventDesc.innerText = "(Spot Dance)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Ansu Susan Biju : 
        <a class="yellow text-decoration-underline" href="tel:+919947104024">+91 99471 04024</a>
    `;
  rules.innerHTML = aatam;
} else if (eventId === "12") {
  eventName.innerHTML = "Thaalam";
  eventType = "group";
  maxSize = 6;
  eventDesc.innerText = "(Best Choreo)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Swathy Santhosh : 
        <a class="yellow text-decoration-underline" href="tel:+916238044046">+91 62380 44046</a>
    `;
  rules.innerHTML = thaalam;
} else if (eventId === "5") {
  eventName.innerHTML = "prathibha";
  eventType = "single";
  eventDesc.innerText = "(Star Of Samyuktha)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Binimol Joseph : 
        <a class="yellow text-decoration-underline" href="tel:+919846843116">+91 98468 43116</a>
    `;
  rules.innerHTML = prathibha;
} else if (eventId === "1") {
  eventName.innerHTML = "Parihara (UG)";
  eventType = "single";
  eventDesc.innerText = "(Coding | UG)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Swetha KJ : 
        <a class="yellow text-decoration-underline" href="tel:+919400129757">+91 94001 29757</a>
    `;
  rules.innerHTML = pariharaUg;
} else if (eventId === "2") {
  eventName.innerHTML = "Parihara (PG)";
  eventType = "single";
  eventDesc.innerText = "(Coding | PG)";
  eventContact.innerHTML = `
        <i class="fa-solid fa-phone yellow pe-1"></i>
        Suryajith R : 
        <a class="yellow text-decoration-underline" href="tel:+919526193141">+91 95261 93141</a>
    `;
  rules.innerHTML = pariharaPg;
}

//Form Management
const registerationForm = document.getElementById("register_form");
var addon = [];
if (eventType === "single") {
  registerationForm.innerHTML = `
    <div class="form-outline mb-4">
        <input autocomplete="off" name="name" type="text" id="form6Example3" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
        <label class="form-label text-danger" for="form6Example3">Name</label>
    </div>
    <div class="row mb-4">
        <div class="col">
            <div class="form-outline">
                <input autocomplete="off" name="course" type="text" id="form6Example1" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
                <label class="form-label text-danger" for="form6Example1">Course</label>
            </div>
        </div>
        <div class="col">
            <select name="year" class="pt-3 border border-top-0 border-start-0 border-end-0 border-light bg-black text-danger w-100 custom-select">
                <option selected>Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    </div>
    <div class="form-outline mb-4">
        <input autocomplete="off" name="collegename" type="text" id="form6Example3" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
        <label class="form-label text-danger" for="form6Example3">College Name</label>
    </div>
    <div class="form-outline mb-4">
        <input autocomplete="off" name="email" type="email" id="form6Example5" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
        <label class="form-label text-danger" for="form6Example5">Email</label>
    </div>
    <div class="form-outline mb-4">
        <input autocomplete="off" name="phone" type="number" id="form6Example6" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
        <label class="form-label text-danger" for="form6Example6">Phone</label>
    </div>
    <div class="form-outline mb-4 border border-light p-3 rounded-2">
        <p class="pb-2">You may also register</p>
        <div id="addon_events"></div>
    </div>
    <button type="submit" class="btn btn-outline-light btn-block mb-4 text-danger">Register</button>
    `;

  //Fetching pool
  let url = `${URL}/event/pool?eventid=${eventId}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var addonEvents = document.getElementById("addon_events");
      for (i = 0; i < data.length; i++) {
        addon.push(`
                    <div class="form-check form-switch pb-2">
                        <input name="events[]" class="form-check-input bg-danger" type="checkbox" id="${data[i].eventid}" />
                        <label class="form-check-label ps-3" for="${data[i].eventid}">${data[i].name}</label>
                    </div>
                `);
        addonEvents.innerHTML += addon[i];
      }
    });
}

//Adding & Removing field for participants
var click = 0;
var field = [];
function addTeam() {
  click++;
  // console.log(click);
  const addField = document.getElementById("add");
  addField.innerHTML = "";
  if (click <= maxSize) {
    field.push(
      `
        <div class="row mb-4 w-100" id="${click}_field">
            <div class="col">
                <div class="form-outline">
                    <input name="participants[${click}][name]" autocomplete="off" type="text" id="form6Example1" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
                    <label class="form-label yellow" for="form6Example1">Participant Name</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline d-flex">
                    <input name="participants[${click}][phone]" autocomplete="off" type="text" id="form6Example1" class="form-control text-light border border-top-0 border-start-0 border-end-0 rounded-0 border-light" />
                    <label class="form-label yellow" for="form6Example1">Participant Phone</label>
                    <i class="fa fa-minus-circle pt-3 ps-5 ps-xs-5" onclick="remTeam()" style="cursor:pointer;font-size:1.3em"></i>
                </div>
            </div>
        </div>
        `
    );
    for (i = 0; i < field.length; i++) {
      addField.innerHTML += field[i];
    }
    if (click >= maxSize) {
      const addBtn = document.getElementById("add_btn");
      addBtn.classList.add("opacity-25");
      addBtn.disabled = "true";
    }
  }
}

function remTeam() {
  click -= 1;
  field.pop();
  var addField = document.getElementById("add");
  addField.innerHTML = "";
  for (i = 0; i < field.length; i++) {
    addField.innerHTML += field[i];
  }
  const addBtn = document.getElementById("add_btn");
  if (addBtn.classList.contains("opacity-25")) {
    addBtn.classList.remove("opacity-25");
    addBtn.classList.add("opacity-100");
    addBtn.removeAttribute("disabled");
  }
}
document.getElementById("reg").style.display = "none";
//Handling form submission

$(document).ready(function () {
  $("#register_form").submit(function (e) {
    e.preventDefault(); // prevent form submission
    spinner.style.display = "block";
    if (eventType === "group") {
      var formArray = $(this).serializeArray();
      var groupObj = {};
      groupObj.participants = [];

      $.each(formArray, function (i, field) {
        // check if field name contains '[', indicating nested groupObject
        if (field.name.indexOf("[") > -1) {
          var keys = field.name.split("[");
          var prop = keys[0];
          var index = parseInt(keys[1].replace("]", ""));
          if (!groupObj[prop]) {
            groupObj[prop] = [];
          }
          if (!groupObj[prop][index]) {
            groupObj[prop][index] = {};
          }
          groupObj[prop][index][keys[2].replace("]", "")] = field.value;
        } else {
          groupObj[field.name] = field.value;
        }
      });
      groupObj.participants = groupObj.participants.filter(
        (obj) => obj !== null
      );
      groupObj["eventid"] = eventId;
      fetch(`${URL}/event/group/add`, {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(groupObj),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
          if (json.status == true) {
            spinner.style.display = "none";
            registersuccess.style.display = "block";
            setTimeout(() => {
              location.reload();
            }, 7000);
          }
        });
    } else if (eventType === "single") {
      var formData = {};
      $("#register_form")
        .serializeArray()
        .forEach(function (field) {
          formData[field.name] = field.value;
        });

      // convert events checkbox group to an array of objects
      var events = $('input[name="events[]"]:checked')
        .map(function () {
          return { id: this.id };
        })
        .get();

      // combine form data and events into the final object
      var finalObject = Object.assign({}, formData, { events: events });
      //   console.log(finalObject);

      fetch(`${URL}/event/single/add`, {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(finalObject),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
          console.log(json);
          if (json.err) {
            registersuccess.style.display = "none";
            errmsg.style.display = "block";
            errmsg.innerHTML = json.err;
            spinner.style.display = "none";
          }
          if (json.status == true) {
            spinner.style.display = "none";
            registersuccess.style.display = "block";
            errmsg.style.display = "none";
            setTimeout(() => {
              location.reload();
            }, 17000);
          }
        });
    }
  });
});
