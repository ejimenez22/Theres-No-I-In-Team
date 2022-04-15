function generateHTML(employees) {
  console.log(employees)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>Team Portfolio</title>
</head>
<body>
    <article class="message is-info">
        <div class="message-header">
          <p>Manager</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <ul>
              <li>Name:${employees.mgrName}</li>
              <li>ID Number:${employees.mgrId}</li>
              <li>Email:${employees.mgrEmail}</li>
              <li>Office Number:${employees.mgrOffice}</li>
          </ul>
        </div>
      </article>
      <article class="message is-info">
        <div class="message-header">
          <p>Engineer</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <ul>
                <li>Name:${employees.engName}</li>
                <li>ID Number:${employees.engId}</li>
                <li>Email:${employees.engEmail}</li>
                <li>Github Link:https://github.com/${employees.engGithub}</li>
            </ul>
        </div>
      </article>
      <article class="message is-info">
        <div class="message-header">
          <p>Intern</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <ul>
                <li>Name:${employees.intName}</li>
                <li>ID Number:${employees.intId}</li>
                <li>Email:${employees.intEmail}</li>
                <li>School:${employees.intSchool}</li>
            </ul>
        </div>
      </article>
</body>
</html>
    `
}

module.exports = generateHTML;