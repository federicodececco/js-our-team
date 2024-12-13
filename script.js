const formElm = document.getElementById('htmlForm')

const cardSection = document.getElementById('teamCard')

const createCard = struct => {
  const { name, role, email, img } = struct
  const card = `<div class="flex bg-black basis-[calc(33.333%-1rem)] ">
  <div class="basis-1/3">
    <img src="./${img}" alt="" />
  </div>
  <div class="p-3 text-white">
    <h4 class="text-2xl font-semibold">${name}</h4>
    <p class="pt-2">${role}</p>
    <p class="email pt-3">${email}</p>
  </div>
</div>`
  return card
}
const teamMembers = [
  {
    name: 'Marco Bianchi',
    role: 'Designer',
    email: 'marcobianchi@team.com',
    img: 'img/male1.png',
  },
  {
    name: 'Laura Rossi',
    role: 'Front-end Developer',
    email: 'laurarossi@team.com',
    img: 'img/female1.png',
  },
  {
    name: 'Giorgio Verdi',
    role: 'Back-end Developer',
    email: 'giorgioverdi@team.com',
    img: 'img/male2.png',
  },
  {
    name: 'Marta Ipsum',
    role: 'SEO Specialist',
    email: 'martarossi@team.com',
    img: 'img/female2.png',
  },
  {
    name: 'Roberto Lorem',
    role: 'SEO Specialist',
    email: 'robertolorem@team.com',
    img: 'img/male3.png',
  },
  {
    name: 'Daniela Amet',
    role: 'Analyst',
    email: 'danielaamet@team.com',
    img: 'img/female3.png',
  },
]

let sectionArray = ''

for (let i = 0; i < teamMembers.length; i++) {
  sectionArray += createCard(teamMembers[i])
}
cardSection.innerHTML = sectionArray

formElm.addEventListener('submit', function (event) {
  event.preventDefault()
  const nameElm = document.getElementById('name')
  const roleElm = document.getElementById('role')
  const emailElm = document.getElementById('email')
  const imgElm = document.getElementById('img')
  const newMember = {
    name: nameElm,
    role: roleElm,
    email: emailElm,
    img: imgElm,
  }
  teamMembers.push(newMember)
  sectionArray = ''
  for (let i = 0; i < teamMembers.length; i++) {
    sectionArray += createCard(teamMembers[i])
  }
  cardSection.innerHTML = sectionArray
})
