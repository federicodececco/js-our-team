const formElm = document.getElementById('htmlForm')
const cardSection = document.getElementById('teamCard')
/**
 * Class that contains the names, photoes and contacts medium of team members
 * along their position within the organization
 */
class Person {
  #infos
  constructor(name, role, email, img) {
    this.#infos = [name, role, email, img]
  }
  /**
   * method to read the name of the member
   * @returns {string} - the name of the person
   */
  getName() {
    return this.#infos[0]
  }
  /**
   * method to read the email of the member
   * @returns {string} - the email of the person
   */
  getEmail() {
    return this.#infos[1]
  }
  /**
   * method to read the role of the member inside of the team
   * @returns {string} - the role of the person
   */
  getRole() {
    return this.#infos[2]
  }
  /**
   * method to read the photo of the member
   * @returns {string} - the photo of the person
   */
  getImg() {
    return this.#infos[3]
  }
}
/**
 *function that uses the elemnts of the Person class to create a
 *an HTML/css structure to be injected in the index file, made to avoid repetition
 * @param {object} struct - must be a Person class element
 * @returns a string of HTML code
 */
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
  new Person(
    'Marco bianchi',
    'marcobianchi@team.com',
    'Designer',
    'img/male1.png',
  ),
  new Person(
    'Laura Rossi',
    'laurarossi@team.com',
    'Front-end Developer',
    'img/female1.png',
  ),
  new Person(
    'giorgio verdi',
    'giorgioverdi@team.com',
    'Back-end Developer',
    'img/male2.png',
  ),
  new Person(
    'Marta Ipsum',
    'martarossi@team.com',
    'SEO Specialist',
    'img/female2.png',
  ),
  new Person(
    'Roberto Lorem',
    'robertolorem@team.com',
    'SEO Specialist',
    'img/male3.png',
  ),
  new Person(
    'Daniela Amet',
    'danielaamet@team.com',
    'Analyst',
    'img/female3.png',
  ),
]

let sectionArray = ''
const htmlPrint = teamMembers.map(createCard).join('')
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
