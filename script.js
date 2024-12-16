const formElm = document.getElementById('htmlForm')

const cardSection = document.getElementById('teamCard')

class person {
  #infos
  constructor(name, role, email, img) {
    this.#infos = [name, role, email, img]
  }
  getName() {
    return this.#infos[0]
  }
  getRole() {
    return this.#infos[2]
  }
  getEmail() {
    return this.#infos[1]
  }
  getImg() {
    return this.#infos[3]
  }
}

const createCard = struct => {
  const { name, role, email, img } = struct
  const card = `<div class="flex bg:black dark:bg-slate-800  ">
  <div class="basis-1/3">
    <img src="./${struct.getImg()}" alt="" />
  </div>
  <div class="p-3 text-white dark:text-slate-100">
    <h4 class="text-2xl font-semibold">${struct.getName()}</h4>
    <p class="pt-2">${struct.getRole()}</p>
    <p class="email pt-3">${struct.getEmail()}</p>
  </div>
</div>`
  return card
}
const teamMembers = [
  new person(
    'Marco bianchi',
    'marcobianchi@team.com',
    'Designer',
    'img/male1.png',
  ),
  new person(
    'Laura Rossi',
    'laurarossi@team.com',
    'Front-end Developer',
    'img/female1.png',
  ),
  new person(
    'giorgio verdi',
    'giorgioverdi@team.com',
    'Back-end Developer',
    'img/male2.png',
  ),
  new person(
    'Marta Ipsum',
    'martarossi@team.com',
    'SEO Specialist',
    'img/female2.png',
  ),
  new person(
    'Roberto Lorem',
    'robertolorem@team.com',
    'SEO Specialist',
    'img/male3.png',
  ),
  new person(
    'Daniela Amet',
    'danielaamet@team.com',
    'Analyst',
    'img/female3.png',
  ),
]

let sectionArray = ''

htmlPrint = teamMembers.map(createCard).join('')
cardSection.innerHTML = htmlPrint
formElm.addEventListener('submit', event => {
  event.preventDefault()
  const newPerson = new person(
    document.getElementById('name').value,
    document.getElementById('role').value,
    document.getElementById('email').value,
    document.getElementById('img').value,
  )
  sectionArray = ''
  teamMembers.push(newPerson)

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
