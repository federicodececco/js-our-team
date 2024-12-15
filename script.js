const formElm = document.getElementById('htmlForm')

const cardSection = document.getElementById('teamCard')

const createCard = struct => {
  const { name, role, email, img } = struct
  const card = `<div class="flex bg:black dark:bg-slate-800  ">
  <div class="basis-1/3">
    <img src="./${img}" alt="" />
  </div>
  <div class="p-3 text-white dark:text-slate-100">
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

htmlPrint = teamMembers.map(createCard).join('')
cardSection.innerHTML = htmlPrint
formElm.addEventListener('submit', event => {
  event.preventDefault()
  const newMember = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    email: document.getElementById('email').value,
    img: document.getElementById('img').value,
  }
  teamMembers.push(newMember)
  sectionArray = ''
  sectionArray = teamMembers.map(createCard).join('')

  cardSection.innerHTML = sectionArray
})
const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  document.getElementById('name').innerHTML = ''
  document.getElementById('email').innerHTML = ''
  document.getElementById('img').innerHTML = ''
  document.getElementById('role').innerHTML = ''
})
